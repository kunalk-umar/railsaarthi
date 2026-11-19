/**
 * RailSaarthi v3 – Production Server (Nov 2026 Edition)
 * Pure Node.js, zero npm dependencies required to RUN.
 *
 * Run locally:    node server.js
 * Deploy:         See DEPLOY.md
 */

'use strict';

// Load .env if present
try {
  require('fs').readFileSync('.env', 'utf8').split('\n').forEach(line => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  });
} catch (_) {}

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');
const url   = require('url');
const zlib  = require('zlib');

const PORT      = process.env.PORT || 8080;
const IR_KEY    = process.env.INDIANRAIL_API_KEY || '';
const RAPID_KEY = process.env.RAPIDAPI_KEY       || '';
const API_PREF  = process.env.API_PROVIDER       || 'auto';
const IS_PROD   = process.env.NODE_ENV           === 'production';
const PUBLIC    = path.join(__dirname, 'public');

/* ═══════════════════════════════════════════════
   MIME + STATIC FILE SERVING
   ═══════════════════════════════════════════════ */
const MIME = {
  '.html':'text/html; charset=utf-8',
  '.js'  :'application/javascript; charset=utf-8',
  '.css' :'text/css; charset=utf-8',
  '.json':'application/json',
  '.png' :'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml',
  '.ico' :'image/x-icon', '.webp':'image/webp',
  '.woff2':'font/woff2', '.woff':'font/woff',
};

function serveStatic(reqPath, res) {
  const cleanPath = reqPath.replace(/\.\.+/g, '');
  let safePath = path.join(PUBLIC, cleanPath);
  
  if (fs.existsSync(safePath) && fs.statSync(safePath).isDirectory()) {
    safePath = path.join(safePath, 'index.html');
  }

  // Fallback to project root if not in public/
  if (!fs.existsSync(safePath)) {
    const rootPath = path.join(__dirname, cleanPath);
    if (fs.existsSync(rootPath) && !fs.statSync(rootPath).isDirectory()) {
      safePath = rootPath;
    } else {
      // SPA Fallback
      safePath = fs.existsSync(path.join(PUBLIC, 'index.html'))
        ? path.join(PUBLIC, 'index.html')
        : path.join(__dirname, 'index.html');
    }
  }

  fs.readFile(safePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext  = path.extname(safePath);
    const mime = MIME[ext] || 'application/octet-stream';
    const age  = ext === '.html' ? 0 : IS_PROD ? 86400 : 0;
    const headers = {
      'Content-Type': mime,
      'Cache-Control': age ? `public, max-age=${age}` : 'no-store',
      'X-Content-Type-Options': 'nosniff',
    };
    // gzip for text types
    if (['.html','.js','.css','.json'].includes(ext) && data.length > 1024) {
      zlib.gzip(data, (_, gz) => {
        res.writeHead(200, { ...headers, 'Content-Encoding':'gzip', 'Content-Length':gz.length });
        res.end(gz);
      });
    } else {
      res.writeHead(200, headers);
      res.end(data);
    }
  });
}

/* ═══════════════════════════════════════════════
   IN-MEMORY CACHE
   ═══════════════════════════════════════════════ */
const CACHE = new Map();
function cget(k) { const h=CACHE.get(k); if(h&&Date.now()<h.e) return h.v; CACHE.delete(k); return null; }
function cset(k,v,ttl) { CACHE.set(k,{v,e:Date.now()+ttl*1000}); }
setInterval(() => { const now=Date.now(); CACHE.forEach((_,k)=>{ if(CACHE.get(k)?.e<now) CACHE.delete(k); }); }, 300000);

/* ═══════════════════════════════════════════════
   RATE LIMITER
   ═══════════════════════════════════════════════ */
const RATE = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const wins = RATE.get(ip) || [];
  const recent = wins.filter(t => now-t < 60000);
  recent.push(now); RATE.set(ip, recent);
  return recent.length > 120;
}

