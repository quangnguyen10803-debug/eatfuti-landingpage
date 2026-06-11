# Eatfuti — Design System

A complete brand toolkit for **Eatfuti**, the small-batch food brand built around three brand colours (Espresso, Futi Gold, Vanilla Cream) and a yellow squircle logomark. Use this folder as the source of truth for any artifact — slides, mocks, prototypes, production code — that needs to look like Eatfuti.

> **Sources provided:**
> - `uploads/EATFUTI - LogoSymbol - Black.png`
> - `uploads/EATFUTI - LogoSymbol - White.png`
> - `uploads/EATFUTI - LogoSymbol - Yellow.png`
> - Brand colour spec (Pantone + CMYK + RGB) for Espresso, Futi Gold, Vanilla Cream.
>
> No codebase, Figma file, live website, font files, sample slides, or product screenshots were provided. Type, voice, iconography, and the warmer brand vibe in this README are **best-judgment extrapolations** from the brand colours + logomark — call them out and replace with real assets when you can.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file — manifest + content/visual fundamentals |
| `SKILL.md` | Agent SKill front-matter, makes this folder portable to Claude Code |
| `colors_and_type.css` | Single source of truth for color, type, spacing, radii, shadow, motion tokens. **Import this in every artifact.** |
| `assets/` | Logomarks (black / white / yellow PNG, 801×801) |
| `preview/` | One-card-per-concept HTML files surfaced in the Design System tab |
| `tailwind/` | **Tailwind + shadcn/ui** drop-in config (`globals.css`, `components.json`), reusable components (`components/`), and **Framer Motion** brand presets (`lib/motion.ts`) — see `tailwind/README.md` for setup |

---

## What is Eatfuti?

A small-batch food brand. The provided palette (deep espresso, vivid Futi Gold, warm Vanilla Cream) and the chunky squircle "F" mark suggest a **pantry-staple maker** — spreads, oils, bakes, drinks — sitting somewhere between a specialty grocer (think Ottolenghi Deli, Fortitude Bakehouse) and an independent food magazine (Cherry Bombe, Apartment Bake). Confident, hand-crafted, family-feeling, **not** sleek-corporate-DTC.

**The one-line positioning we're designing against:** _A taste, not a trend._ Real food, made by real people, in small numbers, without theatrics.

---

## Content fundamentals

How copy is written across the brand:

- **Short, concrete, sensory.** "Made by hand. Eaten by the spoonful." Not "elevate your snacking experience."
- **Talks about the food, not itself.** Headlines describe what's in the jar or what you'll do with it — not the brand's mission.
- **First-person plural for the brand, second-person for the reader.** "We bottle the oil by hand." / "You'll keep reaching for it." Never "users", never "customers."
- **Sentence case** for everything — headlines, buttons, navigation. The only places we use ALL CAPS are eyebrow labels, lot numbers, and the wordmark when set in the display face. UPPERCASE is a tracked-out 0.12em label, not a shouting tone.
- **No exclamation marks.** Confidence doesn't need them.
- **Numbers spelled out** for small counts ("twelve litres a day") in editorial copy; numerals in product/UI ("220g jar", "£12").
- **Light wit, never quippy.** "Lasts about three pieces of toast in our house." Not "🔥 you'll love it!!"
- **No emoji** in product UI, marketing copy, or imagery. Allowed only in informal channels (replies in customer support, Slack), and even there — sparingly.
- **British English** spelling and phrasing throughout (`flavour`, `colour`, `whilst` if it must), since the brand reads as London/UK based.

**Tone flex:** warmer + more story-driven on editorial pages and packaging; tighter + more declarative on shop tiles and buttons.

**Words to avoid:** _journey, curated, elevated, artisanal, revolutionary, game-changer, unlock, discover_ (as a verb), _experience_ (as a noun for a product).

---

## Visual foundations

### Colors
Three brand pillars (`#141413` Espresso, `#F6C507` Futi Gold, `#FCF7ED` Vanilla Cream) extended into 11-step warm-neutral and 9-step gold scales, plus four warm-leaning status colours. Vanilla Cream is the **default page background** — never pure white. White (`#FFFFFF`) is reserved for elevated surfaces (cards, modals, fields).

**Approved pairings only:** Espresso-on-Cream (default), Cream-on-Espresso (inverse hero), Espresso-on-Gold (loud accents), Gold-on-Espresso (marquee headlines). Never set Futi Gold text on Vanilla Cream — contrast fails.

### Type
- **Display** — `Manrope` at heavy weights (800 / 700). Manrope is the single brand face, carrying display, body, and UI. Tight tracking (−0.02em) at large display sizes.
- **Body / UI** — `Manrope` (400 / 500 / 600 / 700 / 800). Clean humanist sans, pairs without competing.
- **Mono** — `JetBrains Mono` (400 / 500 / 600). Tokens, lot numbers, code.

> **Font substitution flag.** Manrope is the single brand face (self-hosted from supplied files), carrying display, body, and UI. **If the real Eatfuti type system exists, please share the files** — likely candidates would be a custom-drawn or boutique foundry display face (Pangram Pangram, Klim, Displaay).

### Spacing & layout
4-px base scale (`--sp-1` … `--sp-24`), used as `gap` on flex/grid containers — not as margins on individual elements. Page max-width 1240px, generous `64–96px` vertical rhythm between sections.

