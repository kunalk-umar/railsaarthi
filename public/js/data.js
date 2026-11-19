/* data.js – Complete Indian Railways Dataset (Nov 2026 Edition)
   Official Statistics from Ministry of Railways / PIB (April & Nov 2026)
   164 Vande Bharat · 72 Amrit Bharat · 7,461 Stations · 69,181 Route km
   Fares calibrated to 26 Dec 2025 official rate notification */

window.IR_METRICS_2026 = {
  "edition": "November 2026 (Official Railway Ministry & PIB Releases)",
  "passengersAnnual": "741 Crore (7.41 Billion, +3.54% in FY2025-26)",
  "passengersDaily": "2.30 Crore (23 Million daily passengers)",
  "freightAnnual": "1,670 MT (+3.25%, FY2025-26)",
  "freightOctober2026": "145.07 MT (All-time Oct Record, +8.32%)",
  "freightAprilOct2026": "978.78 MT (+4.67%)",
  "freightEarnings": "₹1,77,754 Crore",
  "routeLength": "69,181 km (Running Track: 109,748 km; Total Track: 135,207 km)",
  "electrification": "99.6% Broad-Gauge Electrified (69,873 Route km)",
  "totalStations": "7,461 Stations (Indian Railways network)",
  "trainsPerDay": "25,000 Total Trains (~13,000 Passenger Trains)",
  "vandeBharatCount": "164 Services (inc. Howrah–Kamakhya Sleeper launched Jan 2026)",
  "amritBharatCount": "72 Services (Push-Pull Superfast Affordable Rail)",
  "kavachCoverage": "2,633 Route km commissioned (Delhi–Mumbai & Delhi–Howrah); 21,794 km trackside work",
  "bulletTrain": "508 km Mumbai–Ahmedabad (Surat–Bilimora 50 km stretch targeted Aug 2027)",
  "capitalOutlay": "₹2.93 Trillion record capital outlay (Union Budget 2026-27)",
  "zonesDivisions": "18 Zones + Kolkata Metro | 70 Divisions (Rayagada added 1 Jun 2026)",
  "locomotives": "13,569 Electric · 4,169 Diesel · 16 Steam",
  "rollingStock": "327,991 Freight Wagons · 91,948 Passenger Coaches",
  "punctuality": "80% (FY2025-26)"
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
    "c": "NDLS",
    "n": "New Delhi",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "A1",
    "pf": 16,
    "tr": 450
  },
  {
    "c": "DLI",
    "n": "Delhi Jn",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "A1",
    "pf": 16,
    "tr": 280
  },
  {
    "c": "NZM",
    "n": "Hazrat Nizamuddin",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "A",
    "pf": 9,
    "tr": 200
  },
  {
    "c": "DEE",
    "n": "Delhi Sarai Rohilla",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "ANVT",
    "n": "Anand Vihar Terminal",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "B",
    "pf": 6,
    "tr": 100
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
    "c": "SZM",
    "n": "Subzi Mandi",
    "city": "New Delhi",
    "st": "Delhi",
    "z": "NR",
    "d": "Delhi",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "LDH",
    "n": "Ludhiana Jn",
    "city": "Ludhiana",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "A",
    "pf": 8,
    "tr": 130
  },
  {
    "c": "ASR",
    "n": "Amritsar Jn",
    "city": "Amritsar",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "A",
    "pf": 9,
    "tr": 140
  },
  {
    "c": "JUC",
    "n": "Jalandhar City",
    "city": "Jalandhar",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "B",
    "pf": 7,
    "tr": 100
  },
  {
    "c": "JAT",
    "n": "Jammu Tawi",
    "city": "Jammu",
    "st": "J&K",
    "z": "NR",
    "d": "Firozpur",
    "cat": "A",
    "pf": 7,
    "tr": 95
  },
  {
    "c": "SVDK",
    "n": "SMVD Katra",
    "city": "Katra",
    "st": "J&K",
    "z": "NR",
    "d": "Firozpur",
    "cat": "B",
    "pf": 3,
    "tr": 25
  },
  {
    "c": "CDG",
    "n": "Chandigarh",
    "city": "Chandigarh",
    "st": "Chandigarh",
    "z": "NR",
    "d": "Ambala",
    "cat": "A",
    "pf": 6,
    "tr": 110
  },
  {
    "c": "UMB",
    "n": "Ambala Cantt",
    "city": "Ambala",
    "st": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "cat": "A",
    "pf": 8,
    "tr": 150
  },
  {
    "c": "KLK",
    "n": "Kalka",
    "city": "Kalka",
    "st": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "HW",
    "n": "Haridwar Jn",
    "city": "Haridwar",
    "st": "Uttarakhand",
    "z": "NR",
    "d": "Ambala",
    "cat": "A",
    "pf": 6,
    "tr": 90
  },
  {
    "c": "DDN",
    "n": "Dehradun",
    "city": "Dehradun",
    "st": "Uttarakhand",
    "z": "NR",
    "d": "Ambala",
    "cat": "B",
    "pf": 4,
    "tr": 55
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
    "c": "LKO",
    "n": "Lucknow Charbagh",
    "city": "Lucknow",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow",
    "cat": "A1",
    "pf": 9,
    "tr": 200
  },
  {
    "c": "MB",
    "n": "Moradabad Jn",
    "city": "Moradabad",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "cat": "B",
    "pf": 6,
    "tr": 80
  },
  {
    "c": "BE",
    "n": "Bareilly Jn",
    "city": "Bareilly",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow",
    "cat": "B",
    "pf": 5,
    "tr": 70
  },
  {
    "c": "ROK",
    "n": "Rohtak Jn",
    "city": "Rohtak",
    "st": "Haryana",
    "z": "NR",
    "d": "Delhi",
    "cat": "C",
    "pf": 3,
    "tr": 55
  },
  {
    "c": "PNP",
    "n": "Panipat Jn",
    "city": "Panipat",
    "st": "Haryana",
    "z": "NR",
    "d": "Ambala",
    "cat": "C",
    "pf": 4,
    "tr": 60
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
    "c": "BTI",
    "n": "Bathinda Jn",
    "city": "Bathinda",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "B",
    "pf": 5,
    "tr": 60
  },
  {
    "c": "FZR",
    "n": "Firozpur Cantt",
    "city": "Firozpur",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "C",
    "pf": 5,
    "tr": 40
  },
  {
    "c": "PTK",
    "n": "Pathankot Jn",
    "city": "Pathankot",
    "st": "Punjab",
    "z": "NR",
    "d": "Firozpur",
    "cat": "B",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "SRE",
    "n": "Saharanpur",
    "city": "Saharanpur",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Ambala",
    "cat": "B",
    "pf": 5,
    "tr": 70
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
    "c": "MUT",
    "n": "Muzaffarnagar",
    "city": "Muzaffarnagar",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Delhi",
    "cat": "C",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "AF",
    "n": "Agra Fort",
    "city": "Agra",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Agra",
    "cat": "B",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "AGC",
    "n": "Agra Cantt",
    "city": "Agra",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Agra",
    "cat": "A",
    "pf": 6,
    "tr": 140
  },
  {
    "c": "CNB",
    "n": "Kanpur Central",
    "city": "Kanpur",
    "st": "Uttar Pradesh",
    "z": "NCR",
    "d": "Prayagraj",
    "cat": "A1",
    "pf": 10,
    "tr": 230
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
    "c": "GWL",
    "n": "Gwalior Jn",
    "city": "Gwalior",
    "st": "Madhya Pradesh",
    "z": "NCR",
    "d": "Agra",
    "cat": "A",
    "pf": 6,
    "tr": 110
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
    "c": "GKP",
    "n": "Gorakhpur Jn",
    "city": "Gorakhpur",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "cat": "A1",
    "pf": 10,
    "tr": 160
  },
  {
    "c": "BSB",
    "n": "Varanasi Jn",
    "city": "Varanasi",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Varanasi",
    "cat": "A1",
    "pf": 9,
    "tr": 170
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
    "c": "LJN",
    "n": "Lucknow Ne",
    "city": "Lucknow",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "CPR",
    "n": "Chhapra Jn",
    "city": "Chhapra",
    "st": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "cat": "B",
    "pf": 4,
    "tr": 60
  },
  {
    "c": "GD",
    "n": "Gonda Jn",
    "city": "Gonda",
    "st": "Uttar Pradesh",
    "z": "NER",
    "d": "Lucknow NER",
    "cat": "C",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "SV",
    "n": "Siwan Jn",
    "city": "Siwan",
    "st": "Bihar",
    "z": "NER",
    "d": "Varanasi",
    "cat": "C",
    "pf": 3,
    "tr": 40
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
    "c": "PNBE",
    "n": "Patna Jn",
    "city": "Patna",
    "st": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "cat": "A1",
    "pf": 10,
    "tr": 170
  },
  {
    "c": "DNR",
    "n": "Danapur",
    "city": "Patna",
    "st": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "cat": "B",
    "pf": 4,
    "tr": 70
  },
  {
    "c": "RJPB",
    "n": "Rajendra Nagar Bihar",
    "city": "Patna",
    "st": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "cat": "B",
    "pf": 3,
    "tr": 40
  },
  {
    "c": "DDU",
    "n": "Pt DD Upadhyaya Jn",
    "city": "Chandauli",
    "st": "Uttar Pradesh",
    "z": "ECR",
    "d": "Varanasi",
    "cat": "A1",
    "pf": 9,
    "tr": 200
  },
  {
    "c": "GYA",
    "n": "Gaya Jn",
    "city": "Gaya",
    "st": "Bihar",
    "z": "ECR",
    "d": "Danapur",
    "cat": "A",
    "pf": 8,
    "tr": 120
  },
  {
    "c": "MFP",
    "n": "Muzaffarpur Jn",
    "city": "Muzaffarpur",
    "st": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "cat": "A",
    "pf": 6,
    "tr": 95
  },
  {
    "c": "HJP",
    "n": "Hajipur Jn",
    "city": "Hajipur",
    "st": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "cat": "B",
    "pf": 4,
    "tr": 60
  },
  {
    "c": "BJU",
    "n": "Barauni Jn",
    "city": "Begusarai",
    "st": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "cat": "B",
    "pf": 5,
    "tr": 75
  },
  {
    "c": "DBG",
    "n": "Darbhanga Jn",
    "city": "Darbhanga",
    "st": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "cat": "B",
    "pf": 5,
    "tr": 55
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
    "c": "KIR",
    "n": "Katihar Jn",
    "city": "Katihar",
    "st": "Bihar",
    "z": "ECR",
    "d": "Katihar",
    "cat": "A",
    "pf": 6,
    "tr": 90
  },
  {
    "c": "SHC",
    "n": "Saharsa Jn",
    "city": "Saharsa",
    "st": "Bihar",
    "z": "ECR",
    "d": "Samastipur",
    "cat": "B",
    "pf": 4,
    "tr": 40
  },
  {
    "c": "SEE",
    "n": "Sonpur Jn",
    "city": "Sonpur",
    "st": "Bihar",
    "z": "ECR",
    "d": "Sonpur",
    "cat": "C",
    "pf": 5,
    "tr": 50
  },
  {
    "c": "BGP",
    "n": "Bhagalpur Jn",
    "city": "Bhagalpur",
    "st": "Bihar",
    "z": "ER",
    "d": "Malda",
    "cat": "A",
    "pf": 6,
    "tr": 80
  },
  {
    "c": "HWH",
    "n": "Howrah Jn",
    "city": "Howrah",
    "st": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "cat": "A1",
    "pf": 23,
    "tr": 380
  },
  {
    "c": "SDAH",
    "n": "Sealdah",
    "city": "Kolkata",
    "st": "West Bengal",
    "z": "ER",
    "d": "Sealdah",
    "cat": "A1",
    "pf": 13,
    "tr": 220
  },
  {
    "c": "KOAA",
    "n": "Kolkata",
    "city": "Kolkata",
    "st": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "cat": "A1",
    "pf": 9,
    "tr": 150
  },
  {
    "c": "ASN",
    "n": "Asansol Jn",
    "city": "Asansol",
    "st": "West Bengal",
    "z": "ER",
    "d": "Asansol",
    "cat": "A",
    "pf": 7,
    "tr": 130
  },
  {
    "c": "DHN",
    "n": "Dhanbad Jn",
    "city": "Dhanbad",
    "st": "Jharkhand",
    "z": "ER",
    "d": "Dhanbad",
    "cat": "A",
    "pf": 6,
    "tr": 110
  },
  {
    "c": "BWN",
    "n": "Bardhaman Jn",
    "city": "Bardhaman",
    "st": "West Bengal",
    "z": "ER",
    "d": "Howrah",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "MLDT",
    "n": "Malda Town",
    "city": "Malda",
    "st": "West Bengal",
    "z": "ER",
    "d": "Malda",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "NJP",
    "n": "New Jalpaiguri",
    "city": "Jalpaiguri",
    "st": "West Bengal",
    "z": "NFR",
    "d": "Katihar",
    "cat": "A",
    "pf": 8,
    "tr": 110
  },
  {
    "c": "RPH",
    "n": "Rampur Hat",
    "city": "Rampur Hat",
    "st": "West Bengal",
    "z": "ER",
    "d": "Malda",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "GHY",
    "n": "Guwahati",
    "city": "Guwahati",
    "st": "Assam",
    "z": "NFR",
    "d": "Rangia",
    "cat": "A1",
    "pf": 8,
    "tr": 120
  },
  {
    "c": "DBRG",
    "n": "Dibrugarh",
    "city": "Dibrugarh",
    "st": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "cat": "B",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "TSK",
    "n": "Tinsukia Jn",
    "city": "Tinsukia",
    "st": "Assam",
    "z": "NFR",
    "d": "Tinsukia",
    "cat": "C",
    "pf": 4,
    "tr": 40
  },
  {
    "c": "LMG",
    "n": "Lumding Jn",
    "city": "Lumding",
    "st": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "cat": "B",
    "pf": 5,
    "tr": 60
  },
  {
    "c": "SCL",
    "n": "Silchar",
    "city": "Silchar",
    "st": "Assam",
    "z": "NFR",
    "d": "Lumding",
    "cat": "C",
    "pf": 3,
    "tr": 20
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
    "c": "DMV",
    "n": "Dimapur",
    "city": "Dimapur",
    "st": "Nagaland",
    "z": "NFR",
    "d": "Lumding",
    "cat": "D",
    "pf": 2,
    "tr": 10
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
    "c": "LTT",
    "n": "Lokmanya Tilak Terminus",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Mumbai",
    "cat": "A1",
    "pf": 8,
    "tr": 130
  },
  {
    "c": "PUNE",
    "n": "Pune Jn",
    "city": "Pune",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Pune",
    "cat": "A1",
    "pf": 6,
    "tr": 160
  },
  {
    "c": "NGP",
    "n": "Nagpur Jn",
    "city": "Nagpur",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Nagpur",
    "cat": "A1",
    "pf": 8,
    "tr": 180
  },
  {
    "c": "BSL",
    "n": "Bhusawal Jn",
    "city": "Bhusawal",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "cat": "B",
    "pf": 6,
    "tr": 90
  },
  {
    "c": "AK",
    "n": "Akola Jn",
    "city": "Akola",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "cat": "B",
    "pf": 5,
    "tr": 75
  },
  {
    "c": "MMR",
    "n": "Manmad Jn",
    "city": "Manmad",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "cat": "B",
    "pf": 4,
    "tr": 60
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
    "c": "KYN",
    "n": "Kalyan Jn",
    "city": "Kalyan",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Mumbai",
    "cat": "A",
    "pf": 8,
    "tr": 120
  },
  {
    "c": "TNA",
    "n": "Thane",
    "city": "Thane",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Mumbai",
    "cat": "B",
    "pf": 6,
    "tr": 100
  },
  {
    "c": "DD",
    "n": "Dadar",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Mumbai",
    "cat": "B",
    "pf": 8,
    "tr": 100
  },
  {
    "c": "SUR",
    "n": "Solapur Jn",
    "city": "Solapur",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Solapur",
    "cat": "A",
    "pf": 6,
    "tr": 95
  },
  {
    "c": "KRMI",
    "n": "Karmali",
    "city": "North Goa",
    "st": "Goa",
    "z": "CR",
    "d": "Pune",
    "cat": "C",
    "pf": 2,
    "tr": 30
  },
  {
    "c": "IGP",
    "n": "Igatpuri",
    "city": "Igatpuri",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Bhusawal",
    "cat": "C",
    "pf": 4,
    "tr": 50
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
    "c": "BDTS",
    "n": "Bandra Terminus",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "WR",
    "d": "Mumbai",
    "cat": "A",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "BVI",
    "n": "Borivali",
    "city": "Mumbai",
    "st": "Maharashtra",
    "z": "WR",
    "d": "Mumbai",
    "cat": "B",
    "pf": 6,
    "tr": 80
  },
  {
    "c": "ADI",
    "n": "Ahmedabad Jn",
    "city": "Ahmedabad",
    "st": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "cat": "A1",
    "pf": 12,
    "tr": 210
  },
  {
    "c": "BRC",
    "n": "Vadodara Jn",
    "city": "Vadodara",
    "st": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "cat": "A1",
    "pf": 7,
    "tr": 160
  },
  {
    "c": "ST",
    "n": "Surat",
    "city": "Surat",
    "st": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "cat": "A",
    "pf": 7,
    "tr": 140
  },
  {
    "c": "RTM",
    "n": "Ratlam Jn",
    "city": "Ratlam",
    "st": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "cat": "A",
    "pf": 6,
    "tr": 110
  },
  {
    "c": "RJT",
    "n": "Rajkot Jn",
    "city": "Rajkot",
    "st": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "cat": "A",
    "pf": 5,
    "tr": 80
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
    "c": "UJN",
    "n": "Ujjain Jn",
    "city": "Ujjain",
    "st": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "INDB",
    "n": "Indore Jn",
    "city": "Indore",
    "st": "Madhya Pradesh",
    "z": "WR",
    "d": "Ratlam",
    "cat": "A",
    "pf": 5,
    "tr": 85
  },
  {
    "c": "OKHA",
    "n": "Okha",
    "city": "Dwarka",
    "st": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "cat": "D",
    "pf": 2,
    "tr": 15
  },
  {
    "c": "PBR",
    "n": "Porbandar",
    "city": "Porbandar",
    "st": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "cat": "C",
    "pf": 3,
    "tr": 20
  },
  {
    "c": "VRL",
    "n": "Veraval",
    "city": "Veraval",
    "st": "Gujarat",
    "z": "WR",
    "d": "Rajkot",
    "cat": "C",
    "pf": 3,
    "tr": 20
  },
  {
    "c": "VAPI",
    "n": "Vapi",
    "city": "Vapi",
    "st": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "cat": "C",
    "pf": 3,
    "tr": 50
  },
  {
    "c": "BL",
    "n": "Anand Jn",
    "city": "Anand",
    "st": "Gujarat",
    "z": "WR",
    "d": "Vadodara",
    "cat": "C",
    "pf": 4,
    "tr": 50
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
    "c": "GNC",
    "n": "Gandhi Nagar Capital",
    "city": "Gandhinagar",
    "st": "Gujarat",
    "z": "WR",
    "d": "Ahmedabad",
    "cat": "C",
    "pf": 3,
    "tr": 30
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
    "c": "SC",
    "n": "Secunderabad Jn",
    "city": "Hyderabad",
    "st": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "cat": "A1",
    "pf": 10,
    "tr": 180
  },
  {
    "c": "HYB",
    "n": "Hyderabad Deccan",
    "city": "Hyderabad",
    "st": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "cat": "A1",
    "pf": 10,
    "tr": 140
  },
  {
    "c": "KCG",
    "n": "Kacheguda",
    "city": "Hyderabad",
    "st": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "cat": "B",
    "pf": 5,
    "tr": 70
  },
  {
    "c": "BZA",
    "n": "Vijayawada Jn",
    "city": "Vijayawada",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "A1",
    "pf": 10,
    "tr": 190
  },
  {
    "c": "VSKP",
    "n": "Visakhapatnam",
    "city": "Visakhapatnam",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "A1",
    "pf": 7,
    "tr": 130
  },
  {
    "c": "GNT",
    "n": "Guntur Jn",
    "city": "Guntur",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "A",
    "pf": 5,
    "tr": 85
  },
  {
    "c": "TPTY",
    "n": "Tirupati",
    "city": "Tirupati",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "cat": "A",
    "pf": 6,
    "tr": 90
  },
  {
    "c": "GTL",
    "n": "Guntakal Jn",
    "city": "Guntakal",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Guntakal",
    "cat": "A",
    "pf": 7,
    "tr": 110
  },
  {
    "c": "WL",
    "n": "Warangal",
    "city": "Warangal",
    "st": "Telangana",
    "z": "SCR",
    "d": "Secunderabad",
    "cat": "B",
    "pf": 5,
    "tr": 70
  },
  {
    "c": "RU",
    "n": "Rajahmundry",
    "city": "Rajahmundry",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "OGL",
    "n": "Ongole",
    "city": "Ongole",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "C",
    "pf": 4,
    "tr": 50
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
    "c": "KLBG",
    "n": "Kalaburagi",
    "city": "Kalaburagi",
    "st": "Karnataka",
    "z": "SCR",
    "d": "Hyderabad",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "NZB",
    "n": "Nizamabad",
    "city": "Nizamabad",
    "st": "Telangana",
    "z": "SCR",
    "d": "Hyderabad",
    "cat": "B",
    "pf": 4,
    "tr": 40
  },
  {
    "c": "EE",
    "n": "Eluru",
    "city": "Eluru",
    "st": "Andhra Pradesh",
    "z": "SCR",
    "d": "Vijayawada",
    "cat": "C",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "MAS",
    "n": "Chennai Central",
    "city": "Chennai",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "cat": "A1",
    "pf": 12,
    "tr": 230
  },
  {
    "c": "MS",
    "n": "Chennai Egmore",
    "city": "Chennai",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "cat": "A1",
    "pf": 11,
    "tr": 190
  },
  {
    "c": "TVC",
    "n": "Trivandrum Central",
    "city": "Thiruvananthapuram",
    "st": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "cat": "A1",
    "pf": 5,
    "tr": 85
  },
  {
    "c": "ERS",
    "n": "Ernakulam Jn",
    "city": "Kochi",
    "st": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "cat": "A",
    "pf": 6,
    "tr": 120
  },
  {
    "c": "KCVL",
    "n": "Kochuveli",
    "city": "Thiruvananthapuram",
    "st": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "cat": "B",
    "pf": 3,
    "tr": 40
  },
  {
    "c": "QLN",
    "n": "Kollam Jn",
    "city": "Kollam",
    "st": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "cat": "B",
    "pf": 5,
    "tr": 60
  },
  {
    "c": "TCR",
    "n": "Thrissur",
    "city": "Thrissur",
    "st": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "PGT",
    "n": "Palakkad Jn",
    "city": "Palakkad",
    "st": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "cat": "B",
    "pf": 5,
    "tr": 70
  },
  {
    "c": "CLT",
    "n": "Kozhikode",
    "city": "Kozhikode",
    "st": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "cat": "A",
    "pf": 4,
    "tr": 75
  },
  {
    "c": "CAN",
    "n": "Kannur",
    "city": "Kannur",
    "st": "Kerala",
    "z": "SR",
    "d": "Palakkad",
    "cat": "B",
    "pf": 3,
    "tr": 50
  },
  {
    "c": "MAQ",
    "n": "Mangaluru Central",
    "city": "Mangaluru",
    "st": "Karnataka",
    "z": "SR",
    "d": "Palakkad",
    "cat": "A",
    "pf": 5,
    "tr": 65
  },
  {
    "c": "CBE",
    "n": "Coimbatore Jn",
    "city": "Coimbatore",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "cat": "A",
    "pf": 6,
    "tr": 110
  },
  {
    "c": "MDU",
    "n": "Madurai Jn",
    "city": "Madurai",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "A",
    "pf": 8,
    "tr": 130
  },
  {
    "c": "TPJ",
    "n": "Tiruchirappalli Jn",
    "city": "Tiruchirappalli",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "A",
    "pf": 8,
    "tr": 120
  },
  {
    "c": "SA",
    "n": "Salem Jn",
    "city": "Salem",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "cat": "B",
    "pf": 5,
    "tr": 75
  },
  {
    "c": "ED",
    "n": "Erode Jn",
    "city": "Erode",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Salem",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "TEN",
    "n": "Tirunelveli Jn",
    "city": "Tirunelveli",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "B",
    "pf": 5,
    "tr": 55
  },
  {
    "c": "NCJ",
    "n": "Nagercoil Jn",
    "city": "Nagercoil",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "C",
    "pf": 4,
    "tr": 40
  },
  {
    "c": "CAPE",
    "n": "Kanyakumari",
    "city": "Kanyakumari",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "D",
    "pf": 2,
    "tr": 15
  },
  {
    "c": "PDY",
    "n": "Puducherry",
    "city": "Puducherry",
    "st": "Puducherry",
    "z": "SR",
    "d": "Chennai",
    "cat": "C",
    "pf": 3,
    "tr": 20
  },
  {
    "c": "VM",
    "n": "Villupuram Jn",
    "city": "Villupuram",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "cat": "B",
    "pf": 5,
    "tr": 65
  },
  {
    "c": "AJJ",
    "n": "Arakkonam Jn",
    "city": "Arakkonam",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Chennai",
    "cat": "C",
    "pf": 6,
    "tr": 55
  },
  {
    "c": "ALLP",
    "n": "Alappuzha",
    "city": "Alappuzha",
    "st": "Kerala",
    "z": "SR",
    "d": "Thiruvananthapuram",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "KRR",
    "n": "Karaikudi Jn",
    "city": "Karaikudi",
    "st": "Tamil Nadu",
    "z": "SR",
    "d": "Madurai",
    "cat": "C",
    "pf": 3,
    "tr": 25
  },
  {
    "c": "SBC",
    "n": "KSR Bengaluru City Jn",
    "city": "Bengaluru",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "cat": "A1",
    "pf": 10,
    "tr": 210
  },
  {
    "c": "YPR",
    "n": "Yeshvantpur Jn",
    "city": "Bengaluru",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "cat": "A1",
    "pf": 8,
    "tr": 160
  },
  {
    "c": "KJM",
    "n": "Krishnarajapuram",
    "city": "Bengaluru",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Bengaluru",
    "cat": "C",
    "pf": 4,
    "tr": 60
  },
  {
    "c": "UBL",
    "n": "Hubballi Jn",
    "city": "Hubballi",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "A",
    "pf": 7,
    "tr": 95
  },
  {
    "c": "MYS",
    "n": "Mysuru Jn",
    "city": "Mysuru",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "cat": "A",
    "pf": 6,
    "tr": 75
  },
  {
    "c": "DWR",
    "n": "Dharwad",
    "city": "Dharwad",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "BGM",
    "n": "Belagavi",
    "city": "Belagavi",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "B",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "BAY",
    "n": "Ballari Jn",
    "city": "Ballari",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "B",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "ASK",
    "n": "Arsikere Jn",
    "city": "Arsikere",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Mysuru",
    "cat": "C",
    "pf": 5,
    "tr": 50
  },
  {
    "c": "MAJN",
    "n": "Mangaluru Jn",
    "city": "Mangaluru",
    "st": "Karnataka",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "RNC",
    "n": "Ranchi",
    "city": "Ranchi",
    "st": "Jharkhand",
    "z": "SER",
    "d": "Ranchi",
    "cat": "A",
    "pf": 7,
    "tr": 95
  },
  {
    "c": "HTE",
    "n": "Hatia",
    "city": "Ranchi",
    "st": "Jharkhand",
    "z": "SER",
    "d": "Ranchi",
    "cat": "B",
    "pf": 4,
    "tr": 50
  },
  {
    "c": "TATA",
    "n": "Tatanagar Jn",
    "city": "Jamshedpur",
    "st": "Jharkhand",
    "z": "SER",
    "d": "Chakradharpur",
    "cat": "A",
    "pf": 6,
    "tr": 100
  },
  {
    "c": "KGP",
    "n": "Kharagpur Jn",
    "city": "Kharagpur",
    "st": "West Bengal",
    "z": "SER",
    "d": "Kharagpur",
    "cat": "A1",
    "pf": 12,
    "tr": 120
  },
  {
    "c": "CKP",
    "n": "Chakradharpur",
    "city": "Chakradharpur",
    "st": "Jharkhand",
    "z": "SER",
    "d": "Chakradharpur",
    "cat": "C",
    "pf": 5,
    "tr": 50
  },
  {
    "c": "BBS",
    "n": "Bhubaneswar",
    "city": "Bhubaneswar",
    "st": "Odisha",
    "z": "ECoR",
    "d": "Bhubaneswar",
    "cat": "A1",
    "pf": 6,
    "tr": 115
  },
  {
    "c": "CTC",
    "n": "Cuttack",
    "city": "Cuttack",
    "st": "Odisha",
    "z": "ECoR",
    "d": "Bhubaneswar",
    "cat": "B",
    "pf": 5,
    "tr": 80
  },
  {
    "c": "PURI",
    "n": "Puri",
    "city": "Puri",
    "st": "Odisha",
    "z": "ECoR",
    "d": "Bhubaneswar",
    "cat": "B",
    "pf": 5,
    "tr": 60
  },
  {
    "c": "BAM",
    "n": "Brahmapur",
    "city": "Berhampur",
    "st": "Odisha",
    "z": "ECoR",
    "d": "Bhubaneswar",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "RGDA",
    "n": "Rayagada (New Division Jun 2026)",
    "city": "Rayagada",
    "st": "Odisha",
    "z": "ECoR",
    "d": "Rayagada",
    "cat": "B",
    "pf": 4,
    "tr": 55
  },
  {
    "c": "SBP",
    "n": "Sambalpur Rd",
    "city": "Sambalpur",
    "st": "Odisha",
    "z": "SER",
    "d": "Sambalpur",
    "cat": "C",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "BPL",
    "n": "Bhopal Jn",
    "city": "Bhopal",
    "st": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "cat": "A1",
    "pf": 6,
    "tr": 140
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
    "c": "JBP",
    "n": "Jabalpur Jn",
    "city": "Jabalpur",
    "st": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "cat": "A1",
    "pf": 7,
    "tr": 130
  },
  {
    "c": "ET",
    "n": "Itarsi Jn",
    "city": "Itarsi",
    "st": "Madhya Pradesh",
    "z": "WCR",
    "d": "Bhopal",
    "cat": "B",
    "pf": 6,
    "tr": 130
  },
  {
    "c": "KTE",
    "n": "Katni Jn",
    "city": "Katni",
    "st": "Madhya Pradesh",
    "z": "WCR",
    "d": "Jabalpur",
    "cat": "B",
    "pf": 5,
    "tr": 80
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
    "c": "R",
    "n": "Raipur Jn",
    "city": "Raipur",
    "st": "Chhattisgarh",
    "z": "SECR",
    "d": "Raipur",
    "cat": "A1",
    "pf": 6,
    "tr": 105
  },
  {
    "c": "BSP",
    "n": "Bilaspur Jn",
    "city": "Bilaspur",
    "st": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "cat": "A1",
    "pf": 7,
    "tr": 115
  },
  {
    "c": "KMT",
    "n": "Korba",
    "city": "Korba",
    "st": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "cat": "C",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "APR",
    "n": "Ambikapur",
    "city": "Ambikapur",
    "st": "Chhattisgarh",
    "z": "SECR",
    "d": "Bilaspur",
    "cat": "D",
    "pf": 2,
    "tr": 15
  },
  {
    "c": "AY",
    "n": "Ayodhya Dham Jn",
    "city": "Ayodhya",
    "st": "Uttar Pradesh",
    "z": "NR",
    "d": "Lucknow NR",
    "cat": "A1",
    "pf": 6,
    "tr": 100
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
    "c": "SNSI",
    "n": "Sainagar Shirdi",
    "city": "Shirdi",
    "st": "Maharashtra",
    "z": "CR",
    "d": "Solapur",
    "cat": "A",
    "pf": 4,
    "tr": 40
  },
  {
    "c": "J",
    "n": "Jalna",
    "city": "Jalna",
    "st": "Maharashtra",
    "z": "SCR",
    "d": "Nanded",
    "cat": "B",
    "pf": 3,
    "tr": 40
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
    "c": "BVC",
    "n": "Bhavnagar Terminus",
    "city": "Bhavnagar",
    "st": "Gujarat",
    "z": "WR",
    "d": "Bhavnagar",
    "cat": "A",
    "pf": 4,
    "tr": 45
  },
  {
    "c": "MAO",
    "n": "Madgaon Jn",
    "city": "Madgaon",
    "st": "Goa",
    "z": "KR",
    "d": "Karwar",
    "cat": "A1",
    "pf": 4,
    "tr": 70
  },
  {
    "c": "VSG",
    "n": "Vasco da Gama",
    "city": "Vasco",
    "st": "Goa",
    "z": "SWR",
    "d": "Hubballi",
    "cat": "B",
    "pf": 3,
    "tr": 30
  },
  {
    "c": "ROU",
    "n": "Rourkela Jn",
    "city": "Rourkela",
    "st": "Odisha",
    "z": "SER",
    "d": "Chakradharpur",
    "cat": "A1",
    "pf": 5,
    "tr": 95
  }
];

/* ═══════════════ METRO NETWORKS (12 operational cities) ═══════════════ */
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
