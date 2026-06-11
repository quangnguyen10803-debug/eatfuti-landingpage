# EatFuti Landing Page — Figma Generation Prompt

## What this is

A landing page for **EatFuti** — a restaurant growth platform (online ordering, loyalty, marketing, operations dashboard) targeting independent restaurants. This is a B2B SaaS marketing site, NOT a food brand page. The tone is warm, confident, and direct — like a smart friend who runs restaurants and also understands tech.

---

## Brand & Visual System

### Colors
- **Espresso** `#141413` — primary surface, body text, dark panels, button fills
- **Futi Gold** `#F6C507` — CTAs, accent highlights, underlines, icon backgrounds
- **Vanilla Cream** `#FCF7ED` — default page background (NEVER pure white `#FFFFFF` as a page bg)
- **White** `#FFFFFF` — card and modal surfaces only
- **Emerald** `#10B981` — AI/success/live signals only (use sparingly — only on "Support Online" or live indicators)

### Typography
- **Font family:** Manrope (single typeface for everything)
- **Display headings:** Manrope 800, clamp(48px, 6vw, 96px), letter-spacing -0.02em
- **Section headings (H2):** Manrope 700, ~40–48px
- **Card titles (H3/H4):** Manrope 600–700, 18–24px
- **Body:** Manrope 400, 16–18px, line-height 1.6
- **Eyebrow labels:** Manrope 600, 11px, uppercase, letter-spacing 0.14em, muted color
- **Mono accents** (metric numbers, labels): JetBrains Mono

### Component Rules
- **Buttons:** Pill shape (border-radius 999px). Three variants:
  - Primary: Espresso fill, cream text
  - Loud CTA: Gold `#F6C507` fill, espresso text
  - Ghost: transparent, 1.5px espresso border
- **Cards:** White `#FFFFFF` surface, 18px border-radius, shadow-sm at rest, shadow-md + translateY(-3px) on hover
- **Ghost cards** (Section 2 only): no shadow, 1px hairline border, no lift
- **Icons:** Lucide icon set, 24px, stroke-width 1.75, inline, currentColor
- **Focus state:** 6px Futi Gold halo on all interactive elements

### Layout Rules
- **Max content width:** 1240px, centered
- **Section vertical spacing:** 96px desktop, 64px mobile
- **Section pattern:** Eyebrow label → H2 heading → Subheadline/lede → Content grid → Optional CTA
- **No gradients. No textures. No pure white backgrounds. No parallax. No carousels.**

---

## Page Structure — 7 Sections + Header/Footer

---

### Header (Sticky)
- **Left:** Squircle-F logomark + "EatFuti" wordmark in Manrope 800
- **Center nav:** Solutions · How It Works · Pricing · Contact
- **Right:** Ghost "Sign In" button + Gold "Get a Demo" button
- **Behavior:** Sticky top, Vanilla Cream at 86% opacity, backdrop-filter blur(12px), 1px bottom hairline appears on scroll

---

### Section 1 — Hero

**Eyebrow:** RESTAURANT GROWTH PLATFORM

**Headline (H1):** Grow Sales. Keep Guests. Run Smarter.

**Subheadline:** EatFuti helps independent restaurants increase sales, bring customers back, run smarter marketing, and simplify daily operations with easy technology and hands-on multilingual support.

**CTAs:** "Get a Free Demo" (Gold loud) + "Get My Free Growth Report" (Espresso primary)

**Trust chips row:** 5 ghost badges — Online Ordering · Loyalty · Marketing · Real Support · Easy Operations

**Layout:** 2-column split, 7/5 ratio. Left = copy stack. Right = product dashboard mock.

**Right-side dashboard mock:** A single white card (18px radius, shadow-md) containing 4 mini-cards in a 2×2 grid:
1. **Sales Up** — chart icon, mono-styled number ($12.4K), small green trend bar
2. **Guests Back** — user icon, "847 this month", mini bar
3. **Campaign Running** — mail icon, "Weekend Special · 2,341 reached"
4. **Support Online** — headset icon, emerald dot (live), "Avg 2min response"

