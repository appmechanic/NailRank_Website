# NailRank Website

Public marketing site for NailRank. Built with **Next.js 15**, **React 19**, and **Tailwind CSS**.

This is a standalone static site — it does **not** talk to the NailRanks backend. Waitlist and contact form submissions are sent to a third-party form service (Readdy).

---

## Requirements

- **Node.js** 18.17 or newer (Next.js 15 requirement)
- **npm** (comes with Node)

---

## 1. Install

```bash
git clone <repo-url> NailRank_Website
cd NailRank_Website/frontend

npm install
```

---

## 2. Run in development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. The site hot-reloads as you edit files.

The dev server listens on `0.0.0.0` so you can also reach it from other devices on your network at `http://<your-ip>:3000`.

---

## 3. Build for production

```bash
npm run build
```

This creates an optimized production build in `.next/`. To preview the production build locally:

```bash
npm run start   # (optional, add "start": "next start" if not present)
```

If you want a fully static export (files you can drop on any static host), the output goes to `out/`.

---

## 4. Lint

```bash
npm run lint
```

---

## Project structure

```
frontend/
├── app/                      # Next.js app-router pages
│   ├── layout.tsx            # site-wide layout
│   ├── page.tsx              # landing page
│   ├── HeroSection.tsx       # landing sections
│   ├── HowRankingsWork.tsx
│   ├── FeaturesSection.tsx
│   ├── WhoIsForSection.tsx
│   ├── FounderSection.tsx
│   ├── StatsSection.tsx
│   ├── DownloadSection.tsx
│   ├── about/                # About page
│   ├── contact/              # Contact page (still built, not linked in nav)
│   ├── privacy-policy/
│   ├── terms/
│   └── not-found.tsx
├── components/
│   ├── Header.tsx            # top navigation
│   ├── Footer.tsx
│   ├── WaitlistModal.tsx     # Android + Founding-Artist signup popup
│   └── AppStoreButton.tsx
├── public/                   # static assets
├── next.config.ts
├── tailwind.config.js
└── package.json
```

---

## Where signups go

- **Android Waitlist** and **Founding Artist Application** popups → `https://readdy.ai/api/form/d7166pohb0rqicn68bh0`
- **Contact form** → `https://readdy.ai/api/form/d716o5bk1jkj467r59s0`

Submissions are collected by Readdy — check the Readdy dashboard to review them. To point at a different form service, update the `fetch(...)` URLs in `components/WaitlistModal.tsx` and `app/contact/page.tsx`.

---

## Common issues

- **Port 3000 already in use** → change the port: `npm run dev -- -p 3001`
- **Icons not showing** → the site uses RemixIcon classes (e.g. `ri-menu-line`). Make sure the RemixIcon CDN link stays in `app/layout.tsx`.
- **Tailwind classes not applying** → restart the dev server after editing `tailwind.config.js`.
