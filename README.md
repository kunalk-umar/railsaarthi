# 🚆 RailSaarthi v3 — Indian Railways Companion (Nov 2026 Edition)

> **Real-Time Indian Railways Companion** — Live train running status, PNR tracking, official 2026 tariff calculator, 60-day Advance Reservation Period (ARP) calculator, 12 metro network guides, and national railway statistics dashboard.

[![Indian Railways](https://img.shields.io/badge/Data_Pack-November_2026-brightgreen.svg)](#)
[![Trains](https://img.shields.io/badge/Trains-1%2C631_Services-blue.svg)](#)
[![Stations](https://img.shields.io/badge/Stations-673_Verified-green.svg)](#)
[![Vande Bharat](https://img.shields.io/badge/Vande_Bharat-176_Services-purple.svg)](#)
[![Amrit Bharat](https://img.shields.io/badge/Amrit_Bharat-70_Services-orange.svg)](#)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-blue.svg)](https://kunalk-umar.github.io/railsaarthi/)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/kunalk-umar/railsaarthi)

---

### 🌐 Live Deployments:
* **GitHub Pages CDN:** [https://kunalk-umar.github.io/railsaarthi/](https://kunalk-umar.github.io/railsaarthi/)
* **Render Web Service:** [Deploy with 1-Click on Render](https://render.com/deploy?repo=https://github.com/kunalk-umar/railsaarthi) · See [DEPLOY.md](DEPLOY.md)

---

## 🌟 Key Features

1. **🚆 Complete Train Directory (1,631 Verified Authentic Trains with Full Halts)**
   - **Vande Bharat Network (176 Services)**: All 88 bidirectional operational pairs across India (including the *Howrah–Kamakhya Sleeper*, *New Delhi–Varanasi*, *New Delhi–Katra*, *Mumbai–Gandhinagar*, *Bengaluru–Dharwad*, etc.).
   - **Amrit Bharat Express (70 Services)**: Push-pull superfast trains for affordable high-speed travel (*Darbhanga–Anand Vihar*, *Malda Town–SMVT Bengaluru*, *Saharsa–LTT*, *New Delhi–Patna AC 3.0 Special*, etc.).
   - **Rajdhani, Shatabdi, Duronto, Tejas & Garib Rath**: Complete premium express network with authentic intermediate stops, sequential schedules, running days, and distances.
   - **Iconic Superfast & Mail/Express**: Grand Trunk, Tamil Nadu Exp, Kerala Exp, Vivek Exp, Himsagar Exp, Coromandel Exp, Punjab Mail, Netaji Mail, Golden Temple Mail, etc.

2. **📊 National Statistics & Insights Dashboard (Nov 2026 PIB / Ministry Releases)**
   - **Passengers**: 741 Crore (FY2025-26, +3.54%), moving **~2.3 Crore passengers daily**.
   - **Freight**: 1,670 MT annual loading, with an **all-time October record of 145.07 MT** (+8.32%).
   - **Route Length**: 69,181 km network (109,748 km running track; 135,207 km total track).
   - **Electrification**: **99.6% Broad-Gauge Electrified** (69,873 route km).
   - **Kavach 4.0 Anti-Collision**: 2,633 route km commissioned (Delhi–Mumbai & Delhi–Howrah corridors); 21,794 km trackside work underway.
   - **Stations & Divisions**: 7,461 stations across 18 zones and 70 divisions (including the new Rayagada division added 1 June 2026).
   - **Mumbai–Ahmedabad Bullet Train**: 508 km (Surat–Bilimora 50 km stretch targeted for Aug 2027).
   - **Budget Outlay**: Record ₹2.93 Trillion capital outlay (Union Budget 2026-27).

3. **📋 Official IRCTC & Railway Board Booking Rules Guide**
   - **Interactive 60-Day ARP Calculator**: Select your travel date to compute the exact opening date, Aadhaar priority window (8:00 AM – 4:00 PM), general window (4:00 PM onwards), and Tatkal dates.
   - **Tatkal Schedule**: AC at 10:00 AM, Non-AC at 11:00 AM (1 day prior to journey date).
   - **Aadhaar Authentication & OTP**: Enforced across IRCTC online, PRS reservation counters, and agents.
   - **8-Hour Reservation Charting**: First charts prepared 8 hours prior to train departure for passenger certainty.
   - **26 Dec 2025 Tariff Revision**: Calibrated with the latest official rate revision (+1p/km ordinary non-AC, +2p/km Mail/Express non-AC & AC).

4. **📍 Real-Time Live Train Status & PNR**
   - Real-time station progression, platform indicators, arrival/departure delays, and auto-refresh every 90 seconds.
   - 10-digit PNR lookup with coach, berth, chart preparation status, and passenger list.

5. **🚇 12 Operational Metro Systems**
   - Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Ahmedabad, Pune, Nagpur, Lucknow, Jaipur, Kochi.

---

## ⚡ Quick Start (Zero Dependencies)

Pure Node.js built-ins only. No `npm install` needed to run!

```bash
# 1. Clone repository
git clone https://github.com/kunalk-umar/railsaarthi.git
cd railsaarthi

# 2. Run server
node server.js
```

Open your browser at: **`http://localhost:8080`**

---

## 🌐 API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/health` | Service health status, version, mode (live/simulated) |
| `GET /api/stats` | Official 2026 national railway metrics & fleet benchmark data |
| `GET /api/rules` | Official booking rules: 60-day ARP, Tatkal timings, chart timeline |
| `GET /api/live/:trainNumber?date=YYYY-MM-DD` | Live running status & delay tracking |
| `GET /api/pnr/:pnrNumber` | PNR status, coach, berth, and chart preparation status |

---

## 🚀 Cloud Deployment

### 1. Vercel (1-Click)
- Go to [vercel.com/new](https://vercel.com/new)
- Import `kunalk-umar/railsaarthi`
- Output Directory: `public`
- Click **Deploy**

### 2. Render.com (Free, Always-On)
- Go to [render.com](https://render.com) → **New Web Service**
- Connect `kunalk-umar/railsaarthi`
- Start Command: `node server.js`
- Plan: Free → Click **Create Web Service**

---

## 🔑 Real Live Data (Optional)
To enable real IRCTC live data:
1. Register at [indianrailapi.com](https://indianrailapi.com) (free 1,000 req/day).
2. Set environment variable: `INDIANRAIL_API_KEY=your_key` in `.env` or in your cloud deployment settings.
3. Restart server.
