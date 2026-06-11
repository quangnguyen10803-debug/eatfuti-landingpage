# Tailwind v4 + shadcn/ui setup

This folder makes the Eatfuti design system drop-in compatible with **Tailwind CSS v4** (latest) and **[shadcn/ui](https://ui.shadcn.com)** components.

> **Tailwind v4 has no JS config file.** All theme tokens live in CSS via `@theme`. The single source of truth is `globals.css`.

## Files

| File | What it is |
|---|---|
| `globals.css` | `@import "tailwindcss"` + `@theme { … }` brand tokens + shadcn HSL CSS variables (light + dark) + brand `@utility` classes |
| `components.json` | shadcn config — slots components into `components/ui/`, uses `cn()` from `lib/utils.ts`, Lucide icons |
| `lib/motion.ts` | **Framer Motion** brand presets — easing curves, durations, and enter/exit variants. Import these instead of hand-writing transitions. |

## Quick start (Next.js 15 / Vite)

```bash
# 1. New project (Tailwind v4 is the default)
npx create-next-app@latest my-app --tailwind --ts --eslint
cd my-app

# 2. Drop in the Eatfuti files
cp ../eatfuti/tailwind/globals.css     ./app/globals.css
cp ../eatfuti/tailwind/components.json ./components.json

# 3. Init shadcn (it now defaults to Tailwind v4)
npx shadcn@latest init

# 4. Add components — they pick up brand colours automatically
npx shadcn@latest add button card dialog input badge dropdown-menu

# 5. Required peer deps
npm i tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react motion
```

The `@plugin "tailwindcss-animate"` line at the top of `globals.css` registers the plugin — no separate config step.

## What's available as utilities

Every token under `@theme` becomes a utility class automatically:

```tsx
// Brand colour utilities
<div className="bg-gold-500 text-espresso-900" />
<div className="bg-cream text-ink" />
<div className="border-espresso-200 hover:bg-espresso-100" />

// Brand-shaped tile (echoing the logomark)
<div className="aspect-square rounded-brand bg-gold-500 grid place-items-center">…</div>

// Display headline
<h1 className="font-display text-display">A taste, not a trend.</h1>
<h2 className="font-display text-h1">Things on our shelf right now.</h2>

// Pill button with gold focus halo
<button className="rounded-full bg-primary text-primary-foreground px-5 py-3 font-bold
                   transition-transform duration-150 ease-[var(--ease-out-quart)]
                   active:scale-[0.97] focus-visible:ring-gold focus-visible:outline-none">
  Order now
</button>

// Eyebrow label
<span className="eyebrow">Issue 04 · Winter pantry</span>

// Brand animations
<div className="animate-[var(--animate-slide-up)]">…</div>
```

## Brand → shadcn semantic-token map

| shadcn token | Brand value | Used by |
|---|---|---|
| `--primary` | Espresso `#141413` | `<Button>`, `<Toggle>` |
| `--primary-foreground` | Vanilla Cream | text on primary |
| `--secondary` | Futi Gold `#F6C507` | `<Button variant="secondary">` |
| `--accent` | Futi Gold | menu hover/focus |
| `--destructive` | Danger `#C2412B` | `<AlertDialog>` |
| `--ring` | Futi Gold | focus ring (the brand gold halo) |
| `--background` | Vanilla Cream | page surface |
| `--card` | White | elevated cards |
| `--border` | Espresso @ 12% α | hairlines |

## Recommended shadcn tweaks

The brand palette is restrained, so most defaults look right. Worth customising:

- **Button** — change default radius from `rounded-md` to `rounded-full` (pill buttons throughout). Edit `components/ui/button.tsx` after install.
- **Card** — use `rounded-xl` (18px) + `shadow-sm`, `hover:shadow-md`.
- **Input** — already correct shape; add `focus-visible:ring-gold` for the halo.
- **Dialog** — bump radius to `rounded-2xl` (28px).
- **Badge** — `rounded-full`, `uppercase`, `tracking-[var(--tracking-caps)]`, `font-bold text-[11px]`.

## Component styling convention — CSS Modules + `@apply`

Components in `components/` keep their styling in a sibling **CSS Module**
(`*.module.css`) using `@apply`, rather than inline utility strings in the JSX.
See `components/event-banner.tsx` + `components/event-banner.module.css` for the
reference pattern.

```css
/* event-banner.module.css */
@reference "../globals.css";   /* required in v4 so @apply can see brand tokens */

.bar  { @apply relative z-[60] bg-espresso-900 text-cream; }
.chip { @apply rounded-full bg-gold-500/15 text-gold-500 border border-gold-500/30; }
```

```tsx
import styles from "./event-banner.module.css";
import { cn } from "@/lib/utils";

<div className={cn(styles.bar, className)} />
```

Rules:
- **`@reference "../globals.css"`** at the top of every module is mandatory in
  Tailwind v4 — modules compile in isolation and otherwise can't resolve theme
  utilities (`bg-espresso-900`, `tracking-eyebrow`, …). It injects no CSS; it
  only makes utilities available to `@apply`.
- Point `@reference` at wherever your app's globals live (`../app/globals.css`
  in a Next.js layout).
- Keep merging with **`cn()`** so a passed-in `className` and shadcn `<Button>`
  variant classes still compose with the module class.

## Animation — Framer Motion

**Framer Motion is the standard animation framework** for this design system.
Reach for it before CSS keyframes for any enter/exit, layout, gesture, or
orchestrated animation. (The `@theme` `--animate-*` utilities in `globals.css`
stay around for trivial one-shot CSS fades; anything with state, presence, or
sequencing should use Framer Motion.)

Don't pass raw bezier arrays or ad-hoc durations at the call site — import the
brand presets from `lib/motion.ts` so everything animates on the same curve and
timing (out-quart `[0.22, 1, 0.36, 1]`, 140/220/420ms, spring reserved for
celebratory moments).

```tsx
import { motion, AnimatePresence } from "motion/react";
import { transition, slideUp } from "@/lib/motion";

<AnimatePresence>
  {open && (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    />
  )}
</AnimatePresence>

// or spread a transition preset directly
<motion.button whileTap={{ scale: 0.97 }} transition={transition.fast} />
```

See `components/event-banner.tsx` for the reference pattern (slide-down reveal +
collapse-up dismiss via `AnimatePresence`). Respect the brand's restraint: simple
fades and 12px slide-ups, no parallax carousels, no scroll-jacking, no infinite
decorative loops.

> Framer Motion's current npm package is **`motion`**; import from `motion/react`.
> Mark any file using it `"use client"` in the Next.js App Router.

## Dark mode

Toggle `class="dark"` on `<html>`. Dark mode is a **separate brand mood**, not a tinted version of light:
- Espresso surfaces (`#141413` / `#2A2926`)
- Vanilla Cream text
- **Gold becomes the primary** (rises in importance against the dark)

The `@custom-variant dark` line at the top of `globals.css` wires `dark:` variants up.

## Notes

- We're on Tailwind v4. If you need to downgrade to v3 (rare now), the `@theme` block converts cleanly to a `theme.extend` JS config.
- `lucide-react` is the right icon import (matches the brand iconography rule of 1.75 stroke + `currentColor`).
