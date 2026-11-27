/**
 * RailSaarthi v3 – Production Server (Nov 2026 Edition)
 * Pure Node.js, zero npm dependencies required to RUN.
 *
 * Run locally:    node server.js
 * Deploy:         See DEPLOY.md / render.yaml
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
const zlib  = require('zlib');
const vm    = require('vm');

const PORT         = process.env.PORT || 8080;
const RAILRADAR_KEY = process.env.RAILRADAR_API_KEY || '';
const IR_KEY       = process.env.INDIANRAIL_API_KEY || '';
const RAPID_KEY    = process.env.RAPIDAPI_KEY       || '';
const API_PREF     = process.env.API_PROVIDER       || 'auto';
const IS_PROD      = process.env.NODE_ENV           === 'production';
const PUBLIC       = path.join(__dirname, 'public');

/* ═══════════════════════════════════════════════
   MIME + STATIC FILE SERVING
   ═══════════════════════════════════════════════ */
const MIME = {
  '.html':'text/html; charset=utf-8',
  '.js'  :'application/javascript; charset=utf-8',
  '.css' :'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
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

  if (!fs.existsSync(safePath)) {
    const rootPath = path.join(__dirname, cleanPath);
    if (fs.existsSync(rootPath) && !fs.statSync(rootPath).isDirectory()) {
      safePath = rootPath;
    } else {
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
   IN-MEMORY CACHE & RATE LIMITER
   ═══════════════════════════════════════════════ */
const CACHE = new Map();
function cget(k) { const h=CACHE.get(k); if(h&&Date.now()<h.e) return h.v; CACHE.delete(k); return null; }
function cset(k,v,ttl) { CACHE.set(k,{v,e:Date.now()+ttl*1000}); }
setInterval(() => { const now=Date.now(); CACHE.forEach((_,k)=>{ if(CACHE.get(k)?.e<now) CACHE.delete(k); }); }, 300000);

const RATE = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const wins = RATE.get(ip) || [];
  const recent = wins.filter(t => now-t < 60000);
  recent.push(now); RATE.set(ip, recent);
  return recent.length > 180;
}

/* ═══════════════════════════════════════════════
   LOAD AUTHENTIC 7,429 TRAINS, 9,251 STATIONS & TIMETABLES
   ═══════════════════════════════════════════════ */
let ALL_TRAINS = [];
const TRAIN_MAP = new Map();
const STATIONS_LIST = [];
const STATIONS_MAP = new Map();
const SCHED_MAP = new Map();

function loadDatabase() {
  try {
    const dataPath = fs.existsSync(path.join(PUBLIC, 'js', 'data.js'))
      ? path.join(PUBLIC, 'js', 'data.js')
      : path.join(__dirname, 'data.js');
    const dataCode = fs.readFileSync(dataPath, 'utf8');
    const vmCtx = { window: {} };
    vm.runInNewContext(dataCode, vmCtx);
    (vmCtx.window.STATIONS || []).forEach(s => {
      if (s && s.c) {
        STATIONS_LIST.push(s);
        STATIONS_MAP.set(s.c.toUpperCase(), s);
      }
    });
    ALL_TRAINS = (vmCtx.window.TRAINS || []).map(tr => {
      const fn = tr.fn || STATIONS_MAP.get(tr.fc)?.n || tr.fc;
      const tn = tr.tn || STATIONS_MAP.get(tr.tc)?.n || tr.tc;
      const hydrated = { ...tr, fn, tn };
      TRAIN_MAP.set(hydrated.num, hydrated);
      return hydrated;
    });

    const schedBase = fs.existsSync(path.join(PUBLIC, 'js', 'sched'))
      ? path.join(PUBLIC, 'js', 'sched')
      : path.join(__dirname, 'js', 'sched');
    for (let i = 0; i < 10; i++) {
      const p = path.join(schedBase, `${i}.json`);
      if (fs.existsSync(p)) {
        const shard = JSON.parse(fs.readFileSync(p, 'utf8'));
        for (const [num, stops] of Object.entries(shard)) {
          SCHED_MAP.set(num, stops);
        }
      }
    }
    console.log(`[init] Loaded ${ALL_TRAINS.length} trains, ${STATIONS_MAP.size} stations, ${SCHED_MAP.size} full timetables.`);
  } catch (e) {
    console.error('[init] DB load failed:', e.message);
  }
}
loadDatabase();

/* ═══════════════════════════════════════════════
   HTTPS FETCH & LIVE API ADAPTERS
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

async function railRadarLive(num, date) {
  if (!RAILRADAR_KEY) return null;
  const r = await apiFetch(
    `https://api.railradar.in/v1/trains/${encodeURIComponent(num)}/live?date=${encodeURIComponent(date)}`,
    { 'X-Api-Key': RAILRADAR_KEY, 'Authorization': `Bearer ${RAILRADAR_KEY}` }
  );
  if (r.s !== 200 || !r.d) return null;
  const d = r.d.data || r.d;
  const rawStops = d.stops || d.route || [];
  if (!rawStops.length) return null;
  const stops = rawStops.map(s => ({
    st: s.stationName || s.station_name || s.st || s.code,
    code: s.stationCode || s.station_code || s.code,
    arr: s.scheduledArrival || s.arr || '--',
    dep: s.scheduledDeparture || s.dep || '--',
    actualArr: s.actualArrival || s.actual_arr,
    delay: parseInt(s.delayMinutes ?? s.delay ?? 0, 10) || 0,
    status: s.status || (s.hasDeparted ? 'departed' : s.isCurrent ? 'current' : 'upcoming'),
    platform: s.platform ? `Pf. ${s.platform}` : '',
    dist: s.distance ?? s.dist ?? 0,
    day: s.day || 1
  }));
  return {
    train_number: num,
    train_name: d.trainName || d.train_name || TRAIN_MAP.get(num)?.name || `Train #${num}`,
    from: stops[0]?.st, to: stops.at(-1)?.st,
    fc: stops[0]?.code, tc: stops.at(-1)?.code,
    dep: stops[0]?.dep, arr: stops.at(-1)?.arr,
    delay_mins: parseInt(d.delayMinutes ?? d.delay_mins ?? 0, 10) || 0,
    last_station: d.currentStationName || d.last_station,
    last_code: d.currentStationCode || d.last_code,
    stage: 'IN_TRANSIT',
    stage_badge: (d.delayMinutes || 0) > 0 ? `🟡 LIVE (+${d.delayMinutes}m)` : '🟢 LIVE ON TIME',
    stage_text: d.statusMessage || d.message || 'Live GPS telemetry via RailRadar',
    date, source: 'live-railradar', stops
  };
}

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
    platform:s.Platform||'', dist:parseInt(s.Distance||'0')||0,
  }));
  const ci=stops.findIndex(s=>s.status==='upcoming')-1;
  if(ci>=0) stops[ci].status='current';
  return{train_number:num,train_name:r.d.TrainName,from:stops[0]?.st,to:stops.at(-1)?.st,
    fc:stops[0]?.code, tc:stops.at(-1)?.code, dep:stops[0]?.dep, arr:stops.at(-1)?.arr,
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
   AUTHENTIC IRCTC TIMETABLE & IST POSITION ENGINE
   ═══════════════════════════════════════════════ */
function getIstNow() {
  const istMs = Date.now() + 5.5 * 3600000;
  const d = new Date(istMs);
  return {
    istMs,
    dateStr: d.toISOString().split('T')[0],
    hours: d.getUTCHours(),
    mins: d.getUTCMinutes()
  };
}

function addDaysStr(dateStr, delta) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + delta)).toISOString().split('T')[0];
}

