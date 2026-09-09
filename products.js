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
    name: "CopyGrade Paper Lab",
    desc: "Separate desk: 5 CopyGrade wallets paper-copying Polymarket at $1,000 each. Does not share state with the 100-bot Paper Lab.",
    url: "https://copygrade-paper-lab.vercel.app",
    repo: "https://github.com/ugcrocky-dev/copygrade-paper-lab",
    chat: "https://cursor.com/agents/bc-01a08603-4b84-7a40-a113-0157e35565b5",
    host: "vercel"
  },
