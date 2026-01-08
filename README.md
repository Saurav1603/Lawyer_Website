# Lawyer Portfolio (React + Vite + TS + Tailwind)

Professional, responsive lawyer portfolio built with React, TypeScript, Tailwind CSS, React Router, Framer Motion, and react-helmet-async.

## Tech
- React 18 + Vite
- TypeScript
- Tailwind CSS (dark mode: class)
- Framer Motion
- React Router v6
- react-helmet-async

## Structure
- `src/components` – Navbar, Footer, DarkModeToggle, ScrollToTop
- `src/pages` – Home, About, PracticeAreas, Experience, Testimonials, Contact
- `src/layouts` – MainLayout
- `src/assets` – images/icons (add your assets here)
- `src/hooks`, `src/utils` – reserved for future use

## Run locally (PowerShell)
```powershell
# Install deps
npm --prefix "c:\Users\rajsa\OneDrive\Desktop\miniproject\lawyer_portfolio\react-portfolio" install

# Start dev server
npm --prefix "c:\Users\rajsa\OneDrive\Desktop\miniproject\lawyer_portfolio\react-portfolio" run dev
```
Open http://localhost:5173

## Customize
- Update text placeholders (bar reg no., education, office address, etc.)
- Replace Unsplash images with your own in `src/assets` and use relative paths
- Colors and fonts configured in `tailwind.config.ts`

## Features
- Accessible nav and form labels
- Realistic legal copy (no lorem ipsum)
- Lazy-loaded images
- Subtle motion/hover animations
- Mobile-first responsive layout
- SEO per-page via Helmet
- Optional dark mode toggle

## Build
```powershell
npm --prefix "c:\Users\rajsa\OneDrive\Desktop\miniproject\lawyer_portfolio\react-portfolio" run build
npm --prefix "c:\Users\rajsa\OneDrive\Desktop\miniproject\lawyer_portfolio\react-portfolio" run preview
```

## Notes
- If alias imports are preferred (e.g. `@pages/Home`), Vite `resolve.alias` is set in `vite.config.ts`. Relative imports are used to be robust.
- Tailwind is set with dark mode class and a premium navy/gold palette. Adjust to brand guidelines as needed.