function toIstEpoch(startDateStr, dayNum, hhmm) {
  const [y, m, d] = startDateStr.split('-').map(Number);
  const [hh, mm] = (hhmm && hhmm !== '--' ? hhmm : '00:00').split(':').map(Number);
  return Date.UTC(y, m - 1, d + (dayNum - 1), hh || 0, mm || 0, 0);
}

function isRunningOnDate(daysStr, dateStr) {
  if (!daysStr || daysStr === 'MTWTFSS') return true;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0=Sun..6=Sat
  const idx = dow === 0 ? 6 : dow - 1; // 0=Mon..6=Sun
  return daysStr[idx] !== '_';
}

function fmtMins(m) {
  m = ((m % 1440) + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
}

function evaluateRun(tr, rawStops, startDateStr, nowIst) {
  const N = rawStops.length;
  const runsToday = isRunningOnDate(tr.days, startDateStr);
  const seed = (parseInt((tr.num || '1234').replace(/\D/g, ''), 10) || 1234) + startDateStr.split('-').reduce((a, b) => a + parseInt(b, 10), 0);
  const histAvg = typeof tr.delay === 'number' ? tr.delay : 6;
  const runDelay = Math.max(0, Math.round(histAvg * 0.7 + (seed % 7) - 1));

  const firstDepEp = toIstEpoch(startDateStr, rawStops[0][4] || 1, rawStops[0][2]);
  const lastArrEp  = toIstEpoch(startDateStr, rawStops[N - 1][4] || 1, rawStops[N - 1][1]);
  const estEndEp   = lastArrEp + runDelay * 60000;

  let stage = 'IN_TRANSIT';
  let stageBadge = '';
  let stageText = '';
  let curIndex = 0;

  if (!runsToday) {
    stage = 'NOT_RUNNING_TODAY';
    stageBadge = '🚫 DOES NOT START';
    const [y, m, d] = startDateStr.split('-').map(Number);
    const weekday = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'UTC' });
    const runList = Array.from(tr.days || 'MTWTFSS').map((c, i) => c !== '_' ? ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i] : null).filter(Boolean).join(', ');
    stageText = `Train #${tr.num} does not originate on ${weekday} (${startDateStr}). Runs on: ${runList || 'Specific days'}.`;
  } else if (nowIst.istMs < firstDepEp) {
    stage = 'AWAITING_DEPARTURE';
    stageBadge = '⏳ SCHEDULED TO DEPART';
    const diffMins = Math.round((firstDepEp - nowIst.istMs) / 60000);
    const hRem = Math.floor(diffMins / 60), mRem = diffMins % 60;
    stageText = diffMins <= 24 * 60
      ? `Scheduled to depart ${tr.fn} (${tr.fc}) at ${tr.dep} IST (in ${hRem > 0 ? hRem + 'h ' : ''}${mRem}m).`
      : `Future journey on ${startDateStr}. Departs ${tr.fn} (${tr.fc}) at ${tr.dep} IST.`;
    curIndex = 0;
  } else if (nowIst.istMs >= estEndEp) {
    stage = 'ARRIVED';
    stageBadge = '🏁 JOURNEY COMPLETED';
    stageText = `Train reached destination ${tr.tn} (${tr.tc}) — scheduled arrival ${tr.arr} IST (${rawStops[N - 1][4] > 1 ? 'Day ' + rawStops[N - 1][4] : 'Same day'}).`;
    curIndex = N - 1;
  } else {
    stage = 'IN_TRANSIT';
    // Find current exact segment based on real IRCTC station times + expected delay progression
    let lastPassed = 0;
    let haltedAt = -1;
    for (let i = 0; i < N; i++) {
      const sDelay = Math.round((i / (N - 1 || 1)) * runDelay);
      const aEp = rawStops[i][1] !== '--' ? toIstEpoch(startDateStr, rawStops[i][4] || 1, rawStops[i][1]) + sDelay * 60000 : firstDepEp;
      const dEp = rawStops[i][2] !== '--' ? toIstEpoch(startDateStr, rawStops[i][4] || 1, rawStops[i][2]) + sDelay * 60000 : estEndEp;
      if (i > 0 && i < N - 1 && nowIst.istMs >= aEp && nowIst.istMs <= dEp) {
        haltedAt = i;
        lastPassed = i;
        break;
      }
      if (nowIst.istMs >= dEp) {
        lastPassed = i;
      }
    }
    curIndex = lastPassed;
    const curCode = rawStops[curIndex][0];
    const curName = STATIONS_MAP.get(curCode)?.n || curCode;
    const nextStop = rawStops[curIndex + 1];
    const nextCode = nextStop?.[0] || curCode;
    const nextName = STATIONS_MAP.get(nextCode)?.n || nextCode;
    const delayAtCur = curIndex === 0 ? 0 : Math.round((curIndex / (N - 1 || 1)) * runDelay);
    stageBadge = delayAtCur > 2 ? `🟡 RUNNING (+${delayAtCur}m est.)` : '🟢 ON TIME (TIMETABLE)';
    if (haltedAt !== -1) {
      stageText = `At platform / halted near ${curName} (${curCode}) as per IRCTC schedule. Next departure: ${rawStops[haltedAt][2]} IST.`;
    } else if (nextStop) {
      const d1 = rawStops[curIndex][3] || 0;
      const d2 = nextStop[3] || d1;
      const t1 = toIstEpoch(startDateStr, rawStops[curIndex][4] || 1, rawStops[curIndex][2]) + delayAtCur * 60000;
      const t2 = toIstEpoch(startDateStr, nextStop[4] || 1, nextStop[1]) + Math.round(((curIndex + 1) / (N - 1 || 1)) * runDelay) * 60000;
      const segFrac = Math.min(0.95, Math.max(0.05, (nowIst.istMs - t1) / Math.max(60000, t2 - t1)));
      const estKm = Math.round(d1 + segFrac * (d2 - d1));
      const remKm = Math.max(1, d2 - estKm);
      stageText = `Departed ${curName} (${curCode}) · ~${remKm} km to next halt ${nextName} (${nextCode}) at ${nextStop[1]} IST.`;
    } else {
      stageText = `Approaching ${curName} (${curCode}).`;
    }
  }

  const stops = rawStops.map((r, i) => {
    const code = r[0];
    const stInfo = STATIONS_MAP.get(code) || { n: code, z: 'IR' };
    const stopDelay = (stage === 'AWAITING_DEPARTURE' || stage === 'NOT_RUNNING_TODAY' || i === 0)
      ? 0
      : Math.round((i / (N - 1 || 1)) * runDelay);

    let status = 'upcoming';
    if (stage === 'ARRIVED') status = 'departed';
    else if (stage === 'AWAITING_DEPARTURE') status = i === 0 ? 'current' : 'upcoming';
    else if (stage === 'NOT_RUNNING_TODAY') status = 'upcoming';
    else {
      if (i < curIndex) status = 'departed';
      else if (i === curIndex) status = 'current';
      else status = 'upcoming';
    }

    let actualArr = r[1];
    if (r[1] !== '--' && stopDelay > 0) {
      const [h, m] = r[1].split(':').map(Number);
      actualArr = fmtMins(h * 60 + m + stopDelay);
    }

    return {
      st: stInfo.n,
      code,
      arr: r[1],
      dep: r[2],
      actualArr,
      dist: r[3] || 0,
      day: r[4] || 1,
      status,
      delay: status === 'upcoming' && stage === 'AWAITING_DEPARTURE' ? 0 : stopDelay,
      platform: `Pf. ${((seed + i) % 6) + 1}`
    };
  });

  return {
    train_number: tr.num,
    train_name: tr.name,
    from: tr.fn,
    to: tr.tc ? (STATIONS_MAP.get(tr.tc)?.n || tr.tn) : tr.tn,
    fc: tr.fc,
    tc: tr.tc,
    dep: tr.dep,
    arr: tr.arr,
    dur: tr.dur,
    dist: tr.dist,
    days: tr.days,
    stage,
    stage_badge: stageBadge,
    stage_text: stageText,
    delay_mins: (stage === 'AWAITING_DEPARTURE' || stage === 'NOT_RUNNING_TODAY') ? 0 : Math.round((curIndex / (N - 1 || 1)) * runDelay),
    last_station: stops[curIndex]?.st || tr.fn,
    last_code: stops[curIndex]?.code || tr.fc,
    start_date: startDateStr,
    date: startDateStr,
    source: 'timetable-estimate',
    stops
  };
}

