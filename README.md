# Ashish Kapoor Portfolio

Cinematic, streaming-themed portfolio built with React 19, Vite, Tailwind CSS 4, GSAP, and Framer Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text, links, stats, experience, skills, and projects live in **`src/data/profile.js`**. Components only render that data.

- **Photo:** add a portrait to `src/assets/`, import it in `profile.js`, and set `PROFILE.photo`. Until then the hero shows a placeholder poster.
- **Company logos:** `src/assets/logos/`.
- **Projects:** the folder animation lays out up to 8 cards around the folder; more cards fall back to a plain grid.