/* ═══════════════════════════════════════════════
   HTTPS FETCH HELPER
   ═══════════════════════════════════════════════ */
function apiFetch(reqUrl, headers={}) {
  return new Promise((resolve, reject) => {
    const req = https.get(reqUrl, {headers}, res => {
      let body=''; res.on('data',c=>body+=c);
      res.on('end',()=>{ try{resolve({s:res.statusCode,d:JSON.parse(body)})}catch(e){reject(e)} });
    });
    req.on('error',reject);
    req.setTimeout(6000,()=>{req.destroy();reject(new Error('API timeout'));});
  });
}

/* ═══════════════════════════════════════════════
   REAL API ADAPTERS
   ═══════════════════════════════════════════════ */
async function irLive(num, date) {
  if (!IR_KEY) return null;
  const [y,m,d] = date.split('-');
  const r = await apiFetch(
    `https://indianrailapi.com/api/v2/LiveTrainStatus/apikey/${IR_KEY}/TrainNumber/${num}/StartDate/${d}${m}${y.slice(2)}/`);
  if (r.s!==200||r.d?.ResponseCode!=='200') return null;
  const stops=(r.d.TrainRoute||[]).map((s,i)=>({
    st:s.StationName, code:s.StationCode, arr:s.ScheduleArrival||'--', dep:s.ScheduleDeparture||'--',
    actualArr:s.ActualArrival||s.ScheduleArrival||'--', delay:parseInt(s.DelayInArrival||'0')||0,
    status:i<(parseInt(r.d.CurrentStopNumber)||0)?'departed':'upcoming',
    platform:s.Platform||'', distance:s.Distance||'',
  }));
  const ci=stops.findIndex(s=>s.status==='upcoming')-1;
  if(ci>=0) stops[ci].status='current';
  return{train_number:num,train_name:r.d.TrainName,from:stops[0]?.st,to:stops.at(-1)?.st,
    delay_mins:parseInt(r.d.CurrentDelay||'0')||0,last_station:r.d.CurrentStation,
    last_code:r.d.CurrentStationCode,date,source:'live-indianrailapi',stops};
}

async function irPNR(pnr) {
  if (!IR_KEY) return null;
  const r = await apiFetch(`https://indianrailapi.com/api/v2/PNRCheck/apikey/${IR_KEY}/PNRNumber/${pnr}/`);
  if (r.s!==200||!r.d?.Passengerstatus?.length) return null;
  return{pnr,train_number:r.d.TrainNo,train_name:r.d.TrainName,
    boarding:r.d.BoardingPointName||r.d.FromStationName,destination:r.d.DestinationName||r.d.ToStationName,
    boarding_code:r.d.BoardingPoint,dest_code:r.d.DestinationCode,
    journey_date:r.d.Dateofjourney,travel_class:r.d.Class,quota:r.d.Quota||'GN',
    chart_status:r.d.ChartStatus||'Not Prepared',source:'live-indianrailapi',
    passengers:(r.d.Passengerstatus||[]).map((p,i)=>({
      sr:i+1,booking_status:p.CurrentStatus,current_status:p.CurrentStatus,
      coach:p.Coach||'--',berth:p.Berth||'--'
    }))};
}

async function rapidLive(num, date) {
  if (!RAPID_KEY) return null;
  const r = await apiFetch(
    `https://indian-railway1.p.rapidapi.com/trains/v1/train/status?train_number=${num}&date=${date.replace(/-/g,'')}`,
    {'x-rapidapi-host':'indian-railway1.p.rapidapi.com','x-rapidapi-key':RAPID_KEY});
  if (r.s!==200||!r.d?.data?.stops?.length) return null;
  const d=r.d.data;
  return{train_number:num,train_name:d.train_name,from:d.from,to:d.to,
    delay_mins:d.delay_mins||0,last_station:d.last_station,last_code:d.last_code,
    date,source:'live-rapidapi',
    stops:(d.stops||[]).map(s=>({st:s.station||s.st,code:s.code,arr:s.arr||'--',dep:s.dep||'--',
      delay:s.delay||0,status:s.status||'upcoming',platform:s.platform||''}))};
}