Plus a small notification toast top-right of the dashboard: "New order · Pho Hanoi"

**Background:** Vanilla Cream. Oversized squircle-F watermark at 12% opacity, top-right corner.

---

### Section 2 — Why EatFuti

**Headline:** Built for real restaurant teams, not tech experts.

**Subheadline:** EatFuti gives independent restaurants simple tools and real support to grow with less confusion.

**Layout:** 4 ghost cards in a horizontal row (no shadow, 1px hairline border only). Each card:
- 24px Lucide icon inside a gold-filled squircle
- Title (Manrope 600)
- One-line body copy

**Cards:**
1. **Hands-on Setup** (Rocket icon) — "We help you launch, not just give you a login."
2. **Fast Support** (Headset icon) — "Get clear help when your team needs it."
3. **Multilingual Help** (Globe icon) — "Support for owners and staff in the language they are most comfortable with."
4. **Low-tech Friendly** (Smile icon) — "Simple tools built for busy restaurant teams."

**CTA:** "Talk to Our Team" — ghost button, centered below

**Mood:** Light, warm, reassuring. NOT a heavy feature section.

---

### Section 3 — How We Grow Partner's Business

**Headline:** How we help restaurants grow beyond the first order.

**Subheadline:** EatFuti helps restaurant partners create more revenue opportunities, bring customers back, run smarter campaigns, and operate growth with less confusion.

**Layout:** 2×2 grid of raised white cards (shadow-sm, 18px radius, lift on hover).

Each card has a small illustration block at top built from design system primitives (no external images):
1. **Increase Sales** — Stacked-bar mini chart in gold/emerald, order notification card. "Capture more orders through online ordering, promotions, and easier repeat ordering."
2. **Improve Retention** — Avatar with loyalty badge, repeat visit indicator. "Turn one-time guests into regulars with loyalty, rewards, reminders, and customer engagement."
3. **Run Better Campaigns** — Stylized email/SMS preview card with send button. "Support offers, seasonal promotions, win-back messages, and customer campaigns that bring customers back."
4. **Simplify Operations** — Mini-dashboard tile with checklist. "Give owners and staff a clearer way to manage orders, campaigns, customers, and growth performance."

**Metric strip** (below cards, 4 inline stats):
- `$2.4M+` Revenue generated for restaurant partners
- `38%+` Average sales growth after launch
- `120K+` Orders processed through EatFuti
- `42%+` Retention lift from loyalty and campaigns
*(Use JetBrains Mono for the numbers, Manrope for labels)*

**CTA:** "See Growth Solutions" — text button with gold underline

---

### Section 4 — Growth Solutions

**Headline:** One growth system for the work restaurants actually need.

**Subheadline:** EatFuti brings ordering, loyalty, marketing, dashboard, and support into one simple system designed for independent restaurants.

**Layout:** 2×2 grid. Cards larger than Section 3 (~560×420px each). Each card: illustration top (60% height), then headline → 1-line copy → business value pill badge → CTA text button.

**Card 1 — Online Ordering**
- Illustration: Phone mockup showing menu + "Order received" toast notification
- Headline: "Turn more visitors into orders."
- Copy: "Give customers a simple way to order pickup, delivery, or catering directly from your restaurant."
- Value pill: "Increase sales, reduce missed orders"
- CTA: "Explore Online Ordering"

**Card 2 — Loyalty & Rewards**
- Illustration: Customer card with points counter + reward unlocked badge
- Headline: "Turn first-time guests into regulars."
- Copy: "Reward customers, encourage repeat visits, and keep your restaurant top of mind after the first order."
- Value pill: "Increase retention & lifetime value"
- CTA: "Explore Loyalty"

