# EatFuti Landing — Build Plan

**Date:** 2026-06-09
**Source of truth:** `colors_and_type.css` (tokens) + `preview/` (visual language) + `eatfuti-docs.md` (copy)

---

## 1. Design system — validation

### Solid (use as-is)
- **Token layer is clean.** `colors_and_type.css` covers color (3 brand + ink/gold/emerald 50–950), type scale (12→96), spacing (4px base), radii, shadows, motion easings/durations. Tailwind v4 `@theme` in `tailwind/globals.css` mirrors it correctly. No conflicts.
- **Component primitives are locked.** Buttons (pill, 4 variants), badges (caps vs sentence, with the optical-padding rule), inputs (12px radius, 1.5px stroke, gold focus halo), cards (white surface, 18px radius, shadow-sm→md, lift -3px). All consistent across preview files.
- **Pairing rules are explicit.** Espresso/Cream/Gold combinations are spelled out — no contrast guessing on the page.
- **Motion presets exist.** `--dur-fast/base/slow` + ease-out curve. Ready to apply.

### Conflicts — need to override before build
- **Brand voice in `README.md` is for a food brand, not a SaaS.** README says pantry-staple maker, sensory copy ("eaten by the spoonful"), British English, no "customers." `eatfuti-docs.md` is B2B SaaS — uses "customers," "restaurants," US English, direct-benefit headlines. **Decision:** keep the visual tokens, ignore README voice rules, write copy straight from `eatfuti-docs.md`. The food-brand warmth survives through color + type, not language.
- **No "SaaS section patterns" in preview/.** Preview covers atoms (buttons, badges, cards) but not section composition (hero split, feature grid, step flow, testimonial row). These need to be **derived from token rules**, not invented. Reference: section max-width 1240px, vertical rhythm 64–96px, eyebrow → display heading pattern.
- **Hero spec calls for a "Restaurant Growth Dashboard" visual.** No screenshots, no product imagery in `assets/`. The squircle-F placeholder won't carry a hero. **Decision:** build the dashboard mock in HTML/CSS using DS tokens (cards, badges, the AI/emerald accent for "live" signals). This is also more honest — the screen advertises the product by *being* a UI specimen.

### Missing (build-time decisions)
1. **Metrics in Section 3.** Doc shows `$XXXK+ / XX%+` placeholders and warns "only with approved internal numbers." → **Recommend: omit the metric strip entirely on v1.** Lean on the 4 outcome cards. Adding a metric block with `XXX` placeholders looks unfinished.
2. **Testimonials in Section 5.** No real quotes. Doc says rename to "Why Restaurant Teams Choose EatFuti" if not available. → **Recommend: rename, and rewrite the 4 cards as benefit statements**, not fake quotes in quote marks.
3. **Icon system.** README specifies Lucide at 1.75 stroke, inline SVG, `currentColor`. → Lock this. Use Lucide for all section icons.
4. **Footer + nav.** Not in doc. → Build minimal: brand mark + 4 nav links + 2 CTAs in header; cream footer with hairline divider, 3 columns (product / company / contact) + copyright.

---

## 2. Stack — recommendation

**Build as a single `index.html` + `style.css`, no framework.**

Why this and not Next/React:
- One landing page, static, no auth/routes/state. A framework is overhead.
- `colors_and_type.css` already works as a drop-in stylesheet — import directly.
- Easier to hand off, host anywhere (Vercel static, S3, Netlify), and faster to iterate visually.
- Tailwind v4 setup in `tailwind/` stays available for the *product app* later — landing doesn't need it.

Use:
- `colors_and_type.css` imported as-is
- One `landing.css` with section-level layout (grid, max-width, spacing)
- Inline SVG for Lucide icons (download from lucide.dev, paste, set stroke-width="1.75")
- Vanilla JS only for: sticky header backdrop-blur on scroll, mobile nav toggle, IntersectionObserver fade-up on sections

If you'd rather a React/Vite build for later component reuse, say so before I start.

---

## 3. Section-by-section build

