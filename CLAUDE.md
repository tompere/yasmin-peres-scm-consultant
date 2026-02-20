# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio/landing site for Yasmin Peres, a supply chain management consultant. Built as a static Hebrew RTL site with Astro 5, Tailwind CSS 3, and TypeScript. Zero JavaScript by default — only hydrate React islands where interactivity is needed.

**Live site:** https://yasmin-peres.consulting

## Commands

```bash
pnpm dev        # Dev server at localhost:4321
pnpm build      # Build static site to dist/
pnpm preview    # Preview production build locally
```

Package manager is **pnpm** (v10.30+). No test framework is configured.

## Architecture

- **Astro static site** (`output: "static"` in astro.config.mjs) deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
- **Single-page landing** at `src/pages/index.astro` — contains all main sections (hero, services, methodology, FAQ, about, contact) with content defined in frontmatter arrays
- **BaseLayout** (`src/layouts/BaseLayout.astro`) — wraps all pages with `<html dir="rtl" lang="he">`, header, footer, skip link
- **SEOHead** (`src/components/common/SEOHead.astro`) — centralized meta/OG/Twitter Cards/JSON-LD structured data (ProfessionalService, Person, WebSite, WebPage, BreadcrumbList)
- **Content collections** (`src/content/`) and **tools components** (`src/components/tools/`) are scaffolded but empty

## RTL & Accessibility Requirements

This site must maintain **RTL Hebrew** layout and **WCAG 2.1 AA** compliance:

- Use logical CSS properties: `ms-*`/`me-*` (not `ml-*`/`mr-*`), `ps-*`/`pe-*` (not `pl-*`/`pr-*`), `start`/`end` (not `left`/`right`)
- Flexbox and Grid auto-respect `dir="rtl"` — no manual reversal needed
- All interactive elements need visible focus indicators (2px pink `#FFC8DD` outline)
- Navigation uses `aria-label`, sections use `tabindex="-1"` for focus management
- FAQ uses native `<details>`/`<summary>` elements
- Mobile menu includes a focus trap (Tab/Shift+Tab cycling)
- Images: `fetchpriority="high"` on hero, lazy loading on others, descriptive alt text

## Styling Conventions

- **Tailwind utility classes** — no custom CSS files
- Color palette: navy (`navy-*`) for text, pink (`pink-*`) for accents/CTAs, light blue (`blue-50`) backgrounds
- Font: Assistant (Hebrew-friendly, loaded async from Google Fonts)
- Mobile-first responsive design with `md:` breakpoints
- Sticky mobile CTA uses IntersectionObserver to hide when contact section is visible

## Contact Integration

WhatsApp direct link with pre-filled Hebrew message (URL-encoded), phone `tel:` link, email `mailto:` link, LinkedIn with `target="_blank" rel="noopener noreferrer"`.

## License

All Rights Reserved — no copying/modifying/distributing without written consent from Yasmin Peres.
