/**
 * Eatfuti motion presets — the brand's animation tokens, expressed for
 * **Framer Motion** (`motion` / `motion/react`).
 *
 * Framer Motion is the standard animation framework for this design system.
 * Don't hand-roll keyframes or pass raw bezier arrays/durations at call sites —
 * import from here so every component animates on the same curve and timing.
 *
 * These mirror the CSS custom properties in `globals.css` / `colors_and_type.css`:
 *   --ease-out / --ease-out-quart   cubic-bezier(0.22, 1, 0.36, 1)
 *   --ease-in                       cubic-bezier(0.55, 0, 1, 0.45)
 *   --ease-spring                   cubic-bezier(0.34, 1.56, 0.64, 1)
 *   --dur-fast 140ms · --dur-base 220ms · --dur-slow 420ms
 *
 * Install:  npm i motion          // (Framer Motion's current package name)
 * Import:   import { motion, AnimatePresence } from "motion/react";
 */

import type { Transition } from "motion/react";

/** Bezier easing curves as Framer Motion tuples. */
export const ease = {
  /** Default — out-quart. Use for nearly everything. */
  out: [0.22, 1, 0.36, 1],
  /** Accelerating — for exits / things leaving the screen. */
  in: [0.55, 0, 1, 0.45],
  /** Overshoot spring — celebratory moments only (cart add, success). */
  spring: [0.34, 1.56, 0.64, 1],
} as const;

/** Durations in **seconds** (Framer Motion's unit), matching the ms tokens. */
export const duration = {
  fast: 0.14,
  base: 0.22,
  slow: 0.42,
} as const;

/** Ready-made transitions — spread into a `transition={...}` prop. */
export const transition = {
  /** Routine UI: base duration, out-quart. */
  base: { duration: duration.base, ease: ease.out },
  /** Quick feedback: hover, press, link underline. */
  fast: { duration: duration.fast, ease: ease.out },
  /** Larger / entrance moves. */
  slow: { duration: duration.slow, ease: ease.out },
  /** Exit: accelerate out. */
  exit: { duration: duration.fast, ease: ease.in },
  /** Celebratory overshoot — use sparingly. */
  spring: { duration: duration.base, ease: ease.spring },
} satisfies Record<string, Transition>;

/* ---------------------------------------------------------------------------
   Variants — common enter/exit pairs. Each respects the brand's "simple
   opacity fades and 12px slide-ups, no carousels/parallax" rule.
   --------------------------------------------------------------------------- */

/** Fade + 12px slide-up. The brand's default content entrance. */
export const slideUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: transition.base },
  exit: { opacity: 0, y: 8, transition: transition.exit },
} as const;

/** Plain opacity fade. */
export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.base },
  exit: { opacity: 0, transition: transition.exit },
} as const;

/** Press feedback — scale to 0.97. Spread onto `whileTap`. */
export const press = { scale: 0.97, transition: transition.fast } as const;

/** Card hover lift — translateY(-3px). Spread onto `whileHover`. */
export const hoverLift = { y: -3, transition: transition.fast } as const;

/**
 * Stagger container — wrap a list, give children `slideUp`/`fade` and they
 * cascade in. Use a small stagger (0.05–0.08s); the brand stays restrained.
 */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
} as const;