Each section follows the same skeleton:
```
<section>
  <div class="container">           ← max-width 1240px, padding-inline clamp
    <div class="section-head">      ← eyebrow + h2 + lede
    <div class="section-body">      ← grid/cards/flow
    <div class="section-cta">       ← optional
  </div>
</section>
```
Vertical rhythm between sections: 96px desktop, 64px mobile.

### Section 1 — Hero
- **Layout:** 2-col split, 7/5 ratio. Left = copy stack, right = product mock.
- **Left:** eyebrow `RESTAURANT GROWTH PLATFORM` → H1 display "Grow Sales. Keep Guests. Run Smarter." (clamp 48→96px, weight 800, tracking -0.02em) → lede → 2 CTAs (Espresso primary + Gold loud) → trust chips row (5 ghost badges).
- **Right:** "Dashboard mock" — a single white card, 18px radius, shadow-md. Inside: 4 mini-cards in a 2×2 grid (Sales Up / Guests Back / Campaign Running / Support Online), each with an icon, label, mono-styled number, mini-trend bar. Layer one small notification toast top-right ("New order · Pho Hanoi").
- **Background:** Vanilla Cream. Top-right oversized squircle-F at 12% opacity for brand echo.

### Section 2 — Why EatFuti
- **Layout:** 4-col horizontal strip on desktop, 2×2 on tablet, stack on mobile.
- 4 ghost cards (no shadow, 1px hairline border). Each: 24px Lucide icon (gold-filled squircle), title, one-line copy.
- Section CTA: "Talk to Our Team" → ghost button, centered below grid.
- **Mood note from doc:** "feel light, warm, reassuring. Avoid heavy feature section." → ghost cards (not raised), smaller eyebrow, tighter padding.