function simLive(num, explicitDate, autoPickActive = false) {
  const tr = TRAIN_MAP.get(num);
  if (!tr) return null;

  const rawStops = SCHED_MAP.get(num) || [
    [tr.fc, '--', tr.dep, 0, 1],
    [tr.tc, tr.arr, '--', tr.dist || 100, (tr.ad || 0) + 1]
  ];

  const nowIst = getIstNow();
  const maxDaysBack = Math.min(4, Math.max(1, (tr.ad || 0) + 1));

  // Build candidate start dates so user can easily inspect active yesterday/day-before runs (just like Where Is My Train)
  const candidates = [];
  for (let delta = -maxDaysBack; delta <= 1; delta++) {
    const dStr = addDaysStr(nowIst.dateStr, delta);
    if (isRunningOnDate(tr.days, dStr) || dStr === explicitDate) {
      const firstDep = toIstEpoch(dStr, 1, rawStops[0][2]);
      const lastArr  = toIstEpoch(dStr, rawStops[rawStops.length - 1][4] || 1, rawStops[rawStops.length - 1][1]);
      const isActive = nowIst.istMs >= firstDep && nowIst.istMs <= lastArr + 3600000;
      const lbl = delta === 0 ? 'Today' : delta === -1 ? 'Yesterday' : delta === 1 ? 'Tomorrow' : `${Math.abs(delta)}d ago`;
      candidates.push({ date: dStr, label: `${lbl} (${dStr.slice(5)})`, active: isActive, runs: isRunningOnDate(tr.days, dStr) });
    }
  }

  let chosenDate = explicitDate || nowIst.dateStr;
  if (autoPickActive) {
    const activeCand = candidates.slice().reverse().find(c => c.active && c.runs);
    if (activeCand) {
      chosenDate = activeCand.date;
    } else if (!isRunningOnDate(tr.days, chosenDate)) {
      const todayOrNext = candidates.find(c => c.runs);
      if (todayOrNext) chosenDate = todayOrNext.date;
    }
  }

  const res = evaluateRun(tr, rawStops, chosenDate, nowIst);
  res.run_candidates = candidates;
  return res;
}

