/* data.js – Complete Indian Railways Dataset (Nov 2026 Edition)
   Official Statistics from Ministry of Railways / PIB (April & Nov 2026)
   164 Vande Bharat · 72 Amrit Bharat · 7,461 Stations · 69,181 Route km
   Fares calibrated to 26 Dec 2025 official rate notification */

window.IR_METRICS_2026 = {
  "edition": "November 2026 (Official Railway Ministry & PIB Releases)",
  "passengersAnnual": "741 Crore (7.41 Billion, +3.54% in FY2025-26)",
  "passengersDaily": "about 2.30 Crore (23 Million daily passengers)",
  "freightAnnual": "1,670 MT (+3.25%, FY2025-26, 2.92 Crore wagons)",
  "freightOctober2026": "145.07 MT (All-time Oct Record, +8.32%)",
  "freightAprilOct2026": "978.78 MT (+4.67%)",
  "freightEarnings": "₹1,77,754 Crore (FY2025-26)",
  "routeLength": "69,181 km (Running Track: 109,748 km; Total Track: 135,207 km)",
  "electrification": "99.6% Broad-Gauge Electrified (69,873 Route km, up from 21,801 km in 2014)",
  "totalStations": "7,461 Stations (Indian Railways network)",
  "trainsPerDay": "about 25,000 Total Trains (~13,000 Passenger Trains)",
  "vandeBharatCount": "164 Services (inc. Howrah–Kamakhya Sleeper launched Jan 2026)",
  "amritBharatCount": "72 Services (Push-Pull Superfast Affordable Rail)",
  "kavachCoverage": "2,633 Route km commissioned on Delhi–Mumbai & Delhi–Howrah (31 Jul 2026); trackside on 21,794 km",
  "bulletTrain": "508 km Mumbai–Ahmedabad (Surat–Bilimora 50 km stretch targeted Aug 2027)",
  "capitalOutlay": "₹2.93 Trillion record capital outlay (Union Budget 2026-27)",
  "zonesDivisions": "18 Zones + Kolkata Metro | 70 Divisions (Rayagada added 1 Jun 2026)",
  "locomotives": "13,569 Electric · 4,169 Diesel · 16 Steam (Feb 2026)",
  "rollingStock": "327,991 Freight Wagons · 91,948 Passenger Coaches (Mar 2024)",
  "punctuality": "about 80% (FY2025-26)",
  "quarterlyFreightQ1": "419.08 MT (Apr–Jun 2026 vs 413.05 MT in 2025)",
  "cumulativeAprilSepFreight": "833.70 MT (+4.1% over previous year)",
  "coalRakeSupply": "469.8 rakes/day avg in Oct 2026 (+19.5% YoY); domestic coal +16.0%",
  "foodGrainLoading": "+26.3% YoY growth in Oct 2026",
  "monthlyBreakdown2026": [
    { "month": "October 2026", "freight": "145.07 MT", "freightPrev": "133.93 MT", "freightGrowth": "+8.32% (Record)", "passengers": "64.72 Cr", "passengersPrev": "63.52 Cr", "note": "All-time Oct Freight Record; Non-suburban +4.2%, Suburban +1.7%" },
    { "month": "September 2026", "freight": "135.35 MT", "freightPrev": "127.52 MT", "freightGrowth": "+6.14%", "passengers": "—", "passengersPrev": "—", "note": "Cumulative Apr–Sep Freight: 833.7 MT (+4.1%)" },
    { "month": "August 2026", "freight": "137.90 MT", "freightPrev": "130.90 MT", "freightGrowth": "+5.40%", "passengers": "67.27 Cr", "passengersPrev": "64.43 Cr", "note": "Suburban traffic grew +9.02%" },
    { "month": "July 2026", "freight": "141.30 MT", "freightPrev": "129.70 MT", "freightGrowth": "+9.00%", "passengers": "63.35 Cr", "passengersPrev": "62.19 Cr", "note": "Monsoon freight demand surge" },
    { "month": "June 2026", "freight": "142.21 MT", "freightPrev": "136.71 MT", "freightGrowth": "+4.00%", "passengers": "63.81 Cr", "passengersPrev": "62.37 Cr", "note": "Q1 (Apr–Jun) Freight: 419.08 MT (vs 413.05 MT)" }
  ],
  "latestDevelopments2026": [
    { "date": "14 Nov 2026", "title": "Cross-Border Nepal Link Approved", "desc": "Approved weekly direct train between Janakpur Dham (Nepal) and Ayodhya Cantt (~604 km, leaving Janakpur Saturdays and Ayodhya Mondays)." },
    { "date": "12 Nov 2026", "title": "Kavach Delhi–Agra Section Complete", "desc": "Automatic train protection installed on Delhi–Agra. Gatimaan Express and Vande Bharat cleared to return to 160 km/h after trials." },
    { "date": "12 Nov 2026", "title": "First AC Amrit Bharat Express 3.0", "desc": "Maiden run on New Delhi–Patna route operated as Chhath Festival Special with push-pull traction." },
    { "date": "Nov 2026", "title": "Next-Gen Cloud Reservation System", "desc": "Architecture underway to handle 1.5 lakh bookings per minute (up from 32,000) across 2,200 primary trains." },
    { "date": "8 Nov 2025", "title": "Ferozepur Cantt–Delhi Vande Bharat", "desc": "Connecting border district with national capital in 6h 40m (486 km)." },
    { "date": "10 Oct 2026", "title": "Sahnewal–Mundiyampakkam Parcel Express", "desc": "Dedicated fast parcel train earned ₹15.63 lakh on maiden journey from Punjab to Tamil Nadu." }
  ],
  "discrepancyResolution": [
    { "metric": "Passengers FY2025-26", "primaryPIB": "741 Crore", "secondarySource": "738 Crore (IBEF)", "resolution": "Official Ministry & PIB release: 741 Crore" },
    { "metric": "Freight FY2025-26", "primaryPIB": "1,670 MT", "secondarySource": "1,700 MT (IBEF)", "resolution": "Ministry certified data: 1,670 MT" },
    { "metric": "Total Stations", "primaryPIB": "7,461 Stations", "secondarySource": "7,325 (Served avg)", "resolution": "Year Book (Mar 2024): 7,461" },
    { "metric": "Route Length", "primaryPIB": "69,181 km", "secondarySource": "68,584 km (older)", "resolution": "Year Book: 69,181 route km (135,207 km total track)" },
    { "metric": "Kavach Coverage", "primaryPIB": "2,633 Route km commissioned", "secondarySource": "3,100 km (PIB projection)", "resolution": "2,633 km commissioned on Delhi–Mumbai & Delhi–Howrah (31 Jul 2026); 21,794 km trackside underway" },
    { "metric": "Divisions Count", "primaryPIB": "70 Divisions", "secondarySource": "68 / 69 / 73 depending on list", "resolution": "70 Divisions across 18 Zones + Kolkata Metro (Rayagada added 1 Jun 2026)" }
  ]
};

window.IR_RULES_2026 = {
  "advanceReservationPeriod": {
    "days": 60,
    "rule": "Advance Reservation Period is strictly 60 days (reduced from 120 days in Nov 2024 to curb touting and seat hoarding). Shorter for select intercity day trains."
  },
  "tatkalPolicy": {
    "acBookingTime": "10:00 AM (1 day prior to travel date, excluding journey date)",
    "nonAcBookingTime": "11:00 AM (1 day prior to travel date, excluding journey date)",
    "aadhaarVerification": "Mandatory Aadhaar-authenticated IRCTC account required online. OTP verification enforced across online, PRS counters and authorized agents (since Jul 2025)."
  },
  "aadhaarPriority": {
    "rule": "Aadhaar-linked users get exclusive priority booking on opening day (Day 60) from 8:00 AM to 4:00 PM (effective 5 Jan 2026)."
  },
  "chartPreparation": {
    "rule": "Reservation charts are prepared 8 hours prior to train departure (updated from 4 hours per Jul 2025 directives for passenger certainty)."
  },
  "fareRevision": {
    "effectiveDate": "26 December 2025",
    "ordinaryNonAC": "+1 paisa/km for ordinary non-AC (Sleeper & 1st Ordinary)",
    "mailExpress": "+2 paise/km for Mail/Express non-AC and AC classes",
    "suburbanSeason": "Unchanged (Suburban daily & Monthly Season Tickets have zero hike)"
  },
  "securityAction": "Over 3 crore suspicious ticketing accounts permanently removed; 13,580 touts arrested (2023–June 2026)."
};

/* ═══════════════ TRAINS (226+ Trains) ═══════════════
   Fields: num, name, fn(from), fc(code), tn(to), tc(code), dep, arr, ad(+days),
           dur, dist, days(MTWTFSS / _ = no run), type, cls[], zone, stops  */
