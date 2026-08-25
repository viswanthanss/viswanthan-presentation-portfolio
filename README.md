# Viswanthan S S — Presentation Designer Portfolio

A React + TypeScript + Vite portfolio built for the Mindrift / Tendem
Presentation Designer application. Five self-directed case studies (a pitch
deck, a data-storytelling deck, an executive one-pager, a strategy deck, and
three before/after slide redesigns), each rendered as real, chart-driven
slides — not screenshots.

## Before you deploy

Open `src/config.ts` and set your real contact email:

```ts
export const CONTACT_EMAIL = "your-email@example.com";
```

Optionally add LinkedIn / Behance / Dribbble URLs in the same file — any left
blank are automatically hidden from the site.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to Netlify

1. Push this project to a GitHub repo (or drag the `dist/` folder straight
   into Netlify's manual deploy).
2. If connecting a repo: build command `npm run build`, publish directory
   `dist`.
3. `public/_redirects` is already included and copied into `dist/` on
   build, so direct navigation to routes like `/work/pitch-deck` won't
   404 on Netlify.

## Project structure

```
src/
  components/       Nav, Footer, PresentationSlide (reusable slide frame),
                     ProjectCard, CaseStudyLayout, BeforeMock, ScrollProgress
  components/charts/  Hand-built SVG chart components (line, bar, funnel,
                       2x2 matrix, timeline, flow diagram, comparison
                       matrix, allocation bar, stat row)
  data/projects.ts  Single source of truth for the five case studies'
                     metadata (used by Home, Work, and prev/next paging)
  pages/            Home, Work, About, Contact, NotFound
  pages/case-studies/  One file per case study
  config.ts         Contact email + social links (edit this, nothing else)
```

No backend, no database, no API keys, no external image APIs — every visual
is SVG/CSS generated at build time.
