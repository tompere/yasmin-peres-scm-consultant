# Technical Specification: Supply Chain Consultant Digital Platform (RTL + A11y)

**Version:** 1.2
**Target Infrastructure:** GitHub Pages (Static Hosting)
**Primary Goal:** High-performance, accessible, SEO-optimized portfolio with interactive lead-generation tools.
**Language Direction:** **RTL (Right-to-Left)** - *Critical Requirement*
**Accessibility Standard:** **WCAG 2.1 Level AA** - *Critical Requirement*

## 1. Technology Stack

*   **Core Framework:** [Astro](https://astro.build/) (v4+)
    *   *Reasoning:* Zero-JS default; native Markdown support; optimized for Static Site Generation (SSG).
*   **UI Framework:** [React](https://react.dev/)
    *   *Usage:* Strictly for interactive "islands" (Calculators, Quizzes).
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    *   *Usage:* Utility-first styling.
    *   **RTL Requirement:** Must use **Logical Properties** (e.g., `ms-4` instead of `ml-4`, `pe-6` instead of `pr-6`) to ensure layout mirrors correctly.
    *   *Plugin:* `@tailwindcss/typography` (configured for RTL text alignment).
*   **Icons:** [Lucide React](https://lucide.dev/)
    *   **RTL Requirement:** Directional icons (arrows, chevrons) must be mirrored or conditionally rendered based on `dir="rtl"`.

## 2. Infrastructure & Deployment

*   **Hosting:** GitHub Pages
    *   **Constraint:** Static HTML/CSS/JS only.
*   **CI/CD:** GitHub Actions
    *   **Workflow:** Standard Astro `deploy.yml`.
*   **Domain Management:**
    *   Configure `CNAME` in `public/`.
    *   Enforce HTTPS.

## 3. Architecture & Directory Structure

```text
src/
├── components/
│   ├── common/       # Header, Footer, SkipLink, SEOHead (with dir="rtl")
│   ├── landing/      # Hero, SocialProof, FeatureGrid
│   └── tools/        # React Components (Calculators - RTL & A11y optimized)
├── content/
│   ├── blog/         # MDX files (Hebrew/Arabic content)
│   ├── services/     # MDX files for Service Offerings
│   └── case-studies/ # MDX files for "Anonymized Projects"
├── layouts/          # BaseLayout (sets <html dir="rtl" lang="he">)
└── pages/            # File-based routing
```

## 4. Key Feature Implementation

### A. RTL Layout & Typography
*   **Global Config:** Root `<html>` tag must include `dir="rtl"` and correct `lang` attribute (e.g., `he` or `ar`).
*   **Typography:**
    *   Must use a font family that supports the target language script (e.g., *Heebo*, *Rubik*, or *Assistant* for Hebrew; *Cairo* or *Tajawal* for Arabic).
    *   Base text alignment: `text-right` (default for RTL), but ensure headers and lists align correctly.
*   **Grid/Flexbox:** Use Flexbox/Grid which automatically respects the `dir` attribute (e.g., `flex-start` starts from the right in RTL).

### B. Interactive Tools (React Islands)
*   **Inventory Savings Calculator:**
    *   **Inputs:** Labels aligned right, input fields ordered correctly.
    *   **Logic:** Numeric outputs (currency) must follow locale formatting (e.g., `₪` or currency suffix).
*   **Maturity Assessment Quiz:**
    *   **Flow:** "Next" buttons point Left (logical forward in RTL).
    *   **Progress Bars:** Fill from Right to Left.

### C. Lead Generation & Forms
*   **Forms:** Input fields must have `text-align: right`.
*   **Placeholders:** Ensure placeholder text is RTL compliant.
*   **Phone Numbers:** Ensure bidirectional text (LTR numbers in RTL text) is handled correctly using `<bdi>` tags or CSS `direction: ltr` wrappers where necessary.

## 5. Accessibility (A11y) Requirements

**Target:** WCAG 2.1 Level AA Compliance.

### A. Semantic Structure & Navigation
*   **Landmarks:** Use correct semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`) to allow screen reader users to jump between sections.
*   **Skip Link:** Include a "Skip to Content" link as the first focusable element in the DOM.
*   **Heading Hierarchy:** Strictly follow `<h1>` -> `<h2>` -> `<h3>` order. No skipping levels for styling purposes.

### B. RTL & Keyboard Navigation
*   **Tab Order:** Must flow logically from Right-to-Left.
*   **Focus Indicators:** All interactive elements (links, buttons, inputs) must have a visible focus state (e.g., `ring-2 ring-offset-2 ring-blue-500`).
*   **Interactive Components:**
    *   **Modals/Dialogs:** Must trap focus within the modal when open and return focus to the trigger button when closed.
    *   **Calculators:** Results must be announced to screen readers (use `aria-live="polite"` for dynamic result updates).

### C. Visual Accessibility
*   **Color Contrast:** Text and interactive elements must meet the 4.5:1 contrast ratio against their background.
    *   *Note:* "Blue Chip" corporate colors often need adjustment (e.g., darkening the blue) to pass AA standards on white backgrounds.
*   **Text Resizing:** Site must remain functional and readable when zoomed to 200%.
*   **Motion:** Respect `prefers-reduced-motion` media query (disable complex animations if requested).

### D. Images & Media
*   **Alt Text:** All images must have meaningful `alt` attributes. Decorative images (background patterns) must have `alt=""`.
*   **Charts/Graphs:** Complex visualizations (e.g., in Case Studies) must have a text-based summary or data table alternative.

## 6. Design System Requirements

*   **Typography:**
    *   *Headings:* Serif/Sans-serif pair optimized for legibility in the target script.
    *   *Body:* High readability, adequate line-height for complex scripts.
*   **Color Palette:** "Blue Chip" Corporate (Checked for Contrast).
*   **Responsiveness:** Mobile-first.
    *   *Navigation:* Hamburger menu opens from the **Right** side.

## 7. Performance & SEO Requirements

*   **Core Web Vitals:** LCP under 2.5s.
*   **SEO:**
    *   `hreflang` tags if multi-language support is planned in the future.
    *   Open Graph (OG) tags with RTL-friendly titles/descriptions.

## 8. Deliverables

1.  **Source Code:** GitHub Repository.
2.  **Documentation:** `README.md` containing:
    *   Setup instructions.
    *   **RTL Guidelines:** Specific instructions on using logical CSS properties.
    *   **A11y Checklist:** Automated audit command (e.g., `npm run audit` using axe-core).
3.  **Assets:** Optimized images (mirrored if directional relevance exists).
