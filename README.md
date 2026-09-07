# The Care Circle — RCCG Sufficiency Parish

A confidential, privacy-focused support channel for members of the church.

## What it is

- A single-page React + TypeScript + Tailwind website
- A support form submitted through Web3Forms
- No database, no backend server, no admin dashboard

## Local Setup

1. Clone / navigate to the directory
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Get a Web3Forms access key from [web3forms.com](https://web3forms.com) and add it to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```
4. Configure the recipient email (`WELFARE_EMAIL_PLACEHOLDER@example.com`) in your Web3Forms dashboard.
5. Place the church logo at `public/assets/rccg-logo.png`
6. Install and run:
   ```bash
   npm install
   npm run dev
   ```

## Building

```bash
npm run build
```

## Deploy

Works with Vercel or Netlify. Add `VITE_WEB3FORMS_ACCESS_KEY` as an environment variable in the hosting dashboard and point to `dist/` for static output.

## Design Notes

- Mobile-first layout starting at 320px
- Deep navy (`#0f2a4a`) primary with white backgrounds
- Inter font via Google Fonts
- Subtle motion with `prefers-reduced-motion` support
- No analytics, no tracking cookies, no user accounts

## Manual Steps After Cloning

- [ ] Place real RCCG logo at `public/assets/rccg-logo.png`
- [ ] Add Web3Forms access key to `.env`
- [ ] Set welfare recipient email in Web3Forms dashboard
