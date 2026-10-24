# by-durrani — Portfolio

Personal portfolio of **Abdur Rehman Durrani** — full-stack & AI engineer,
founder of Durrani Arts. Built with **Next.js 16 (App Router, Turbopack)**,
React 19 and plain CSS — no UI or animation libraries.

## Run it

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # production build
```

## ✏️ Edit your content

Everything lives in one file: [`data/resume.js`](data/resume.js) — identity,
links, stats, about, services, skills, experience, projects, practice.

- Lines marked `// CONFIRM` are best guesses from public data — check them.
- The **first four projects** become large featured cards (`hue` tints their
  generated cover art); the rest form the hover-reveal index list.
- In headings, wrap a word in `*asterisks*` to set it in the italic accent face.
- Add `links.leetcode` to show a LeetCode button in the Practice section.

## 🎨 Design system

Tokens at the top of [`app/globals.css`](app/globals.css): warm near-black
canvas (`#0b0b0a`), bone text (`#f2f0e9`), one acid-lime accent (`#c8f560`).
Type: Bricolage Grotesque (display), Instrument Serif italic (accents),
Geist (body), Geist Mono (labels) — self-hosted via `next/font`.

## ✨ Motion

| Piece | Where |
| --- | --- |
| Custom cursor — dot + velocity-stretched ring, inverts over links, labelled disc over projects, click ripple | `Cursor.js` |
| Magnetic buttons (`data-magnetic`), pointer spotlight (`data-spotlight`), 3D tilt (`data-tilt`) | `Cursor.js` |
| Masked word/char reveals, counters, scroll-linked text highlight, progress bar, scroll-velocity marquee skew, auto-hiding nav | `Effects.js` |
| CSS-only intro counter + curtain, rotating badge, role rotator, film grain | `globals.css` |

The cursor only runs on fine pointers; everything respects
`prefers-reduced-motion`, and content renders fully without JavaScript.

## 🖨️ Résumé / PDF

"Download résumé" (or `Ctrl/Cmd + P`) uses a dedicated print stylesheet that
turns the page into a clean black-on-white CV with full URLs.

## Structure

```
app/
  layout.js · page.js · globals.css
  icon.svg · opengraph-image.js · robots.js · sitemap.js
  components/   # one file per section + Cursor, Effects, Text helpers
data/
  resume.js     # ← your content
```