async function rapidPNR(pnr) {
  if (!RAPID_KEY) return null;
  const r = await apiFetch(
    `https://indian-railway1.p.rapidapi.com/pnr/v1/pnr-status?pnr_number=${pnr}`,
    {'x-rapidapi-host':'indian-railway1.p.rapidapi.com','x-rapidapi-key':RAPID_KEY});
  if (r.s!==200||!r.d?.data) return null;
  return{...r.d.data,source:'live-rapidapi'};
}

/* ═══════════════════════════════════════════════
   SIMULATION FALLBACK
   ═══════════════════════════════════════════════ */
const SIM = {
  '12301':{n:'Howrah Rajdhani Express',f:'New Delhi',t:'Howrah Jn',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'17:00'},{st:'Kanpur Central',code:'CNB',arr:'21:15',dep:'21:25'},{st:'Prayagraj Jn',code:'ALD',arr:'23:10',dep:'23:20'},{st:'Pt DD Upadhyaya Jn',code:'DDU',arr:'00:38',dep:'00:40'},{st:'Gaya Jn',code:'GYA',arr:'02:22',dep:'02:25'},{st:'Dhanbad Jn',code:'DHN',arr:'04:22',dep:'04:25'},{st:'Asansol Jn',code:'ASN',arr:'05:13',dep:'05:15'},{st:'Howrah Jn',code:'HWH',arr:'09:55',dep:'--'}]},
  '12951':{n:'Mumbai Rajdhani Express',f:'New Delhi',t:'Mumbai Central',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'16:25'},{st:'Kota Jn',code:'KOTA',arr:'21:30',dep:'21:40'},{st:'Ratlam Jn',code:'RTM',arr:'01:00',dep:'01:10'},{st:'Vadodara Jn',code:'BRC',arr:'04:35',dep:'04:45'},{st:'Surat',code:'ST',arr:'06:10',dep:'06:15'},{st:'Mumbai Central',code:'BCT',arr:'08:35',dep:'--'}]},
  '20501':{n:'New Delhi - Katra Vande Bharat',f:'New Delhi',t:'SMVD Katra',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'06:00'},{st:'Ambala Cantt',code:'UMB',arr:'08:06',dep:'08:08'},{st:'Ludhiana Jn',code:'LDH',arr:'09:10',dep:'09:12'},{st:'Jalandhar City',code:'JUC',arr:'09:50',dep:'09:52'},{st:'Jammu Tawi',code:'JAT',arr:'13:25',dep:'13:35'},{st:'SMVD Katra',code:'SVDK',arr:'14:30',dep:'--'}]},
  '15557':{n:'Darbhanga - Anand Vihar Amrit Bharat',f:'Darbhanga Jn',t:'Anand Vihar Terminal',s:[{st:'Darbhanga Jn',code:'DBG',arr:'--',dep:'15:00'},{st:'Samastipur Jn',code:'SPJ',arr:'15:45',dep:'15:50'},{st:'Muzaffarpur Jn',code:'MFP',arr:'16:40',dep:'16:45'},{st:'Gorakhpur Jn',code:'GKP',arr:'21:15',dep:'21:25'},{st:'Lucknow Charbagh',code:'LKO',arr:'02:30',dep:'02:40'},{st:'Kanpur Central',code:'CNB',arr:'04:15',dep:'04:25'},{st:'Anand Vihar Terminal',code:'ANVT',arr:'12:35',dep:'--'}]},
  '22501':{n:'Howrah - Kamakhya Vande Bharat Sleeper',f:'Howrah Jn',t:'Guwahati',s:[{st:'Howrah Jn',code:'HWH',arr:'--',dep:'19:00'},{st:'Barddhaman Jn',code:'BWN',arr:'20:02',dep:'20:04'},{st:'Malda Town',code:'MLDT',arr:'23:55',dep:'00:05'},{st:'New Jalpaiguri',code:'NJP',arr:'03:00',dep:'03:10'},{st:'New Bongaigaon',code:'NBQ',arr:'05:40',dep:'05:45'},{st:'Guwahati',code:'GHY',arr:'07:30',dep:'--'}]},
  '12621':{n:'Tamil Nadu Express',f:'New Delhi',t:'Chennai Central',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'22:30'},{st:'Agra Cantt',code:'AGC',arr:'01:05',dep:'01:10'},{st:'Jhansi Jn',code:'JHS',arr:'04:05',dep:'04:15'},{st:'Nagpur Jn',code:'NGP',arr:'12:45',dep:'13:00'},{st:'Vijayawada Jn',code:'BZA',arr:'00:30',dep:'01:00'},{st:'Chennai Central',code:'MAS',arr:'07:10',dep:'--'}]},
  '12625':{n:'Kerala Express',f:'New Delhi',t:'Trivandrum Central',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'11:05'},{st:'Bhopal Jn',code:'BPL',arr:'22:45',dep:'22:55'},{st:'Nagpur Jn',code:'NGP',arr:'05:05',dep:'05:20'},{st:'Secunderabad',code:'SC',arr:'15:50',dep:'16:10'},{st:'Chennai Central',code:'MAS',arr:'03:00',dep:'03:30'},{st:'Trivandrum Central',code:'TVC',arr:'18:20',dep:'--'}]},
  '12627':{n:'Karnataka Express',f:'New Delhi',t:'KSR Bengaluru',s:[{st:'New Delhi',code:'NDLS',arr:'--',dep:'22:30'},{st:'Agra Cantt',code:'AGC',arr:'01:00',dep:'01:05'},{st:'Jhansi Jn',code:'JHS',arr:'04:00',dep:'04:10'},{st:'Bhopal Jn',code:'BPL',arr:'09:00',dep:'09:10'},{st:'Nagpur Jn',code:'NGP',arr:'15:45',dep:'16:00'},{st:'Secunderabad',code:'SC',arr:'00:20',dep:'00:40'},{st:'KSR Bengaluru',code:'SBC',arr:'11:00',dep:'--'}]},
  'DEF':{n:'Superfast Express',f:'Origin Junction',t:'Destination Terminal',s:[{st:'Origin Junction',code:'ORIG',arr:'--',dep:'06:00'},{st:'Intermediate Junction A',code:'INJA',arr:'09:30',dep:'09:35'},{st:'Intermediate Junction B',code:'INJB',arr:'13:00',dep:'13:05'},{st:'Destination Terminal',code:'DEST',arr:'18:00',dep:'--'}]},
};