### Section 3 — How We Grow
- **Layout:** 2×2 grid of raised cards (white, shadow-sm, 18px radius, lift on hover).
- Each card: small illustration block at top (built from DS — e.g., Increase Sales = a stacked-bar mini-chart in gold/emerald; Improve Retention = avatar + loyalty badge; Run Better Campaigns = stylized email/SMS preview; Simplify Operations = mini-dashboard tile). All composed from existing tokens, no external images.
- Section CTA: "See Growth Solutions" → text-button with gold underline (links to /solutions or anchor #solutions).
- **Skip metric strip** (see Decisions).

### Section 4 — Growth Solutions
- **Layout:** 2×2 grid, but cards larger than Section 3 (each card ~560×420px desktop).
- Each card: illustration top (60% of card height), then headline → 1 line → business value pill → CTA text-button.
- Card 1 (Online Ordering): phone mockup with menu + "Order received" toast
- Card 2 (Loyalty): customer card with points counter + reward unlock badge
- Card 3 (Campaigns): campaign builder card with message preview + send button
- Card 4 (Dashboard & Support): mini-dashboard tile + support chat bubble with multilingual indicator (emerald dot = AI/live)
- All mockups composed from DS primitives. Use the AI/emerald accent (`--emerald-500`) only on Card 4's "live support" indicator — keep it precious.

### Section 5 — Why Restaurant Teams Choose EatFuti (renamed)
- **Layout:** 4-card row (or 2×2 on tablet). Each card = white surface, 18px radius, shadow-sm.
- Rewrite the 4 quote stubs as **benefit statements**, each with the existing label as the title:
  - Easy Setup → "Launch in days, not months. We handle the setup."
  - Marketing Support → "Help with campaigns, not just another tool to learn."
  - Customer Retention → "Rewards your customers actually use."
  - Real Support → "Talk to a human. In your language."
- Small icon top-left (Lucide), title (h4, 18px), 1-line body.

### Section 6 — Simple Process
- **Layout:** Horizontal 4-step flow on desktop. Each step = numbered circle (espresso fill, gold number) → title → 1-line copy. Connect with a 2px hairline + arrow caret between steps.
- Mobile: vertical timeline, same nodes.
- Section CTA: "See How It Works" → text-button.

### Section 7 — Final CTA
- **Layout:** Full-bleed Espresso block, 96px vertical padding. Cream type.
- Center: H2 (cream, weight 700) → lede (cream-on-dark, ink-300) → 2 CTAs side-by-side (Gold loud primary + Cream-outlined ghost) → microcopy line below.
- Background: oversized squircle-F yellow logo at 8% opacity, bottom-right.

### Header + Footer
- **Header:** sticky, cream tint @ 86% opacity + backdrop-filter blur(12px). Left = squircle-F mark + "EatFuti" wordmark in Manrope 800. Center = nav (Solutions, How It Works, Pricing, Contact). Right = ghost "Sign In" + gold "Get a Demo".
- **Footer:** cream bg, single hairline top. 4 cols: brand+tagline, Product (Online Ordering, Loyalty, Campaigns, Dashboard), Company (About, Careers, Contact), Legal (Privacy, Terms). Copyright row at bottom with eyebrow style.

---

## 4. Responsive breakpoints

- **Desktop:** ≥1024px — all multi-col layouts as specced.
- **Tablet:** 640–1023px — Section 2 collapses to 2×2; Section 4 keeps 2×2 but cards stack illustration→copy; Section 6 stays horizontal until 768px.
- **Mobile:** <640px — everything stacks. Hero becomes single column, dashboard mock moves below copy. Section 4 cards stack with illustration first. Section 6 becomes vertical timeline.
- All paddings use `clamp(24px, 5vw, 96px)` for section vertical, `clamp(16px, 4vw, 32px)` for horizontal.

---

## 5. Interaction layer

- **Buttons:** as-specced in `components-buttons.html` — press scale(0.97), gold focus halo, no color change on press.
- **Cards:** hover translateY(-3px) + shadow-sm → shadow-md, 220ms ease-out.
- **Sticky header:** add `.scrolled` class after 8px scroll, applies backdrop-filter + 1px bottom hairline.
- **Section reveal:** IntersectionObserver, fade-in (opacity 0→1) + slide-up (12px), 420ms ease-out, stagger children by 60ms. One-shot, no scroll-jacking.
- **Hero dashboard mock:** the "New order" toast slides in 1.2s after load, then a "+1" pulses on Sales Up. Keep it to 2 micro-moments, no looping animation.
- **No carousels, no parallax, no auto-playing video.**

---

## 6. Build order (suggested commits)

1. `index.html` skeleton + `landing.css` imports + container/typography baseline
2. Header + footer
3. Section 1 hero — copy side first, then dashboard mock
4. Section 7 final CTA (mirror of hero, easy win)
5. Sections 2 → 6 in order
6. Responsive pass: tablet, then mobile
7. Interaction pass: hover, sticky, IntersectionObserver
8. QA pass (see below)

Roughly 6–8 hours of focused work for v1.

---

## 7. QA checklist before shipping

- [ ] Every CTA has the exact copy from `eatfuti-docs.md` (no rephrasing)
- [ ] No pure white anywhere except card/modal surfaces
- [ ] No gradients, no textures (per README rule)
- [ ] All icons are inline Lucide SVG at stroke-width 1.75, currentColor
- [ ] Gold (`#F6C507`) never appears as text on cream (contrast fails)
- [ ] Focus ring is 6px gold halo on every interactive element
- [ ] Section vertical rhythm = 96px desktop / 64px mobile
- [ ] Mobile nav works (hamburger → drawer)
- [ ] Page weight under 300KB (no hero image, no webfont overload — Manrope is self-hosted, only used weights loaded)
- [ ] Lighthouse: 95+ on Performance, 100 on Accessibility
- [ ] Reduced-motion: all transforms gated by `@media (prefers-reduced-motion: no-preference)`

---

## Decisions I need from you before I start

1. **Stack:** static HTML/CSS (recommended) or React/Vite? → my pick: static.
2. **Metrics strip in Section 3:** omit, or show with visible `XXX` placeholders + a "preview" badge? → my pick: omit.
3. **Section 5:** rename to "Why Restaurant Teams Choose EatFuti" and convert to benefit cards? → my pick: yes.
4. **Wordmark:** I'll set "EatFuti" in Manrope 800 next to the squircle. If you have a real wordmark file, drop it in `assets/` before I start.

**Next step:** answer the 4 decisions above, then I build the page top-to-bottom in the order in §6.
