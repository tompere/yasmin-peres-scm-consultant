# Supply Chain Consultant – Digital Platform

Static portfolio website for an independent supply chain consultant. Built with **Astro**, **React** (interactive islands), and **Tailwind CSS**. Deployed to **GitHub Pages**.

## Key Requirements

- **RTL (Right-to-Left)** – `<html dir="rtl" lang="he">`, logical CSS properties, Assistant font
- **WCAG 2.1 AA Accessibility** – skip link, semantic HTML, focus indicators, `aria-live` regions
- **Static Site Generation** – zero JS by default, React hydrated only where needed

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to dist/
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── common/       # Header, Footer, SkipLink, SEOHead
│   ├── landing/      # Hero, SocialProof, FeatureGrid
│   └── tools/        # React islands (InventoryCalculator)
├── layouts/          # BaseLayout (RTL + a11y shell)
└── pages/            # File-based routing
    ├── index.astro
    ├── services.astro
    ├── methodology.astro
    ├── about.astro
    ├── case-studies.astro
    ├── blog.astro
    ├── contact.astro
    └── tools/
        └── calculator.astro
```

## RTL Guidelines

- Use **logical properties** in Tailwind: `ms-*` / `me-*` instead of `ml-*` / `mr-*`, `ps-*` / `pe-*` instead of `pl-*` / `pr-*`
- Flexbox and Grid automatically respect `dir="rtl"`
- Directional icons (arrows, chevrons) must be mirrored for RTL
- Use `<bdi dir="ltr">` for LTR content embedded in RTL context (phone numbers, email)

## Deployment

Pushes to `main` automatically deploy via GitHub Actions (`.github/workflows/deploy.yml`).

To configure a custom domain, add a `CNAME` file in `public/` with the domain name.