function simLive(num,date){
  const route=SIM[num]||SIM.DEF, now=new Date(), nm=now.getHours()*60+now.getMinutes();
  const seed=parseInt(num.slice(0,4))||1234, delay=[0,0,5,10,15,25,35][seed%7];
  let ci=0;
  route.s.forEach((s,i)=>{if(s.dep==='--')return;const[h,m]=s.dep.split(':').map(Number);if(h*60+m<=nm)ci=i;});
  const stops=route.s.map((s,i)=>({...s,status:i<ci?'departed':i===ci?'current':'upcoming',delay:i<ci?0:delay,platform:`Pf. ${(i%5)+1}`}));
  return{train_number:num,train_name:route.n,from:route.f,to:route.t,delay_mins:delay,
    last_station:stops[ci]?.st||route.f,last_code:stops[ci]?.code||'',date,source:'simulated',stops};
}

function simPNR(pnr){
  const s=parseInt(pnr.slice(0,6))||123456, keys=Object.keys(SIM).filter(k=>k!=='DEF'), route=SIM[keys[s%keys.length]];
  const cls=['SL','3A','2A','1A','CC','3A','SL','2A'][s%8], ps=['CNF','CNF','CNF','CNF','RAC','WL'][s%6];
  const coach=ps==='CNF'?`${cls}${(s%6)+1}`:'--';
  const berth=ps==='CNF'?`${coach} / Berth ${(s%72)+1}`:ps==='RAC'?`RAC ${(s%20)+1}`:`WL ${(s%30)+1}`;
  return{pnr,train_number:keys[s%keys.length],train_name:route.n,boarding:route.s[0].st,
    destination:route.s.at(-1).st,boarding_code:route.s[0].code,dest_code:route.s.at(-1).code,
    journey_date:new Date(Date.now()+(s%14)*86400000).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}),
    travel_class:cls,quota:'GN',source:'simulated',
    chart_status:ps==='CNF'?'Chart Prepared ✓ (8h prior)':'Charting in Progress',
    passengers:[{sr:1,booking_status:ps==='WL'?`WL ${(s%30)+12}`:ps,current_status:berth,coach}]};
}