window.TRAINS = [
  {
    "num": "05557",
    "name": "Janakpur Dham – Ayodhya Cantt Express",
    "fn": "Janakpur Dham",
    "fc": "JNKD",
    "tn": "Ayodhya Cantt",
    "tc": "AYC",
    "dep": "06:30",
    "arr": "18:00",
    "ad": 0,
    "dur": "11h 30m",
    "dist": 604,
    "days": "_____S_",
    "type": "EXP",
    "cls": ["2A", "3A", "SL"],
    "zone": "ECR",
    "stops": 12
  },
  {
    "num": "05558",
    "name": "Ayodhya Cantt – Janakpur Dham Express",
    "fn": "Ayodhya Cantt",
    "fc": "AYC",
    "tn": "Janakpur Dham",
    "tc": "JNKD",
    "dep": "07:15",
    "arr": "18:45",
    "ad": 0,
    "dur": "11h 30m",
    "dist": 604,
    "days": "M______",
    "type": "EXP",
    "cls": ["2A", "3A", "SL"],
    "zone": "NR",
    "stops": 12
  },
  {
    "num": "02251",
    "name": "AC Amrit Bharat Express 3.0 (Special)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "06:10",
    "arr": "18:55",
    "ad": 0,
    "dur": "12h 45m",
    "dist": 998,
    "days": "MTWTFSS",
    "type": "AMRIT",
    "cls": ["3A", "2A", "SL"],
    "zone": "NR",
    "stops": 6
  },
  {
    "num": "02252",
    "name": "AC Amrit Bharat Express 3.0 (Special)",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "06:00",
    "arr": "18:45",
    "ad": 0,
    "dur": "12h 45m",
    "dist": 998,
    "days": "MTWTFSS",
    "type": "AMRIT",
    "cls": ["3A", "2A", "SL"],
    "zone": "ECR",
    "stops": 6
  },
  {
    "num": "22485",
    "name": "Ferozepur Cantt – New Delhi Vande Bharat",
    "fn": "Ferozepur Cantt",
    "fc": "FZR",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "06:00",
    "arr": "12:40",
    "ad": 0,
    "dur": "6h 40m",
    "dist": 486,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": ["CC", "EC"],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22486",
    "name": "New Delhi – Ferozepur Cantt Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Ferozepur Cantt",
    "tc": "FZR",
    "dep": "14:45",
    "arr": "21:25",
    "ad": 0,
    "dur": "6h 40m",
    "dist": 486,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": ["CC", "EC"],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12301",
    "name": "Howrah Rajdhani Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "17:00",
    "arr": "09:55",
    "ad": 1,
    "dur": "16h 55m",
    "dist": 1453,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 7
  },
  {
    "num": "12302",
    "name": "New Delhi Rajdhani",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:05",
    "arr": "09:45",
    "ad": 1,
    "dur": "19h 40m",
    "dist": 1453,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 7
  },
  {
    "num": "12305",
    "name": "Howrah Rajdhani (via Patna)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "16:55",
    "arr": "10:00",
    "ad": 1,
    "dur": "17h 05m",
    "dist": 1463,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 9
  },
  {
    "num": "12306",
    "name": "New Delhi Rajdhani (Patna)",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:00",
    "arr": "10:30",
    "ad": 1,
    "dur": "20h 30m",
    "dist": 1463,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 9
  },
  {
    "num": "12309",
    "name": "Rajendra Nagar Rajdhani",
    "fn": "Rajendra Nagar Bihar",
    "fc": "RJPB",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "11:55",
    "arr": "06:25",
    "ad": 1,
    "dur": "18h 30m",
    "dist": 1005,
    "days": "MT_TFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECR",
    "stops": 6
  },
  {
    "num": "12310",
    "name": "New Delhi Patna Rajdhani",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Rajendra Nagar Bihar",
    "tc": "RJPB",
    "dep": "19:55",
    "arr": "12:30",
    "ad": 1,
    "dur": "16h 35m",
    "dist": 1005,
    "days": "MT_TF_S",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECR",
    "stops": 6
  },
  {
    "num": "12313",
    "name": "Sealdah Rajdhani Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Sealdah",
    "tc": "SDAH",
    "dep": "16:55",
    "arr": "09:55",
    "ad": 1,
    "dur": "17h 00m",
    "dist": 1453,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 7
  },
  {
    "num": "12314",
    "name": "New Delhi Sealdah Rajdhani",
    "fn": "Sealdah",
    "fc": "SDAH",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:00",
    "arr": "09:30",
    "ad": 1,
    "dur": "19h 30m",
    "dist": 1453,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ER",
    "stops": 7
  },
  {
    "num": "12423",
    "name": "Dibrugarh Rajdhani",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Dibrugarh",
    "tc": "DBRG",
    "dep": "21:15",
    "arr": "07:30",
    "ad": 2,
    "dur": "34h 15m",
    "dist": 2424,
    "days": "M_W_F_S",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NFR",
    "stops": 8
  },
  {
    "num": "12424",
    "name": "New Delhi Dibrugarh Raj.",
    "fn": "Dibrugarh",
    "fc": "DBRG",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "07:00",
    "arr": "17:15",
    "ad": 1,
    "dur": "34h 15m",
    "dist": 2424,
    "days": "M_W_F_S",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NFR",
    "stops": 8
  },
  {
    "num": "12431",
    "name": "Trivandrum Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "11:00",
    "arr": "18:35",
    "ad": 1,
    "dur": "31h 35m",
    "dist": 3054,
    "days": "MTW_FSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SR",
    "stops": 9
  },
  {
    "num": "12432",
    "name": "Trivandrum NZM Rajdhani",
    "fn": "Trivandrum Central",
    "fc": "TVC",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "12:40",
    "arr": "20:30",
    "ad": 1,
    "dur": "31h 50m",
    "dist": 3054,
    "days": "MTW_FSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SR",
    "stops": 9
  },
  {
    "num": "12433",
    "name": "Chennai Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "06:00",
    "arr": "13:45",
    "ad": 1,
    "dur": "31h 45m",
    "dist": 2183,
    "days": "_T_T_SS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SR",
    "stops": 6
  },
  {
    "num": "12434",
    "name": "New Delhi Chennai Raj.",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "06:00",
    "arr": "12:05",
    "ad": 1,
    "dur": "30h 05m",
    "dist": 2183,
    "days": "_T_T_SS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SR",
    "stops": 6
  },
  {
    "num": "12951",
    "name": "Mumbai Rajdhani Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "16:25",
    "arr": "08:35",
    "ad": 1,
    "dur": "16h 10m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 5
  },
  {
    "num": "12952",
    "name": "New Delhi Mumbai Raj.",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "17:00",
    "arr": "08:35",
    "ad": 1,
    "dur": "15h 35m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 5
  },
  {
    "num": "12953",
    "name": "August Kranti Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "17:25",
    "arr": "10:55",
    "ad": 1,
    "dur": "17h 30m",
    "dist": 1395,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 12
  },
  {
    "num": "12954",
    "name": "August Kranti Exp.",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "17:15",
    "arr": "10:20",
    "ad": 1,
    "dur": "17h 05m",
    "dist": 1395,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A",
      "3E"
    ],
    "zone": "WR",
    "stops": 12
  },
  {
    "num": "12957",
    "name": "Swarna Jayanti Rajdhani",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:55",
    "arr": "05:50",
    "ad": 1,
    "dur": "14h 55m",
    "dist": 935,
    "days": "MTW_FSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 5
  },
  {
    "num": "12958",
    "name": "New Delhi Ahmedabad Raj.",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "19:55",
    "arr": "10:30",
    "ad": 1,
    "dur": "14h 35m",
    "dist": 935,
    "days": "MTW_FSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 5
  },
  {
    "num": "12985",
    "name": "Jaipur Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Jaipur Jn",
    "tc": "JP",
    "dep": "18:25",
    "arr": "22:55",
    "ad": 0,
    "dur": "04h 30m",
    "dist": 311,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NWR",
    "stops": 2
  },
  {
    "num": "12986",
    "name": "New Delhi Jaipur Raj.",
    "fn": "Jaipur Jn",
    "fc": "JP",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "05:50",
    "arr": "10:05",
    "ad": 0,
    "dur": "04h 15m",
    "dist": 311,
    "days": "MTWTFSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NWR",
    "stops": 2
  },
  {
    "num": "22691",
    "name": "KSR Bengaluru Raj. (Dup.)",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "20:00",
    "arr": "07:55",
    "ad": 2,
    "dur": "35h 55m",
    "dist": 2444,
    "days": "M_W_FS_",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NR",
    "stops": 7
  },
  {
    "num": "22692",
    "name": "NZM Bengaluru Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "08:00",
    "arr": "19:15",
    "ad": 1,
    "dur": "35h 15m",
    "dist": 2444,
    "days": "MT__FS_",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SWR",
    "stops": 7
  },
  {
    "num": "22811",
    "name": "Bhubaneswar Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Bhubaneswar",
    "tc": "BBS",
    "dep": "17:00",
    "arr": "09:05",
    "ad": 1,
    "dur": "16h 05m",
    "dist": 1781,
    "days": "MTW_F_S",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECoR",
    "stops": 6
  },
  {
    "num": "22812",
    "name": "New Delhi Bhubaneswar Raj.",
    "fn": "Bhubaneswar",
    "fc": "BBS",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "22:05",
    "arr": "14:10",
    "ad": 1,
    "dur": "16h 05m",
    "dist": 1781,
    "days": "MTW_F_S",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECoR",
    "stops": 6
  },
  {
    "num": "20807",
    "name": "Visakhapatnam Rajdhani",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Visakhapatnam",
    "tc": "VSKP",
    "dep": "19:05",
    "arr": "21:00",
    "ad": 1,
    "dur": "25h 55m",
    "dist": 1858,
    "days": "M_W_FS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECoR",
    "stops": 7
  },
  {
    "num": "20808",
    "name": "Vizag NZM Rajdhani",
    "fn": "Visakhapatnam",
    "fc": "VSKP",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "07:40",
    "arr": "08:05",
    "ad": 1,
    "dur": "24h 25m",
    "dist": 1858,
    "days": "_T__FSS",
    "type": "RAJ",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "ECoR",
    "stops": 7
  },
  {
    "num": "12001",
    "name": "Bhopal Shatabdi Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Bhopal Jn",
    "tc": "BPL",
    "dep": "06:00",
    "arr": "13:50",
    "ad": 0,
    "dur": "07h 50m",
    "dist": 704,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WCR",
    "stops": 5
  },
  {
    "num": "12002",
    "name": "Bhopal Shatabdi (Return)",
    "fn": "Bhopal Jn",
    "fc": "BPL",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:30",
    "arr": "22:25",
    "ad": 0,
    "dur": "07h 55m",
    "dist": 704,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WCR",
    "stops": 5
  },
  {
    "num": "12007",
    "name": "Chennai Shatabdi Express",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "Coimbatore Jn",
    "tc": "CBE",
    "dep": "06:00",
    "arr": "13:00",
    "ad": 0,
    "dur": "07h 00m",
    "dist": 496,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 5
  },
  {
    "num": "12011",
    "name": "Kalka Shatabdi Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Kalka",
    "tc": "KLK",
    "dep": "07:40",
    "arr": "11:40",
    "ad": 0,
    "dur": "04h 00m",
    "dist": 299,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 4
  },
  {
    "num": "12012",
    "name": "Kalka Shatabdi (Return)",
    "fn": "Kalka",
    "fc": "KLK",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "17:40",
    "arr": "21:40",
    "ad": 0,
    "dur": "04h 00m",
    "dist": 299,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 4
  },
  {
    "num": "12013",
    "name": "Amritsar Shatabdi",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "16:30",
    "arr": "23:30",
    "ad": 0,
    "dur": "07h 00m",
    "dist": 449,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12014",
    "name": "Amritsar Shatabdi (Return)",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "05:55",
    "arr": "13:15",
    "ad": 0,
    "dur": "07h 20m",
    "dist": 449,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12017",
    "name": "Dehradun Shatabdi",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Dehradun",
    "tc": "DDN",
    "dep": "06:45",
    "arr": "12:45",
    "ad": 0,
    "dur": "06h 00m",
    "dist": 302,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 4
  },
  {
    "num": "12025",
    "name": "Pune Shatabdi Express",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Pune Jn",
    "tc": "PUNE",
    "dep": "05:10",
    "arr": "07:25",
    "ad": 0,
    "dur": "02h 15m",
    "dist": 192,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 1
  },
  {
    "num": "12029",
    "name": "Swarna Shatabdi",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "07:20",
    "arr": "14:20",
    "ad": 0,
    "dur": "07h 00m",
    "dist": 449,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12049",
    "name": "Gatimaan Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Agra Fort",
    "tc": "AF",
    "dep": "08:10",
    "arr": "09:50",
    "ad": 0,
    "dur": "01h 40m",
    "dist": 188,
    "days": "MTWT_SS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NCR",
    "stops": 0
  },
  {
    "num": "12050",
    "name": "Gatimaan Express (Return)",
    "fn": "Agra Fort",
    "fc": "AF",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "17:30",
    "arr": "19:10",
    "ad": 0,
    "dur": "01h 40m",
    "dist": 188,
    "days": "MTWT_SS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NCR",
    "stops": 0
  },
  {
    "num": "12009",
    "name": "Mumbai Shatabdi",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "06:25",
    "arr": "13:05",
    "ad": 0,
    "dur": "06h 40m",
    "dist": 492,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "12010",
    "name": "Ahmedabad Mumbai Shatabdi",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "14:35",
    "arr": "21:10",
    "ad": 0,
    "dur": "06h 35m",
    "dist": 492,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "20501",
    "name": "New Delhi - SMVD Katra Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "SMVD Katra",
    "tc": "SVDK",
    "dep": "06:00",
    "arr": "14:30",
    "ad": 0,
    "dur": "08h 30m",
    "dist": 655,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "20502",
    "name": "SMVD Katra - New Delhi Vande Bharat",
    "fn": "SMVD Katra",
    "fc": "SVDK",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "15:55",
    "arr": "23:30",
    "ad": 0,
    "dur": "07h 35m",
    "dist": 655,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22439",
    "name": "New Delhi - Varanasi Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Varanasi Jn",
    "tc": "BSB",
    "dep": "06:00",
    "arr": "14:00",
    "ad": 0,
    "dur": "08h 00m",
    "dist": 820,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22440",
    "name": "Varanasi - New Delhi Vande Bharat",
    "fn": "Varanasi Jn",
    "fc": "BSB",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "15:00",
    "arr": "23:00",
    "ad": 0,
    "dur": "08h 00m",
    "dist": 820,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22435",
    "name": "New Delhi - Amritsar Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "08:00",
    "arr": "13:35",
    "ad": 0,
    "dur": "05h 35m",
    "dist": 449,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "22436",
    "name": "Amritsar - New Delhi Vande Bharat",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "14:55",
    "arr": "20:30",
    "ad": 0,
    "dur": "05h 35m",
    "dist": 449,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "20627",
    "name": "Bengaluru - Dharwad Vande Bharat",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Hubballi Jn",
    "tc": "UBL",
    "dep": "05:30",
    "arr": "11:00",
    "ad": 0,
    "dur": "05h 30m",
    "dist": 370,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SWR",
    "stops": 4
  },
  {
    "num": "20628",
    "name": "Dharwad - Bengaluru Vande Bharat",
    "fn": "Hubballi Jn",
    "fc": "UBL",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "12:00",
    "arr": "17:30",
    "ad": 0,
    "dur": "05h 30m",
    "dist": 370,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SWR",
    "stops": 4
  },
  {
    "num": "20652",
    "name": "Chennai - KSR Bengaluru Vande Bharat",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "05:50",
    "arr": "11:00",
    "ad": 0,
    "dur": "05h 10m",
    "dist": 360,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 3
  },
  {
    "num": "20801",
    "name": "Visakhapatnam - Secunderabad Vande Bharat",
    "fn": "Visakhapatnam",
    "fc": "VSKP",
    "tn": "Secunderabad",
    "tc": "SC",
    "dep": "05:45",
    "arr": "13:30",
    "ad": 0,
    "dur": "07h 45m",
    "dist": 698,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SCR",
    "stops": 5
  },
  {
    "num": "22121",
    "name": "Mumbai CSMT - Pune Vande Bharat",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Pune Jn",
    "tc": "PUNE",
    "dep": "06:00",
    "arr": "08:30",
    "ad": 0,
    "dur": "02h 30m",
    "dist": 192,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 1
  },
  {
    "num": "20905",
    "name": "Ahmedabad - Mumbai Central Vande Bharat",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "06:00",
    "arr": "11:00",
    "ad": 0,
    "dur": "05h 00m",
    "dist": 492,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "22549",
    "name": "Patna - New Delhi Vande Bharat",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "06:00",
    "arr": "14:00",
    "ad": 0,
    "dur": "08h 00m",
    "dist": 998,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECR",
    "stops": 4
  },
  {
    "num": "20653",
    "name": "Coimbatore - KSR Bengaluru Vande Bharat",
    "fn": "Coimbatore Jn",
    "fc": "CBE",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "06:00",
    "arr": "11:55",
    "ad": 0,
    "dur": "05h 55m",
    "dist": 370,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 3
  },
  {
    "num": "22413",
    "name": "Gorakhpur - Lucknow Vande Bharat",
    "fn": "Gorakhpur Jn",
    "fc": "GKP",
    "tn": "Lucknow Charbagh",
    "tc": "LKO",
    "dep": "06:00",
    "arr": "09:15",
    "ad": 0,
    "dur": "03h 15m",
    "dist": 272,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NER",
    "stops": 2
  },
  {
    "num": "12259",
    "name": "Sealdah Duronto Express",
    "fn": "Sealdah",
    "fc": "SDAH",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "20:00",
    "arr": "12:30",
    "ad": 1,
    "dur": "16h 30m",
    "dist": 1453,
    "days": "M_W_F__",
    "type": "DUR",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 2
  },
  {
    "num": "12260",
    "name": "New Delhi Sealdah Duronto",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Sealdah",
    "tc": "SDAH",
    "dep": "23:55",
    "arr": "16:40",
    "ad": 1,
    "dur": "16h 45m",
    "dist": 1453,
    "days": "_T__FSS",
    "type": "DUR",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 2
  },
  {
    "num": "12285",
    "name": "Secunderabad Duronto",
    "fn": "Secunderabad",
    "fc": "SC",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "18:00",
    "arr": "14:30",
    "ad": 1,
    "dur": "20h 30m",
    "dist": 1680,
    "days": "__W___S",
    "type": "DUR",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SCR",
    "stops": 2
  },
  {
    "num": "12213",
    "name": "Yesvantpur Duronto",
    "fn": "Yeshvantpur Jn",
    "fc": "YPR",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "19:30",
    "arr": "19:20",
    "ad": 2,
    "dur": "47h 50m",
    "dist": 2444,
    "days": "_T___S_",
    "type": "DUR",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 3
  },
  {
    "num": "22119",
    "name": "CST Mumbai Karmali Tejas",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Karmali",
    "tc": "KRMI",
    "dep": "05:25",
    "arr": "11:30",
    "ad": 0,
    "dur": "06h 05m",
    "dist": 551,
    "days": "MTWTFSS",
    "type": "TEJ",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 3
  },
  {
    "num": "22120",
    "name": "Karmali Mumbai Tejas",
    "fn": "Karmali",
    "fc": "KRMI",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "16:30",
    "arr": "22:45",
    "ad": 0,
    "dur": "06h 15m",
    "dist": 551,
    "days": "MTWTFSS",
    "type": "TEJ",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 3
  },
  {
    "num": "82501",
    "name": "Lucknow Delhi Tejas",
    "fn": "Lucknow Charbagh",
    "fc": "LKO",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "06:10",
    "arr": "12:25",
    "ad": 0,
    "dur": "06h 15m",
    "dist": 512,
    "days": "MTWTFSS",
    "type": "TEJ",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "82502",
    "name": "Delhi Lucknow Tejas",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Lucknow Charbagh",
    "tc": "LKO",
    "dep": "15:35",
    "arr": "21:50",
    "ad": 0,
    "dur": "06h 15m",
    "dist": 512,
    "days": "MTWTFSS",
    "type": "TEJ",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "12303",
    "name": "Poorva Express (via Patna)",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "21:10",
    "arr": "21:40",
    "ad": 1,
    "dur": "24h 30m",
    "dist": 1532,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 10
  },
  {
    "num": "12311",
    "name": "Kalka Mail",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Kalka",
    "tc": "KLK",
    "dep": "19:45",
    "arr": "09:30",
    "ad": 2,
    "dur": "37h 45m",
    "dist": 1893,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 18
  },
  {
    "num": "12621",
    "name": "Tamil Nadu Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "22:30",
    "arr": "07:00",
    "ad": 2,
    "dur": "32h 30m",
    "dist": 2183,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12622",
    "name": "Tamil Nadu Exp. (Return)",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "22:00",
    "arr": "06:50",
    "ad": 2,
    "dur": "32h 50m",
    "dist": 2183,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12625",
    "name": "Kerala Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "11:05",
    "arr": "05:25",
    "ad": 2,
    "dur": "42h 20m",
    "dist": 3049,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 15
  },
  {
    "num": "12626",
    "name": "Kerala Express (Return)",
    "fn": "Trivandrum Central",
    "fc": "TVC",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "11:00",
    "arr": "06:35",
    "ad": 2,
    "dur": "43h 35m",
    "dist": 3049,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 15
  },
  {
    "num": "12627",
    "name": "Karnataka Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "22:30",
    "arr": "06:30",
    "ad": 2,
    "dur": "31h 00m",
    "dist": 2444,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 12
  },
  {
    "num": "12628",
    "name": "Karnataka Express (Return)",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "20:15",
    "arr": "05:30",
    "ad": 2,
    "dur": "33h 15m",
    "dist": 2444,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 12
  },
  {
    "num": "12649",
    "name": "Karnataka Sampark Kranti",
    "fn": "Yeshvantpur Jn",
    "fc": "YPR",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "13:50",
    "arr": "08:10",
    "ad": 2,
    "dur": "42h 20m",
    "dist": 2614,
    "days": "MT_TF_S",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 18
  },
  {
    "num": "12809",
    "name": "Mumbai Mail",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "19:50",
    "arr": "05:15",
    "ad": 2,
    "dur": "33h 25m",
    "dist": 1968,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "CR",
    "stops": 20
  },
  {
    "num": "12810",
    "name": "Howrah Mail",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "17:55",
    "arr": "02:55",
    "ad": 2,
    "dur": "33h 00m",
    "dist": 1968,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "CR",
    "stops": 20
  },
  {
    "num": "12723",
    "name": "Telangana Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Hyderabad Deccan",
    "tc": "HYB",
    "dep": "06:25",
    "arr": "12:00",
    "ad": 1,
    "dur": "29h 35m",
    "dist": 1756,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SCR",
    "stops": 12
  },
  {
    "num": "12724",
    "name": "Telangana Express (Return)",
    "fn": "Hyderabad Deccan",
    "fc": "HYB",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "15:00",
    "arr": "19:35",
    "ad": 1,
    "dur": "28h 35m",
    "dist": 1756,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SCR",
    "stops": 12
  },
  {
    "num": "12721",
    "name": "Dakshin Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Hyderabad Deccan",
    "tc": "HYB",
    "dep": "23:05",
    "arr": "14:00",
    "ad": 2,
    "dur": "38h 55m",
    "dist": 1745,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SCR",
    "stops": 12
  },
  {
    "num": "12841",
    "name": "Coromandel Express",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "14:25",
    "arr": "18:25",
    "ad": 1,
    "dur": "28h 00m",
    "dist": 1660,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12842",
    "name": "Coromandel Exp. (Return)",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "08:45",
    "arr": "13:40",
    "ad": 1,
    "dur": "28h 55m",
    "dist": 1660,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12801",
    "name": "Purushottam Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Puri",
    "tc": "PURI",
    "dep": "22:35",
    "arr": "05:30",
    "ad": 2,
    "dur": "30h 55m",
    "dist": 1752,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECoR",
    "stops": 10
  },
  {
    "num": "12875",
    "name": "Neelachal Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Puri",
    "tc": "PURI",
    "dep": "09:30",
    "arr": "12:55",
    "ad": 1,
    "dur": "27h 25m",
    "dist": 1752,
    "days": "MT_TF_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECoR",
    "stops": 8
  },
  {
    "num": "12903",
    "name": "Golden Temple Mail",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "17:30",
    "arr": "08:15",
    "ad": 2,
    "dur": "38h 45m",
    "dist": 2299,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 22
  },
  {
    "num": "12904",
    "name": "Golden Temple Mail (Ret.)",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "20:10",
    "arr": "07:55",
    "ad": 2,
    "dur": "35h 45m",
    "dist": 2299,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 22
  },
  {
    "num": "12925",
    "name": "Paschim Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Bandra Terminus",
    "tc": "BDTS",
    "dep": "12:40",
    "arr": "09:50",
    "ad": 2,
    "dur": "45h 10m",
    "dist": 2271,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 26
  },
  {
    "num": "12926",
    "name": "Paschim Express (Return)",
    "fn": "Bandra Terminus",
    "fc": "BDTS",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "16:35",
    "arr": "14:45",
    "ad": 1,
    "dur": "22h 10m",
    "dist": 1385,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 26
  },
  {
    "num": "12229",
    "name": "Lucknow Mail",
    "fn": "Lucknow Charbagh",
    "fc": "LKO",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "22:10",
    "arr": "06:30",
    "ad": 1,
    "dur": "08h 20m",
    "dist": 512,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12230",
    "name": "Lucknow Mail (Return)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Lucknow Charbagh",
    "tc": "LKO",
    "dep": "22:00",
    "arr": "06:00",
    "ad": 1,
    "dur": "08h 00m",
    "dist": 512,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "12505",
    "name": "North East Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Guwahati",
    "tc": "GHY",
    "dep": "08:45",
    "arr": "04:00",
    "ad": 2,
    "dur": "43h 15m",
    "dist": 2498,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NFR",
    "stops": 18
  },
  {
    "num": "12506",
    "name": "North East Exp. (Return)",
    "fn": "Guwahati",
    "fc": "GHY",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "22:30",
    "arr": "20:55",
    "ad": 2,
    "dur": "46h 25m",
    "dist": 2498,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NFR",
    "stops": 18
  },
  {
    "num": "12357",
    "name": "Durgiana Express",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "23:15",
    "arr": "08:30",
    "ad": 2,
    "dur": "33h 15m",
    "dist": 1870,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NR",
    "stops": 14
  },
  {
    "num": "12331",
    "name": "Himgiri Express",
    "fn": "Jammu Tawi",
    "fc": "JAT",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "23:20",
    "arr": "11:30",
    "ad": 2,
    "dur": "36h 10m",
    "dist": 2022,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 16
  },
  {
    "num": "12417",
    "name": "Prayagraj Express",
    "fn": "Prayagraj Jn",
    "fc": "ALD",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "18:10",
    "arr": "06:20",
    "ad": 1,
    "dur": "12h 10m",
    "dist": 634,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 6
  },
  {
    "num": "12418",
    "name": "Prayagraj Exp. (Return)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Prayagraj Jn",
    "tc": "ALD",
    "dep": "17:55",
    "arr": "04:45",
    "ad": 1,
    "dur": "10h 50m",
    "dist": 634,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 6
  },
  {
    "num": "14033",
    "name": "Jammu Mail",
    "fn": "Jammu Tawi",
    "fc": "JAT",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "17:15",
    "arr": "08:15",
    "ad": 1,
    "dur": "15h 00m",
    "dist": 591,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 8
  },
  {
    "num": "12391",
    "name": "Shramjivi Express",
    "fn": "Rajendra Nagar Bihar",
    "fc": "RJPB",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "08:30",
    "arr": "22:50",
    "ad": 0,
    "dur": "14h 20m",
    "dist": 1005,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 12
  },
  {
    "num": "15905",
    "name": "Vivek Express (World Longest)",
    "fn": "Dibrugarh",
    "fc": "DBRG",
    "tn": "Kanyakumari",
    "tc": "CAPE",
    "dep": "11:00",
    "arr": "00:30",
    "ad": 5,
    "dur": "85h 30m",
    "dist": 4273,
    "days": "_T_____",
    "type": "SF",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "SR",
    "stops": 57
  },
  {
    "num": "22415",
    "name": "AP AC Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Visakhapatnam",
    "tc": "VSKP",
    "dep": "06:05",
    "arr": "07:35",
    "ad": 1,
    "dur": "25h 30m",
    "dist": 1858,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "SCR",
    "stops": 9
  },
  {
    "num": "12701",
    "name": "Hussain Sagar Express",
    "fn": "Secunderabad",
    "fc": "SC",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "18:00",
    "arr": "07:30",
    "ad": 1,
    "dur": "13h 30m",
    "dist": 794,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12409",
    "name": "Gondwana Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Dibrugarh",
    "tc": "DBRG",
    "dep": "16:30",
    "arr": "10:20",
    "ad": 3,
    "dur": "65h 50m",
    "dist": 2965,
    "days": "__W____",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NFR",
    "stops": 22
  },
  {
    "num": "16318",
    "name": "Himsagar Express",
    "fn": "Jammu Tawi",
    "fc": "JAT",
    "tn": "Kanyakumari",
    "tc": "CAPE",
    "dep": "12:20",
    "arr": "23:45",
    "ad": 3,
    "dur": "83h 25m",
    "dist": 3745,
    "days": "____F__",
    "type": "EXP",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "SR",
    "stops": 65
  },
  {
    "num": "12369",
    "name": "Kumbha Express",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Prayagraj Jn",
    "tc": "ALD",
    "dep": "15:00",
    "arr": "14:40",
    "ad": 1,
    "dur": "23h 40m",
    "dist": 999,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NCR",
    "stops": 10
  },
  {
    "num": "12553",
    "name": "Vaishali Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Bhagalpur Jn",
    "tc": "BGP",
    "dep": "21:40",
    "arr": "01:45",
    "ad": 2,
    "dur": "28h 05m",
    "dist": 1536,
    "days": "MT_TF_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 14
  },
  {
    "num": "12853",
    "name": "Amarkantak Express",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "23:20",
    "arr": "12:15",
    "ad": 2,
    "dur": "36h 55m",
    "dist": 2012,
    "days": "MTW_FS_",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 18
  },
  {
    "num": "11019",
    "name": "Konark Express",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Bhubaneswar",
    "tc": "BBS",
    "dep": "11:05",
    "arr": "15:25",
    "ad": 1,
    "dur": "28h 20m",
    "dist": 1752,
    "days": "MTWTFSS",
    "type": "EXP",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECoR",
    "stops": 16
  },
  {
    "num": "12217",
    "name": "Chandigarh Intercity",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Chandigarh",
    "tc": "CDG",
    "dep": "08:30",
    "arr": "11:15",
    "ad": 0,
    "dur": "02h 45m",
    "dist": 248,
    "days": "MTWTFSS",
    "type": "ICE",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "NR",
    "stops": 2
  },
  {
    "num": "12651",
    "name": "Sampark Kranti Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "22:35",
    "arr": "08:30",
    "ad": 2,
    "dur": "33h 55m",
    "dist": 2187,
    "days": "MT_TF_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 10
  },
  {
    "num": "12633",
    "name": "Kanyakumari Express",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Kanyakumari",
    "tc": "CAPE",
    "dep": "18:30",
    "arr": "12:05",
    "ad": 2,
    "dur": "41h 35m",
    "dist": 3178,
    "days": "_T__F__",
    "type": "SF",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "SR",
    "stops": 20
  },
  {
    "num": "12237",
    "name": "Begampura Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Sealdah",
    "tc": "SDAH",
    "dep": "16:00",
    "arr": "05:30",
    "ad": 2,
    "dur": "37h 30m",
    "dist": 1802,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 14
  },
  {
    "num": "12571",
    "name": "Gorakhpur Anand Vihar SF",
    "fn": "Gorakhpur Jn",
    "fc": "GKP",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "17:10",
    "arr": "06:30",
    "ad": 1,
    "dur": "13h 20m",
    "dist": 761,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NER",
    "stops": 8
  },
  {
    "num": "12869",
    "name": "Ispat Express",
    "fn": "Visakhapatnam",
    "fc": "VSKP",
    "tn": "Nagpur Jn",
    "tc": "NGP",
    "dep": "22:45",
    "arr": "18:30",
    "ad": 1,
    "dur": "19h 45m",
    "dist": 930,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SECR",
    "stops": 10
  },
  {
    "num": "12159",
    "name": "Patna Intercity Express",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "Ranchi",
    "tc": "RNC",
    "dep": "06:10",
    "arr": "13:20",
    "ad": 0,
    "dur": "07h 10m",
    "dist": 330,
    "days": "MTWTFSS",
    "type": "ICE",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "ECR",
    "stops": 6
  },
  {
    "num": "12589",
    "name": "Gorakhpur Secunderabad",
    "fn": "Gorakhpur Jn",
    "fc": "GKP",
    "tn": "Secunderabad",
    "tc": "SC",
    "dep": "17:00",
    "arr": "03:00",
    "ad": 2,
    "dur": "34h 00m",
    "dist": 1854,
    "days": "_T__F__",
    "type": "SF",
    "cls": [
      "3A",
      "SL"
    ],
    "zone": "SCR",
    "stops": 15
  },
  {
    "num": "14257",
    "name": "Kashi Vishwanath Express",
    "fn": "Lucknow Charbagh",
    "fc": "LKO",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "17:00",
    "arr": "08:15",
    "ad": 1,
    "dur": "15h 15m",
    "dist": 512,
    "days": "MTWTFSS",
    "type": "EXP",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 10
  },
  {
    "num": "12321",
    "name": "Mumbai Howrah Mail",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "22:05",
    "arr": "05:55",
    "ad": 2,
    "dur": "31h 50m",
    "dist": 1968,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S",
      "GN"
    ],
    "zone": "CR",
    "stops": 22
  },
  {
    "num": "12381",
    "name": "Poorabha Express",
    "fn": "Sealdah",
    "fc": "SDAH",
    "tn": "Lucknow Ne",
    "tc": "LJN",
    "dep": "18:55",
    "arr": "16:30",
    "ad": 1,
    "dur": "21h 35m",
    "dist": 1038,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NER",
    "stops": 12
  },
  {
    "num": "13005",
    "name": "Amritsar Mail",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "07:00",
    "arr": "15:45",
    "ad": 1,
    "dur": "32h 45m",
    "dist": 1870,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "NR",
    "stops": 20
  },
  {
    "num": "12327",
    "name": "Upasana Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "14:15",
    "arr": "20:00",
    "ad": 3,
    "dur": "77h 45m",
    "dist": 3810,
    "days": "_T_____",
    "type": "EXP",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "SR",
    "stops": 35
  },
  {
    "num": "12335",
    "name": "Bhagalpur Exp.",
    "fn": "Bhagalpur Jn",
    "fc": "BGP",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "07:20",
    "arr": "15:00",
    "ad": 0,
    "dur": "07h 40m",
    "dist": 420,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 8
  },
  {
    "num": "12307",
    "name": "Jodhpur Howrah Express",
    "fn": "Jodhpur Jn",
    "fc": "JU",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "19:45",
    "arr": "07:10",
    "ad": 2,
    "dur": "35h 25m",
    "dist": 1940,
    "days": "_T__F__",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ER",
    "stops": 16
  },
  {
    "num": "12489",
    "name": "Bikaner SF Express",
    "fn": "Bikaner Jn",
    "fc": "BKN",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "20:00",
    "arr": "22:00",
    "ad": 1,
    "dur": "26h 00m",
    "dist": 1282,
    "days": "___TF_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 14
  },
  {
    "num": "16311",
    "name": "Bikaner Express",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Bikaner Jn",
    "tc": "BKN",
    "dep": "08:00",
    "arr": "10:15",
    "ad": 1,
    "dur": "26h 15m",
    "dist": 1255,
    "days": "M_W_F__",
    "type": "EXP",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NWR",
    "stops": 18
  },
  {
    "num": "12909",
    "name": "Bandra Garib Rath",
    "fn": "Bandra Terminus",
    "fc": "BDTS",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "06:00",
    "arr": "06:15",
    "ad": 1,
    "dur": "24h 15m",
    "dist": 1420,
    "days": "M__T__S",
    "type": "GR",
    "cls": [
      "3A"
    ],
    "zone": "WR",
    "stops": 5
  },
  {
    "num": "12979",
    "name": "Jaipur Superfast",
    "fn": "Jaipur Jn",
    "fc": "JP",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "13:45",
    "arr": "09:05",
    "ad": 1,
    "dur": "19h 20m",
    "dist": 1135,
    "days": "MT_TF_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 12
  },
  {
    "num": "12101",
    "name": "Jnaneswari Super Deluxe",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Pune Jn",
    "tc": "PUNE",
    "dep": "23:10",
    "arr": "14:50",
    "ad": 2,
    "dur": "39h 40m",
    "dist": 1937,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 12
  },
  {
    "num": "12411",
    "name": "Gondwana SF Express",
    "fn": "Indore Jn",
    "fc": "INDB",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "10:35",
    "arr": "10:40",
    "ad": 1,
    "dur": "24h 05m",
    "dist": 1147,
    "days": "M__T__S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NCR",
    "stops": 10
  },
  {
    "num": "22631",
    "name": "Anuvrat Express",
    "fn": "Amritsar Jn",
    "fc": "ASR",
    "tn": "Nagpur Jn",
    "tc": "NGP",
    "dep": "08:00",
    "arr": "13:30",
    "ad": 1,
    "dur": "29h 30m",
    "dist": 1617,
    "days": "__W_F__",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 14
  },
  {
    "num": "12177",
    "name": "Chambal Express",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "Agra Cantt",
    "tc": "AGC",
    "dep": "23:00",
    "arr": "13:40",
    "ad": 1,
    "dur": "14h 40m",
    "dist": 844,
    "days": "MTWTFSS",
    "type": "EXP",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 12
  },
  {
    "num": "19407",
    "name": "ADI Varanasi Express",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "Varanasi Jn",
    "tc": "BSB",
    "dep": "22:30",
    "arr": "14:55",
    "ad": 2,
    "dur": "40h 25m",
    "dist": 1648,
    "days": "M_W____",
    "type": "EXP",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 18
  },
  {
    "num": "12907",
    "name": "Howrah Gujarat Mail",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "18:00",
    "arr": "09:05",
    "ad": 1,
    "dur": "15h 05m",
    "dist": 492,
    "days": "MTWTFSS",
    "type": "MAIL",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 8
  },
  {
    "num": "12937",
    "name": "Garbha Express",
    "fn": "Ahmedabad Jn",
    "fc": "ADI",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "17:00",
    "arr": "06:00",
    "ad": 2,
    "dur": "37h 00m",
    "dist": 1908,
    "days": "M____S_",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECR",
    "stops": 14
  },
  {
    "num": "15159",
    "name": "Sarnath Express",
    "fn": "Chhapra Jn",
    "fc": "CPR",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "07:15",
    "arr": "06:00",
    "ad": 2,
    "dur": "46h 45m",
    "dist": 2120,
    "days": "M_W____",
    "type": "EXP",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "WR",
    "stops": 22
  },
  {
    "num": "12483",
    "name": "Kochuveli Amritsar Express",
    "fn": "Kochuveli",
    "fc": "KCVL",
    "tn": "Amritsar Jn",
    "tc": "ASR",
    "dep": "13:00",
    "arr": "23:15",
    "ad": 2,
    "dur": "58h 15m",
    "dist": 3368,
    "days": "_T____S",
    "type": "SF",
    "cls": [
      "3A",
      "SL"
    ],
    "zone": "NR",
    "stops": 30
  },
  {
    "num": "16527",
    "name": "Kannur Express",
    "fn": "Yeshvantpur Jn",
    "fc": "YPR",
    "tn": "Kannur",
    "tc": "CAN",
    "dep": "21:40",
    "arr": "08:15",
    "ad": 1,
    "dur": "10h 35m",
    "dist": 586,
    "days": "MTWTFSS",
    "type": "EXP",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "12615",
    "name": "Grand Trunk Express",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "19:20",
    "arr": "07:40",
    "ad": 2,
    "dur": "36h 20m",
    "dist": 2183,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NR",
    "stops": 15
  },
  {
    "num": "12616",
    "name": "Grand Trunk Express (Ret.)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "07:55",
    "arr": "21:40",
    "ad": 1,
    "dur": "37h 45m",
    "dist": 2183,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 15
  },
  {
    "num": "12687",
    "name": "Dehradun Express",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "Dehradun",
    "tc": "DDN",
    "dep": "20:35",
    "arr": "05:15",
    "ad": 2,
    "dur": "56h 40m",
    "dist": 2757,
    "days": "_T_____",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NR",
    "stops": 20
  },
  {
    "num": "12239",
    "name": "Mumbai NZM SF Express",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "16:05",
    "arr": "11:45",
    "ad": 1,
    "dur": "19h 40m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 8
  },
  {
    "num": "12240",
    "name": "NZM Mumbai SF Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "14:00",
    "arr": "09:40",
    "ad": 1,
    "dur": "19h 40m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 8
  },
  {
    "num": "12647",
    "name": "Kongu Express",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Coimbatore Jn",
    "tc": "CBE",
    "dep": "21:30",
    "arr": "05:00",
    "ad": 2,
    "dur": "31h 30m",
    "dist": 2236,
    "days": "__W_F_S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SR",
    "stops": 12
  },
  {
    "num": "12295",
    "name": "Sanghamitra Express",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "22:30",
    "arr": "16:00",
    "ad": 2,
    "dur": "41h 30m",
    "dist": 2117,
    "days": "M__T__S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 16
  },
  {
    "num": "12296",
    "name": "Sanghamitra Express (Ret.)",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "09:15",
    "arr": "05:30",
    "ad": 2,
    "dur": "44h 15m",
    "dist": 2117,
    "days": "__W_F__",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 16
  },
  {
    "num": "13351",
    "name": "Dhanbad Alappuzha Exp.",
    "fn": "Dhanbad Jn",
    "fc": "DHN",
    "tn": "Alappuzha",
    "tc": "ALLP",
    "dep": "23:30",
    "arr": "07:00",
    "ad": 3,
    "dur": "55h 30m",
    "dist": 2651,
    "days": "__W____",
    "type": "EXP",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "SR",
    "stops": 28
  },
  {
    "num": "12355",
    "name": "Archana Express",
    "fn": "Rajendra Nagar Bihar",
    "fc": "RJPB",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "18:30",
    "arr": "03:10",
    "ad": 2,
    "dur": "32h 40m",
    "dist": 1967,
    "days": "M_W_F__",
    "type": "EXP",
    "cls": [
      "3A",
      "SL",
      "2S"
    ],
    "zone": "CR",
    "stops": 18
  },
  {
    "num": "12815",
    "name": "Nanda Devi Express",
    "fn": "Kochuveli",
    "fc": "KCVL",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "18:30",
    "arr": "13:00",
    "ad": 2,
    "dur": "42h 30m",
    "dist": 3054,
    "days": "M_____S",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "NR",
    "stops": 22
  },
  {
    "num": "20651",
    "name": "KSR Bengaluru - Chennai Vande Bharat",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "14:20",
    "arr": "19:30",
    "ad": 0,
    "dur": "05h 10m",
    "dist": 360,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 3
  },
  {
    "num": "20802",
    "name": "Secunderabad - Visakhapatnam Vande Bharat",
    "fn": "Secunderabad",
    "fc": "SC",
    "tn": "Visakhapatnam",
    "tc": "VSKP",
    "dep": "15:00",
    "arr": "23:30",
    "ad": 0,
    "dur": "08h 30m",
    "dist": 698,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SCR",
    "stops": 5
  },
  {
    "num": "22122",
    "name": "Pune - Mumbai CSMT Vande Bharat",
    "fn": "Pune Jn",
    "fc": "PUNE",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "18:25",
    "arr": "20:55",
    "ad": 0,
    "dur": "02h 30m",
    "dist": 192,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 1
  },
  {
    "num": "20906",
    "name": "Mumbai Central - Ahmedabad Vande Bharat",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Ahmedabad Jn",
    "tc": "ADI",
    "dep": "15:55",
    "arr": "21:25",
    "ad": 0,
    "dur": "05h 30m",
    "dist": 492,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "22550",
    "name": "New Delhi - Patna Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "15:00",
    "arr": "23:00",
    "ad": 0,
    "dur": "08h 00m",
    "dist": 998,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECR",
    "stops": 4
  },
  {
    "num": "20654",
    "name": "KSR Bengaluru - Coimbatore Vande Bharat",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Coimbatore Jn",
    "tc": "CBE",
    "dep": "13:40",
    "arr": "19:40",
    "ad": 0,
    "dur": "06h 00m",
    "dist": 370,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 3
  },
  {
    "num": "22414",
    "name": "Lucknow - Gorakhpur Vande Bharat",
    "fn": "Lucknow Charbagh",
    "fc": "LKO",
    "tn": "Gorakhpur Jn",
    "tc": "GKP",
    "dep": "19:15",
    "arr": "22:30",
    "ad": 0,
    "dur": "03h 15m",
    "dist": 272,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NER",
    "stops": 2
  },
  {
    "num": "22451",
    "name": "New Delhi - Una Himachal Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Una Himachal",
    "tc": "UNAHP",
    "dep": "05:50",
    "arr": "10:30",
    "ad": 0,
    "dur": "04h 40m",
    "dist": 302,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "22452",
    "name": "Una Himachal - New Delhi Vande Bharat",
    "fn": "Una Himachal",
    "fc": "UNAHP",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "16:00",
    "arr": "21:00",
    "ad": 0,
    "dur": "05h 00m",
    "dist": 302,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 3
  },
  {
    "num": "20901",
    "name": "Mumbai CSMT - Sainagar Shirdi Vande Bharat",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Sainagar Shirdi",
    "tc": "SNSI",
    "dep": "06:05",
    "arr": "09:30",
    "ad": 0,
    "dur": "03h 25m",
    "dist": 296,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 2
  },
  {
    "num": "20902",
    "name": "Sainagar Shirdi - Mumbai CSMT Vande Bharat",
    "fn": "Sainagar Shirdi",
    "fc": "SNSI",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "17:00",
    "arr": "20:30",
    "ad": 0,
    "dur": "03h 30m",
    "dist": 296,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "CR",
    "stops": 2
  },
  {
    "num": "20631",
    "name": "Kasaragod - Trivandrum Vande Bharat",
    "fn": "Kasaragod",
    "fc": "KAUR",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "07:00",
    "arr": "15:05",
    "ad": 0,
    "dur": "08h 05m",
    "dist": 587,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "20632",
    "name": "Trivandrum - Kasaragod Vande Bharat",
    "fn": "Trivandrum Central",
    "fc": "TVC",
    "tn": "Kasaragod",
    "tc": "KAUR",
    "dep": "16:05",
    "arr": "23:55",
    "ad": 0,
    "dur": "07h 50m",
    "dist": 587,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SR",
    "stops": 8
  },
  {
    "num": "22301",
    "name": "Howrah - New Jalpaiguri Vande Bharat",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "New Jalpaiguri",
    "tc": "NJP",
    "dep": "05:55",
    "arr": "13:25",
    "ad": 0,
    "dur": "07h 30m",
    "dist": 561,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ER",
    "stops": 3
  },
  {
    "num": "22302",
    "name": "New Jalpaiguri - Howrah Vande Bharat",
    "fn": "New Jalpaiguri",
    "fc": "NJP",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "15:00",
    "arr": "22:35",
    "ad": 0,
    "dur": "07h 35m",
    "dist": 561,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ER",
    "stops": 3
  },
  {
    "num": "22347",
    "name": "Howrah - Patna Vande Bharat",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "05:55",
    "arr": "12:30",
    "ad": 0,
    "dur": "06h 35m",
    "dist": 532,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ER",
    "stops": 5
  },
  {
    "num": "22348",
    "name": "Patna - Howrah Vande Bharat",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "14:00",
    "arr": "20:35",
    "ad": 0,
    "dur": "06h 35m",
    "dist": 532,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ER",
    "stops": 5
  },
  {
    "num": "22349",
    "name": "Patna - Ranchi Vande Bharat",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "Ranchi",
    "tc": "RNC",
    "dep": "07:00",
    "arr": "13:00",
    "ad": 0,
    "dur": "06h 00m",
    "dist": 379,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECR",
    "stops": 5
  },
  {
    "num": "22350",
    "name": "Ranchi - Patna Vande Bharat",
    "fn": "Ranchi",
    "fc": "RNC",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "16:15",
    "arr": "22:05",
    "ad": 0,
    "dur": "05h 50m",
    "dist": 379,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECR",
    "stops": 5
  },
  {
    "num": "22893",
    "name": "Rourkela - Howrah Vande Bharat",
    "fn": "Rourkela",
    "fc": "ROU",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "06:00",
    "arr": "10:30",
    "ad": 0,
    "dur": "04h 30m",
    "dist": 410,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SER",
    "stops": 4
  },
  {
    "num": "22894",
    "name": "Howrah - Rourkela Vande Bharat",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Rourkela",
    "tc": "ROU",
    "dep": "16:00",
    "arr": "20:30",
    "ad": 0,
    "dur": "04h 30m",
    "dist": 410,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SER",
    "stops": 4
  },
  {
    "num": "22869",
    "name": "Pune - Howrah Vande Bharat",
    "fn": "Pune Jn",
    "fc": "PUNE",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "05:00",
    "arr": "22:00",
    "ad": 1,
    "dur": "17h 00m",
    "dist": 1660,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SER",
    "stops": 7
  },
  {
    "num": "22870",
    "name": "Howrah - Pune Vande Bharat",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Pune Jn",
    "tc": "PUNE",
    "dep": "05:00",
    "arr": "21:30",
    "ad": 1,
    "dur": "16h 30m",
    "dist": 1660,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SER",
    "stops": 7
  },
  {
    "num": "22883",
    "name": "Puri - New Delhi Vande Bharat",
    "fn": "Puri",
    "fc": "PURI",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "06:00",
    "arr": "19:30",
    "ad": 1,
    "dur": "13h 30m",
    "dist": 1752,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECoR",
    "stops": 7
  },
  {
    "num": "22884",
    "name": "New Delhi - Puri Vande Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Puri",
    "tc": "PURI",
    "dep": "06:00",
    "arr": "19:30",
    "ad": 1,
    "dur": "13h 30m",
    "dist": 1752,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "ECoR",
    "stops": 7
  },
  {
    "num": "22475",
    "name": "Bikaner - Jaipur Vande Bharat",
    "fn": "Bikaner Jn",
    "fc": "BKN",
    "tn": "Jaipur Jn",
    "tc": "JP",
    "dep": "05:30",
    "arr": "10:30",
    "ad": 0,
    "dur": "05h 00m",
    "dist": 303,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NWR",
    "stops": 3
  },
  {
    "num": "22476",
    "name": "Jaipur - Bikaner Vande Bharat",
    "fn": "Jaipur Jn",
    "fc": "JP",
    "tn": "Bikaner Jn",
    "tc": "BKN",
    "dep": "15:00",
    "arr": "20:00",
    "ad": 0,
    "dur": "05h 00m",
    "dist": 303,
    "days": "MTWTFSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NWR",
    "stops": 3
  },
  {
    "num": "20701",
    "name": "Secunderabad - Tirupati Vande Bharat",
    "fn": "Secunderabad",
    "fc": "SC",
    "tn": "Tirupati",
    "tc": "TPTY",
    "dep": "06:00",
    "arr": "14:30",
    "ad": 0,
    "dur": "08h 30m",
    "dist": 661,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SCR",
    "stops": 5
  },
  {
    "num": "20702",
    "name": "Tirupati - Secunderabad Vande Bharat",
    "fn": "Tirupati",
    "fc": "TPTY",
    "tn": "Secunderabad",
    "tc": "SC",
    "dep": "15:15",
    "arr": "23:45",
    "ad": 0,
    "dur": "08h 30m",
    "dist": 661,
    "days": "MTWTF_S",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "SCR",
    "stops": 5
  },
  {
    "num": "22457",
    "name": "Anand Vihar - Dehradun Vande Bharat",
    "fn": "Anand Vihar Terminal",
    "fc": "ANVT",
    "tn": "Dehradun",
    "tc": "DDN",
    "dep": "17:50",
    "arr": "22:35",
    "ad": 0,
    "dur": "04h 45m",
    "dist": 304,
    "days": "MTW_FSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22458",
    "name": "Dehradun - Anand Vihar Vande Bharat",
    "fn": "Dehradun",
    "fc": "DDN",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "07:00",
    "arr": "11:45",
    "ad": 0,
    "dur": "04h 45m",
    "dist": 304,
    "days": "MTW_FSS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 5
  },
  {
    "num": "22469",
    "name": "Anand Vihar - Ayodhya Dham Vande Bharat",
    "fn": "Anand Vihar Terminal",
    "fc": "ANVT",
    "tn": "Ayodhya",
    "tc": "AY",
    "dep": "06:10",
    "arr": "14:30",
    "ad": 0,
    "dur": "08h 20m",
    "dist": 628,
    "days": "MTWT_SS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 4
  },
  {
    "num": "22470",
    "name": "Ayodhya Dham - Anand Vihar Vande Bharat",
    "fn": "Ayodhya",
    "fc": "AY",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "15:20",
    "arr": "23:40",
    "ad": 0,
    "dur": "08h 20m",
    "dist": 628,
    "days": "MTWT_SS",
    "type": "VB",
    "cls": [
      "EC",
      "CC"
    ],
    "zone": "NR",
    "stops": 4
  },
  {
    "num": "22501",
    "name": "Howrah - Kamakhya Vande Bharat Sleeper",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Guwahati",
    "tc": "GHY",
    "dep": "19:00",
    "arr": "07:30",
    "ad": 1,
    "dur": "12h 30m",
    "dist": 997,
    "days": "MTWTFSS",
    "type": "VB_SL",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NFR",
    "stops": 6
  },
  {
    "num": "22502",
    "name": "Kamakhya - Howrah Vande Bharat Sleeper",
    "fn": "Guwahati",
    "fc": "GHY",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "19:30",
    "arr": "08:00",
    "ad": 1,
    "dur": "12h 30m",
    "dist": 997,
    "days": "MTWTFSS",
    "type": "VB_SL",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "NFR",
    "stops": 6
  },
  {
    "num": "22401",
    "name": "New Delhi - Mumbai Central Vande Bharat Sleeper",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "19:15",
    "arr": "07:45",
    "ad": 1,
    "dur": "12h 30m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "VB_SL",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "22402",
    "name": "Mumbai Central - New Delhi Vande Bharat Sleeper",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "19:00",
    "arr": "07:30",
    "ad": 1,
    "dur": "12h 30m",
    "dist": 1384,
    "days": "MTWTFSS",
    "type": "VB_SL",
    "cls": [
      "1A",
      "2A",
      "3A"
    ],
    "zone": "WR",
    "stops": 4
  },
  {
    "num": "15557",
    "name": "Darbhanga - Anand Vihar Amrit Bharat",
    "fn": "Darbhanga Jn",
    "fc": "DBG",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "15:00",
    "arr": "12:35",
    "ad": 1,
    "dur": "21h 35m",
    "dist": 1137,
    "days": "_T__F__",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 18
  },
  {
    "num": "15558",
    "name": "Anand Vihar - Darbhanga Amrit Bharat",
    "fn": "Anand Vihar Terminal",
    "fc": "ANVT",
    "tn": "Darbhanga Jn",
    "tc": "DBG",
    "dep": "14:00",
    "arr": "11:50",
    "ad": 1,
    "dur": "21h 50m",
    "dist": 1137,
    "days": "_T___S_",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 18
  },
  {
    "num": "13433",
    "name": "Malda Town - SMVT Bengaluru Amrit Bharat",
    "fn": "Malda Town",
    "fc": "MLDT",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "08:50",
    "arr": "03:00",
    "ad": 2,
    "dur": "42h 10m",
    "dist": 2272,
    "days": "____F__",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 28
  },
  {
    "num": "13434",
    "name": "SMVT Bengaluru - Malda Town Amrit Bharat",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Malda Town",
    "tc": "MLDT",
    "dep": "13:50",
    "arr": "11:00",
    "ad": 2,
    "dur": "45h 10m",
    "dist": 2272,
    "days": "_T_____",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 28
  },
  {
    "num": "15561",
    "name": "Saharsa - Mumbai LTT Amrit Bharat",
    "fn": "Saharsa Jn",
    "fc": "SHC",
    "tn": "Lokmanya Tilak Terminus",
    "tc": "LTT",
    "dep": "11:15",
    "arr": "23:45",
    "ad": 1,
    "dur": "36h 30m",
    "dist": 1942,
    "days": "M_W_F__",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 22
  },
  {
    "num": "15562",
    "name": "Mumbai LTT - Saharsa Amrit Bharat",
    "fn": "Lokmanya Tilak Terminus",
    "fc": "LTT",
    "tn": "Saharsa Jn",
    "tc": "SHC",
    "dep": "11:30",
    "arr": "23:55",
    "ad": 1,
    "dur": "36h 25m",
    "dist": 1942,
    "days": "_T__F_S",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 22
  },
  {
    "num": "15563",
    "name": "Muzaffarpur - Anand Vihar Amrit Bharat",
    "fn": "Muzaffarpur Jn",
    "fc": "MFP",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "14:15",
    "arr": "09:30",
    "ad": 1,
    "dur": "19h 15m",
    "dist": 1060,
    "days": "MT_TF_S",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 15
  },
  {
    "num": "15564",
    "name": "Anand Vihar - Muzaffarpur Amrit Bharat",
    "fn": "Anand Vihar Terminal",
    "fc": "ANVT",
    "tn": "Muzaffarpur Jn",
    "tc": "MFP",
    "dep": "15:00",
    "arr": "10:15",
    "ad": 1,
    "dur": "19h 15m",
    "dist": 1060,
    "days": "M_W_FS_",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 15
  },
  {
    "num": "13435",
    "name": "Bhagalpur - Anand Vihar Amrit Bharat",
    "fn": "Bhagalpur Jn",
    "fc": "BGP",
    "tn": "Anand Vihar Terminal",
    "tc": "ANVT",
    "dep": "17:45",
    "arr": "14:20",
    "ad": 1,
    "dur": "20h 35m",
    "dist": 1210,
    "days": "M_W_F__",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 16
  },
  {
    "num": "13436",
    "name": "Anand Vihar - Bhagalpur Amrit Bharat",
    "fn": "Anand Vihar Terminal",
    "fc": "ANVT",
    "tn": "Bhagalpur Jn",
    "tc": "BGP",
    "dep": "18:30",
    "arr": "15:15",
    "ad": 1,
    "dur": "20h 45m",
    "dist": 1210,
    "days": "_T__F_S",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ER",
    "stops": 16
  },
  {
    "num": "15567",
    "name": "Patna - New Delhi Amrit Bharat",
    "fn": "Patna Jn",
    "fc": "PNBE",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "20:15",
    "arr": "10:45",
    "ad": 1,
    "dur": "14h 30m",
    "dist": 1005,
    "days": "MTWTFSS",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 12
  },
  {
    "num": "15568",
    "name": "New Delhi - Patna Amrit Bharat",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Patna Jn",
    "tc": "PNBE",
    "dep": "19:40",
    "arr": "10:20",
    "ad": 1,
    "dur": "14h 40m",
    "dist": 1005,
    "days": "MTWTFSS",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "ECR",
    "stops": 12
  },
  {
    "num": "15569",
    "name": "Gorakhpur - Mumbai CSMT Amrit Bharat",
    "fn": "Gorakhpur Jn",
    "fc": "GKP",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "14:00",
    "arr": "19:30",
    "ad": 1,
    "dur": "29h 30m",
    "dist": 1695,
    "days": "MT_TF_S",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "NER",
    "stops": 20
  },
  {
    "num": "15570",
    "name": "Mumbai CSMT - Gorakhpur Amrit Bharat",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Gorakhpur Jn",
    "tc": "GKP",
    "dep": "06:00",
    "arr": "11:45",
    "ad": 1,
    "dur": "29h 45m",
    "dist": 1695,
    "days": "M_W_F_S",
    "type": "AMRIT",
    "cls": [
      "SL",
      "2S"
    ],
    "zone": "NER",
    "stops": 20
  },
  {
    "num": "12055",
    "name": "New Delhi - Dehradun Jan Shatabdi",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Dehradun",
    "tc": "DDN",
    "dep": "15:20",
    "arr": "21:10",
    "ad": 0,
    "dur": "05h 50m",
    "dist": 305,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "NR",
    "stops": 6
  },
  {
    "num": "12056",
    "name": "Dehradun - New Delhi Jan Shatabdi",
    "fn": "Dehradun",
    "fc": "DDN",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "05:00",
    "arr": "11:05",
    "ad": 0,
    "dur": "06h 05m",
    "dist": 305,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "NR",
    "stops": 6
  },
  {
    "num": "12057",
    "name": "New Delhi - Daulatpur Chowk Jan Shatabdi",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Una Himachal",
    "tc": "UNAHP",
    "dep": "14:35",
    "arr": "21:25",
    "ad": 0,
    "dur": "06h 50m",
    "dist": 385,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "NR",
    "stops": 12
  },
  {
    "num": "12058",
    "name": "Daulatpur Chowk - New Delhi Jan Shatabdi",
    "fn": "Una Himachal",
    "fc": "UNAHP",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "04:45",
    "arr": "11:45",
    "ad": 0,
    "dur": "07h 00m",
    "dist": 385,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "NR",
    "stops": 12
  },
  {
    "num": "12071",
    "name": "Mumbai CSMT - Jalna Jan Shatabdi",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Jalna",
    "tc": "J",
    "dep": "12:10",
    "arr": "19:45",
    "ad": 0,
    "dur": "07h 35m",
    "dist": 434,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "CR",
    "stops": 7
  },
  {
    "num": "12072",
    "name": "Jalna - Mumbai CSMT Jan Shatabdi",
    "fn": "Jalna",
    "fc": "J",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "08:30",
    "arr": "16:20",
    "ad": 0,
    "dur": "07h 50m",
    "dist": 434,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "CR",
    "stops": 7
  },
  {
    "num": "12073",
    "name": "Howrah - Barbil Jan Shatabdi",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Barbil",
    "tc": "BBN",
    "dep": "06:20",
    "arr": "13:05",
    "ad": 0,
    "dur": "06h 45m",
    "dist": 399,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SER",
    "stops": 8
  },
  {
    "num": "12074",
    "name": "Barbil - Howrah Jan Shatabdi",
    "fn": "Barbil",
    "fc": "BBN",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "13:45",
    "arr": "20:50",
    "ad": 0,
    "dur": "07h 05m",
    "dist": 399,
    "days": "MTWTF_S",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SER",
    "stops": 8
  },
  {
    "num": "12075",
    "name": "Kozhikode - Trivandrum Jan Shatabdi",
    "fn": "Kozhikode",
    "fc": "CLT",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "13:45",
    "arr": "21:25",
    "ad": 0,
    "dur": "07h 40m",
    "dist": 399,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 10
  },
  {
    "num": "12076",
    "name": "Trivandrum - Kozhikode Jan Shatabdi",
    "fn": "Trivandrum Central",
    "fc": "TVC",
    "tn": "Kozhikode",
    "tc": "CLT",
    "dep": "05:55",
    "arr": "13:15",
    "ad": 0,
    "dur": "07h 20m",
    "dist": 399,
    "days": "MTWTFSS",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 10
  },
  {
    "num": "12081",
    "name": "Kannur - Trivandrum Jan Shatabdi",
    "fn": "Kannur",
    "fc": "CAN",
    "tn": "Trivandrum Central",
    "tc": "TVC",
    "dep": "04:50",
    "arr": "14:25",
    "ad": 0,
    "dur": "09h 35m",
    "dist": 500,
    "days": "M_WTF_S",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 14
  },
  {
    "num": "12082",
    "name": "Trivandrum - Kannur Jan Shatabdi",
    "fn": "Trivandrum Central",
    "fc": "TVC",
    "tn": "Kannur",
    "tc": "CAN",
    "dep": "14:50",
    "arr": "00:25",
    "ad": 1,
    "dur": "09h 35m",
    "dist": 500,
    "days": "M_WTF_S",
    "type": "SHT",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 14
  },
  {
    "num": "12779",
    "name": "Goa Express",
    "fn": "Vasco da Gama",
    "fc": "VSG",
    "tn": "Hazrat Nizamuddin",
    "tc": "NZM",
    "dep": "15:00",
    "arr": "06:25",
    "ad": 2,
    "dur": "39h 25m",
    "dist": 2164,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 28
  },
  {
    "num": "12780",
    "name": "Goa Express (Return)",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Vasco da Gama",
    "tc": "VSG",
    "dep": "15:15",
    "arr": "06:30",
    "ad": 2,
    "dur": "39h 15m",
    "dist": 2164,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 28
  },
  {
    "num": "12859",
    "name": "Gitanjali Express",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "06:00",
    "arr": "12:30",
    "ad": 1,
    "dur": "30h 30m",
    "dist": 1968,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 24
  },
  {
    "num": "12860",
    "name": "Gitanjali Express (Return)",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "13:50",
    "arr": "21:20",
    "ad": 1,
    "dur": "31h 30m",
    "dist": 1968,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "CR",
    "stops": 24
  },
  {
    "num": "12863",
    "name": "Howrah - SMVT Bengaluru SF Express",
    "fn": "Howrah Jn",
    "fc": "HWH",
    "tn": "KSR Bengaluru",
    "tc": "SBC",
    "dep": "22:55",
    "arr": "06:45",
    "ad": 2,
    "dur": "31h 50m",
    "dist": 1946,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SER",
    "stops": 32
  },
  {
    "num": "12864",
    "name": "SMVT Bengaluru - Howrah SF Express",
    "fn": "KSR Bengaluru",
    "fc": "SBC",
    "tn": "Howrah Jn",
    "tc": "HWH",
    "dep": "10:35",
    "arr": "19:55",
    "ad": 1,
    "dur": "33h 20m",
    "dist": 1946,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SER",
    "stops": 32
  },
  {
    "num": "12955",
    "name": "Mumbai Central - Jaipur SF Express",
    "fn": "Mumbai Central",
    "fc": "BCT",
    "tn": "Jaipur Jn",
    "tc": "JP",
    "dep": "19:05",
    "arr": "12:00",
    "ad": 1,
    "dur": "16h 55m",
    "dist": 1159,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 17
  },
  {
    "num": "12956",
    "name": "Jaipur - Mumbai Central SF Express",
    "fn": "Jaipur Jn",
    "fc": "JP",
    "tn": "Mumbai Central",
    "tc": "BCT",
    "dep": "14:00",
    "arr": "07:45",
    "ad": 1,
    "dur": "17h 45m",
    "dist": 1159,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "WR",
    "stops": 17
  },
  {
    "num": "12123",
    "name": "Deccan Queen",
    "fn": "Mumbai CST",
    "fc": "CSTM",
    "tn": "Pune Jn",
    "tc": "PUNE",
    "dep": "17:10",
    "arr": "20:25",
    "ad": 0,
    "dur": "03h 15m",
    "dist": 192,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "CR",
    "stops": 4
  },
  {
    "num": "12124",
    "name": "Deccan Queen (Return)",
    "fn": "Pune Jn",
    "fc": "PUNE",
    "tn": "Mumbai CST",
    "tc": "CSTM",
    "dep": "07:15",
    "arr": "10:25",
    "ad": 0,
    "dur": "03h 10m",
    "dist": 192,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "CR",
    "stops": 4
  },
  {
    "num": "12675",
    "name": "Kovai Express",
    "fn": "Chennai Central",
    "fc": "MAS",
    "tn": "Coimbatore Jn",
    "tc": "CBE",
    "dep": "06:10",
    "arr": "14:05",
    "ad": 0,
    "dur": "07h 55m",
    "dist": 496,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 10
  },
  {
    "num": "12676",
    "name": "Kovai Express (Return)",
    "fn": "Coimbatore Jn",
    "fc": "CBE",
    "tn": "Chennai Central",
    "tc": "MAS",
    "dep": "15:15",
    "arr": "22:50",
    "ad": 0,
    "dur": "07h 35m",
    "dist": 496,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "CC",
      "2S"
    ],
    "zone": "SR",
    "stops": 10
  },
  {
    "num": "12393",
    "name": "Sampoorna Kranti Express",
    "fn": "Rajendra Nagar Bihar",
    "fc": "RJPB",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "19:25",
    "arr": "07:55",
    "ad": 1,
    "dur": "12h 30m",
    "dist": 1001,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECR",
    "stops": 3
  },
  {
    "num": "12394",
    "name": "Sampoorna Kranti Express (Return)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Rajendra Nagar Bihar",
    "tc": "RJPB",
    "dep": "17:30",
    "arr": "06:50",
    "ad": 1,
    "dur": "13h 20m",
    "dist": 1001,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECR",
    "stops": 3
  },
  {
    "num": "12565",
    "name": "Bihar Sampark Kranti",
    "fn": "Darbhanga Jn",
    "fc": "DBG",
    "tn": "New Delhi",
    "tc": "NDLS",
    "dep": "08:25",
    "arr": "05:15",
    "ad": 1,
    "dur": "20h 50m",
    "dist": 1164,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECR",
    "stops": 11
  },
  {
    "num": "12566",
    "name": "Bihar Sampark Kranti (Return)",
    "fn": "New Delhi",
    "fc": "NDLS",
    "tn": "Darbhanga Jn",
    "tc": "DBG",
    "dep": "13:00",
    "arr": "09:30",
    "ad": 1,
    "dur": "20h 30m",
    "dist": 1164,
    "days": "MTWTFSS",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "ECR",
    "stops": 11
  },
  {
    "num": "12650",
    "name": "Karnataka Sampark Kranti (Return)",
    "fn": "Hazrat Nizamuddin",
    "fc": "NZM",
    "tn": "Yeshvantpur Jn",
    "tc": "YPR",
    "dep": "06:25",
    "arr": "03:30",
    "ad": 2,
    "dur": "45h 05m",
    "dist": 2614,
    "days": "MTWT__S",
    "type": "SF",
    "cls": [
      "1A",
      "2A",
      "3A",
      "SL"
    ],
    "zone": "SWR",
    "stops": 18
  }
];