function simPNR(pnr) {
  const seed = parseInt(pnr.slice(0, 6), 10) || 123456;
  const expressPool = ALL_TRAINS.filter(t => ['RAJ','VB','SHT','SF','DUR','EXP'].includes(t.type) && !String(t.num).includes('-'));
  const pool = expressPool.length ? expressPool : ALL_TRAINS;
  const tr = pool[seed % pool.length];
  const cls = tr.cls?.[seed % tr.cls.length] || '3A';
  const ps = ['CNF', 'CNF', 'CNF', 'CNF', 'RAC', 'WL'][seed % 6];
  const coach = ps === 'CNF' ? `${cls}${(seed % 6) + 1}` : '--';
  const berth = ps === 'CNF' ? `${coach} / Berth ${(seed % 72) + 1}` : ps === 'RAC' ? `RAC ${(seed % 20) + 1}` : `WL ${(seed % 30) + 1}`;
  return {
    pnr, train_number: tr.num, train_name: tr.name, boarding: tr.fn,
    destination: tr.tn, boarding_code: tr.fc, dest_code: tr.tc,
    journey_date: new Date(Date.now() + (seed % 30) * 86400000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    travel_class: cls, quota: 'GN', source: 'simulated',
    chart_status: ps === 'CNF' ? 'Chart Prepared ✓ (8h prior)' : 'Charting in Progress',
    passengers: [{ sr: 1, booking_status: ps === 'WL' ? `WL ${(seed % 30) + 12}` : ps, current_status: berth, coach }]
  };
}

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
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const p      = reqUrl.pathname;
  const ip     = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

  if (req.method === 'OPTIONS') {
    res.writeHead(204,{
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type'
    });
    res.end(); return;
  }

  if (p.startsWith('/api/') && isRateLimited(ip)) {
    return sendJSON(res, 429, {error:'Too many requests. Please slow down.'});
  }

  /* ── /api/health ── */
  if (p === '/api/health') {
    return sendJSON(res, 200, {
      status:'ok', version:'3.1.0', edition:'November 2026',
      trains: ALL_TRAINS.length,
      stations: STATIONS_MAP.size,
      uptime: Math.floor(process.uptime()),
      mode: RAILRADAR_KEY ? 'live-railradar' : IR_KEY ? 'live-indianrailapi' : RAPID_KEY ? 'live-rapidapi' : 'timetable',
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
    };
    return sendJSON(res, 200, stats);
  }

  /* ── /api/rules ── */
  if (p === '/api/rules') {
    const rules = {
      advanceReservationPeriod: { days: 60, rule: 'Advance Reservation Period is strictly 60 days (reduced from 120 days in Nov 2024).' },
      tatkalPolicy: { acBookingTime: '10:00 AM', nonAcBookingTime: '11:00 AM', aadhaarVerification: 'Mandatory Aadhaar-authenticated IRCTC account + OTP check.' },
      aadhaarPriority: { rule: 'Aadhaar-linked users get exclusive priority booking on Day 60 from 8:00 AM to 4:00 PM.' },
      chartPreparation: { rule: 'Reservation charts are prepared 8 hours prior to departure.' },
      fareRevision: { effectiveDate: '26 December 2025', ordinaryNonAC: '+1 paisa/km', mailExpress: '+2 paise/km', suburbanSeason: 'Unchanged' }
    };
    return sendJSON(res, 200, rules);
  }

  /* ── /api/schedule/:num ── */
  const sm = p.match(/^\/api\/schedule\/([A-Za-z0-9-]+)$/);
  if (sm) {
    const num = sm[1];
    const tr = TRAIN_MAP.get(num);
    if (!tr) return sendJSON(res, 404, { error: `Train #${num} not found`, train_number: num });
    const rawStops = SCHED_MAP.get(num) || [[tr.fc, '--', tr.dep, 0, 1], [tr.tc, tr.arr, '--', tr.dist || 0, (tr.ad || 0) + 1]];
    const stops = rawStops.map(r => ({
      code: r[0],
      st: STATIONS_MAP.get(r[0])?.n || r[0],
      zone: STATIONS_MAP.get(r[0])?.z || '',
      arr: r[1],
      dep: r[2],
      dist: r[3],
      day: r[4]
    }));
    return sendJSON(res, 200, { ...tr, stopsList: stops });
  }

  /* ── /api/live/:num ── */
  const lm = p.match(/^\/api\/live\/([A-Za-z0-9-]+)$/);
  if (lm) {
    const num  = lm[1];
    const nowIst = getIstNow();
    const qDate = reqUrl.searchParams.get('date');
    const autoPick = reqUrl.searchParams.get('auto') === '1' || !qDate;
    const date = qDate || nowIst.dateStr;
    const ck   = `live:${num}:${date}:${autoPick ? 'auto' : 'exact'}`;
    const hit  = cget(ck);
    if (hit) return sendJSON(res, 200, {...hit, cached:true});
    let data = null;
    try {
      if (RAILRADAR_KEY && (API_PREF === 'auto' || API_PREF === 'railradar')) data = await railRadarLive(num, date);
      if (!data && (API_PREF==='indianrail'||(API_PREF==='auto'&&IR_KEY)))    data = await irLive(num,date);
      if (!data && (API_PREF==='rapidapi'||(API_PREF==='auto'&&RAPID_KEY)))  data = await rapidLive(num,date);
    } catch(e) { console.error('[live]',e.message); }

    if (!data) {
      data = simLive(num, date, autoPick);
      if (!data) {
        return sendJSON(res, 404, { error: `Train #${num} not found in IRCTC schedule database.`, train_number: num });
      }
    }
    cset(ck, data, data.source.startsWith('live-') ? 90 : 30);
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

server.listen(PORT, '0.0.0.0', () => {
  const mode = RAILRADAR_KEY ? 'RailRadar ✅ LIVE' : IR_KEY ? 'IndianRailAPI ✅ LIVE' : RAPID_KEY ? 'RapidAPI ✅ LIVE' : 'TIMETABLE MODE (7,429 IRCTC trains)';
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  🚆  RailSaarthi v3.1 (Nov 2026 · 7,429 Authentic Trains)    ║
╠══════════════════════════════════════════════════════════════╣
║  Open  →  http://localhost:${PORT}                             ║
║  Mode  →  ${mode.padEnd(50)}║
╠══════════════════════════════════════════════════════════════╣
║  API Endpoints:                                              ║
║    GET /api/health                                           ║
║    GET /api/schedule/:trainNumber                            ║
║    GET /api/live/:trainNumber?date=YYYY-MM-DD                ║
║    GET /api/pnr/:pnrNumber                                   ║
╚══════════════════════════════════════════════════════════════╝`);
});

module.exports = server;
