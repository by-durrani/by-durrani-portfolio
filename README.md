# Developer Portfolio — Next.js (Wise-style light)

A Wise-inspired **light fintech** portfolio: sage canvas (`#e8ebe6`), white
cards, warm olive-black ink, the single lime-green CTA (`#9fe870`), a heavy
800-weight display face (Manrope standing in for Wise Sans) over Inter body,
and generous **24px** rounded cards/buttons. Surface contrast (sage ↔ white)
carries the section rhythm, with a dark polarity-flip for the LeetCode and
contact moments. Built with **Next.js (App Router)** + plain CSS.

![cta](https://img.shields.io/badge/CTA-%239fe870-9fe870) ![canvas](https://img.shields.io/badge/canvas-%23e8ebe6-e8ebe6) ![next](https://img.shields.io/badge/next.js-14-black)

> Folder is still named `brutalist-portfolio` from the first draft. The design
> has since cycled through minimalism, Framer-dark, and now Wise-light. Rename
> the folder freely; nothing depends on the name.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 (the bundled dev script in `.claude/launch.json` uses 3001).

## ✏️ Edit YOUR content

**Everything lives in one file:** [`data/resume.js`](data/resume.js).
Replace the placeholders — anything marked `// TODO` is a must-swap:

- `name`, `title`, `tagline`, `location`, `availability`
- `links.github / linkedin / leetcode` — your real profile URLs
- `experience[]`, `projects[]` (the **first** project becomes the dark
  "featured" polarity-flip card), `leetcode`, `stats[]`

## 🎨 Theme tokens

Top of [`app/globals.css`](app/globals.css):

```css
:root {
  --primary: #9fe870;     /* Wise green — the one CTA color */
  --canvas-soft: #e8ebe6; /* sage page mood */
  --canvas: #ffffff;      /* card interiors */
  --ink: #0e0f0c;         /* warm olive-black text + dark bands */
  --ink-deep: #163300;    /* forest ink on green surfaces */
  --primary-pale: #e2f6d5;/* badges / chips */
}
```

Design rules baked in: one green CTA (never a second accent, never green CTA on
a green ground), 24px radius on all buttons + cards, sage ↔ white band
alternation for elevation, heavy 800 display for headlines / Inter for
everything else, and the dark `card--dark` / `band--ink` used only for the
LeetCode + contact "promotional" moments.

### Fonts

**Manrope** (800) loads via Google Fonts as the Wise Sans stand-in for display;
**Inter** handles sub-display + body. Falls back to system fonts if Google
Fonts is blocked.

## ✨ Motion

Hover lifts on cards/buttons (soft shadow), staggered scroll-reveal entrances
(`ScrollReveal.js` + `IntersectionObserver`), a pure-CSS hero load animation,
and smooth scroll with sticky-nav offset — all gated behind
`prefers-reduced-motion`.

## 🖨️ Résumé / PDF · 🚀 Deploy

"Download résumé" (or `Ctrl/Cmd + P`) → clean print stylesheet. Host free on
**Cloudflare Pages / Netlify / GitHub Pages** (`output: "export"` for the
latter) — no Vercel required.

## Structure

```
app/
  layout.js · page.js · globals.css
  components/   # one file per section + ScrollReveal.js
data/
  resume.js     # ← your content (edit this)
```