/* ═══════════════ STATIONS (198+ Major Stations) ═══════════════
   Fields: c(code), n(name), city, st(state), z(zone), d(division), cat, pf, tr */
window.STATIONS = [
  {
    "c": "AHA",
    "n": "Abhaipur",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 2,
    "lat": 25.27,
    "lng": 86.33
  },
  {
    "c": "ABS",
    "n": "Abohar Jn",
    "s": "Punjab",
    "z": "NWR",
    "d": "Bikaner",
    "pf": 3,
    "lat": 30.14,
    "lng": 74.19
  },
  {
    "c": "ABR",
    "n": "Abu Road",
    "city": "Abu Road",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Ajmer",
    "cat": "C",
    "pf": 3,
    "tr": 40
  },
  {
    "c": "ADRA",
    "n": "Adra Jn",
    "s": "West Bengal",
    "z": "SER",
    "d": "Adra",
    "pf": 4,
    "lat": 23.5,
    "lng": 86.68
  },
  {
    "c": "AGT",
    "n": "Agartala",
    "city": "Agartala",
    "st": "Tripura",
    "z": "NFR",
    "d": "Lumding",
    "cat": "C",
    "pf": 3,
    "tr": 15
  },
  {
    "c": "AGTL",
    "n": "Agartala",
    "s": "Tripura",
    "z": "NFR",
    "d": "Lumding",
    "pf": 3,
    "lat": 23.79,
    "lng": 91.27
  },
  {
    "c": "AGC",
    "n": "Agra Cantt",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "pf": 6,
    "lat": 27.16,
    "lng": 78
  },
  {
    "c": "AF",
    "n": "Agra Fort",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "pf": 4,
    "lat": 27.18,
    "lng": 78.02
  },
  {
    "c": "ADI",
    "n": "Ahmedabad Jn (Kalupur)",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 12,
    "lat": 23.03,
    "lng": 72.6
  },
  {
    "c": "ASH",
    "n": "Aishbagh",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 5,
    "lat": 26.84,
    "lng": 80.9
  },
  {
    "c": "AII",
    "n": "Ajmer Jn",
    "city": "Ajmer",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Ajmer",
    "cat": "A",
    "pf": 5,
    "tr": 75
  },
  {
    "c": "AJNI",
    "n": "Ajni",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 3,
    "lat": 21.12,
    "lng": 79.08
  },
  {
    "c": "ABP",
    "n": "Akbarpur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 3,
    "lat": 26.43,
    "lng": 82.54
  },
  {
    "c": "AK",
    "n": "Akola Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 6,
    "lat": 20.71,
    "lng": 77.01
  },
  {
    "c": "ALLP",
    "n": "Alappuzha (Alleppey)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 9.49,
    "lng": 76.32
  },
  {
    "c": "ALJN",
    "n": "Aligarh Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 7,
    "lat": 27.89,
    "lng": 78.08
  },
  {
    "c": "APDJ",
    "n": "Alipurduar Jn",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Alipurduar",
    "pf": 4,
    "lat": 26.5,
    "lng": 89.53
  },
  {
    "c": "AWY",
    "n": "Aluva (Alwaye)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 10.11,
    "lng": 76.35
  },
  {
    "c": "AADR",
    "n": "Amb Andaura",
    "s": "Himachal Pradesh",
    "z": "NR",
    "d": "Ambala",
    "pf": 2,
    "lat": 31.68,
    "lng": 76.12
  },
  {
    "c": "UMB",
    "n": "Ambala Cantt Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "pf": 8,
    "lat": 30.33,
    "lng": 76.83
  },
  {
    "c": "AMPA",
    "n": "Ambalappuzha",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.38,
    "lng": 76.36
  },
  {
    "c": "AB",
    "n": "Ambur",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 3,
    "lat": 12.79,
    "lng": 78.71
  },
  {
    "c": "AME",
    "n": "Amethi",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 2,
    "lat": 26.15,
    "lng": 81.82
  },
  {
    "c": "AMI",
    "n": "Amravati",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 3,
    "lat": 20.93,
    "lng": 77.75
  },
  {
    "c": "ASR",
    "n": "Amritsar Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 8,
    "lat": 31.63,
    "lng": 74.87
  },
  {
    "c": "AMRO",
    "n": "Amroha",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 2,
    "lat": 28.9,
    "lng": 78.47
  },
  {
    "c": "AKP",
    "n": "Anakapalle",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 2,
    "lat": 17.69,
    "lng": 83
  },
  {
    "c": "ANND",
    "n": "Anand Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 6,
    "lat": 22.56,
    "lng": 72.96
  },
  {
    "c": "ANVT",
    "n": "Anand Vihar Terminal",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 7,
    "lat": 28.65,
    "lng": 77.31
  },
  {
    "c": "ATP",
    "n": "Anantapur",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 3,
    "lat": 14.68,
    "lng": 77.6
  },
  {
    "c": "ANT",
    "n": "Anantnag",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 33.73,
    "lng": 75.15
  },
  {
    "c": "ANGL",
    "n": "Angul",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 3,
    "lat": 20.84,
    "lng": 85.1
  },
  {
    "c": "AKV",
    "n": "Ankleshwar Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 4,
    "lat": 21.63,
    "lng": 73
  },
  {
    "c": "ANV",
    "n": "Annavaram",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 17.28,
    "lng": 82.4
  },
  {
    "c": "AUBR",
    "n": "Anugraha Narayan Road",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 4,
    "lat": 24.88,
    "lng": 84.34
  },
  {
    "c": "APR",
    "n": "Anuppur Jn",
    "s": "Madhya Pradesh",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 4,
    "lat": 23.11,
    "lng": 81.69
  },
  {
    "c": "ARA",
    "n": "Ara Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 5,
    "lat": 25.55,
    "lng": 84.67
  },
  {
    "c": "AJJ",
    "n": "Arakkonam Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 8,
    "lat": 13.08,
    "lng": 79.67
  },
  {
    "c": "ASK",
    "n": "Arsikere Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 3,
    "lat": 13.31,
    "lng": 76.25
  },
  {
    "c": "ASN",
    "n": "Asansol Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "pf": 7,
    "lat": 23.68,
    "lng": 86.97
  },
  {
    "c": "ARJ",
    "n": "Aunrihar Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 4,
    "lat": 25.55,
    "lng": 83.19
  },
  {
    "c": "AYC",
    "n": "Ayodhya Cantt",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 5,
    "lat": 26.78,
    "lng": 82.13
  },
  {
    "c": "AY",
    "n": "Ayodhya Dham Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 6,
    "lat": 26.8,
    "lng": 82.2
  },
  {
    "c": "AMH",
    "n": "Azamgarh",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 3,
    "lat": 26.07,
    "lng": 83.18
  },
  {
    "c": "BCA",
    "n": "Bachhwara Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 3,
    "lat": 25.56,
    "lng": 85.86
  },
  {
    "c": "BPB",
    "n": "Badarpur Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 3,
    "lat": 24.9,
    "lng": 92.58
  },
  {
    "c": "BDGM",
    "n": "Badgam",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 34.01,
    "lng": 74.72
  },
  {
    "c": "BD",
    "n": "Badnera Jn (Amravati)",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 4,
    "lat": 20.86,
    "lng": 77.73
  },
  {
    "c": "BNZ",
    "n": "Badshahnagar",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 2,
    "lat": 26.87,
    "lng": 80.97
  },
  {
    "c": "BUG",
    "n": "Bagaha",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 27.1,
    "lng": 84.09
  },
  {
    "c": "BGK",
    "n": "Bagalkot Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 16.18,
    "lng": 75.7
  },
  {
    "c": "BHD",
    "n": "Bahadurgarh",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 2,
    "lat": 28.69,
    "lng": 76.92
  },
  {
    "c": "BKP",
    "n": "Bakhtiyarpur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 4,
    "lat": 25.46,
    "lng": 85.53
  },
  {
    "c": "BLM",
    "n": "Balamau Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 27.16,
    "lng": 80.29
  },
  {
    "c": "BLGR",
    "n": "Balangir",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Sambalpur",
    "pf": 3,
    "lat": 20.71,
    "lng": 83.49
  },
  {
    "c": "BLS",
    "n": "Balasore",
    "s": "Odisha",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 4,
    "lat": 21.49,
    "lng": 86.93
  },
  {
    "c": "BPQ",
    "n": "Balharshah Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 5,
    "lat": 19.85,
    "lng": 79.35
  },
  {
    "c": "BVH",
    "n": "Ballabhgarh",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.34,
    "lng": 77.32
  },
  {
    "c": "BAY",
    "n": "Ballari Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 4,
    "lat": 15.15,
    "lng": 76.92
  },
  {
    "c": "BUI",
    "n": "Ballia",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 4,
    "lat": 25.76,
    "lng": 84.15
  },
  {
    "c": "BNY",
    "n": "Balrampur",
    "city": "Balrampur",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "cat": "D",
    "pf": 2,
    "tr": 20
  },
  {
    "c": "BLP",
    "n": "Balrampur",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 2,
    "lat": 27.43,
    "lng": 82.18
  },
  {
    "c": "BSBS",
    "n": "Banaras (Manduadih)",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 8,
    "lat": 25.3,
    "lng": 82.97
  },
  {
    "c": "BAND",
    "n": "Banda Jn",
    "city": "Banda",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "BNDA",
    "n": "Banda Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 3,
    "lat": 25.48,
    "lng": 80.34
  },
  {
    "c": "BDC",
    "n": "Bandel Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 7,
    "lat": 22.92,
    "lng": 88.37
  },
  {
    "c": "BDTS",
    "n": "Bandra Terminus",
    "s": "Maharashtra",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 7,
    "lat": 19.06,
    "lng": 72.84
  },
  {
    "c": "BWT",
    "n": "Bangarapet Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 5,
    "lat": 12.98,
    "lng": 78.19
  },
  {
    "c": "BAHL",
    "n": "Banihal",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 33.5,
    "lng": 75.2
  },
  {
    "c": "BQA",
    "n": "Bankura Jn",
    "s": "West Bengal",
    "z": "SER",
    "d": "Adra",
    "pf": 3,
    "lat": 23.23,
    "lng": 87.07
  },
  {
    "c": "BNKI",
    "n": "Banmankhi Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 25.9,
    "lng": 87.18
  },
  {
    "c": "BPP",
    "n": "Bapatla",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 15.9,
    "lng": 80.47
  },
  {
    "c": "BMKI",
    "n": "Bapudham Motihari",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.65,
    "lng": 84.92
  },
  {
    "c": "BBK",
    "n": "Barabanki Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 4,
    "lat": 26.93,
    "lng": 81.19
  },
  {
    "c": "BRML",
    "n": "Baramulla",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 34.2,
    "lng": 74.34
  },
  {
    "c": "BJU",
    "n": "Barauni Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 9,
    "lat": 25.48,
    "lng": 85.97
  },
  {
    "c": "BBN",
    "n": "Barbil",
    "city": "Barbil",
    "st": "Odisha",
    "z": "SER",
    "d": "Chakradharpur",
    "cat": "C",
    "pf": 3,
    "tr": 20
  },
  {
    "c": "BWN",
    "n": "Barddhaman Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 8,
    "lat": 23.23,
    "lng": 87.86
  },
  {
    "c": "BC",
    "n": "Bareilly City",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 4,
    "lat": 28.37,
    "lng": 79.41
  },
  {
    "c": "BE",
    "n": "Bareilly Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 6,
    "lat": 28.34,
    "lng": 79.42
  },
  {
    "c": "BRGA",
    "n": "Bargarh Road",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Sambalpur",
    "pf": 2,
    "lat": 21.33,
    "lng": 83.62
  },
  {
    "c": "BARH",
    "n": "Barh",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 2,
    "lat": 25.48,
    "lng": 85.71
  },
  {
    "c": "BHW",
    "n": "Barharwa Jn",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Malda",
    "pf": 3,
    "lat": 24.86,
    "lng": 87.78
  },
  {
    "c": "BRKA",
    "n": "Barkakana Jn",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 5,
    "lat": 23.61,
    "lng": 85.48
  },
  {
    "c": "BPRD",
    "n": "Barpeta Road",
    "s": "Assam",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 2,
    "lat": 26.51,
    "lng": 90.97
  },
  {
    "c": "BOE",
    "n": "Barsoi Jn",
    "s": "Bihar",
    "z": "NFR",
    "d": "Katihar",
    "pf": 4,
    "lat": 25.64,
    "lng": 87.89
  },
  {
    "c": "BST",
    "n": "Basti",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 4,
    "lat": 26.79,
    "lng": 82.74
  },
  {
    "c": "BTI",
    "n": "Bathinda Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 7,
    "lat": 30.21,
    "lng": 74.95
  },
  {
    "c": "BEAS",
    "n": "Beas Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 31.51,
    "lng": 75.3
  },
  {
    "c": "BGS",
    "n": "Begusarai",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 3,
    "lat": 25.42,
    "lng": 86.13
  },
  {
    "c": "BGM",
    "n": "Belagavi (Belgaum)",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 15.86,
    "lng": 74.5
  },
  {
    "c": "BNC",
    "n": "Bengaluru Cantt",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 3,
    "lat": 12.99,
    "lng": 77.6
  },
  {
    "c": "BTH",
    "n": "Bettiah",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.8,
    "lng": 84.5
  },
  {
    "c": "BBU",
    "n": "Bhabua Road",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 4,
    "lat": 25.04,
    "lng": 83.61
  },
  {
    "c": "BHC",
    "n": "Bhadrak",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 4,
    "lat": 21.06,
    "lng": 86.51
  },
  {
    "c": "BGP",
    "n": "Bhagalpur Jn",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 6,
    "lat": 25.24,
    "lng": 86.97
  },
  {
    "c": "BGKT",
    "n": "Bhagat Ki Kothi",
    "city": "Jodhpur",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Jodhpur",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "BVP",
    "n": "Bharuch Jn",
    "city": "Bharuch",
    "st": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "cat": "C",
    "pf": 4,
    "tr": 60
  },
  {
    "c": "BH",
    "n": "Bharuch Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 5,
    "lat": 21.71,
    "lng": 72.99
  },
  {
    "c": "BYT",
    "n": "Bhatapara",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Raipur",
    "pf": 3,
    "lat": 21.73,
    "lng": 81.93
  },
  {
    "c": "BTJL",
    "n": "Bhatkal",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 13.98,
    "lng": 74.55
  },
  {
    "c": "BTT",
    "n": "Bhatni Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 4,
    "lat": 26.43,
    "lng": 83.97
  },
  {
    "c": "BVC",
    "n": "Bhavnagar Terminus",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 3,
    "lat": 21.78,
    "lng": 72.14
  },
  {
    "c": "BPHB",
    "n": "Bhilai Power House",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Raipur",
    "pf": 3,
    "lat": 21.21,
    "lng": 81.38
  },
  {
    "c": "BNW",
    "n": "Bhiwani Jn",
    "s": "Haryana",
    "z": "NWR",
    "d": "Bikaner",
    "pf": 3,
    "lat": 28.79,
    "lng": 76.13
  },
  {
    "c": "BPR",
    "n": "Bhojipura Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 3,
    "lat": 28.5,
    "lng": 79.47
  },
  {
    "c": "BPL",
    "n": "Bhopal Jn",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 6,
    "lat": 23.26,
    "lng": 77.41
  },
  {
    "c": "BBS",
    "n": "Bhubaneswar",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 6,
    "lat": 20.27,
    "lng": 85.84
  },
  {
    "c": "BHUJ",
    "n": "Bhuj",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 3,
    "lat": 23.25,
    "lng": 69.67
  },
  {
    "c": "BSL",
    "n": "Bhusawal Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 8,
    "lat": 21.05,
    "lng": 75.79
  },
  {
    "c": "BTA",
    "n": "Bihta",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 3,
    "lat": 25.57,
    "lng": 84.87
  },
  {
    "c": "BKN",
    "n": "Bikaner Jn",
    "city": "Bikaner",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Bikaner",
    "cat": "A",
    "pf": 4,
    "tr": 65
  },
  {
    "c": "BSP",
    "n": "Bilaspur Jn",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 8,
    "lat": 22.08,
    "lng": 82.16
  },
  {
    "c": "BIM",
    "n": "Bilimora Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 4,
    "lat": 20.76,
    "lng": 72.96
  },
  {
    "c": "BINA",
    "n": "Bina Jn",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 6,
    "lat": 24.17,
    "lng": 78.18
  },
  {
    "c": "RRB",
    "n": "Birur Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 3,
    "lat": 13.62,
    "lng": 75.97
  },
  {
    "c": "BKSC",
    "n": "Bokaro Steel City",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Adra",
    "pf": 5,
    "lat": 23.63,
    "lng": 86.17
  },
  {
    "c": "BHP",
    "n": "Bolpur Shantiniketan",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 3,
    "lat": 23.67,
    "lng": 87.69
  },
  {
    "c": "BVI",
    "n": "Borivali",
    "s": "Maharashtra",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 10,
    "lat": 19.23,
    "lng": 72.86
  },
  {
    "c": "BAM",
    "n": "Brahmapur",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 4,
    "lat": 19.31,
    "lng": 84.79
  },
  {
    "c": "BAU",
    "n": "Burhanpur",
    "s": "Madhya Pradesh",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 3,
    "lat": 21.31,
    "lng": 76.22
  },
  {
    "c": "BXR",
    "n": "Buxar",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 3,
    "lat": 25.57,
    "lng": 83.98
  },
  {
    "c": "CAA",
    "n": "Chakia",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 2,
    "lat": 26.42,
    "lng": 85.05
  },
  {
    "c": "CKP",
    "n": "Chakradharpur",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Chakradharpur",
    "pf": 3,
    "lat": 22.68,
    "lng": 85.63
  },
  {
    "c": "CKI",
    "n": "Chalakudi",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 10.3,
    "lng": 76.33
  },
  {
    "c": "CSN",
    "n": "Chalisgaon Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 5,
    "lat": 20.46,
    "lng": 74.99
  },
  {
    "c": "CPH",
    "n": "Champa Jn",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 3,
    "lat": 22.04,
    "lng": 82.65
  },
  {
    "c": "CH",
    "n": "Chandausi Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 28.45,
    "lng": 78.77
  },
  {
    "c": "CDG",
    "n": "Chandigarh Jn",
    "s": "Chandigarh",
    "z": "NR",
    "d": "Ambala",
    "pf": 6,
    "lat": 30.7,
    "lng": 76.82
  },
  {
    "c": "CD",
    "n": "Chandrapur",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 3,
    "lat": 19.95,
    "lng": 79.3
  },
  {
    "c": "CGY",
    "n": "Changanassery",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.45,
    "lng": 76.54
  },
  {
    "c": "CPK",
    "n": "Chaparmukh Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 3,
    "lat": 26.19,
    "lng": 92.52
  },
  {
    "c": "CGL",
    "n": "Chengalpattu Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 8,
    "lat": 12.68,
    "lng": 79.98
  },
  {
    "c": "CNGR",
    "n": "Chengannur",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 9.32,
    "lng": 76.61
  },
  {
    "c": "MS",
    "n": "Chennai Egmore",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 11,
    "lat": 13.08,
    "lng": 80.26
  },
  {
    "c": "CPR",
    "n": "Chhapra Jn",
    "s": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "pf": 5,
    "lat": 25.78,
    "lng": 84.73
  },
  {
    "c": "AWB",
    "n": "Chhatrapati Sambhajinagar (Aurangabad)",
    "s": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "pf": 5,
    "lat": 19.87,
    "lng": 75.31
  },
  {
    "c": "CSMT",
    "n": "Chhatrapati Shivaji Maharaj Terminus",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 18,
    "lat": 18.94,
    "lng": 72.84
  },
  {
    "c": "CDM",
    "n": "Chidambaram",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 2,
    "lat": 11.39,
    "lng": 79.7
  },
  {
    "c": "CCH",
    "n": "Chinchwad",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 2,
    "lat": 18.63,
    "lng": 73.79
  },
  {
    "c": "CHI",
    "n": "Chiplun",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 17.52,
    "lng": 73.53
  },
  {
    "c": "CLX",
    "n": "Chirala",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 15.82,
    "lng": 80.35
  },
  {
    "c": "CKTD",
    "n": "Chitrakoot Dham Karwi",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 2,
    "lat": 25.21,
    "lng": 80.87
  },
  {
    "c": "CRJ",
    "n": "Chittaranjan",
    "s": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "pf": 3,
    "lat": 23.86,
    "lng": 86.91
  },
  {
    "c": "CPU",
    "n": "Chopan",
    "s": "Uttar Pradesh",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 3,
    "lat": 24.52,
    "lng": 83.03
  },
  {
    "c": "CBE",
    "n": "Coimbatore Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 6,
    "lat": 11,
    "lng": 76.96
  },
  {
    "c": "CBF",
    "n": "Coimbatore North",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 2,
    "lat": 11.02,
    "lng": 76.96
  },
  {
    "c": "CTC",
    "n": "Cuttack Jn",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 5,
    "lat": 20.47,
    "lng": 85.9
  },
  {
    "c": "DBA",
    "n": "Dabra",
    "s": "Madhya Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 2,
    "lat": 25.89,
    "lng": 78.33
  },
  {
    "c": "DR",
    "n": "Dadar Central",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 8,
    "lat": 19.02,
    "lng": 72.84
  },
  {
    "c": "DDR",
    "n": "Dadar Western",
    "s": "Maharashtra",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 7,
    "lat": 19.02,
    "lng": 72.84
  },
  {
    "c": "DHD",
    "n": "Dahod",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ratlam",
    "pf": 3,
    "lat": 22.84,
    "lng": 74.26
  },
  {
    "c": "DTO",
    "n": "Daltonganj",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 3,
    "lat": 24.03,
    "lng": 84.07
  },
  {
    "c": "DMO",
    "n": "Damoh",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 23.83,
    "lng": 79.44
  },
  {
    "c": "DNR",
    "n": "Danapur",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 5,
    "lat": 25.62,
    "lng": 85.05
  },
  {
    "c": "DBG",
    "n": "Darbhanga Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 5,
    "lat": 26.16,
    "lng": 85.9
  },
  {
    "c": "DAA",
    "n": "Datia",
    "s": "Madhya Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 2,
    "lat": 25.67,
    "lng": 78.46
  },
  {
    "c": "DLPC",
    "n": "Daulatpur Chowk",
    "s": "Himachal Pradesh",
    "z": "NR",
    "d": "Ambala",
    "pf": 2,
    "lat": 31.8,
    "lng": 75.98
  },
  {
    "c": "DD",
    "n": "Daund Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 6,
    "lat": 18.46,
    "lng": 74.58
  },
  {
    "c": "DMH",
    "n": "Dauram Madhepura",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 2,
    "lat": 25.92,
    "lng": 86.79
  },
  {
    "c": "DVG",
    "n": "Davangere",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 2,
    "lat": 14.46,
    "lng": 75.92
  },
  {
    "c": "DDN",
    "n": "Dehradun",
    "s": "Uttarakhand",
    "z": "NR",
    "d": "Moradabad",
    "pf": 5,
    "lat": 30.32,
    "lng": 78.03
  },
  {
    "c": "DOS",
    "n": "Dehri On Sone",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 6,
    "lat": 24.91,
    "lng": 84.18
  },
  {
    "c": "DEC",
    "n": "Delhi Cantt",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.59,
    "lng": 77.12
  },
  {
    "c": "DSJ",
    "n": "Delhi Safdarjung",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 28.58,
    "lng": 77.2
  },
  {
    "c": "DEE",
    "n": "Delhi Sarai Rohilla",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 7,
    "lat": 28.66,
    "lng": 77.18
  },
  {
    "c": "DGHR",
    "n": "Deoghar Jn",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Asansol",
    "pf": 3,
    "lat": 24.49,
    "lng": 86.7
  },
  {
    "c": "DEOS",
    "n": "Deoria Sadar",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 3,
    "lat": 26.5,
    "lng": 83.78
  },
  {
    "c": "DES",
    "n": "Desari",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 2,
    "lat": 25.64,
    "lng": 85.42
  },
  {
    "c": "DWX",
    "n": "Dewas Jn",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 3,
    "lat": 22.97,
    "lng": 76.06
  },
  {
    "c": "DMN",
    "n": "Dhamangaon",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 2,
    "lat": 20.67,
    "lng": 78.14
  },
  {
    "c": "DHN",
    "n": "Dhanbad Jn",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 8,
    "lat": 23.79,
    "lng": 86.43
  },
  {
    "c": "DMR",
    "n": "Dharmanagar",
    "s": "Tripura",
    "z": "NFR",
    "d": "Lumding",
    "pf": 2,
    "lat": 24.38,
    "lng": 92.16
  },
  {
    "c": "DMM",
    "n": "Dharmavaram Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 5,
    "lat": 14.41,
    "lng": 77.72
  },
  {
    "c": "DWR",
    "n": "Dharwad",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 15.45,
    "lng": 75.01
  },
  {
    "c": "DNKL",
    "n": "Dhenkanal",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 3,
    "lat": 20.66,
    "lng": 85.6
  },
  {
    "c": "DHNE",
    "n": "Dhone Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 4,
    "lat": 15.39,
    "lng": 77.87
  },
  {
    "c": "DHG",
    "n": "Dhrangadhra Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 2,
    "lat": 22.99,
    "lng": 71.46
  },
  {
    "c": "DUI",
    "n": "Dhuri Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 4,
    "lat": 30.37,
    "lng": 75.87
  },
  {
    "c": "DBRG",
    "n": "Dibrugarh",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 4,
    "lat": 27.48,
    "lng": 94.91
  },
  {
    "c": "DMV",
    "n": "Dimapur",
    "s": "Nagaland",
    "z": "NFR",
    "d": "Lumding",
    "pf": 3,
    "lat": 25.91,
    "lng": 93.73
  },
  {
    "c": "DG",
    "n": "Dindigul Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 5,
    "lat": 10.36,
    "lng": 77.98
  },
  {
    "c": "DPU",
    "n": "Diphu",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 2,
    "lat": 25.84,
    "lng": 93.43
  },
  {
    "c": "DGG",
    "n": "Dongargarh",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Nagpur SECR",
    "pf": 4,
    "lat": 21.19,
    "lng": 80.76
  },
  {
    "c": "DADN",
    "n": "Dr. Ambedkar Nagar (Mhow)",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 4,
    "lat": 22.55,
    "lng": 75.76
  },
  {
    "c": "DUMK",
    "n": "Dumka",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Asansol",
    "pf": 3,
    "lat": 24.27,
    "lng": 87.25
  },
  {
    "c": "DUM",
    "n": "Dumraon",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 2,
    "lat": 25.55,
    "lng": 84.15
  },
  {
    "c": "DURG",
    "n": "Durg Jn",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Raipur",
    "pf": 6,
    "lat": 21.19,
    "lng": 81.28
  },
  {
    "c": "DGR",
    "n": "Durgapur",
    "s": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "pf": 5,
    "lat": 23.5,
    "lng": 87.31
  },
  {
    "c": "DVD",
    "n": "Duvvada",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 4,
    "lat": 17.71,
    "lng": 83.15
  },
  {
    "c": "DWK",
    "n": "Dwarka",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 3,
    "lat": 22.24,
    "lng": 68.97
  },
  {
    "c": "EE",
    "n": "Eluru",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 16.71,
    "lng": 81.1
  },
  {
    "c": "ERS",
    "n": "Ernakulam Jn (South)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 6,
    "lat": 9.97,
    "lng": 76.29
  },
  {
    "c": "ERN",
    "n": "Ernakulam Town (North)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 9.99,
    "lng": 76.29
  },
  {
    "c": "ED",
    "n": "Erode Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 5,
    "lat": 11.34,
    "lng": 77.72
  },
  {
    "c": "ETW",
    "n": "Etawah Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 5,
    "lat": 26.78,
    "lng": 79.03
  },
  {
    "c": "FLK",
    "n": "Falakata",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Alipurduar",
    "pf": 2,
    "lat": 26.53,
    "lng": 89.2
  },
  {
    "c": "FDB",
    "n": "Faridabad",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.41,
    "lng": 77.31
  },
  {
    "c": "FDK",
    "n": "Faridkot",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 30.68,
    "lng": 74.75
  },
  {
    "c": "FBD",
    "n": "Farrukhabad Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 5,
    "lat": 27.39,
    "lng": 79.58
  },
  {
    "c": "FTP",
    "n": "Fatehpur",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 3,
    "lat": 25.93,
    "lng": 80.81
  },
  {
    "c": "FUT",
    "n": "Fatuha Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 5,
    "lat": 25.51,
    "lng": 85.31
  },
  {
    "c": "FKA",
    "n": "Fazilka Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 30.4,
    "lng": 74.03
  },
  {
    "c": "FZR",
    "n": "Ferozepur Cantt",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 5,
    "lat": 30.92,
    "lng": 74.61
  },
  {
    "c": "FZD",
    "n": "Firozabad",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 3,
    "lat": 27.15,
    "lng": 78.4
  },
  {
    "c": "FKG",
    "n": "Furkating Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 3,
    "lat": 26.45,
    "lng": 93.97
  },
  {
    "c": "GDG",
    "n": "Gadag Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 4,
    "lat": 15.43,
    "lng": 75.63
  },
  {
    "c": "GAR",
    "n": "Gadarwara",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 2,
    "lat": 22.92,
    "lng": 78.78
  },
  {
    "c": "GIMB",
    "n": "Gandhidham Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 3,
    "lat": 23.08,
    "lng": 70.13
  },
  {
    "c": "GNC",
    "n": "Gandhinagar Capital",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 3,
    "lat": 23.23,
    "lng": 72.64
  },
  {
    "c": "BAQ",
    "n": "Ganj Basoda",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 3,
    "lat": 23.85,
    "lng": 77.94
  },
  {
    "c": "GHD",
    "n": "Garhwa Road Jn",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 4,
    "lat": 24.23,
    "lng": 83.84
  },
  {
    "c": "GYA",
    "n": "Gaya Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 9,
    "lat": 24.8,
    "lng": 85
  },
  {
    "c": "GPB",
    "n": "Ghataprabha",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 2,
    "lat": 16.23,
    "lng": 74.83
  },
  {
    "c": "GTS",
    "n": "Ghatsila",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 2,
    "lat": 22.58,
    "lng": 86.48
  },
  {
    "c": "GZB",
    "n": "Ghaziabad Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "pf": 6,
    "lat": 28.67,
    "lng": 77.43
  },
  {
    "c": "GCT",
    "n": "Ghazipur City",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 3,
    "lat": 25.58,
    "lng": 83.58
  },
  {
    "c": "GLPT",
    "n": "Goalpara Town",
    "s": "Assam",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 2,
    "lat": 26.17,
    "lng": 90.62
  },
  {
    "c": "GDA",
    "n": "Godhra Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 5,
    "lat": 22.78,
    "lng": 73.61
  },
  {
    "c": "GOK",
    "n": "Gokarna Road",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 14.54,
    "lng": 74.34
  },
  {
    "c": "GTNR",
    "n": "Gomti Nagar",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 6,
    "lat": 26.86,
    "lng": 81
  },
  {
    "c": "GD",
    "n": "Gonda Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 5,
    "lat": 27.13,
    "lng": 81.96
  },
  {
    "c": "G",
    "n": "Gondia Jn",
    "s": "Maharashtra",
    "z": "SECR",
    "d": "Nagpur SECR",
    "pf": 6,
    "lat": 21.46,
    "lng": 80.2
  },
  {
    "c": "GY",
    "n": "Gooty Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 3,
    "lat": 15.12,
    "lng": 77.63
  },
  {
    "c": "GOPG",
    "n": "Gopalganj",
    "s": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "pf": 2,
    "lat": 26.47,
    "lng": 84.44
  },
  {
    "c": "GKP",
    "n": "Gorakhpur Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 10,
    "lat": 26.76,
    "lng": 83.38
  },
  {
    "c": "GDR",
    "n": "Gudur Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 14.15,
    "lng": 79.85
  },
  {
    "c": "GTL",
    "n": "Guntakal Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 7,
    "lat": 15.17,
    "lng": 77.37
  },
  {
    "c": "GNT",
    "n": "Guntur Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntur",
    "pf": 7,
    "lat": 16.3,
    "lng": 80.44
  },
  {
    "c": "GRRU",
    "n": "Guraru",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 2,
    "lat": 24.83,
    "lng": 84.81
  },
  {
    "c": "GSP",
    "n": "Gurdaspur",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 32.04,
    "lng": 75.4
  },
  {
    "c": "GGN",
    "n": "Gurgaon",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 28.47,
    "lng": 77.01
  },
  {
    "c": "GHY",
    "n": "Guwahati",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 7,
    "lat": 26.18,
    "lng": 91.75
  },
  {
    "c": "GWL",
    "n": "Gwalior Jn",
    "s": "Madhya Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 5,
    "lat": 26.22,
    "lng": 78.18
  },
  {
    "c": "HBJ",
    "n": "Habibganj",
    "city": "Bhopal",
    "st": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "cat": "B",
    "pf": 3,
    "tr": 60
  },
  {
    "c": "HJP",
    "n": "Hajipur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 5,
    "lat": 25.68,
    "lng": 85.22
  },
  {
    "c": "HDW",
    "n": "Haldwani",
    "s": "Uttarakhand",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 3,
    "lat": 29.22,
    "lng": 79.52
  },
  {
    "c": "HAPA",
    "n": "Hapa",
    "s": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "pf": 3,
    "lat": 22.47,
    "lng": 70.13
  },
  {
    "c": "HPU",
    "n": "Hapur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 5,
    "lat": 28.73,
    "lng": 77.78
  },
  {
    "c": "HRI",
    "n": "Hardoi",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 27.4,
    "lng": 80.13
  },
  {
    "c": "HW",
    "n": "Haridwar Jn",
    "s": "Uttarakhand",
    "z": "NR",
    "d": "Moradabad",
    "pf": 6,
    "lat": 29.95,
    "lng": 78.16
  },
  {
    "c": "HRR",
    "n": "Harihar",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 3,
    "lat": 14.51,
    "lng": 75.8
  },
  {
    "c": "HAD",
    "n": "Harippad",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.28,
    "lng": 76.45
  },
  {
    "c": "HAS",
    "n": "Hassan Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 4,
    "lat": 13.01,
    "lng": 76.1
  },
  {
    "c": "HTZ",
    "n": "Hathidah Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 3,
    "lat": 25.37,
    "lng": 85.98
  },
  {
    "c": "HTE",
    "n": "Hatia",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Ranchi",
    "pf": 3,
    "lat": 23.31,
    "lng": 85.31
  },
  {
    "c": "HVR",
    "n": "Haveri",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 2,
    "lat": 14.79,
    "lng": 75.4
  },
  {
    "c": "HZD",
    "n": "Hazaribagh Road",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 3,
    "lat": 24.16,
    "lng": 85.92
  },
  {
    "c": "HZBN",
    "n": "Hazaribagh Town",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 3,
    "lat": 24.01,
    "lng": 85.36
  },
  {
    "c": "NZM",
    "n": "Hazrat Nizamuddin",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 9,
    "lat": 28.59,
    "lng": 77.25
  },
  {
    "c": "NED",
    "n": "Hazur Sahib Nanded",
    "s": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "pf": 4,
    "lat": 19.16,
    "lng": 77.31
  },
  {
    "c": "HRS",
    "n": "Hisar",
    "city": "Hisar",
    "st": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "cat": "C",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "HSR",
    "n": "Hisar Jn",
    "s": "Haryana",
    "z": "NWR",
    "d": "Bikaner",
    "pf": 6,
    "lat": 29.15,
    "lng": 75.72
  },
  {
    "c": "HJI",
    "n": "Hojai",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 2,
    "lat": 26,
    "lng": 92.86
  },
  {
    "c": "HPT",
    "n": "Hosapete Jn (Hampi)",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 15.28,
    "lng": 76.39
  },
  {
    "c": "HSX",
    "n": "Hoshiarpur",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 31.53,
    "lng": 75.91
  },
  {
    "c": "HWH",
    "n": "Howrah Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 23,
    "lat": 22.58,
    "lng": 88.34
  },
  {
    "c": "HYB",
    "n": "Hyderabad Deccan (Nampally)",
    "s": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "pf": 6,
    "lat": 17.39,
    "lng": 78.47
  },
  {
    "c": "IGP",
    "n": "Igatpuri",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 4,
    "lat": 19.7,
    "lng": 73.56
  },
  {
    "c": "INDB",
    "n": "Indore Jn",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 6,
    "lat": 22.72,
    "lng": 75.87
  },
  {
    "c": "IJK",
    "n": "Irinjalakuda",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 10.35,
    "lng": 76.23
  },
  {
    "c": "ET",
    "n": "Itarsi Jn",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 7,
    "lat": 22.61,
    "lng": 77.76
  },
  {
    "c": "IZN",
    "n": "Izzatnagar",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 4,
    "lat": 28.4,
    "lng": 79.43
  },
  {
    "c": "JBP",
    "n": "Jabalpur",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 6,
    "lat": 23.16,
    "lng": 79.95
  },
  {
    "c": "JID",
    "n": "JagiRoad",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 2,
    "lat": 26.12,
    "lng": 92.21
  },
  {
    "c": "JP",
    "n": "Jaipur Jn",
    "city": "Jaipur",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Jaipur",
    "cat": "A1",
    "pf": 6,
    "tr": 130
  },
  {
    "c": "JSLM",
    "n": "Jaisalmer",
    "city": "Jaisalmer",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Jodhpur",
    "cat": "D",
    "pf": 2,
    "tr": 10
  },
  {
    "c": "JJKR",
    "n": "Jajpur Keonjhar Road",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 4,
    "lat": 20.95,
    "lng": 86.13
  },
  {
    "c": "JHL",
    "n": "Jakhal Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 29.79,
    "lng": 75.83
  },
  {
    "c": "JRC",
    "n": "Jalandhar Cantt",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 31.29,
    "lng": 75.61
  },
  {
    "c": "JUC",
    "n": "Jalandhar City",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 5,
    "lat": 31.32,
    "lng": 75.58
  },
  {
    "c": "JL",
    "n": "Jalgaon Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 5,
    "lat": 21.01,
    "lng": 75.56
  },
  {
    "c": "J",
    "n": "Jalna",
    "s": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "pf": 3,
    "lat": 19.83,
    "lng": 75.89
  },
  {
    "c": "JPG",
    "n": "Jalpaiguri",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Katihar",
    "pf": 2,
    "lat": 26.52,
    "lng": 88.73
  },
  {
    "c": "JMP",
    "n": "Jamalpur Jn",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 4,
    "lat": 25.31,
    "lng": 86.49
  },
  {
    "c": "JAT",
    "n": "Jammu Tawi",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 5,
    "lat": 32.71,
    "lng": 74.88
  },
  {
    "c": "JAM",
    "n": "Jamnagar",
    "s": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "pf": 3,
    "lat": 22.47,
    "lng": 70.07
  },
  {
    "c": "JMU",
    "n": "Jamui",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 2,
    "lat": 24.92,
    "lng": 86.22
  },
  {
    "c": "JNKD",
    "n": "Janakpur Dham",
    "s": "Nepal (Cross-Border)",
    "z": "ECR",
    "d": "Samastipur / Nepal Link",
    "pf": 3,
    "lat": 26.72,
    "lng": 85.92
  },
  {
    "c": "JSME",
    "n": "Jasidih Jn (Deoghar)",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Asansol",
    "pf": 5,
    "lat": 24.52,
    "lng": 86.64
  },
  {
    "c": "JNU",
    "n": "Jaunpur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 5,
    "lat": 25.75,
    "lng": 82.68
  },
  {
    "c": "JYG",
    "n": "Jaynagar",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.58,
    "lng": 86.13
  },
  {
    "c": "JHD",
    "n": "Jehanabad",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 3,
    "lat": 25.21,
    "lng": 84.99
  },
  {
    "c": "JAJ",
    "n": "Jhajha",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 4,
    "lat": 24.77,
    "lng": 86.38
  },
  {
    "c": "JHS",
    "n": "Jhansi Jn",
    "city": "Jhansi",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "cat": "A",
    "pf": 7,
    "tr": 150
  },
  {
    "c": "JSG",
    "n": "Jharsuguda Jn",
    "s": "Odisha",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 5,
    "lat": 21.86,
    "lng": 84.03
  },
  {
    "c": "JIND",
    "n": "Jind Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 29.32,
    "lng": 76.31
  },
  {
    "c": "JU",
    "n": "Jodhpur Jn",
    "city": "Jodhpur",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Jodhpur",
    "cat": "A",
    "pf": 6,
    "tr": 90
  },
  {
    "c": "JTJ",
    "n": "Jolarpettai Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 5,
    "lat": 12.57,
    "lng": 78.58
  },
  {
    "c": "JTTN",
    "n": "Jorhat Town",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 2,
    "lat": 26.75,
    "lng": 94.21
  },
  {
    "c": "JND",
    "n": "Junagadh Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 4,
    "lat": 21.52,
    "lng": 70.46
  },
  {
    "c": "KCG",
    "n": "Kacheguda",
    "s": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "pf": 5,
    "lat": 17.39,
    "lng": 78.5
  },
  {
    "c": "HX",
    "n": "Kadapa Jn (Cuddapah)",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 3,
    "lat": 14.47,
    "lng": 78.83
  },
  {
    "c": "DRU",
    "n": "Kadur Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 2,
    "lat": 13.55,
    "lng": 76.01
  },
  {
    "c": "CLG",
    "n": "Kahalgaon",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 3,
    "lat": 25.27,
    "lng": 87.24
  },
  {
    "c": "KJH",
    "n": "Kajalgaon",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 2,
    "lat": 25.26,
    "lng": 87.24
  },
  {
    "c": "COA",
    "n": "Kakinada Port",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 16.94,
    "lng": 82.25
  },
  {
    "c": "CCT",
    "n": "Kakinada Town",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 16.96,
    "lng": 82.23
  },
  {
    "c": "KLBG",
    "n": "Kalaburagi (Gulbarga)",
    "s": "Karnataka",
    "z": "CR",
    "d": "Solapur",
    "pf": 4,
    "lat": 17.33,
    "lng": 76.83
  },
  {
    "c": "KLK",
    "n": "Kalka",
    "s": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "pf": 4,
    "lat": 30.84,
    "lng": 76.93
  },
  {
    "c": "KYN",
    "n": "Kalyan Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 8,
    "lat": 19.24,
    "lng": 73.13
  },
  {
    "c": "KYQ",
    "n": "Kamakhya Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 5,
    "lat": 26.15,
    "lng": 91.7
  },
  {
    "c": "KZE",
    "n": "Kanhangad",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 12.31,
    "lng": 75.09
  },
  {
    "c": "KKW",
    "n": "Kankavali",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 16.26,
    "lng": 73.71
  },
  {
    "c": "KJN",
    "n": "Kannauj",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 3,
    "lat": 27.05,
    "lng": 79.92
  },
  {
    "c": "CAPE",
    "n": "Kanniyakumari",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 4,
    "lat": 8.08,
    "lng": 77.55
  },
  {
    "c": "CAN",
    "n": "Kannur",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 4,
    "lat": 11.87,
    "lng": 75.37
  },
  {
    "c": "CPA",
    "n": "Kanpur Anwarganj",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 3,
    "lat": 26.46,
    "lng": 80.33
  },
  {
    "c": "CNB",
    "n": "Kanpur Central",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 10,
    "lat": 26.45,
    "lng": 80.35
  },
  {
    "c": "KRD",
    "n": "Karad",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 2,
    "lat": 17.29,
    "lng": 74.2
  },
  {
    "c": "KKDI",
    "n": "Karaikkudi Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 3,
    "lat": 10.07,
    "lng": 78.78
  },
  {
    "c": "KRMI",
    "n": "Karmali",
    "s": "Goa",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 15.49,
    "lng": 73.92
  },
  {
    "c": "KARN",
    "n": "Karnal",
    "city": "Karnal",
    "st": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "cat": "C",
    "pf": 3,
    "tr": 50
  },
  {
    "c": "KUN",
    "n": "Karnal",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 29.69,
    "lng": 76.98
  },
  {
    "c": "KRR",
    "n": "Karur Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 5,
    "lat": 10.95,
    "lng": 78.08
  },
  {
    "c": "KAWR",
    "n": "Karwar",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 14.82,
    "lng": 74.15
  },
  {
    "c": "KGQ",
    "n": "Kasaragod",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 3,
    "lat": 12.5,
    "lng": 74.99
  },
  {
    "c": "KSJ",
    "n": "Kasganj Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 5,
    "lat": 27.81,
    "lng": 78.65
  },
  {
    "c": "KPV",
    "n": "Kashipur Jn",
    "s": "Uttarakhand",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 4,
    "lat": 29.21,
    "lng": 78.96
  },
  {
    "c": "KGM",
    "n": "Kathgodam",
    "s": "Uttarakhand",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 3,
    "lat": 29.27,
    "lng": 79.54
  },
  {
    "c": "KTHU",
    "n": "Kathua",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 32.37,
    "lng": 75.52
  },
  {
    "c": "KIR",
    "n": "Katihar Jn",
    "s": "Bihar",
    "z": "NFR",
    "d": "Katihar",
    "pf": 8,
    "lat": 25.55,
    "lng": 87.57
  },
  {
    "c": "KTE",
    "n": "Katni Jn",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 6,
    "lat": 23.83,
    "lng": 80.4
  },
  {
    "c": "KMZ",
    "n": "Katni Murwara",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 5,
    "lat": 23.84,
    "lng": 80.39
  },
  {
    "c": "KPD",
    "n": "Katpadi Jn (Vellore)",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 5,
    "lat": 12.97,
    "lng": 79.13
  },
  {
    "c": "KVZ",
    "n": "Kavali",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 2,
    "lat": 14.91,
    "lng": 79.99
  },
  {
    "c": "KYJ",
    "n": "Kayamkulam Jn",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 5,
    "lat": 9.17,
    "lng": 76.5
  },
  {
    "c": "KZJ",
    "n": "Kazipet Jn",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 4,
    "lat": 17.97,
    "lng": 79.51
  },
  {
    "c": "KGG",
    "n": "Khagaria Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 3,
    "lat": 25.5,
    "lng": 86.47
  },
  {
    "c": "KLD",
    "n": "Khalilabad",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 2,
    "lat": 26.78,
    "lng": 83.07
  },
  {
    "c": "KMT",
    "n": "Khammam",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 3,
    "lat": 17.25,
    "lng": 80.15
  },
  {
    "c": "KNW",
    "n": "Khandwa Jn",
    "s": "Madhya Pradesh",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 5,
    "lat": 21.83,
    "lng": 76.35
  },
  {
    "c": "KNN",
    "n": "Khanna",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 2,
    "lat": 30.7,
    "lng": 76.22
  },
  {
    "c": "KGP",
    "n": "Kharagpur Jn",
    "s": "West Bengal",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 12,
    "lat": 22.33,
    "lng": 87.32
  },
  {
    "c": "KHED",
    "n": "Khed",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 17.72,
    "lng": 73.39
  },
  {
    "c": "KUR",
    "n": "Khurda Road Jn",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 7,
    "lat": 20.18,
    "lng": 85.73
  },
  {
    "c": "KRJ",
    "n": "Khurja Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 4,
    "lat": 28.25,
    "lng": 77.85
  },
  {
    "c": "KNE",
    "n": "Kishanganj",
    "s": "Bihar",
    "z": "NFR",
    "d": "Katihar",
    "pf": 3,
    "lat": 26.1,
    "lng": 87.94
  },
  {
    "c": "KIUL",
    "n": "Kiul Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 5,
    "lat": 25.17,
    "lng": 86.08
  },
  {
    "c": "KCVL",
    "n": "Kochuveli",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 6,
    "lat": 8.51,
    "lng": 76.9
  },
  {
    "c": "KQR",
    "n": "Koderma Jn",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 7,
    "lat": 24.47,
    "lng": 85.59
  },
  {
    "c": "KOJ",
    "n": "Kokrajhar",
    "s": "Assam",
    "z": "NFR",
    "d": "Alipurduar",
    "pf": 3,
    "lat": 26.4,
    "lng": 90.27
  },
  {
    "c": "KOP",
    "n": "Kolhapur CSMT",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 3,
    "lat": 16.7,
    "lng": 74.24
  },
  {
    "c": "KOAA",
    "n": "Kolkata Chitpur",
    "s": "West Bengal",
    "z": "ER",
    "d": "Sealdah",
    "pf": 5,
    "lat": 22.6,
    "lng": 88.38
  },
  {
    "c": "QLN",
    "n": "Kollam Jn (Quilon)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 6,
    "lat": 8.88,
    "lng": 76.6
  },
  {
    "c": "KBL",
    "n": "Koppal",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 2,
    "lat": 15.35,
    "lng": 76.15
  },
  {
    "c": "KRBA",
    "n": "Korba",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 3,
    "lat": 22.36,
    "lng": 82.68
  },
  {
    "c": "KSV",
    "n": "Kosi Kalan",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "pf": 3,
    "lat": 27.79,
    "lng": 77.43
  },
  {
    "c": "KKP",
    "n": "Kot Kapura Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 30.58,
    "lng": 74.83
  },
  {
    "c": "KOTA",
    "n": "Kota Jn",
    "city": "Kota",
    "st": "Rajasthan",
    "z": "WCR",
    "d": "Kota",
    "cat": "A1",
    "pf": 7,
    "tr": 120
  },
  {
    "c": "KTYM",
    "n": "Kottayam",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 5,
    "lat": 9.59,
    "lng": 76.53
  },
  {
    "c": "CVP",
    "n": "Kovilpatti",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 2,
    "lat": 9.17,
    "lng": 77.87
  },
  {
    "c": "CLT",
    "n": "Kozhikode Main",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 4,
    "lat": 11.25,
    "lng": 75.78
  },
  {
    "c": "KJM",
    "n": "Krishnarajapuram",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 4,
    "lat": 13,
    "lng": 77.68
  },
  {
    "c": "SBC",
    "n": "KSR Bengaluru City",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 10,
    "lat": 12.98,
    "lng": 77.57
  },
  {
    "c": "KUD",
    "n": "Kudachi",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 2,
    "lat": 16.53,
    "lng": 74.84
  },
  {
    "c": "KUDL",
    "n": "Kudal",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 16.02,
    "lng": 73.69
  },
  {
    "c": "KTQ",
    "n": "Kudra",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 3,
    "lat": 25.04,
    "lng": 83.84
  },
  {
    "c": "KMU",
    "n": "Kumbakonam",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 3,
    "lat": 10.96,
    "lng": 79.39
  },
  {
    "c": "KT",
    "n": "Kumta",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 14.43,
    "lng": 74.41
  },
  {
    "c": "KUDA",
    "n": "Kundapura",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 13.63,
    "lng": 74.72
  },
  {
    "c": "KWV",
    "n": "Kurduvadi Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Solapur",
    "pf": 4,
    "lat": 18.09,
    "lng": 75.44
  },
  {
    "c": "CLA",
    "n": "Kurla Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 8,
    "lat": 19.07,
    "lng": 72.89
  },
  {
    "c": "KRNT",
    "n": "Kurnool City",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Hyderabad",
    "pf": 3,
    "lat": 15.83,
    "lng": 78.04
  },
  {
    "c": "KKDE",
    "n": "Kurukshetra Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 5,
    "lat": 29.97,
    "lng": 76.88
  },
  {
    "c": "KTU",
    "n": "Kuttippuram",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 10.84,
    "lng": 76.03
  },
  {
    "c": "LMP",
    "n": "Lakhimpur",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 3,
    "lat": 27.95,
    "lng": 80.78
  },
  {
    "c": "LAR",
    "n": "Lalitpur Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 3,
    "lat": 24.69,
    "lng": 78.41
  },
  {
    "c": "LKU",
    "n": "Lalkuan Jn",
    "s": "Uttarakhand",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 5,
    "lat": 29.08,
    "lng": 79.52
  },
  {
    "c": "LPI",
    "n": "Lingampalli",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 6,
    "lat": 17.49,
    "lng": 78.32
  },
  {
    "c": "LTT",
    "n": "Lokmanya Tilak Terminus",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 5,
    "lat": 19.07,
    "lng": 72.89
  },
  {
    "c": "LNL",
    "n": "Lonavala",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 3,
    "lat": 18.75,
    "lng": 73.41
  },
  {
    "c": "LKR",
    "n": "Luckeesarai Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 4,
    "lat": 25.18,
    "lng": 86.09
  },
  {
    "c": "LKO",
    "n": "Lucknow Charbagh",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 9,
    "lat": 26.83,
    "lng": 80.92
  },
  {
    "c": "LJN",
    "n": "Lucknow Junction NER",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 6,
    "lat": 26.83,
    "lng": 80.92
  },
  {
    "c": "LDH",
    "n": "Ludhiana Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 7,
    "lat": 30.91,
    "lng": 75.86
  },
  {
    "c": "LMG",
    "n": "Lumding Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 6,
    "lat": 25.75,
    "lng": 93.17
  },
  {
    "c": "MBDP",
    "n": "Maa Belha Devi Dham Pratapgarh",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 3,
    "lat": 25.92,
    "lng": 81.99
  },
  {
    "c": "MML",
    "n": "Madan Mahal",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 23.15,
    "lng": 79.91
  },
  {
    "c": "MAO",
    "n": "Madgaon Jn",
    "s": "Goa",
    "z": "KR",
    "d": "Karwar",
    "pf": 4,
    "lat": 15.27,
    "lng": 73.97
  },
  {
    "c": "MBI",
    "n": "Madhubani",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.36,
    "lng": 86.08
  },
  {
    "c": "MDP",
    "n": "Madhupur Jn",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Asansol",
    "pf": 5,
    "lat": 24.26,
    "lng": 86.65
  },
  {
    "c": "MDU",
    "n": "Madurai Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 8,
    "lat": 9.92,
    "lng": 78.11
  },
  {
    "c": "MABD",
    "n": "Mahbubabad",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 2,
    "lat": 17.6,
    "lng": 80
  },
  {
    "c": "MBNR",
    "n": "Mahbubnagar",
    "s": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "pf": 3,
    "lat": 16.74,
    "lng": 77.99
  },
  {
    "c": "MSK",
    "n": "Maheshkhunt",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 2,
    "lat": 25.49,
    "lng": 86.67
  },
  {
    "c": "MBA",
    "n": "Mahoba Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 3,
    "lat": 25.29,
    "lng": 79.87
  },
  {
    "c": "MYR",
    "n": "Maihar",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 24.27,
    "lng": 80.76
  },
  {
    "c": "MLN",
    "n": "Mailani Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 3,
    "lat": 28.29,
    "lng": 80.35
  },
  {
    "c": "MLDT",
    "n": "Malda Town",
    "s": "West Bengal",
    "z": "ER",
    "d": "Malda",
    "pf": 6,
    "lat": 25.01,
    "lng": 88.14
  },
  {
    "c": "MKU",
    "n": "Malkapur",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 3,
    "lat": 20.89,
    "lng": 76.2
  },
  {
    "c": "MNM",
    "n": "Manamadurai Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 5,
    "lat": 9.7,
    "lng": 78.45
  },
  {
    "c": "MCI",
    "n": "Mancherial",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 2,
    "lat": 18.87,
    "lng": 79.46
  },
  {
    "c": "MUV",
    "n": "Manduadih",
    "city": "Varanasi",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "cat": "B",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "MYA",
    "n": "Mandya",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 2,
    "lat": 12.52,
    "lng": 76.89
  },
  {
    "c": "MAQ",
    "n": "Mangaluru Central",
    "s": "Karnataka",
    "z": "SR",
    "d": "Palakkad",
    "pf": 5,
    "lat": 12.86,
    "lng": 74.84
  },
  {
    "c": "MAJN",
    "n": "Mangaluru Jn",
    "s": "Karnataka",
    "z": "SR",
    "d": "Palakkad",
    "pf": 3,
    "lat": 12.87,
    "lng": 74.87
  },
  {
    "c": "MNI",
    "n": "Mangaon",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 18.25,
    "lng": 73.28
  },
  {
    "c": "MKP",
    "n": "Manikpur Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 4,
    "lat": 25.04,
    "lng": 81.12
  },
  {
    "c": "MMR",
    "n": "Manmad Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 6,
    "lat": 20.25,
    "lng": 74.44
  },
  {
    "c": "MNE",
    "n": "Mansi Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 4,
    "lat": 25.53,
    "lng": 86.58
  },
  {
    "c": "MXN",
    "n": "Mariani Jn (Jorhat)",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 3,
    "lat": 26.66,
    "lng": 94.33
  },
  {
    "c": "MCTM",
    "n": "Martyr Captain Tushar Mahajan (Udhampur)",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 32.93,
    "lng": 75.14
  },
  {
    "c": "MTHR",
    "n": "Mathura Jn",
    "city": "Mathura",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "cat": "B",
    "pf": 6,
    "tr": 80
  },
  {
    "c": "MTJ",
    "n": "Mathura Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "pf": 10,
    "lat": 27.49,
    "lng": 77.67
  },
  {
    "c": "MAU",
    "n": "Mau Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 4,
    "lat": 25.95,
    "lng": 83.56
  },
  {
    "c": "MVLK",
    "n": "Mavelikara",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.27,
    "lng": 76.55
  },
  {
    "c": "MV",
    "n": "Mayiladuturai Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 5,
    "lat": 11.1,
    "lng": 79.65
  },
  {
    "c": "MUT",
    "n": "Meerut Cantt",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "pf": 2,
    "lat": 29,
    "lng": 77.72
  },
  {
    "c": "MTC",
    "n": "Meerut City",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "pf": 5,
    "lat": 28.98,
    "lng": 77.7
  },
  {
    "c": "MNO",
    "n": "Mehnar Road",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 2,
    "lat": 25.59,
    "lng": 85.5
  },
  {
    "c": "MSH",
    "n": "Mehsana Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 6,
    "lat": 23.6,
    "lng": 72.39
  },
  {
    "c": "MDN",
    "n": "Midnapore",
    "s": "West Bengal",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 3,
    "lat": 22.42,
    "lng": 87.32
  },
  {
    "c": "MRJ",
    "n": "Miraj Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 6,
    "lat": 16.83,
    "lng": 74.65
  },
  {
    "c": "MZP",
    "n": "Mirzapur",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 3,
    "lat": 25.15,
    "lng": 82.57
  },
  {
    "c": "MKA",
    "n": "Mokama",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 4,
    "lat": 25.4,
    "lng": 85.92
  },
  {
    "c": "MB",
    "n": "Moradabad Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 7,
    "lat": 28.84,
    "lng": 78.78
  },
  {
    "c": "MRA",
    "n": "Morena",
    "s": "Madhya Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 3,
    "lat": 26.5,
    "lng": 77.99
  },
  {
    "c": "BCT",
    "n": "Mumbai Central",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "WR",
    "d": "Mumbai",
    "cat": "A1",
    "pf": 7,
    "tr": 145
  },
  {
    "c": "MMCT",
    "n": "Mumbai Central",
    "s": "Maharashtra",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 9,
    "lat": 18.97,
    "lng": 72.82
  },
  {
    "c": "CSTM",
    "n": "Mumbai CST",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Mumbai",
    "cat": "A1",
    "pf": 18,
    "tr": 330
  },
  {
    "c": "MRDW",
    "n": "Murdeshwar",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 14.09,
    "lng": 74.49
  },
  {
    "c": "MURI",
    "n": "Muri Jn",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Ranchi",
    "pf": 3,
    "lat": 23.37,
    "lng": 85.86
  },
  {
    "c": "MOZ",
    "n": "Muzaffarnagar",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 29.47,
    "lng": 77.71
  },
  {
    "c": "MFP",
    "n": "Muzaffarpur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 6,
    "lat": 26.12,
    "lng": 85.38
  },
  {
    "c": "MYS",
    "n": "Mysuru Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 6,
    "lat": 12.31,
    "lng": 76.65
  },
  {
    "c": "ND",
    "n": "Nadiad Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 5,
    "lat": 22.7,
    "lng": 72.86
  },
  {
    "c": "NAD",
    "n": "Nagda Jn",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 5,
    "lat": 23.45,
    "lng": 75.41
  },
  {
    "c": "NCJ",
    "n": "Nagercoil Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 6,
    "lat": 8.18,
    "lng": 77.44
  },
  {
    "c": "NGP",
    "n": "Nagpur Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 8,
    "lat": 21.15,
    "lng": 79.08
  },
  {
    "c": "NHLN",
    "n": "Naharlagun (Itanagar)",
    "s": "Arunachal Pradesh",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 3,
    "lat": 27.1,
    "lng": 93.69
  },
  {
    "c": "NLV",
    "n": "Nalbari",
    "s": "Assam",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 2,
    "lat": 26.44,
    "lng": 91.43
  },
  {
    "c": "NAND",
    "n": "Nandyal",
    "city": "Nandyal",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "NDL",
    "n": "Nandyal Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntur",
    "pf": 3,
    "lat": 15.48,
    "lng": 78.48
  },
  {
    "c": "NKE",
    "n": "Narkatiaganj Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 4,
    "lat": 27.1,
    "lng": 84.47
  },
  {
    "c": "NDPM",
    "n": "Narmadapuram (Hoshangabad)",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 3,
    "lat": 22.75,
    "lng": 77.72
  },
  {
    "c": "NU",
    "n": "Narsinghpur",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 2,
    "lat": 22.95,
    "lng": 79.19
  },
  {
    "c": "NRW",
    "n": "Narwana Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 3,
    "lat": 29.6,
    "lng": 76.12
  },
  {
    "c": "NASH",
    "n": "Nashik Road",
    "city": "Nashik",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "cat": "B",
    "pf": 4,
    "tr": 65
  },
  {
    "c": "NK",
    "n": "Nashik Road",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 4,
    "lat": 19.96,
    "lng": 73.84
  },
  {
    "c": "NNA",
    "n": "Naugachia",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 2,
    "lat": 25.4,
    "lng": 87.1
  },
  {
    "c": "NVS",
    "n": "Navsari",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 3,
    "lat": 20.95,
    "lng": 72.93
  },
  {
    "c": "NWD",
    "n": "Nawada",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 3,
    "lat": 24.88,
    "lng": 85.54
  },
  {
    "c": "NLR",
    "n": "Nellore",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 4,
    "lat": 14.45,
    "lng": 79.99
  },
  {
    "c": "GMO",
    "n": "Netaji SC Bose Jn Gomoh",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 6,
    "lat": 23.87,
    "lng": 86.15
  },
  {
    "c": "NOQ",
    "n": "New Alipurduar",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Alipurduar",
    "pf": 3,
    "lat": 26.51,
    "lng": 89.54
  },
  {
    "c": "NBQ",
    "n": "New Bongaigaon Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 6,
    "lat": 26.5,
    "lng": 90.54
  },
  {
    "c": "NCB",
    "n": "New Cooch Behar",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Alipurduar",
    "pf": 5,
    "lat": 26.34,
    "lng": 89.46
  },
  {
    "c": "NDLS",
    "n": "New Delhi",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 16,
    "lat": 28.64,
    "lng": 77.22
  },
  {
    "c": "NFK",
    "n": "New Farakka Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Malda",
    "pf": 3,
    "lat": 24.81,
    "lng": 87.91
  },
  {
    "c": "NJP",
    "n": "New Jalpaiguri Jn (Siliguri)",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Katihar",
    "pf": 8,
    "lat": 26.68,
    "lng": 88.44
  },
  {
    "c": "NTSK",
    "n": "New Tinsukia Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 4,
    "lat": 27.49,
    "lng": 95.36
  },
  {
    "c": "NDD",
    "n": "Nidadavolu Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 16.91,
    "lng": 81.67
  },
  {
    "c": "NZB",
    "n": "Nizamabad Jn",
    "s": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "pf": 4,
    "lat": 18.67,
    "lng": 78.1
  },
  {
    "c": "OKHA",
    "n": "Okha",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 3,
    "lat": 22.47,
    "lng": 69.07
  },
  {
    "c": "DLI",
    "n": "Old Delhi Jn",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 16,
    "lat": 28.66,
    "lng": 77.23
  },
  {
    "c": "OGL",
    "n": "Ongole",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 15.5,
    "lng": 80.05
  },
  {
    "c": "ORAI",
    "n": "Orai",
    "city": "Orai",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "cat": "C",
    "pf": 2,
    "tr": 25
  },
  {
    "c": "OTP",
    "n": "Ottappalam",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 10.77,
    "lng": 76.38
  },
  {
    "c": "PGT",
    "n": "Palakkad Jn (Olavakkot)",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 5,
    "lat": 10.8,
    "lng": 76.65
  },
  {
    "c": "PNU",
    "n": "Palanpur Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 4,
    "lat": 24.17,
    "lng": 72.43
  },
  {
    "c": "PSA",
    "n": "Palasa",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 3,
    "lat": 18.77,
    "lng": 84.41
  },
  {
    "c": "PWL",
    "n": "Palwal",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 5,
    "lat": 28.14,
    "lng": 77.33
  },
  {
    "c": "PAN",
    "n": "Panagarh",
    "s": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "pf": 3,
    "lat": 23.45,
    "lng": 87.44
  },
  {
    "c": "PNP",
    "n": "Panipat Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 5,
    "lat": 29.39,
    "lng": 76.97
  },
  {
    "c": "PNVL",
    "n": "Panvel Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 7,
    "lat": 18.99,
    "lng": 73.12
  },
  {
    "c": "PNME",
    "n": "Parasnath",
    "s": "Jharkhand",
    "z": "ECR",
    "d": "Dhanbad",
    "pf": 4,
    "lat": 23.97,
    "lng": 86.03
  },
  {
    "c": "PBN",
    "n": "Parbhani Jn",
    "s": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "pf": 3,
    "lat": 19.26,
    "lng": 76.78
  },
  {
    "c": "PTKC",
    "n": "Pathankot Cantt",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 32.25,
    "lng": 75.65
  },
  {
    "c": "PTK",
    "n": "Pathankot Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 4,
    "lat": 32.27,
    "lng": 75.64
  },
  {
    "c": "PTA",
    "n": "Patiala",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 3,
    "lat": 30.34,
    "lng": 76.4
  },
  {
    "c": "PPTA",
    "n": "Patliputra Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 5,
    "lat": 25.64,
    "lng": 85.09
  },
  {
    "c": "PNBE",
    "n": "Patna Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 10,
    "lat": 25.6,
    "lng": 85.13
  },
  {
    "c": "PAY",
    "n": "Payyanur",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 12.1,
    "lng": 75.2
  },
  {
    "c": "PGW",
    "n": "Phagwara Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 31.22,
    "lng": 75.77
  },
  {
    "c": "PHD",
    "n": "Phaphund",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 4,
    "lat": 26.56,
    "lng": 79.46
  },
  {
    "c": "PBE",
    "n": "Pilibhit Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 4,
    "lat": 28.63,
    "lng": 79.8
  },
  {
    "c": "PPI",
    "n": "Pipariya",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 22.76,
    "lng": 78.35
  },
  {
    "c": "PTJ",
    "n": "Podanur Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 5,
    "lat": 10.96,
    "lng": 76.99
  },
  {
    "c": "PBR",
    "n": "Porbandar",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 3,
    "lat": 21.64,
    "lng": 69.61
  },
  {
    "c": "PCOI",
    "n": "Prayagraj Chheoki",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 4,
    "lat": 25.4,
    "lng": 81.86
  },
  {
    "c": "ALD",
    "n": "Prayagraj Jn",
    "city": "Prayagraj",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "cat": "A1",
    "pf": 10,
    "tr": 210
  },
  {
    "c": "PRYJ",
    "n": "Prayagraj Jn (Allahabad)",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 10,
    "lat": 25.45,
    "lng": 81.83
  },
  {
    "c": "PRRB",
    "n": "Prayagraj Rambag",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 3,
    "lat": 25.44,
    "lng": 81.85
  },
  {
    "c": "DDU",
    "n": "Pt Deen Dayal Upadhyaya Jn (Mughalsarai)",
    "s": "Uttar Pradesh",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 8,
    "lat": 25.28,
    "lng": 83.12
  },
  {
    "c": "PDY",
    "n": "Puducherry (Pondicherry)",
    "s": "Puducherry",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 4,
    "lat": 11.93,
    "lng": 79.83
  },
  {
    "c": "PDKT",
    "n": "Pudukkottai",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 2,
    "lat": 10.38,
    "lng": 78.82
  },
  {
    "c": "PUNE",
    "n": "Pune Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 6,
    "lat": 18.53,
    "lng": 73.87
  },
  {
    "c": "MAS",
    "n": "Puratchi Thalaivar Dr. M.G.R. Chennai Central",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 17,
    "lat": 13.08,
    "lng": 80.28
  },
  {
    "c": "PURI",
    "n": "Puri",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Khurda Road",
    "pf": 8,
    "lat": 19.81,
    "lng": 85.83
  },
  {
    "c": "PAU",
    "n": "Purna Jn",
    "s": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "pf": 4,
    "lat": 19.18,
    "lng": 77.05
  },
  {
    "c": "PRNA",
    "n": "Purnea Jn",
    "s": "Bihar",
    "z": "NFR",
    "d": "Katihar",
    "pf": 3,
    "lat": 25.77,
    "lng": 87.47
  },
  {
    "c": "PRR",
    "n": "Purulia Jn",
    "s": "West Bengal",
    "z": "SER",
    "d": "Adra",
    "pf": 4,
    "lat": 23.33,
    "lng": 86.37
  },
  {
    "c": "RBL",
    "n": "Rae Bareli Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 4,
    "lat": 26.23,
    "lng": 81.24
  },
  {
    "c": "RFJ",
    "n": "RafiGanj",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 3,
    "lat": 24.82,
    "lng": 84.65
  },
  {
    "c": "RC",
    "n": "Raichur Jn",
    "s": "Karnataka",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 3,
    "lat": 16.2,
    "lng": 77.35
  },
  {
    "c": "RIG",
    "n": "Raigarh",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "pf": 3,
    "lat": 21.89,
    "lng": 83.4
  },
  {
    "c": "R",
    "n": "Raipur Jn",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Raipur",
    "pf": 7,
    "lat": 21.26,
    "lng": 81.63
  },
  {
    "c": "RWL",
    "n": "Raiwala Jn",
    "s": "Uttarakhand",
    "z": "NR",
    "d": "Moradabad",
    "pf": 2,
    "lat": 30.01,
    "lng": 78.23
  },
  {
    "c": "RKM",
    "n": "Raja Ki Mandi",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "pf": 2,
    "lat": 27.2,
    "lng": 77.99
  },
  {
    "c": "RJY",
    "n": "Rajahmundry",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 17,
    "lng": 81.78
  },
  {
    "c": "RJPB",
    "n": "Rajendra Nagar Terminal",
    "s": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "pf": 4,
    "lat": 25.59,
    "lng": 85.16
  },
  {
    "c": "RJT",
    "n": "Rajkot Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "pf": 5,
    "lat": 22.31,
    "lng": 70.8
  },
  {
    "c": "RJN",
    "n": "Rajnandgaon",
    "s": "Chhattisgarh",
    "z": "SECR",
    "d": "Nagpur SECR",
    "pf": 3,
    "lat": 21.1,
    "lng": 81.04
  },
  {
    "c": "RPJ",
    "n": "Rajpura Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 3,
    "lat": 30.48,
    "lng": 76.59
  },
  {
    "c": "RDM",
    "n": "Ramagundam",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 3,
    "lat": 18.76,
    "lng": 79.52
  },
  {
    "c": "RMD",
    "n": "Ramanathapuram",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 3,
    "lat": 9.37,
    "lng": 78.83
  },
  {
    "c": "RMM",
    "n": "Rameswaram",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 4,
    "lat": 9.28,
    "lng": 79.31
  },
  {
    "c": "RMR",
    "n": "Ramnagar",
    "s": "Uttarakhand",
    "z": "NER",
    "d": "Izzatnagar",
    "pf": 2,
    "lat": 29.39,
    "lng": 79.13
  },
  {
    "c": "RMU",
    "n": "Rampur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 28.81,
    "lng": 79.03
  },
  {
    "c": "RPH",
    "n": "Rampurhat Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 3,
    "lat": 24.17,
    "lng": 87.78
  },
  {
    "c": "RNC",
    "n": "Ranchi Jn",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Ranchi",
    "pf": 6,
    "lat": 23.35,
    "lng": 85.33
  },
  {
    "c": "RNY",
    "n": "Rangiya Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Rangiya",
    "pf": 5,
    "lat": 26.45,
    "lng": 91.62
  },
  {
    "c": "RKMP",
    "n": "Rani Kamlapati (Habibganj)",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 5,
    "lat": 23.21,
    "lng": 77.44
  },
  {
    "c": "RNR",
    "n": "Ranibennur",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "pf": 2,
    "lat": 14.62,
    "lng": 75.62
  },
  {
    "c": "RNG",
    "n": "Raniganj",
    "s": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "pf": 3,
    "lat": 23.61,
    "lng": 87.11
  },
  {
    "c": "RTM",
    "n": "Ratlam Jn",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 7,
    "lat": 23.34,
    "lng": 75.05
  },
  {
    "c": "RN",
    "n": "Ratnagiri",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 3,
    "lat": 16.98,
    "lng": 73.34
  },
  {
    "c": "RXL",
    "n": "Raxaul Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 4,
    "lat": 26.98,
    "lng": 84.85
  },
  {
    "c": "RGDA",
    "n": "Rayagada",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Rayagada",
    "pf": 4,
    "lat": 19.16,
    "lng": 83.42
  },
  {
    "c": "RU",
    "n": "Renigunta Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 6,
    "lat": 13.65,
    "lng": 79.52
  },
  {
    "c": "REWA",
    "n": "Rewa",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 24.54,
    "lng": 81.3
  },
  {
    "c": "RE",
    "n": "Rewari Jn",
    "s": "Haryana",
    "z": "NWR",
    "d": "Jaipur",
    "pf": 8,
    "lat": 28.2,
    "lng": 76.62
  },
  {
    "c": "RKSH",
    "n": "Rishikesh",
    "city": "Rishikesh",
    "st": "Uttarakhand",
    "z": "NR",
    "d": "Ambala",
    "cat": "C",
    "pf": 2,
    "tr": 20
  },
  {
    "c": "ROHA",
    "n": "Roha",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 3,
    "lat": 18.43,
    "lng": 73.12
  },
  {
    "c": "ROK",
    "n": "Rohtak Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 5,
    "lat": 28.89,
    "lng": 76.59
  },
  {
    "c": "RK",
    "n": "Roorkee",
    "s": "Uttarakhand",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 29.85,
    "lng": 77.89
  },
  {
    "c": "ROU",
    "n": "Rourkela Jn",
    "s": "Odisha",
    "z": "SER",
    "d": "Chakradharpur",
    "pf": 5,
    "lat": 22.23,
    "lng": 84.87
  },
  {
    "c": "SBIB",
    "n": "Sabarmati BG",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 5,
    "lat": 23.07,
    "lng": 72.58
  },
  {
    "c": "SBID",
    "n": "Sabarmati Jn",
    "city": "Ahmedabad",
    "st": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "cat": "C",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "SZM",
    "n": "Sabzi Mandi",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.67,
    "lng": 77.2
  },
  {
    "c": "SGL",
    "n": "Sagauli Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.77,
    "lng": 84.74
  },
  {
    "c": "SRE",
    "n": "Saharanpur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Ambala",
    "pf": 6,
    "lat": 29.96,
    "lng": 77.54
  },
  {
    "c": "SHC",
    "n": "Saharsa Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 5,
    "lat": 25.88,
    "lng": 86.6
  },
  {
    "c": "SBG",
    "n": "Sahibganj",
    "s": "Jharkhand",
    "z": "ER",
    "d": "Malda",
    "pf": 3,
    "lat": 25.25,
    "lng": 87.64
  },
  {
    "c": "SNSI",
    "n": "Sainagar Shirdi",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Solapur",
    "pf": 3,
    "lat": 19.77,
    "lng": 74.48
  },
  {
    "c": "SNT",
    "n": "Sainthia Jn",
    "s": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "pf": 4,
    "lat": 23.95,
    "lng": 87.68
  },
  {
    "c": "SKI",
    "n": "Sakri Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 3,
    "lat": 26.22,
    "lng": 86.07
  },
  {
    "c": "SA",
    "n": "Salem Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 6,
    "lat": 11.66,
    "lng": 78.13
  },
  {
    "c": "SIOB",
    "n": "Samakhiali Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 3,
    "lat": 23.32,
    "lng": 70.52
  },
  {
    "c": "SLO",
    "n": "Samalkot Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 3,
    "lat": 17.05,
    "lng": 82.17
  },
  {
    "c": "SMTI",
    "n": "Samastipur Jn",
    "city": "Samastipur",
    "st": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "cat": "B",
    "pf": 5,
    "tr": 70
  },
  {
    "c": "SPJ",
    "n": "Samastipur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 7,
    "lat": 25.86,
    "lng": 85.78
  },
  {
    "c": "SMBX",
    "n": "Samba",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 2,
    "lat": 32.55,
    "lng": 75.12
  },
  {
    "c": "SBPY",
    "n": "Sambalpur City",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Sambalpur",
    "pf": 2,
    "lat": 21.5,
    "lng": 83.98
  },
  {
    "c": "SBP",
    "n": "Sambalpur Jn",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Sambalpur",
    "pf": 4,
    "lat": 21.46,
    "lng": 83.97
  },
  {
    "c": "SLI",
    "n": "Sangli",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 2,
    "lat": 16.85,
    "lng": 74.58
  },
  {
    "c": "SAG",
    "n": "Sangrur",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 2,
    "lat": 30.24,
    "lng": 75.84
  },
  {
    "c": "SRC",
    "n": "Santragachi Jn",
    "s": "West Bengal",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 6,
    "lat": 22.58,
    "lng": 88.28
  },
  {
    "c": "SSM",
    "n": "Sasaram Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Pt DD Upadhyaya",
    "pf": 7,
    "lat": 24.95,
    "lng": 84.03
  },
  {
    "c": "STR",
    "n": "Satara",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 3,
    "lat": 17.68,
    "lng": 74.03
  },
  {
    "c": "STA",
    "n": "Satna Jn",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 24.58,
    "lng": 80.83
  },
  {
    "c": "SRT",
    "n": "Satur",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 2,
    "lat": 9.36,
    "lng": 77.92
  },
  {
    "c": "SGO",
    "n": "Saugor (Sagar)",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "pf": 3,
    "lat": 23.83,
    "lng": 78.74
  },
  {
    "c": "SWM",
    "n": "Sawai Madhopur",
    "city": "Sawai Madhopur",
    "st": "Rajasthan",
    "z": "WCR",
    "d": "Kota",
    "cat": "C",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "SWV",
    "n": "Sawantwadi Road",
    "s": "Maharashtra",
    "z": "KR",
    "d": "Ratnagiri",
    "pf": 2,
    "lat": 15.91,
    "lng": 73.82
  },
  {
    "c": "SDAH",
    "n": "Sealdah",
    "s": "West Bengal",
    "z": "ER",
    "d": "Sealdah",
    "pf": 21,
    "lat": 22.57,
    "lng": 88.37
  },
  {
    "c": "SC",
    "n": "Secunderabad Jn",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 10,
    "lat": 17.43,
    "lng": 78.5
  },
  {
    "c": "SEGM",
    "n": "Sewagram Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 5,
    "lat": 20.73,
    "lng": 78.61
  },
  {
    "c": "SHG",
    "n": "Shahganj Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 4,
    "lat": 26.05,
    "lng": 82.69
  },
  {
    "c": "SPN",
    "n": "Shahjahanpur",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Moradabad",
    "pf": 4,
    "lat": 27.88,
    "lng": 79.91
  },
  {
    "c": "SPP",
    "n": "Shahpur Patoree",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 2,
    "lat": 25.59,
    "lng": 85.59
  },
  {
    "c": "SSB",
    "n": "Shakurbasti",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "C",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "SHM",
    "n": "Shalimar",
    "s": "West Bengal",
    "z": "SER",
    "d": "Kharagpur",
    "pf": 5,
    "lat": 22.56,
    "lng": 88.32
  },
  {
    "c": "SEG",
    "n": "Shegaon",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "pf": 2,
    "lat": 20.79,
    "lng": 76.69
  },
  {
    "c": "SKB",
    "n": "Shikohabad Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 3,
    "lat": 27.1,
    "lng": 78.58
  },
  {
    "c": "SML",
    "n": "Shimla",
    "s": "Himachal Pradesh",
    "z": "NR",
    "d": "Ambala",
    "pf": 2,
    "lat": 31.1,
    "lng": 77.16
  },
  {
    "c": "SVJR",
    "n": "Shivajinagar",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "pf": 2,
    "lat": 18.53,
    "lng": 73.85
  },
  {
    "c": "SRR",
    "n": "Shoranur Jn",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 7,
    "lat": 10.76,
    "lng": 76.27
  },
  {
    "c": "SVDK",
    "n": "Shri Mata Vaishno Devi Katra",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 5,
    "lat": 32.99,
    "lng": 74.93
  },
  {
    "c": "SRTN",
    "n": "Sibsagar Town",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 2,
    "lat": 26.98,
    "lng": 94.63
  },
  {
    "c": "SCL",
    "n": "Silchar",
    "s": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "pf": 3,
    "lat": 24.83,
    "lng": 92.8
  },
  {
    "c": "SGUJ",
    "n": "Siliguri Jn",
    "s": "West Bengal",
    "z": "NFR",
    "d": "Katihar",
    "pf": 4,
    "lat": 26.72,
    "lng": 88.42
  },
  {
    "c": "SLGR",
    "n": "Simaluguri Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 3,
    "lat": 26.96,
    "lng": 94.7
  },
  {
    "c": "SCM",
    "n": "Simhachalam",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 3,
    "lat": 17.78,
    "lng": 83.24
  },
  {
    "c": "SKM",
    "n": "Singarayakonda",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 2,
    "lat": 15.25,
    "lng": 80.03
  },
  {
    "c": "SMVB",
    "n": "Sir M. Visvesvaraya Terminal Bengaluru (SMVT)",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 7,
    "lat": 13,
    "lng": 77.65
  },
  {
    "c": "SIR",
    "n": "Sirhind Jn",
    "s": "Punjab",
    "z": "NR",
    "d": "Ambala",
    "pf": 3,
    "lat": 30.64,
    "lng": 76.38
  },
  {
    "c": "SY",
    "n": "Sirkazhi",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 2,
    "lat": 11.23,
    "lng": 79.73
  },
  {
    "c": "SKZR",
    "n": "Sirpur Kaghaznagar",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 3,
    "lat": 19.34,
    "lng": 79.48
  },
  {
    "c": "SSA",
    "n": "Sirsa",
    "s": "Haryana",
    "z": "NWR",
    "d": "Bikaner",
    "pf": 2,
    "lat": 29.53,
    "lng": 75.03
  },
  {
    "c": "SMI",
    "n": "Sitamarhi Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "pf": 4,
    "lat": 26.59,
    "lng": 85.49
  },
  {
    "c": "STP",
    "n": "Sitapur Jn",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "pf": 5,
    "lat": 27.57,
    "lng": 80.68
  },
  {
    "c": "SV",
    "n": "Siwan Jn",
    "s": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "pf": 4,
    "lat": 26.22,
    "lng": 84.36
  },
  {
    "c": "SUR",
    "n": "Solapur",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Solapur",
    "pf": 5,
    "lat": 17.66,
    "lng": 75.9
  },
  {
    "c": "SMNH",
    "n": "Somnath",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 2,
    "lat": 20.89,
    "lng": 70.4
  },
  {
    "c": "SNP",
    "n": "Sonipat Jn",
    "s": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.99,
    "lng": 77.01
  },
  {
    "c": "SEE",
    "n": "Sonpur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 4,
    "lat": 25.7,
    "lng": 85.18
  },
  {
    "c": "CHE",
    "n": "Srikakulam Road",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 3,
    "lat": 18.42,
    "lng": 83.9
  },
  {
    "c": "SINA",
    "n": "Srinagar",
    "s": "Jammu & Kashmir",
    "z": "NR",
    "d": "Firozpur",
    "pf": 3,
    "lat": 34.02,
    "lng": 74.82
  },
  {
    "c": "UBL",
    "n": "SSS Hubballi Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 8,
    "lat": 15.35,
    "lng": 75.14
  },
  {
    "c": "SGG",
    "n": "Sultanganj",
    "s": "Bihar",
    "z": "ER",
    "d": "Malda",
    "pf": 3,
    "lat": 25.24,
    "lng": 86.74
  },
  {
    "c": "SLN",
    "n": "Sultanpur Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 4,
    "lat": 26.26,
    "lng": 82.07
  },
  {
    "c": "ST",
    "n": "Surat",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 4,
    "lat": 21.2,
    "lng": 72.84
  },
  {
    "c": "SUNR",
    "n": "Surendranagar Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "pf": 4,
    "lat": 22.73,
    "lng": 71.64
  },
  {
    "c": "TDD",
    "n": "Tadepalligudem",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 2,
    "lat": 16.81,
    "lng": 81.53
  },
  {
    "c": "TBM",
    "n": "Tambaram",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 8,
    "lat": 12.92,
    "lng": 80.12
  },
  {
    "c": "TATA",
    "n": "Tatanagar Jn (Jamshedpur)",
    "s": "Jharkhand",
    "z": "SER",
    "d": "Chakradharpur",
    "pf": 6,
    "lat": 22.77,
    "lng": 86.2
  },
  {
    "c": "TEL",
    "n": "Tenali Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 5,
    "lat": 16.24,
    "lng": 80.64
  },
  {
    "c": "TLY",
    "n": "Thalassery",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 11.75,
    "lng": 75.49
  },
  {
    "c": "THB",
    "n": "Thana Bihpur Jn",
    "s": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "pf": 3,
    "lat": 25.39,
    "lng": 86.91
  },
  {
    "c": "TNA",
    "n": "Thane",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Mumbai CR",
    "pf": 10,
    "lat": 19.19,
    "lng": 72.97
  },
  {
    "c": "TJ",
    "n": "Thanjavur Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 5,
    "lat": 10.78,
    "lng": 79.13
  },
  {
    "c": "THE",
    "n": "Thawe Jn",
    "s": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "pf": 3,
    "lat": 26.43,
    "lng": 84.38
  },
  {
    "c": "TVC",
    "n": "Thiruvananthapuram Central (Trivandrum)",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 5,
    "lat": 8.49,
    "lng": 76.95
  },
  {
    "c": "THVM",
    "n": "Thivim",
    "s": "Goa",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 15.63,
    "lng": 73.84
  },
  {
    "c": "TRTR",
    "n": "Thrippunithura",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.95,
    "lng": 76.35
  },
  {
    "c": "TCR",
    "n": "Thrissur",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 4,
    "lat": 10.52,
    "lng": 76.21
  },
  {
    "c": "TKJ",
    "n": "Tilak Bridge",
    "s": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "pf": 4,
    "lat": 28.62,
    "lng": 77.24
  },
  {
    "c": "TSK",
    "n": "Tinsukia Jn",
    "s": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "pf": 3,
    "lat": 27.5,
    "lng": 95.37
  },
  {
    "c": "TPJ",
    "n": "Tiruchchirappalli Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 8,
    "lat": 10.79,
    "lng": 78.68
  },
  {
    "c": "TEN",
    "n": "Tirunelveli Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 5,
    "lat": 8.73,
    "lng": 77.7
  },
  {
    "c": "TPTY",
    "n": "Tirupati",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 6,
    "lat": 13.63,
    "lng": 79.42
  },
  {
    "c": "TPT",
    "n": "Tirupattur",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 2,
    "lat": 12.49,
    "lng": 78.57
  },
  {
    "c": "TUP",
    "n": "Tiruppur",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "pf": 2,
    "lat": 11.11,
    "lng": 77.35
  },
  {
    "c": "TIR",
    "n": "Tirur",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 3,
    "lat": 10.91,
    "lng": 75.92
  },
  {
    "c": "TRVL",
    "n": "Tiruvalla",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 2,
    "lat": 9.38,
    "lng": 76.57
  },
  {
    "c": "TIG",
    "n": "Titlagarh Jn",
    "s": "Odisha",
    "z": "ECoR",
    "d": "Sambalpur",
    "pf": 4,
    "lat": 20.3,
    "lng": 83.14
  },
  {
    "c": "TK",
    "n": "Tumakuru",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 3,
    "lat": 13.34,
    "lng": 77.1
  },
  {
    "c": "TDL",
    "n": "Tundla Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 5,
    "lat": 27.21,
    "lng": 78.24
  },
  {
    "c": "TUNI",
    "n": "Tuni",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 2,
    "lat": 17.36,
    "lng": 82.55
  },
  {
    "c": "TN",
    "n": "Tuticorin",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 3,
    "lat": 8.8,
    "lng": 78.14
  },
  {
    "c": "UDZ",
    "n": "Udaipur City",
    "city": "Udaipur",
    "st": "Rajasthan",
    "z": "NWR",
    "d": "Ajmer",
    "cat": "B",
    "pf": 5,
    "tr": 45
  },
  {
    "c": "UDN",
    "n": "Udhna Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 3,
    "lat": 21.16,
    "lng": 72.84
  },
  {
    "c": "UD",
    "n": "Udupi",
    "s": "Karnataka",
    "z": "KR",
    "d": "Karwar",
    "pf": 2,
    "lat": 13.35,
    "lng": 74.78
  },
  {
    "c": "UJN",
    "n": "Ujjain Jn",
    "s": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "pf": 8,
    "lat": 23.18,
    "lng": 75.78
  },
  {
    "c": "UNAHP",
    "n": "Una Himachal",
    "city": "Una",
    "st": "Himachal Pradesh",
    "z": "NR",
    "d": "Ambala",
    "cat": "C",
    "pf": 3,
    "tr": 20
  },
  {
    "c": "UHL",
    "n": "Una Himachal",
    "s": "Himachal Pradesh",
    "z": "NR",
    "d": "Ambala",
    "pf": 3,
    "lat": 31.47,
    "lng": 76.27
  },
  {
    "c": "ON",
    "n": "Unnao Jn",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 5,
    "lat": 26.54,
    "lng": 80.49
  },
  {
    "c": "BDJ",
    "n": "Vadakara",
    "s": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "pf": 2,
    "lat": 11.6,
    "lng": 75.59
  },
  {
    "c": "BRC",
    "n": "Vadodara Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "pf": 7,
    "lat": 22.31,
    "lng": 73.18
  },
  {
    "c": "BL",
    "n": "Valsad",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 5,
    "lat": 20.61,
    "lng": 72.93
  },
  {
    "c": "VN",
    "n": "Vaniyambadi",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "pf": 3,
    "lat": 12.69,
    "lng": 78.62
  },
  {
    "c": "VAPI",
    "n": "Vapi",
    "s": "Gujarat",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 3,
    "lat": 20.37,
    "lng": 72.9
  },
  {
    "c": "BCY",
    "n": "Varanasi City",
    "s": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "pf": 5,
    "lat": 25.33,
    "lng": 83.02
  },
  {
    "c": "BSB",
    "n": "Varanasi Jn (Cantonment)",
    "s": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "pf": 9,
    "lat": 25.33,
    "lng": 82.99
  },
  {
    "c": "VAK",
    "n": "Varkala Sivagiri",
    "s": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "pf": 3,
    "lat": 8.74,
    "lng": 76.71
  },
  {
    "c": "BSR",
    "n": "Vasai Road",
    "s": "Maharashtra",
    "z": "WR",
    "d": "Mumbai WR",
    "pf": 7,
    "lat": 19.38,
    "lng": 72.83
  },
  {
    "c": "VSG",
    "n": "Vasco da Gama",
    "s": "Goa",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 15.39,
    "lng": 73.81
  },
  {
    "c": "VRL",
    "n": "Veraval Jn (Somnath)",
    "s": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "pf": 4,
    "lat": 20.91,
    "lng": 70.36
  },
  {
    "c": "BHS",
    "n": "Vidisha",
    "s": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "pf": 3,
    "lat": 23.53,
    "lng": 77.82
  },
  {
    "c": "BJP",
    "n": "Vijayapura (Bijapur)",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "pf": 3,
    "lat": 16.83,
    "lng": 75.71
  },
  {
    "c": "BZA",
    "n": "Vijayawada Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "pf": 10,
    "lat": 16.52,
    "lng": 80.62
  },
  {
    "c": "VM",
    "n": "Villupuram Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Tiruchchirappalli",
    "pf": 6,
    "lat": 11.94,
    "lng": 79.5
  },
  {
    "c": "BDL",
    "n": "Vindhyachal",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "pf": 3,
    "lat": 25.16,
    "lng": 82.5
  },
  {
    "c": "VG",
    "n": "Viramgam Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "pf": 4,
    "lat": 23.12,
    "lng": 72.04
  },
  {
    "c": "VGLJ",
    "n": "Virangana Lakshmibai Jhansi Jn",
    "s": "Uttar Pradesh",
    "z": "NCR",
    "d": "Jhansi",
    "pf": 8,
    "lat": 25.44,
    "lng": 78.56
  },
  {
    "c": "VPT",
    "n": "Virudhunagar Jn",
    "s": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "pf": 3,
    "lat": 9.58,
    "lng": 77.96
  },
  {
    "c": "VSKP",
    "n": "Visakhapatnam Jn",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 8,
    "lat": 17.72,
    "lng": 83.29
  },
  {
    "c": "VZM",
    "n": "Vizianagaram Jn",
    "s": "Andhra Pradesh",
    "z": "ECoR",
    "d": "Waltair",
    "pf": 5,
    "lat": 18.11,
    "lng": 83.4
  },
  {
    "c": "WADI",
    "n": "Wadi Jn",
    "s": "Karnataka",
    "z": "CR",
    "d": "Solapur",
    "pf": 4,
    "lat": 17.06,
    "lng": 76.99
  },
  {
    "c": "WKR",
    "n": "Wankaner Jn",
    "s": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "pf": 4,
    "lat": 22.61,
    "lng": 70.94
  },
  {
    "c": "WL",
    "n": "Warangal",
    "s": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "pf": 3,
    "lat": 17.98,
    "lng": 79.6
  },
  {
    "c": "WRD",
    "n": "Wardha Jn",
    "city": "Wardha",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Nagpur",
    "cat": "C",
    "pf": 3,
    "tr": 40
  },
  {
    "c": "WR",
    "n": "Wardha Jn",
    "s": "Maharashtra",
    "z": "CR",
    "d": "Nagpur CR",
    "pf": 4,
    "lat": 20.74,
    "lng": 78.6
  },
  {
    "c": "WFD",
    "n": "Whitefield",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 4,
    "lat": 12.99,
    "lng": 77.75
  },
  {
    "c": "YG",
    "n": "Yadgir",
    "s": "Karnataka",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 2,
    "lat": 16.77,
    "lng": 77.14
  },
  {
    "c": "YA",
    "n": "Yerraguntla Jn",
    "s": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "pf": 3,
    "lat": 14.64,
    "lng": 78.54
  },
  {
    "c": "YPR",
    "n": "Yesvantpur Jn",
    "s": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "pf": 6,
    "lat": 13.02,
    "lng": 77.55
  },
  {
    "c": "YNRK",
    "n": "Yog Nagari Rishikesh",
    "s": "Uttarakhand",
    "z": "NR",
    "d": "Moradabad",
    "pf": 3,
    "lat": 30.11,
    "lng": 78.3
  }
];

