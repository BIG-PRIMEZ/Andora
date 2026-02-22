# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server with hot reload
- `npm run build` — Production build (outputs to dist/)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run typecheck` — TypeScript type checking (`tsc --noEmit -p tsconfig.app.json`)

No test framework is configured.

## Architecture

This is a React 18 + TypeScript multi-page website for a home healthcare company (Andora), built with Vite and styled with Tailwind CSS.

**Routing**: React Router DOM in `src/App.tsx` defines 6 routes. Each route maps to a page component in `src/pages/`.

**Pages compose components**: Page files (e.g., `HomePage.tsx`) assemble reusable components from `src/components/`. Components are self-contained with their own data (service lists, stats, nav links defined inline as arrays/objects).

**Styling system**: All styling uses Tailwind utility classes — no CSS modules or styled-components. Custom design tokens are defined in `tailwind.config.js`:
- Colors: `primary` (#1E3A5F), `secondary` (#4A90E2), `cta` (#F97316 orange), `care` (#16A34A green)
- Fonts: `heading` (Merriweather serif), `body` (Inter sans-serif)
- Custom utilities in `src/index.css`: `.container-custom`, `.transition-smooth`, `.animate-fade-in-up`, `.heading-1`, `.heading-3`

**Button component** (`src/components/Button.tsx`): Polymorphic — supports variants (`primary`, `secondary`, `cta`, `outline`) and sizes (`small`, `medium`, `large`). Extends native HTML button attributes.

**Contact form** (`src/pages/ContactPage.tsx`): Submits via Web3Forms API with loading/success/error state handling.

**Icons**: Lucide React throughout, typically 24–36px.

## Code Conventions

- Functional components only, with TypeScript `interface` for props
- Strict TypeScript (`noUnusedLocals`, `noUnusedParameters` enabled)
- Mobile-first responsive design using Tailwind breakpoints (`sm`, `md`, `lg`)
- Semantic HTML with accessibility attributes (aria-labels, heading hierarchy, `prefers-reduced-motion` support)
