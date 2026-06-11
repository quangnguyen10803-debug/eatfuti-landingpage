---
name: eatfuti-design
description: Use this skill to generate well-branded interfaces and assets for Eatfuti, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

IMPORTANT: If you're producing the code, make sure to make the component compatible with tailwindcss and shadcn. Use Tailwind util class. Use @apply inside css modules file for Tailwind css classses. If you think a design can be turned into a reusable component. When working on a design, try to see if there is a suitable component for that already and use it if any.

IMPORTANT: Don't ever use — in the copy of the design

If you need an icon, use LucideIcon or phosphor, do not create custom svg unless really needed.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` so brand tokens (`--espresso`, `--futi-gold`, `--vanilla-cream`, type families, spacing, radii, shadows) propagate. The default page background is `--vanilla-cream`, never pure white. Default text is `--ink-900` on cream. Approved color pairings only — never put Futi Gold text on Vanilla Cream.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The `tailwind/` folder has the Tailwind v4 + shadcn/ui setup, brand tokens, Framer Motion presets (`lib/motion.ts`), and reusable components (`components/`, e.g. `event-banner.tsx`) you can lift directly.

**Voice cheatsheet** — short, concrete, sensory. American English. No emoji. No exclamation marks. Sentence case. Talks about the food, not the brand. Avoid: _journey, curated, elevated, artisanal, revolutionary, unlock, discover, experience_.

**Visual cheatsheet** — solid colour blocks (no gradients), warm shadows, pill buttons, 22% squircle radius for "brand-shaped" tiles, Lucide icons at 1.75 stroke, gold focus halo (`--shadow-glow`).

**Animation** — use **Framer Motion** (`motion/react`) as the animation framework for any React/production code. Import brand easing + durations + variants from `tailwind/lib/motion.ts`; don't hand-roll transitions. Keep it restrained: opacity fades and 12px slide-ups, out-quart easing, spring only for celebratory moments. See `tailwind/components/event-banner.tsx` for the reference pattern.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