window.METROS = [
  {
    "id": "delhi",
    "city": "Delhi NCR",
    "name": "Delhi Metro Rail Corporation (DMRC)",
    "color": "#0058bc",
    "icon": "🚇",
    "lines": [
      {
        "n": "Red Line",
        "c": "#E52222",
        "st": 26,
        "from": "Shaheed Sthal",
        "to": "Rithala"
      },
      {
        "n": "Yellow Line",
        "c": "#FFD600",
        "st": 37,
        "from": "Samaypur Badli",
        "to": "HUDA City Centre"
      },
      {
        "n": "Blue Line",
        "c": "#0058bc",
        "st": 50,
        "from": "Dwarka Sec-21",
        "to": "Noida Electronic City"
      },
      {
        "n": "Green Line",
        "c": "#009933",
        "st": 21,
        "from": "Inderlok",
        "to": "Brigadier Hoshiyar Singh"
      },
      {
        "n": "Violet Line",
        "c": "#9B27AF",
        "st": 34,
        "from": "Kashmere Gate",
        "to": "Raja Nahar Singh"
      },
      {
        "n": "Pink Line",
        "c": "#E83E8C",
        "st": 38,
        "from": "Majlis Park",
        "to": "Shiv Vihar"
      },
      {
        "n": "Magenta Line",
        "c": "#990066",
        "st": 25,
        "from": "Janakpuri West",
        "to": "Botanical Garden"
      },
      {
        "n": "Airport Express",
        "c": "#999",
        "st": 6,
        "from": "New Delhi",
        "to": "Dwarka Sec-21"
      },
      {
        "n": "Grey Line",
        "c": "#666",
        "st": 4,
        "from": "Dwarka",
        "to": "Dhansa Bus Stand"
      },
      {
        "n": "Rapid Metro (Gurugram)",
        "c": "#FF6B1A",
        "st": 11,
        "from": "Sikanderpur",
        "to": "Sector 55/56"
      }
    ],
    "totalSt": 390,
    "km": 392,
    "stations": [
      {
        "c": "RAJIV",
        "n": "Rajiv Chowk",
        "l": "Yellow+Blue",
        "int": true
      },
      {
        "c": "NDLS",
        "n": "New Delhi",
        "l": "Yellow+Airport",
        "int": true
      },
      {
        "c": "CSMI",
        "n": "Chandni Chowk",
        "l": "Yellow"
      },
      {
        "c": "AIIMS",
        "n": "AIIMS",
        "l": "Yellow"
      },
      {
        "c": "KASH",
        "n": "Kashmere Gate",
        "l": "Red+Yellow+Violet",
        "int": true
      },
      {
        "c": "IGI3",
        "n": "IGI Airport T3",
        "l": "Airport"
      },
      {
        "c": "HUDA",
        "n": "HUDA City Centre",
        "l": "Yellow"
      },
      {
        "c": "DWK21",
        "n": "Dwarka Sec-21",
        "l": "Blue+Airport",
        "int": true
      },
      {
        "c": "NOIDA",
        "n": "Noida Electronic City",
        "l": "Blue"
      },
      {
        "c": "VAISH",
        "n": "Vaishali",
        "l": "Blue Branch"
      },
      {
        "c": "LAJP",
        "n": "Lajpat Nagar",
        "l": "Violet"
      },
      {
        "c": "BADR",
        "n": "Badarpur Border",
        "l": "Violet"
      },
      {
        "c": "JNKP",
        "n": "Janakpuri West",
        "l": "Blue+Magenta",
        "int": true
      },
      {
        "c": "BGDN",
        "n": "Botanical Garden",
        "l": "Blue+Magenta",
        "int": true
      },
      {
        "c": "MPARK",
        "n": "Majlis Park",
        "l": "Pink"
      },
      {
        "c": "SHIVV",
        "n": "Shiv Vihar",
        "l": "Pink"
      },
      {
        "c": "PATEL",
        "n": "Patel Chowk",
        "l": "Yellow"
      },
      {
        "c": "SAM",
        "n": "Samaypur Badli",
        "l": "Yellow"
      },
      {
        "c": "MUNDK",
        "n": "Mundka",
        "l": "Green"
      },
      {
        "c": "IGT1",
        "n": "IGI Airport T1",
        "l": "Airport"
      }
    ]
  },
  {
    "id": "mumbai",
    "city": "Mumbai",
    "name": "Mumbai Metro (MMRDA / MMRCL)",
    "color": "#E52222",
    "icon": "🚇",
    "lines": [
      {
        "n": "Line 1 (Versova–Ghatkopar)",
        "c": "#E52222",
        "st": 12,
        "from": "Versova",
        "to": "Ghatkopar"
      },
      {
        "n": "Line 2A (Dahisar W–Andheri W)",
        "c": "#FF6B1A",
        "st": 17,
        "from": "Dahisar West",
        "to": "D N Nagar"
      },
      {
        "n": "Line 2B (Andheri E–Mankhurd)",
        "c": "#009933",
        "st": 19,
        "from": "D N Nagar",
        "to": "Mankhurd"
      },
      {
        "n": "Line 6 (Swami Samarth–Vikhroli)",
        "c": "#FFD600",
        "st": 13,
        "from": "Swami Samarth Nagar",
        "to": "Vikhroli"
      },
      {
        "n": "Line 7 (Dahisar E–Andheri E)",
        "c": "#0058bc",
        "st": 13,
        "from": "Dahisar East",
        "to": "Andheri East"
      },
      {
        "n": "Line 7A (Airport Spur)",
        "c": "#9B27AF",
        "st": 2,
        "from": "Andheri East",
        "to": "CSIA Airport"
      }
    ],
    "totalSt": 76,
    "km": 82,
    "stations": [
      {
        "c": "VRSP",
        "n": "Versova",
        "l": "Line 1"
      },
      {
        "c": "ANDHW",
        "n": "Andheri W",
        "l": "Line 1"
      },
      {
        "c": "GHKP",
        "n": "Ghatkopar",
        "l": "Line 1"
      },
      {
        "c": "DHRST",
        "n": "Dahisar W",
        "l": "Line 2A"
      },
      {
        "c": "BORI",
        "n": "Borivali",
        "l": "Line 2A"
      },
      {
        "c": "CSIA",
        "n": "CSIA Airport",
        "l": "Line 7A"
      },
      {
        "c": "DNNG",
        "n": "D N Nagar",
        "l": "Line 2A/2B",
        "int": true
      },
      {
        "c": "VKHR",
        "n": "Vikhroli",
        "l": "Line 6"
      },
      {
        "c": "BNDRA",
        "n": "Bandra",
        "l": "Line 2B"
      },
      {
        "c": "MKRD",
        "n": "Mankhurd",
        "l": "Line 2B"
      }
    ]
  },
  {
    "id": "bangalore",
    "city": "Bengaluru",
    "name": "Namma Metro (BMRCL)",
    "color": "#9B27AF",
    "icon": "🚇",
    "lines": [
      {
        "n": "Purple Line (E–W)",
        "c": "#9B27AF",
        "st": 23,
        "from": "Whitefield",
        "to": "Challaghatta"
      },
      {
        "n": "Green Line (N–S)",
        "c": "#009933",
        "st": 25,
        "from": "Nagasandra",
        "to": "Silk Institute"
      },
      {
        "n": "Yellow Line",
        "c": "#FFD600",
        "st": 16,
        "from": "RV Road",
        "to": "Bommasandra"
      },
      {
        "n": "Pink Line (Phase 3)",
        "c": "#E83E8C",
        "st": 21,
        "from": "Kalena Agrahara",
        "to": "Nagavara"
      }
    ],
    "totalSt": 56,
    "km": 73,
    "stations": [
      {
        "c": "MGRD",
        "n": "MG Road",
        "l": "Purple"
      },
      {
        "c": "CUBI",
        "n": "Cubbon Park",
        "l": "Purple"
      },
      {
        "c": "MJES",
        "n": "Majestic / Kempegowda",
        "l": "Purple+Green",
        "int": true
      },
      {
        "c": "BYPR",
        "n": "Byappanahalli",
        "l": "Purple"
      },
      {
        "c": "WHITEF",
        "n": "Whitefield",
        "l": "Purple"
      },
      {
        "c": "NAGSD",
        "n": "Nagasandra",
        "l": "Green"
      },
      {
        "c": "ELEC",
        "n": "Electronics City",
        "l": "Yellow"
      },
      {
        "c": "SILKI",
        "n": "Silk Institute",
        "l": "Green"
      },
      {
        "c": "KALAGS",
        "n": "Kalena Agrahara",
        "l": "Pink"
      },
      {
        "c": "TRITN",
        "n": "Trinity",
        "l": "Purple"
      }
    ]
  },
  {
    "id": "chennai",
    "city": "Chennai",
    "name": "Chennai Metro Rail (CMRL)",
    "color": "#E83E8C",
    "icon": "🚇",
    "lines": [
      {
        "n": "Blue Line (Washermenpet–Airport)",
        "c": "#0058bc",
        "st": 18,
        "from": "Washermenpet",
        "to": "Chennai Airport"
      },
      {
        "n": "Green Line (Central–St Thomas Mount)",
        "c": "#009933",
        "st": 23,
        "from": "Chennai Central",
        "to": "St Thomas Mount"
      }
    ],
    "totalSt": 41,
    "km": 54,
    "stations": [
      {
        "c": "WASH",
        "n": "Washermenpet",
        "l": "Blue"
      },
      {
        "c": "EGMR",
        "n": "Egmore",
        "l": "Blue"
      },
      {
        "c": "CCHE",
        "n": "Chennai Central",
        "l": "Green"
      },
      {
        "c": "STMO",
        "n": "St Thomas Mount",
        "l": "Green"
      },
      {
        "c": "AIRP",
        "n": "Chennai Airport",
        "l": "Blue"
      },
      {
        "c": "KKDI",
        "n": "Koyambedu",
        "l": "Green"
      },
      {
        "c": "ARUMB",
        "n": "Alandur",
        "l": "Blue+Green",
        "int": true
      },
      {
        "c": "GOVTE",
        "n": "Government Estate",
        "l": "Blue"
      }
    ]
  },
  {
    "id": "kolkata",
    "city": "Kolkata",
    "name": "Kolkata Metro (KMRC)",
    "color": "#0058bc",
    "icon": "🚇",
    "lines": [
      {
        "n": "North–South Line 1",
        "c": "#0058bc",
        "st": 24,
        "from": "Dakshineswar",
        "to": "Kavi Subhas"
      },
      {
        "n": "East–West Line 2",
        "c": "#E52222",
        "st": 16,
        "from": "Howrah Maidan",
        "to": "Salt Lake Sec V"
      },
      {
        "n": "Joka–Esplanade Line 3",
        "c": "#009933",
        "st": 6,
        "from": "Joka",
        "to": "Majerhat"
      },
      {
        "n": "Noapara–Airport Line 4",
        "c": "#FFD600",
        "st": 3,
        "from": "Noapara",
        "to": "Airport"
      },
      {
        "n": "New Garia–Airport Line 6",
        "c": "#FF6B1A",
        "st": 3,
        "from": "New Garia",
        "to": "Airport"
      }
    ],
    "totalSt": 45,
    "km": 58,
    "stations": [
      {
        "c": "DNDN",
        "n": "Dum Dum",
        "l": "Line 1"
      },
      {
        "c": "ESPL",
        "n": "Esplanade",
        "l": "Line 1+2",
        "int": true
      },
      {
        "c": "PRKS",
        "n": "Park Street",
        "l": "Line 1"
      },
      {
        "c": "TOLLY",
        "n": "Tollygunge",
        "l": "Line 1"
      },
      {
        "c": "HWAH",
        "n": "Howrah Maidan",
        "l": "Line 2"
      },
      {
        "c": "SALTV",
        "n": "Salt Lake Sec V",
        "l": "Line 2"
      },
      {
        "c": "DKSH",
        "n": "Dakshineswar",
        "l": "Line 1"
      },
      {
        "c": "KVSUB",
        "n": "Kavi Subhas",
        "l": "Line 1"
      }
    ]
  },
  {
    "id": "hyderabad",
    "city": "Hyderabad",
    "name": "Hyderabad Metro Rail (L&TMRHL)",
    "color": "#FF6B1A",
    "icon": "🚇",
    "lines": [
      {
        "n": "Red Line (Miyapur–LB Nagar)",
        "c": "#E52222",
        "st": 27,
        "from": "Miyapur",
        "to": "LB Nagar"
      },
      {
        "n": "Blue Line (JBS–MGBS)",
        "c": "#0058bc",
        "st": 16,
        "from": "Jubilee Bus Station",
        "to": "MGBS"
      },
      {
        "n": "Green Line (Nagole–Raidurg)",
        "c": "#009933",
        "st": 28,
        "from": "Nagole",
        "to": "Raidurg"
      }
    ],
    "totalSt": 57,
    "km": 69,
    "stations": [
      {
        "c": "MIYP",
        "n": "Miyapur",
        "l": "Red"
      },
      {
        "c": "KPHB",
        "n": "KPHB Colony",
        "l": "Red"
      },
      {
        "c": "AMPT",
        "n": "Ameerpet",
        "l": "Red+Blue",
        "int": true
      },
      {
        "c": "HITECH",
        "n": "Hitec City",
        "l": "Red"
      },
      {
        "c": "RAIDG",
        "n": "Raidurg",
        "l": "Green"
      },
      {
        "c": "NAGOLE",
        "n": "Nagole",
        "l": "Green"
      },
      {
        "c": "PARADE",
        "n": "Paradise",
        "l": "Red"
      },
      {
        "c": "SECBAD",
        "n": "Secunderabad East",
        "l": "Blue"
      },
      {
        "c": "BEGUM",
        "n": "Begumpet",
        "l": "Blue"
      }
    ]
  },
  {
    "id": "ahmedabad",
    "city": "Ahmedabad",
    "name": "Ahmedabad Metro (MEGA)",
    "color": "#E52222",
    "icon": "🚇",
    "lines": [
      {
        "n": "Red Line (APMC–Motera)",
        "c": "#E52222",
        "st": 16,
        "from": "APMC",
        "to": "Motera Stadium"
      },
      {
        "n": "Blue Line (Thaltej–Vastral Gam)",
        "c": "#0058bc",
        "st": 18,
        "from": "Thaltej",
        "to": "Vastral Gam"
      }
    ],
    "totalSt": 34,
    "km": 45,
    "stations": [
      {
        "c": "APMC",
        "n": "APMC",
        "l": "Red"
      },
      {
        "c": "KANKR",
        "n": "Kalupur Rly Station",
        "l": "Red"
      },
      {
        "c": "MOTR",
        "n": "Motera Stadium",
        "l": "Red"
      },
      {
        "c": "THAL",
        "n": "Thaltej",
        "l": "Blue"
      },
      {
        "c": "SBRMTI",
        "n": "Sabarmati",
        "l": "Red"
      },
      {
        "c": "VASTR",
        "n": "Vastral Gam",
        "l": "Blue"
      }
    ]
  },
  {
    "id": "pune",
    "city": "Pune",
    "name": "Pune Metro (MahaMetro)",
    "color": "#FFD600",
    "icon": "🚇",
    "lines": [
      {
        "n": "Line 1 (PCMC–Swargate)",
        "c": "#9B27AF",
        "st": 23,
        "from": "PCMC",
        "to": "Swargate"
      },
      {
        "n": "Line 2 (Vanaz–Ramwadi)",
        "c": "#E52222",
        "st": 20,
        "from": "Vanaz",
        "to": "Ramwadi"
      },
      {
        "n": "Line 3 (Hinjewadi–Civil Court)",
        "c": "#009933",
        "st": 23,
        "from": "Hinjewadi Phase I",
        "to": "Civil Court"
      }
    ],
    "totalSt": 35,
    "km": 54,
    "stations": [
      {
        "c": "PCMC",
        "n": "PCMC",
        "l": "Line 1"
      },
      {
        "c": "SWAR",
        "n": "Swargate",
        "l": "Line 1"
      },
      {
        "c": "SHIVN",
        "n": "Shivajinagar",
        "l": "Line 1"
      },
      {
        "c": "VANAZ",
        "n": "Vanaz",
        "l": "Line 2"
      },
      {
        "c": "CIVIL",
        "n": "Civil Court",
        "l": "Line 1+3",
        "int": true
      },
      {
        "c": "HINJW",
        "n": "Hinjewadi Phase I",
        "l": "Line 3"
      }
    ]
  },
  {
    "id": "nagpur",
    "city": "Nagpur",
    "name": "Nagpur Metro (MahaMetro)",
    "color": "#009933",
    "icon": "🚇",
    "lines": [
      {
        "n": "Orange Line (Automotive Sq–Airport)",
        "c": "#FF6B1A",
        "st": 18,
        "from": "Automotive Square",
        "to": "Airport South"
      },
      {
        "n": "Aqua Line (Lokmanya–Prajapati)",
        "c": "#0058bc",
        "st": 12,
        "from": "Lokmanya Nagar",
        "to": "Prajapati Nagar"
      }
    ],
    "totalSt": 36,
    "km": 38,
    "stations": [
      {
        "c": "AIRNAG",
        "n": "Airport South",
        "l": "Orange"
      },
      {
        "c": "ZEROM",
        "n": "Zero Mile",
        "l": "Orange+Aqua",
        "int": true
      },
      {
        "c": "SITAB",
        "n": "Sitabuldi",
        "l": "Orange"
      },
      {
        "c": "AUTOM",
        "n": "Automotive Square",
        "l": "Orange"
      },
      {
        "c": "LOKN",
        "n": "Lokmanya Nagar",
        "l": "Aqua"
      },
      {
        "c": "PRJP",
        "n": "Prajapati Nagar",
        "l": "Aqua"
      }
    ]
  },
  {
    "id": "lucknow",
    "city": "Lucknow",
    "name": "Lucknow Metro (LMRC)",
    "color": "#E52222",
    "icon": "🚇",
    "lines": [
      {
        "n": "North–South Corridor",
        "c": "#E52222",
        "st": 21,
        "from": "CCS Airport",
        "to": "Munshipulia"
      },
      {
        "n": "East–West Corridor (Phase 2)",
        "c": "#0058bc",
        "st": 11,
        "from": "Vasant Kunj",
        "to": "Sultanpur"
      }
    ],
    "totalSt": 21,
    "km": 23,
    "stations": [
      {
        "c": "CCSAL",
        "n": "CCS Airport",
        "l": "N-S"
      },
      {
        "c": "TRNS",
        "n": "Transport Nagar",
        "l": "N-S"
      },
      {
        "c": "CHRBG",
        "n": "Charbagh Rly Station",
        "l": "N-S"
      },
      {
        "c": "HZRTG",
        "n": "Hazratganj",
        "l": "N-S"
      },
      {
        "c": "MUNSH",
        "n": "Munshipulia",
        "l": "N-S"
      }
    ]
  },
  {
    "id": "jaipur",
    "city": "Jaipur",
    "name": "Jaipur Metro (JMRC)",
    "color": "#FF6B1A",
    "icon": "🚇",
    "lines": [
      {
        "n": "Pink Line Phase 1A & 1B",
        "c": "#E83E8C",
        "st": 11,
        "from": "Chandpole",
        "to": "Mansarovar"
      }
    ],
    "totalSt": 11,
    "km": 12,
    "stations": [
      {
        "c": "MNSRO",
        "n": "Mansarovar",
        "l": "Pink"
      },
      {
        "c": "CIVIL",
        "n": "Civil Lines",
        "l": "Pink"
      },
      {
        "c": "CHAND",
        "n": "Chandpole",
        "l": "Pink"
      },
      {
        "c": "BADIC",
        "n": "Badi Chaupar",
        "l": "Pink"
      },
      {
        "c": "RAILWY",
        "n": "Railway Station",
        "l": "Pink"
      }
    ]
  },
  {
    "id": "kochi",
    "city": "Kochi",
    "name": "Kochi Metro (KMRL)",
    "color": "#009933",
    "icon": "🚇",
    "lines": [
      {
        "n": "Red Line (Aluva–Tripunithura)",
        "c": "#E52222",
        "st": 26,
        "from": "Aluva",
        "to": "Tripunithura"
      },
      {
        "n": "Blue Line Phase 2",
        "c": "#0058bc",
        "st": 11,
        "from": "JLN Stadium",
        "to": "Kakkanad"
      }
    ],
    "totalSt": 26,
    "km": 29,
    "stations": [
      {
        "c": "ALUVA",
        "n": "Aluva",
        "l": "Red"
      },
      {
        "c": "EDAP",
        "n": "Edapally",
        "l": "Red"
      },
      {
        "c": "ERNAK",
        "n": "Ernakulam South",
        "l": "Red"
      },
      {
        "c": "TRIPU",
        "n": "Tripunithura",
        "l": "Red"
      },
      {
        "c": "JLNS",
        "n": "JLN Stadium",
        "l": "Blue"
      },
      {
        "c": "KAKMN",
        "n": "Kakkanad",
        "l": "Blue"
      }
    ]
  }
];
