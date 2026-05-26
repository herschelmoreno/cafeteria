# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server on 0.0.0.0 (all interfaces)
npm run build    # Production build
npm run lint     # ESLint (Next.js config)
```

No test suite is configured.

## Stack

- **Next.js 16.2.6** — App Router, TypeScript, no Pages Router
- **React 19.2.4**
- **Tailwind CSS v4** — configured via `@theme inline` in `app/globals.css`, not `tailwind.config.js`
- Path alias `@/*` maps to the project root

## Design System

All design tokens live in the `@theme inline` block of `app/globals.css`. Use these token names directly in Tailwind classes — never hardcode hex values.

**Color palette:**
| Group | Tokens | Role |
|-------|--------|------|
| `linen` | `linen`, `linen-dark`, `linen-deeper`, `linen-border` | Backgrounds |
| `moss` | `moss`, `moss-mid`, `moss-light`, `moss-muted`, `moss-pale` | Primary brand / body text |
| `terra` | `terra`, `terra-light`, `terra-pale` | Warm accent (CTAs, highlights) |
| `gold` | `gold`, `gold-light`, `gold-pale` | Secondary accent (badges, borders) |

**Typography:**
- `font-display` → Playfair Display (headings)
- `font-body` → DM Sans (body, set as default)

**Border radius tokens:** `radius-circle`, `radius-card` (1.25rem), `radius-btn` (0.625rem)

**Animation utility classes** (defined in globals.css): `animate-float`, `animate-fade-up`, `animate-fade-in`, `animate-marquee`. Stagger with `delay-100` through `delay-800`. The `.grain` class adds a subtle noise texture overlay via `::after`.

**`cn()` helper** at `lib/utils.ts` — a minimal className joiner (no clsx/twMerge dependency).

## Image Strategies

The project uses two distinct approaches — do not mix them:

1. **`next/Image`** — for real photographs. Always use `fill` + `object-cover` inside a `relative` container with explicit dimensions. Remote Pexels images are allowed via `next.config.ts` `remotePatterns`.

2. **`CircleImage`** (`components/ui/CircleImage.tsx`) — emoji inside a colored circle with a 3-D radial highlight. Props: `color` (hex), `emoji`, `size` (`xs`|`sm`|`md`|`lg`|`xl`), `float` (adds `animate-float`). Used for decorative product illustrations.

### Downloading images locally (image-optimizer skill)

Use the `image-optimizer` skill to download Pexels (or any) images, convert them to WebP and save to `public/images/`. After downloading, replace the remote URL in the data file with `/images/<name>.webp`. Once all remote references are replaced, remove the `remotePatterns` block from `next.config.ts` and the `pexels()` helper from `lib/data/mossitos-menu.ts`.

## Data Layer

Static content lives in `lib/data/` as plain TypeScript exports — no API calls, no database.

- `mossitos-menu.ts` — 20 `MenuItem` objects (id, categoria, nombre, descripcion, precio, insigna, imagen). The `id` field is a kebab-case slug that doubles as the local image filename when using the image-optimizer skill.
- `products.ts` — emoji-based product cards (use `CircleImage`)
- `categories.ts`, `events.ts` — supplementary data

## Pages & Layout

```
app/
  layout.tsx       # Root layout: Navbar + <main> + Footer, fonts injected as CSS variables
  page.tsx         # Home (/)
  about/page.tsx
  menu/page.tsx
```

Each page composes section components from `components/<page>/`. Shared UI primitives (`CircleImage`, `CTAButton`, `SectionHeading`) live in `components/ui/`.
