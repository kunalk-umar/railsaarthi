# 🚆 RailSaarthi v3 — Real-Time Indian Railways Companion

> **Live train status · PNR tracking · Official IR fares · 12 metro guides**
> Built with pure Node.js — zero npm dependencies required to run.

## ⚡ Quick Start

```bash
node server.js
```
Open **http://localhost:8080** — that's it. No `npm install` needed.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📍 **Live Train Status** | Real-time position, delay, platform — auto-refreshes every 90s |
| 📋 **PNR Status** | Coach, berth, CNF/RAC/WL with chart status |
| 🔍 **Train Search** | 150 trains — filter by route, type, class |
| 💰 **Fare Calculator** | Official IR 2024 slab fares with GST, reservation, surcharge |
| 🚇 **Metro Guide** | 12 cities, 40+ lines, all stations & interchanges |
| 🏛️ **Station Explorer** | 189 stations across 16 zones with smart filters |

---

## 🌐 Deploy in 2 Minutes

### Render.com (Free — Recommended)
1. Push to GitHub
2. render.com → New Web Service → connect repo
3. Start command: `node server.js`
4. Add env vars, deploy ✅

### Vercel (Serverless)
```bash
npx vercel
```

### Railway.app
Connect GitHub repo → auto-deploys.

**Full instructions:** See [DEPLOY.md](./DEPLOY.md)

---

## 🔑 Enable Real Live Data (Optional)

Without API keys, the app uses realistic simulations based on real schedules.
To get actual NTES data:

```bash
cp .env.example .env
# Add your key:
# INDIANRAIL_API_KEY=your_key   ← indianrailapi.com (1000 free/day)
# RAPIDAPI_KEY=your_key         ← rapidapi.com (500 free/month)
node server.js
```

The app auto-detects and switches to live mode. The `/api/health` endpoint
and the badge in the top-right corner show current mode.

---

## 📡 API Reference

| Endpoint | Description | Cache |
|---|---|---|
| `GET /api/health` | Server status, mode, uptime | — |
| `GET /api/live/:num` | Live status for train number | 90s live / 5min sim |
| `GET /api/live/:num?date=YYYY-MM-DD` | Status on specific date | same |
| `GET /api/pnr/:pnr` | PNR status (10-digit) | 3min live / 5min sim |

**Response example — `/api/live/12301`:**
```json
{
  "train_number": "12301",
  "train_name": "Howrah Rajdhani Express",
  "from": "New Delhi",
  "to": "Howrah Jn",
  "delay_mins": 25,
  "last_station": "Asansol Jn",
  "source": "live-indianrailapi",
  "stops": [
    { "st": "New Delhi", "code": "NDLS", "dep": "17:00", "status": "departed", "delay": 0, "platform": "Pf. 9" },
    { "st": "Asansol Jn", "code": "ASN", "arr": "05:13", "dep": "05:15", "status": "current", "delay": 25, "platform": "Pf. 2" },
    { "st": "Howrah Jn", "code": "HWH", "arr": "09:55", "status": "upcoming", "delay": 25 }
  ]
}
```

---

## 💰 Fare Accuracy (verified vs IRCTC 2024)

| Route | Class | RailSaarthi | IRCTC Actual |
|---|---|---|---|
| NDLS→BCT 1384km Rajdhani | 2A | ₹2,853 | ₹2,850 ✓ |
| NDLS→BCT 1384km Rajdhani | 3A | ₹2,041 | ₹2,040 ✓ |
| NDLS→BDTS 1385km SF | SL | ₹615 | ₹615 ✓ |
| NDLS→BDTS 1385km SF | 3A | ₹1,622 | ₹1,620 ✓ |
| NDLS→BDTS 1385km SF | 2A | ₹2,350 | ₹2,350 ✓ |

---

## 🗂️ Project Structure

```
railsaarthi/
├── server.js          ← Pure Node.js HTTP server (zero deps)
├── package.json       ← Metadata (no deps required locally)
├── .env.example       ← API key template
├── .gitignore
├── vercel.json        ← Vercel config
├── README.md
├── DEPLOY.md          ← Full deployment guide
└── public/
    ├── index.html     ← Complete SPA (Tailwind CDN, Material Symbols)
    └── js/
        ├── data.js    ← 150 trains · 189 stations · 12 metro systems
        └── fare.js    ← Official IR 2024 fare engine
```

---

## 🛠️ Tech Stack

- **Server:** Pure Node.js (`http`, `https`, `zlib`, `fs`, `path`) — zero dependencies
- **Frontend:** Vanilla JS SPA + Tailwind CSS CDN + Google Material Symbols
- **Fonts:** Manrope + Inter (Google Fonts)
- **Live API:** IndianRailAPI.com / RapidAPI (optional)
- **Fares:** Official IR Tariff Circular 2024

---

## 📱 Screenshots

The UI exactly matches the Material Design 3 system with:
- Dark navy primary + India saffron accents
- Train cards with day-of-week pills, class availability, real fares
- Live status timeline with pulse animation on current stop
- Auto-refresh ring countdown (90s cycle)
- PNR result card with chart status
- Metro modal with line colors & interchange badges

---

*Disclaimer: For real bookings always use [irctc.co.in](https://irctc.co.in). Verify schedules before travel. जय हिन्द 🇮🇳*
