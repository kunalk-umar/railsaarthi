# 🚀 RailSaarthi v3 — Deployment Guide

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 1. LOCAL (Instant — works right now)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```bash
node server.js
# → http://localhost:8080
```

**No npm install needed.** Pure Node.js built-ins only.

To enable real live data:
```bash
cp .env.example .env
# Edit .env and add your API key
node server.js
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 2. RENDER.COM (Free & Recommended)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Render is the premier choice for RailSaarthi because it supports persistent Web Services and standard HTTP streaming.

### Method A: 1-Click Render Blueprint (Fastest)
1. Go to **[https://dashboard.render.com/blueprints](https://dashboard.render.com/blueprints)**.
2. Click **New Blueprint Instance**.
3. Select your repository: `kunalk-umar/railsaarthi`.
4. Render will automatically read `render.yaml` and configure:
   - Service Name: `railsaarthi`
   - Runtime: `Node`
   - Start Command: `node server.js`
   - Health Check: `/api/health`
   - Plan: `Free`
5. Click **Apply**. Within 60 seconds, your application will be live at:
   `https://railsaarthi.onrender.com` (or your custom service URL).

### Method B: Manual Web Service
1. Go to **[https://dashboard.render.com](https://dashboard.render.com)** → Click **New +** → **Web Service**.
2. Connect your GitHub repository `kunalk-umar/railsaarthi`.
3. Configure settings:
   - **Name:** `railsaarthi`
   - **Region:** Any (e.g. *Singapore* or *Oregon*)
   - **Branch:** `master`
   - **Runtime:** `Node`
   - **Build Command:** *(leave empty)*
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
4. Expand **Advanced**:
   - **Health Check Path:** `/api/health`
5. Click **Create Web Service**.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 3. RAILWAY.APP (Free $5/month credit)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to https://railway.app → New Project → Deploy from GitHub
2. Connect your repo
3. Railway auto-detects Node.js and runs `node server.js`
4. Add env vars under **Variables** tab
5. Done — URL provided instantly

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 4. VERCEL (Free — serverless)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```bash
npm i -g vercel
vercel
# Follow prompts — deploy in 60 seconds
```

Or via GitHub:
1. Go to https://vercel.com → Import Git Repository
2. Framework: **Other**
3. Output Directory: `public`
4. Add env vars in Project Settings → Environment Variables
5. Deploy

> Note: Vercel runs as serverless functions. The in-memory cache resets between
> cold starts — fine for a demo, consider Redis for production scale.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 5. CYCLIC.SH (Free, always-on)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. https://cyclic.sh → Link GitHub repo
2. Auto-deploys on every push
3. Add env vars in dashboard
4. Free plan: 100k API calls/month

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 6. VPS / UBUNTU SERVER
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and start
git clone https://github.com/YOUR_USERNAME/railsaarthi.git
cd railsaarthi
cp .env.example .env
nano .env          # add your API keys

# Run with PM2 (keeps it alive)
npm i -g pm2
pm2 start server.js --name railsaarthi
pm2 startup        # auto-start on reboot
pm2 save

# Nginx reverse proxy (optional, for domain)
sudo apt install nginx
sudo nano /etc/nginx/sites-available/railsaarthi
```

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/railsaarthi /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free SSL with Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PUSH TO GITHUB (required for cloud deploy)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```bash
cd railsaarthi

# Initialize git
git init
git add .
git commit -m "🚆 RailSaarthi v3 — Real-Time Indian Railways"

# Create repo at github.com then:
git remote add origin https://github.com/YOUR_USERNAME/railsaarthi.git
git branch -M main
git push -u origin main
```

> ⚠️ `.env` is in `.gitignore` — your API keys are safe and never pushed.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## API KEYS — GET FREE LIVE DATA
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### IndianRailAPI.com (Recommended — 1,000 free requests/day)
1. Register at https://indianrailapi.com
2. Dashboard → Get API Key
3. Add to `.env`: `INDIANRAIL_API_KEY=your_key_here`

### RapidAPI (500 free requests/month)
1. Sign up at https://rapidapi.com
2. Search: "Indian Railway Trains"
3. Subscribe to free plan
4. Copy API key
5. Add to `.env`: `RAPIDAPI_KEY=your_key_here`

---

## Quick Deploy Summary

| Platform | Free? | Always On? | Deploy Time | Best For |
|---|---|---|---|---|
| **Render.com** | ✅ | ✅ | ~2 min | Best free option |
| **Railway.app** | ✅ | ✅ | ~1 min | Fastest setup |
| **Vercel** | ✅ | Serverless | ~1 min | Hobby/demo |
| **Cyclic.sh** | ✅ | ✅ | ~2 min | Simple apps |
| **VPS** | ❌ (~$5/mo) | ✅ | ~10 min | Production |