### Backgrounds
- **Default**: solid Vanilla Cream. The cream itself is the brand's "warmth."
- **Hero / inverse**: solid Espresso, often paired with a single oversized Futi Gold logomark or letterform.
- **Loud accent panels**: solid Futi Gold blocks for newsletter, promo strips, sale bars.
- **No gradients** anywhere except inside photography. The brand reads flat and confident.
- **No repeating patterns or textures.** If we ever add texture, it's printed grain on photography, not a CSS overlay.
- **Photography (when present)** is warm-toned, naturally lit, slightly grainy. Eats on linen tablecloths, hands holding jars, marble counters with crumbs. **Never** sterile studio packshots on white.

### Borders & lines
1px hairlines at `color-mix(--ink-900 12%)` for separators. 1.5px strokes on focusable inputs and outlined buttons. No drop caps or fancy rules — borders are quiet.

### Shadows & elevation
Five tokens (xs → lg + a gold focus glow). Shadows are warm-tinted (rgba on `#141413`), short, and **never blue/purple**. Cards prefer **shadow-sm** at rest, **shadow-md** on hover.

### Corner radii
- Most surfaces: 12–18px.
- Pills (buttons, badges, status): full rounded.
- **Brand squircle** at 22% — used for hero tiles, feature panels, and any "echo the logomark" moment.
- Inputs: 12px. Modals: 28px. Cards: 18px.

### Animation & interaction
- **Framework**: **Framer Motion** is the standard for any animation in React/production code — enter/exit, presence, layout, gestures, orchestration. Pull timing/easing from the shared brand presets (`tailwind/lib/motion.ts`) rather than hand-writing transitions. Plain CSS transitions are fine only for trivial one-shot hovers. See `tailwind/README.md` → _Animation_.
- **Duration**: 140ms (fast), 220ms (base), 420ms (slow).
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (out-quart) for most things. A spring (`0.34, 1.56, 0.64, 1`) for celebratory moments only (cart add, success states). No bounces on routine UI.
- **Hover**: subtle. Cards lift `translateY(-3px)` + bump shadow. Buttons darken fill ~6%. Links thicken their gold underline.
- **Press**: `scale(0.97)`, 140ms. No colour change on press.
- **Focus**: 6px Futi Gold halo (`--shadow-glow`) — visible, on-brand, replaces default browser ring.
- **Transitions on page**: simple opacity fades and 12px slide-ups. No carousels with parallax. No scroll-jacking.

### Transparency & blur
Sparingly. The sticky header uses `backdrop-filter: blur(12px) saturate(140%)` over an 86%-opacity Cream tint — that's the only place. Modals dim with `rgba(20,20,19,0.55)` + a slight blur.

### Cards
White surface, 18px radius, `shadow-sm` at rest, 18px padding, content stacked with 12px gap. The product image area uses the **brand 22% squircle** radius internally to echo the logomark.

### Layout rules
- Sticky transparent header with brand bar.
- Section eyebrows (uppercase, tracked 0.14em) introduce big display headings.
- Buttons end up **on the same baseline** as the bottom of headings whenever possible.
- Footer always Vanilla Cream (matches body), separated by a single hairline.

---

## Iconography

**Provided assets:** logomarks only (`assets/logo-symbol-{black,white,yellow}.png`).

**Icon system used in this kit:** [Lucide](https://lucide.dev) at **1.75 stroke weight**, 24px native grid, `currentColor` inheritance. This is a **flagged substitution** — no Eatfuti-specific icon set was provided. Lucide was chosen because its slightly-rounded line caps and humanist proportions read warm rather than industrial, matching the brand's hand-crafted feel.

**Rules of use:**
- Always inline SVG (or via a Lucide React/web component) — never sprite PNGs.
- Stroke weight is **1.75**, not 2. Don't change it per-icon.
- `currentColor` only — never set fill or stroke explicitly. Icons take on their parent's text colour.
- 16/20/24/28px sizes. Don't scale up arbitrarily.
- **No emoji** in product UI.
- **No unicode glyphs** as icons (`★`, `→`, `✓`). Use a real SVG.
- The arrow in editorial links (`Read the story →`) is the **only** unicode arrow we use, and only inline with text.

If Lucide doesn't have what we need, fall back to Phosphor (regular weight) and document the swap.

**Brand imagery placeholders:** in lieu of real product photography, use single oversized letterforms (`F`, `O`, `W`, …) inside the squircle on Espresso/Gold/Cream backgrounds. **Replace with real photos** as soon as available — see the visual-foundations note above for the photographic vibe.

---

## What's still missing (please send)

1. **Real product photography** — without it, every artifact will lean on the letterform-in-squircle placeholder.
2. **Type system source of truth** — Manrope is locked for display + body + UI; share licensed brand fonts if they differ.
3. **Wordmark logo** (we only have the symbol). For nav and small contexts the wordmark would be ideal.
4. **Icon set** — confirm Lucide is fine, or share a custom set.
5. **Live URL or codebase** for the website / app — a real reference would let any recreation be faithful rather than a sympathetic guess.
6. **Voice samples** — a couple of paragraphs of real on-brand copy from packaging, the site, or social, to calibrate tone.