**Card 3 — Marketing Campaigns**
- Illustration: Campaign builder card with "Weekend Special" message preview + send button
- Headline: "Run campaigns without the marketing headache."
- Copy: "Launch offers, reminders, seasonal promotions, win-back messages, and customer campaigns with less manual work."
- Value pill: "Bring customers back automatically"
- CTA: "Explore Campaigns"

**Card 4 — Growth Dashboard & Support**
- Illustration: Mini-dashboard with sales/retention charts + support chat bubble with emerald dot (live/AI indicator)
- Headline: "See what works. Get help when needed."
- Copy: "Track orders, customers, campaigns, and growth performance in one simple dashboard with multilingual support."
- Value pill: "Smarter decisions, less confusion"
- CTA: "See Dashboard"

**Note:** Emerald `#10B981` only appears on Card 4's live support indicator. Keep it rare.

---

### Section 5 — Why Restaurant Teams Choose EatFuti

**Headline:** Why Restaurant Teams Choose EatFuti

**Layout:** 4-card row. White cards, 18px radius, shadow-sm. Each card: small Lucide icon top-left, title (H4, 18px), one-line benefit body.

1. **Easy Setup** (Zap icon) — "Launch in days, not months. We handle the setup."
2. **Marketing Support** (Megaphone icon) — "Help with campaigns, not just another tool to learn."
3. **Customer Retention** (Heart icon) — "Rewards your customers actually use."
4. **Real Support** (MessageCircle icon) — "Talk to a human. In your language."

---

### Section 6 — Simple Process

**Headline:** From setup to growth, we help you every step.

**Layout:** Horizontal 4-step flow. Each step: numbered circle (espresso fill, gold number inside) → title → one-line copy. Steps connected by a 2px hairline with arrow carets.

1. **Discover** — "We learn your restaurant goals and growth challenges."
2. **Setup** — "We help set up the tools your restaurant needs."
3. **Launch** — "Your team goes live with guidance and support."
4. **Grow** — "You keep improving sales, retention, and operations with EatFuti."

**CTA:** "See How It Works" — text button

**Mobile:** Vertical timeline layout, same nodes.

---

### Section 7 — Final CTA

**Layout:** Full-bleed Espresso `#141413` background block, 96px vertical padding.

**Headline (cream text, weight 700):** Ready to grow sales, keep guests, and run smarter?

**Subheadline (cream-on-dark, muted):** See how EatFuti can help your restaurant increase revenue, bring customers back, simplify marketing, and run growth with less stress.

**CTAs:** "Get a Free Demo" (Gold loud primary) + "Get My Free Growth Report" (Cream-outlined ghost)

**Microcopy:** Built for independent restaurants. Easy for busy teams. Supported by real people.

**Background detail:** Oversized squircle-F in yellow at 8% opacity, bottom-right.

---

### Footer

- **Background:** Vanilla Cream, single hairline border top
- **4 columns:**
  - Brand: Squircle-F + "EatFuti" wordmark + one-line tagline
  - Product: Online Ordering, Loyalty, Campaigns, Dashboard
  - Company: About, Careers, Contact
  - Legal: Privacy, Terms
- **Bottom row:** Copyright in eyebrow style (11px, uppercase, letter-spacing 0.14em)

---

## Responsive Breakpoints

- **Desktop:** ≥1024px — all multi-column layouts as described
- **Tablet (640–1023px):** Section 2 → 2×2 grid. Section 4 → 2×2, cards stack illustration→copy. Section 6 stays horizontal until 768px.
- **Mobile (<640px):** Everything single-column. Hero stacks (dashboard mock below copy). Section 6 becomes vertical timeline. All paddings use fluid clamp values.

---

## What to avoid

- No pure white `#FFFFFF` as page background — always Vanilla Cream `#FCF7ED`
- No gradients, no textures, no background images
- No stock photography — all visuals are UI mocks built from the design system
- No feature bullet lists inside cards — keep it headline + one line + CTA
- Gold `#F6C507` never as text on cream (fails contrast)
- No auto-playing animations or videos
- No carousels or parallax
- Emerald only for AI/live/success signals — not decorative
