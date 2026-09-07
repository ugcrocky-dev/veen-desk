/**
 * Veen Desk inventory — single source of truth.
 * To add a product later: append an object below, set group, push to main.
 * Groups: active | vps | creator | practice | archive
 */
window.VEEN_PRODUCTS = [
  // —— Active (Vercel / public product surfaces) ——
  {
    group: "active",
    name: "FOMO Paper Lab",
    desc: "100 paper-trading bots racing with $1,000 each — FOMO strategy lab (Vercel).",
    url: "https://fomo-paper-lab.vercel.app",
    repo: "https://github.com/ugcrocky-dev/fomo-paper-lab",
    chat: "https://cursor.com/agents/bc-01a075d2-6f5e-7f04-a1c0-8503634b995f",
    host: "vercel"
  },
  {
    group: "active",
    name: "Polymarket Paper Lab",
    desc: "Polymarket paper trading lab — 100 bots, same race format.",
    url: "https://polymarket-paper-lab.vercel.app",
    repo: "https://github.com/ugcrocky-dev/polymarket-paper-lab",
    chat: "https://cursor.com/agents/bc-01a076b0-4497-7692-968f-ed8ab7ae3d8d",
    host: "vercel"
  },
  {
    group: "active",
    name: "Income Idea Arena",
    desc: "100 automated income ideas with static + live scoreboard.",
    url: "https://income-idea-arena.vercel.app",
    repo: "https://github.com/ugcrocky-dev/income-idea-arena",
    chat: "https://cursor.com/agents/bc-01a076d6-8bca-7375-a321-58b40879d53b",
    host: "vercel"
  },
  {
    group: "active",
    name: "SellStack",
    desc: "Launch dashboard for dropshipping, Amazon FBA, and selling platforms.",
    url: "https://sellstack-blue.vercel.app",
    repo: "https://github.com/ugcrocky-dev/sellstack",
    chat: "https://cursor.com/agents/bc-01a075ff-e9ac-74c9-8a56-4d42b71e927f",
    host: "vercel"
  },
  {
    group: "active",
    name: "RideStack",
    desc: "Lawrenceville GA rideshare, medical courier, and contracts board.",
    url: "https://ridestack.vercel.app",
    repo: "https://github.com/ugcrocky-dev/ridestack",
    chat: "https://cursor.com/agents/bc-01a0765e-5411-73bc-beff-d6d5fd217847",
    host: "vercel"
  },
  {
    group: "active",
    name: "Urus Radar",
    desc: "Multi-market used Lamborghini Urus listings + import cost compare. Includes RentalDesk finance view.",
    url: "https://urus-radar.vercel.app",
    repo: "https://github.com/ugcrocky-dev/urus-radar",
    chat: "https://cursor.com/agents/bc-01a07603-2ab1-7edf-a68f-7f144b7da894",
    host: "vercel"
  },
  {
    group: "active",
    name: "FlipLedger",
    desc: "Reseller deal profit calculator — thrift/Marketplace finds to cash.",
    url: "https://flipledger-app.vercel.app",
    repo: "https://github.com/ugcrocky-dev/flipledger",
    chat: "https://cursor.com/agents/bc-01a06ef3-21fe-7689-bac3-214e4191bd55",
    host: "vercel"
  },
  {
    group: "active",
    name: "Earnings Play Radar",
    desc: "Earnings play dashboard with Alpaca-powered scans.",
    url: "https://earnings-play-radar.vercel.app",
    repo: "https://github.com/ugcrocky-dev/earnings-play-radar",
    host: "vercel"
  },

  {
    group: "active",
    name: "Kalshi Paper Lab",
    desc: "Paper-trading lab: 100 bots on Kalshi public markets and tape.",
    url: "https://kalshi-paper-lab.vercel.app",
    repo: "https://github.com/ugcrocky-dev/kalshi-paper-lab",
    chat: "https://cursor.com/agents/bc-57166461-9dfc-593a-ba0f-d9a809ed7a87",
    host: "vercel"
  },

  // —— VPS (RackNerd 108.174.57.19) ——
  {
    group: "vps",
    name: "FOMO Paper Lab (VPS)",
    desc: "Always-on FOMO paper lab on RackNerd — preferred production for ticks/keepalive.",
    url: "https://paperlab.108.174.57.19.nip.io",
    altUrls: [
      "http://108.174.57.19:3010",
      "http://108.174.57.19"
    ],
    repo: "https://github.com/ugcrocky-dev/fomo-paper-lab",
    chat: "https://cursor.com/agents/bc-01a075d2-6f5e-7f04-a1c0-8503634b995f",
    host: "vps",
    note: "IP 108.174.57.19 · port 3010"
  },
  {
    group: "vps",
    name: "Crazy Ideas Service (VPS)",
    desc: "Service from crazy-ideas implementation chat on the same RackNerd box.",
    url: "http://108.174.57.19:43122",
    repo: null,
    chat: "https://cursor.com/agents/bc-01a06ef3-21fe-7689-bac3-214e4191bd55",
    host: "vps",
    note: "IP 108.174.57.19 · port 43122"
  },
  {
    group: "vps",
    name: "RackNerd NerdVM Panel",
    desc: "VPS control panel for the RackNerd server (reinstall, console, power).",
    url: "https://nerdvm.racknerd.com",
    repo: null,
    host: "vps",
    note: "Provider panel · my.racknerd.com for billing"
  },
  {
    group: "vps",
    name: "RackNerd Account",
    desc: "Billing, tickets, and knowledge base for the VPS.",
    url: "https://my.racknerd.com/",
    repo: null,
    host: "vps"
  },

  // —— Creator ——
  {
    group: "creator",
    name: "Veen Desk",
    desc: "This HQ — living inventory of every product, VPS link, and repo.",
    url: "https://veen-desk.vercel.app",
    repo: "https://github.com/ugcrocky-dev/veen-desk",
    host: "vercel"
  },
  {
    group: "creator",
    name: "Collab HQ",
    desc: "Action dashboard for brand collaborations, outreach, and pitches.",
    url: "https://rockyveen-collab-hq.vercel.app",
    repo: "https://github.com/ugcrocky-dev/rockyveen-collab-hq",
    chat: "https://cursor.com/agents/bc-01a06f9d-4ff1-73e0-85bf-cd5181af595e",
    host: "vercel"
  },
  {
    group: "creator",
    name: "Rate Card",
    desc: "Rocky Veen creator rate card (static).",
    url: "https://rockyveen-rate-card.vercel.app",
    repo: "https://github.com/ugcrocky-dev/rockyveen-rate-card-static",
    host: "vercel"
  },
  {
    group: "creator",
    name: "Rocky Veen Site",
    desc: "Public creator brand site.",
    url: "https://rockyveen.com",
    repo: null,
    host: "custom"
  },

  // —— Practice ——
  {
    group: "practice",
    name: "Next Step Psychiatry",
    desc: "Clinic marketing site — nextsteppsychiatry.com.",
    url: "https://nextsteppsychiatry.com",
    repo: "https://github.com/ugcrocky-dev/nextstep-site",
    host: "custom"
  },
  {
    group: "practice",
    name: "Lawrenceville Medical Live",
    desc: "Lawrenceville medical business ideas dashboard.",
    url: "https://lawrenceville-medical-live.vercel.app",
    repo: "https://github.com/ugcrocky-dev/lawrenceville-medical-dashboard",
    chat: "https://cursor.com/agents/bc-127b450b-5870-53c5-9509-a941a7922caa",
    host: "vercel"
  },
  {
    group: "practice",
    name: "Appointment Weather",
    desc: "Skyline map of the clinic day — providers as buildings, slots as windows.",
    url: "https://appointment-weather-veen113-gmailcoms-projects.vercel.app",
    repo: "https://github.com/ugcrocky-dev/appointment-weather",
    chat: "https://cursor.com/agents/bc-07b9ada0-7cf4-5d8b-972a-0da61480cd82",
    host: "vercel"
  },
  {
    group: "practice",
    name: "HouseFirm Desk",
    desc: "HouseFirm operations desk.",
    url: "https://housefirm-desk.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "practice",
    name: "HouseFirm",
    desc: "HouseFirm product surface.",
    url: "https://housefirm.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "practice",
    name: "GetSlimRx",
    desc: "GetSlimRx patient-facing site.",
    url: "https://getslimrx.com",
    repo: null,
    host: "custom"
  },

  // —— Archive / earlier ——
  {
    group: "archive",
    name: "Next Step Automation (Pulse)",
    desc: "Pulse practice operations desk — private repo.",
    url: null,
    repo: "https://github.com/ugcrocky-dev/Next-Step-Automation",
    host: "repo"
  },
  {
    group: "archive",
    name: "Full Market Breakout Scanner",
    desc: "U.S. stock breakout scanner with Alpaca SIP + live dashboard.",
    url: null,
    repo: "https://github.com/ugcrocky-dev/full-market-breakout-scanner",
    host: "repo"
  },
  {
    group: "archive",
    name: "Crypto Momentum Radar",
    desc: "Earlier crypto momentum dashboard on Vercel.",
    url: "https://crypto-momentum-radar.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "GEX Trading System",
    desc: "Earlier GEX trading system deploy.",
    url: "https://gex-trading-system.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Live Websocket Lab",
    desc: "Websocket experiment deploy.",
    url: "https://live-websocket-lab.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Spravato Atlanta Site",
    desc: "Spravato Atlanta marketing site — private repo.",
    url: null,
    repo: "https://github.com/ugcrocky-dev/spravato-atlanta-site",
    host: "repo"
  },
  {
    group: "archive",
    name: "AI Prompts Site",
    desc: "Earlier prompts site on Vercel.",
    url: "https://ai-prompts-site.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Higgsfield Prompts",
    desc: "Higgsfield prompts experiment.",
    url: "https://higgsfield-prompts.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Kids Learning Lab",
    desc: "Earlier educational experiment on Vercel.",
    url: "https://kids-learning-lab.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "First15",
    desc: "Earlier shipped Vercel project.",
    url: "https://first15-two.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "UGC Website",
    desc: "Legacy UGC site project.",
    url: "https://ugc-website.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "TikTok App Site",
    desc: "Earlier TikTok app marketing surface.",
    url: "https://tiktok-app-site.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Robinson Hardscape",
    desc: "Client hardscape site.",
    url: "https://robinson-hardscape-site.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Alex Tree Removal",
    desc: "Client tree-removal site.",
    url: "https://alex-tree-removal.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "Abdur Notary Lawrenceville",
    desc: "Notary client site.",
    url: "https://abdur-notary-lawrenceville.vercel.app",
    repo: null,
    host: "vercel"
  },
  {
    group: "archive",
    name: "OpenClaw Workspace",
    desc: "Private workspace repo.",
    url: null,
    repo: "https://github.com/ugcrocky-dev/openclaw-workspace",
    host: "repo"
  }
];

window.VEEN_META = {
  updatedAt: "2026-09-07",
  vpsIp: "108.174.57.19",
  note: "Living inventory — add new products to products.js and push main."
};