/* ═══════════════════════════════════════════════
   JSON RESPONSE HELPER
   ═══════════════════════════════════════════════ */
function sendJSON(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, {
    'Content-Type':'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*',
    'Cache-Control':'no-store',
  });
  res.end(body);
}

/* ═══════════════════════════════════════════════
   HTTP SERVER
   ═══════════════════════════════════════════════ */
const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const p      = parsed.pathname;
  const ip     = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204,{
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type'
    });
    res.end(); return;
  }

  // Rate limit API routes
  if (p.startsWith('/api/') && isRateLimited(ip)) {
    return sendJSON(res, 429, {error:'Too many requests. Please slow down.'});
  }

  /* ── /api/health ── */
  if (p === '/api/health') {
    return sendJSON(res, 200, {
      status:'ok', version:'3.0.0', edition:'November 2026',
      uptime: Math.floor(process.uptime()),
      mode: IR_KEY ? 'live-indianrailapi' : RAPID_KEY ? 'live-rapidapi' : 'simulated',
      cache: CACHE.size,
      timestamp: new Date().toISOString(),
    });
  }

  /* ── /api/stats ── */
  if (p === '/api/stats') {
    const stats = {
      edition: 'November 2026 (Ministry of Railways / PIB Official Releases)',
      passengersAnnual: '741 Crore (7.41 Billion, +3.54% in FY2025-26)',
      passengersDaily: 'about 2.30 Crore (23 Million daily passengers)',
      freightAnnual: '1,670 MT (+3.25%, FY2025-26, 2.92 Crore wagons)',
      freightOctober2026: '145.07 MT (All-time Oct Record, +8.32%)',
      freightAprilOct2026: '978.78 MT (+4.67%)',
      freightEarnings: '₹1,77,754 Crore (FY2025-26)',
      routeLength: '69,181 km (Running Track: 109,748 km; Total Track: 135,207 km)',
      electrification: '99.6% Broad-Gauge Electrified (69,873 Route km)',
      totalStations: 7461,
      trainsPerDay: 'about 25,000 Total Trains (~13,000 Passenger Trains)',
      vandeBharatCount: '164 Services (inc. Howrah–Kamakhya Sleeper launched Jan 2026)',
      amritBharatCount: '72 Services (Push-Pull Superfast Affordable Rail)',
      kavachCoverage: '2,633 Route km commissioned on Delhi–Mumbai & Delhi–Howrah (31 Jul 2026); trackside on 21,794 km',
      bulletTrain: '508 km Mumbai–Ahmedabad (Surat–Bilimora 50 km stretch targeted Aug 2027)',
      capitalOutlay: '₹2.93 Trillion record capital outlay (Union Budget 2026-27)',
      zonesDivisions: '18 Zones + Kolkata Metro | 70 Divisions (Rayagada added 1 Jun 2026)',
      locomotives: '13,569 Electric · 4,169 Diesel · 16 Steam (Feb 2026)',
      rollingStock: '327,991 Freight Wagons · 91,948 Passenger Coaches (Mar 2024)',
      punctuality: 'about 80% (FY2025-26)',
      quarterlyFreightQ1: '419.08 MT (Apr–Jun 2026 vs 413.05 MT in 2025)',
      cumulativeAprilSepFreight: '833.70 MT (+4.1% over previous year)',
      coalRakeSupply: '469.8 rakes/day avg in Oct 2026 (+19.5% YoY); domestic coal +16.0%',
      foodGrainLoading: '+26.3% YoY growth in Oct 2026',
      monthlyBreakdown: [
        { month: 'October 2026', freight: '145.07 MT', freightPrev: '133.93 MT', freightGrowth: '+8.32% (Record)', passengers: '64.72 Cr', passengersPrev: '63.52 Cr', note: 'All-time Oct Freight Record; Non-suburban +4.2%, Suburban +1.7%' },
        { month: 'September 2026', freight: '135.35 MT', freightPrev: '127.52 MT', freightGrowth: '+6.14%', passengers: '—', passengersPrev: '—', note: 'Cumulative Apr–Sep Freight: 833.7 MT (+4.1%)' },
        { month: 'August 2026', freight: '137.90 MT', freightPrev: '130.90 MT', freightGrowth: '+5.40%', passengers: '67.27 Cr', passengersPrev: '64.43 Cr', note: 'Suburban traffic grew +9.02%' },
        { month: 'July 2026', freight: '141.30 MT', freightPrev: '129.70 MT', freightGrowth: '+9.00%', passengers: '63.35 Cr', passengersPrev: '62.19 Cr', note: 'Monsoon freight demand surge' },
        { month: 'June 2026', freight: '142.21 MT', freightPrev: '136.71 MT', freightGrowth: '+4.00%', passengers: '63.81 Cr', passengersPrev: '62.37 Cr', note: 'Q1 (Apr–Jun) Freight: 419.08 MT (vs 413.05 MT)' }
      ],
      latestDevelopments: [
        { date: '14 Nov 2026', title: 'Cross-Border Nepal Link Approved', desc: 'Approved weekly direct train between Janakpur Dham (Nepal) and Ayodhya Cantt (~604 km, leaving Janakpur Saturdays and Ayodhya Mondays).' },
        { date: '12 Nov 2026', title: 'Kavach Delhi–Agra Section Complete', desc: 'Automatic train protection installed on Delhi–Agra. Gatimaan Express and Vande Bharat cleared to return to 160 km/h after trials.' },
        { date: '12 Nov 2026', title: 'First AC Amrit Bharat Express 3.0', desc: 'Maiden run on New Delhi–Patna route operated as Chhath Festival Special with push-pull traction.' },
        { date: 'Nov 2026', title: 'Next-Gen Cloud Reservation System', desc: 'Architecture underway to handle 1.5 lakh bookings per minute (up from 32,000) across 2,200 primary trains.' },
        { date: '8 Nov 2025', title: 'Ferozepur Cantt–Delhi Vande Bharat', desc: 'Connecting border district with national capital in 6h 40m (486 km).' },
        { date: '10 Oct 2026', title: 'Sahnewal–Mundiyampakkam Parcel Express', desc: 'Dedicated fast parcel train earned ₹15.63 lakh on maiden journey from Punjab to Tamil Nadu.' }
      ]
    };
    return sendJSON(res, 200, stats);
  }

  /* ── /api/rules ── */
  if (p === '/api/rules') {
    const rules = {
      advanceReservationPeriod: {
        days: 60,
        rule: 'Advance Reservation Period is strictly 60 days (reduced from 120 days in Nov 2024 to curb touting and seat hoarding).'
      },
      tatkalPolicy: {
        acBookingTime: '10:00 AM (1 day prior to travel date, excluding journey date)',
        nonAcBookingTime: '11:00 AM (1 day prior to travel date, excluding journey date)',
        aadhaarVerification: 'Mandatory Aadhaar-authenticated IRCTC account required online + OTP check (since Jul 2025).'
      },
      aadhaarPriority: {
        rule: 'Aadhaar-linked users get exclusive priority booking on opening day (Day 60) from 8:00 AM to 4:00 PM (effective 5 Jan 2026).'
      },
      chartPreparation: {
        rule: 'Reservation charts are prepared 8 hours prior to train departure (updated from 4 hours per Jul 2025 directives).'
      },
      fareRevision: {
        effectiveDate: '26 December 2025',
        ordinaryNonAC: '+1 paisa/km for ordinary non-AC (Sleeper & 1st Ordinary)',
        mailExpress: '+2 paise/km for Mail/Express non-AC and AC classes',
        suburbanSeason: 'Unchanged'
      }
    };
    return sendJSON(res, 200, rules);
  }

  /* ── /api/live/:num ── */
  const lm = p.match(/^\/api\/live\/(\d{4,5})$/);
  if (lm) {
    const num  = lm[1];
    const date = parsed.query.date || new Date().toISOString().split('T')[0];
    const ck   = `live:${num}:${date}`;
    const hit  = cget(ck);
    if (hit) return sendJSON(res, 200, {...hit, cached:true});
    let data = null;
    try {
      if (API_PREF==='indianrail'||(API_PREF==='auto'&&IR_KEY))    data = await irLive(num,date);
      if (!data&&(API_PREF==='rapidapi'||(API_PREF==='auto'&&RAPID_KEY))) data = await rapidLive(num,date);
    } catch(e) { console.error('[live]',e.message); }
    if (!data) data = simLive(num, date);
    cset(ck, data, data.source==='simulated' ? 300 : 90);
    return sendJSON(res, 200, data);
  }

  /* ── /api/pnr/:pnr ── */
  const pm = p.match(/^\/api\/pnr\/(.+)$/);
  if (pm) {
    const pnr = pm[1];
    if (!/^\d{10}$/.test(pnr)) return sendJSON(res, 400, {error:'PNR must be 10 digits'});
    const hit = cget(`pnr:${pnr}`);
    if (hit) return sendJSON(res, 200, {...hit, cached:true});
    let data = null;
    try {
      if (IR_KEY)    data = await irPNR(pnr);
      if (!data && RAPID_KEY) data = await rapidPNR(pnr);
    } catch(e) { console.error('[pnr]',e.message); }
    if (!data) data = simPNR(pnr);
    cset(`pnr:${pnr}`, data, data.source==='simulated' ? 300 : 180);
    return sendJSON(res, 200, data);
  }

  /* ── Static files ── */
  serveStatic(p === '/' ? '/index.html' : p, res);
});

server.listen(PORT, () => {
  const mode = IR_KEY ? 'IndianRailAPI ✅ LIVE' : RAPID_KEY ? 'RapidAPI ✅ LIVE' : 'SIMULATED (add API key for live data)';
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  🚆  RailSaarthi v3 (Nov 2026 Edition)                       ║
╠══════════════════════════════════════════════════════════════╣
║  Open  →  http://localhost:${PORT}                             ║
║  Mode  →  ${mode.padEnd(50)}║
╠══════════════════════════════════════════════════════════════╣
║  API Endpoints:                                              ║
║    GET /api/health                                           ║
║    GET /api/stats                                            ║
║    GET /api/rules                                            ║
║    GET /api/live/:trainNumber?date=YYYY-MM-DD                ║
║    GET /api/pnr/:pnrNumber                                   ║
╚══════════════════════════════════════════════════════════════╝`);
});

module.exports = server;
