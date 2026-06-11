# EatFuti Landing Page — Redesign Instruction File

> Source: `index.html` + `landing.css` + `eatfuti-homepage-content-spec.md`  
> Visual DNA: `colors_and_type.css` + `preview/` components  
> Objective: Beautiful, responsive, young & dynamic landing page ready for handoff

---

## 0. GLOBAL RULES (unchanged from DS)

- **Tokens:** always import `colors_and_type.css` — never hardcode colors
- **Font:** Manrope (self-hosted, all weights) — single face for all text
- **Palette:**
  - Espresso `#141413` — primary surface, body text, dark panels
  - Futi Gold `#F6C507` — CTAs, accents
  - Vanilla Cream `#FCF7ED` — default page background
  - Emerald `#10B981` — AI/success signals only
- **Buttons:** pill shape (border-radius: 999px) unless specified otherwise
- **Cards:** 18px radius, shadow-sm rest, shadow-md hover, translateY(-3px) hover lift
- **Transitions:** 140ms fast, 220ms base — `cubic-bezier(0.22, 1, 0.36, 1)`
- **Section max-width:** 1240px, centered
- **Vertical rhythm:** 80–96px padding between sections
- **No pure white backgrounds** (page bg is always Cream)
- **No heavy gradients on components** — gradients only where explicitly specified below
- **Sticky header:** backdrop-filter blur — only place blur is used
- **Icons:** Lucide-style, 1.75 stroke, inline SVG, currentColor, added to existing `<defs>` sprite

---

## 1. NEW SVG SYMBOLS — Add to `<defs>` sprite

```html
<!-- Chef/food icon -->
<symbol id="i-chef" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
</symbol>

<!-- Map pin / location -->
<symbol id="i-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
</symbol>

<!-- Camera -->
<symbol id="i-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
</symbol>

<!-- Percent / commission -->
<symbol id="i-percent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
</symbol>
```

---

## 2. NEW SHARED COMPONENTS

### 2a. `.btn-prestige` — Split prestige button (used in Hero + Final CTA)

```html
<!-- Standard (on light bg) -->
<a href="#cta" class="btn-prestige">
  <span class="btn-prestige-label">Get a Free Demo</span>
  <span class="btn-prestige-icon"><svg class="icon"><use href="#i-arrow"/></svg></span>
</a>

<!-- Inverted (on Espresso dark bg) -->
<a href="/contact" class="btn-prestige btn-prestige-inv">
  <span class="btn-prestige-label">Get started</span>
  <span class="btn-prestige-icon"><svg class="icon"><use href="#i-arrow"/></svg></span>
</a>
```

```css
.btn-prestige {
  display: inline-flex;
  align-items: center;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 0 rgba(0,0,0,0.5), 0 10px 36px rgba(20,20,19,0.28);
  font-family: var(--font-body);
  font-weight: 700;
}
.btn-prestige-label {
  padding: 14px 24px;
  background: #141413;
  color: #fff;
  font-size: 1rem;
}
.btn-prestige-icon {
  padding: 14px 18px;
  background: var(--gold);
  color: #141413;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Inverted: white body + gold icon — for dark backgrounds */
.btn-prestige-inv .btn-prestige-label {
  background: #ffffff;
  color: #141413;
}
.btn-prestige-inv .btn-prestige-icon {
  background: var(--gold);
  color: #141413;
}
```

---

## 3. NAVIGATION (updated)

**Links:** Home → `/` · How it works → `/how-it-works` · Pricing → `/pricing` · Contact → `/contact`

**CTAs:** `Sign in` (ghost) · `Get started` → `/contact` (btn-prestige, smaller padding)

**Logo:** replace text `<span class="brand-mark">F</span>` with `<img src="assets/logo-symbol-yellow.png" width="28" height="28">` + `<span class="brand-name">EatFuti</span>`

Nav link updates in both desktop `<nav>` and `#mobileNav` drawer.

---

## 4. SECTION 1 — HERO

### 4a. Section structure (top to bottom)

```
[eyebrow badge]
[H1 — 3 lines with inline icons + gradient text]
[body copy]
[CTA row: btn-prestige + ghost btn]
[Highlight Row — 4 cards]
[Press logos — "As featured in"]
```

Right column: product preview mock (browser-chromed dashboard)

Below hero (full-bleed, outside container): **Marquee strip**

### 4b. H1 — inline icons + gradient text

Remove `.accent` span. Each line in its own `<span class="h1-line">`:

```html
<h1>
  <span class="h1-line">Grow Sales. <svg class="h1-icon"><use href="#i-trend"/></svg></span>
  <span class="h1-line"><svg class="h1-icon"><use href="#i-heart"/></svg> Keep Guests.</span>
  <span class="h1-line">Run Smarter. <svg class="h1-icon"><use href="#i-spark"/></svg></span>
</h1>
```

```css
h1 {
  background: linear-gradient(175deg, #0a0a09 0%, #3d3d3b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.h1-line { display: block; }
.h1-icon {
  width: 0.68em;
  height: 0.68em;
  vertical-align: middle;
  color: var(--gold);
  -webkit-text-fill-color: initial; /* override gradient for icon */
  stroke-width: 1.75;
  display: inline-block;
  margin-bottom: 0.1em;
}
```

### 4c. CTAs

```html
<div class="hero-cta">
  <a href="#cta" class="btn-prestige">
    <span class="btn-prestige-label">Get a Free Demo</span>
    <span class="btn-prestige-icon"><svg class="icon"><use href="#i-arrow"/></svg></span>
  </a>
  <a href="#cta" class="btn btn-ghost btn-lg">Talk to our team</a>
</div>
```

Remove old `.btn-gold.btn-lg` and "Get My Free Growth Report" button.

### 4d. Remove

- ~~Social proof block~~ (inline ★★★★★ trust bar) — deleted entirely
- ~~`.hero-chips`~~ — replaced by marquee (see 4g)

### 4e. Highlight Row — 4 horizontal cards

```html
<div class="highlight-row">
  <div class="hl-card">
    <span class="hl-icon hl-mint"><svg class="icon"><use href="#i-bag"/></svg></span>
    <h4>Built for independent restaurants</h4>
    <p>No hidden fees. No long contracts.</p>
  </div>
  <div class="hl-card">
    <span class="hl-icon hl-gold"><svg class="icon"><use href="#i-star"/></svg></span>
    <h4>4.9 ★★★★★</h4>
    <p>Trusted by hundreds of restaurant owners.</p>
  </div>
  <div class="hl-card">
    <span class="hl-icon hl-sky"><svg class="icon"><use href="#i-globe"/></svg></span>
    <h4>Multilingual support</h4>
    <p>We speak your language.</p>
  </div>
  <div class="hl-card">
    <span class="hl-icon hl-coral"><svg class="icon"><use href="#i-headphones"/></svg></span>
    <h4>Real people. Real support.</h4>
    <p>We're here when you need us.</p>
  </div>
</div>
```

```css
.highlight-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 40px;
}
.hl-card {
  background: rgba(20,20,19,0.04);
  border: 1px solid rgba(20,20,19,0.08);
  border-radius: 16px;
  padding: 20px;
}
.hl-card h4 { font-size: 14px; font-weight: 700; color: var(--ink-900); margin: 10px 0 4px; }
.hl-card p  { font-size: 13px; color: var(--ink-600); line-height: 1.5; margin: 0; }

/* Icon badges */
.hl-icon {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.hl-mint  { background: rgba(16,185,129,0.12); color: #10B981; }
.hl-gold  { background: rgba(246,197,7,0.15);  color: #B8900A; }
.hl-sky   { background: rgba(56,189,248,0.12); color: #0EA5E9; }
.hl-coral { background: rgba(248,113,113,0.12); color: #EF4444; }
```

### 4f. Press logos — "As featured in"

```html
<div class="press-row">
  <span class="press-label">As featured in</span>
  <div class="press-logos">
    <a href="https://www.axios.com/local/des-moines/2025/03/27/eatfuti-doordash-ubereats" target="_blank" rel="noopener">
      <img src="assets/press/axios.png" alt="AXIOS" height="20">
    </a>
    <a href="https://www.desmoinesregister.com/story/entertainment/dining/2025/04/16/eatfuti-international-food-delivery-app/82241386007/" target="_blank" rel="noopener">
      <img src="assets/press/dmr.png" alt="Des Moines Register" height="20">
    </a>
    <a href="http://kcci.com/article/eatfuti-app-helps-iowa-restaurants-share-culture-and-cuisine-with-customers/64664917" target="_blank" rel="noopener">
      <img src="assets/press/kcci.png" alt="KCCI" height="20">
    </a>
  </div>
</div>
```

**During build:** fetch/download actual logo PNGs from each outlet and save to `assets/press/`.

```css
.press-row { display: flex; align-items: center; gap: 24px; margin-top: 32px; }
.press-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink-400); white-space: nowrap; }
.press-logos { display: flex; align-items: center; gap: 32px; }
.press-logos img { filter: grayscale(1) opacity(0.45); transition: filter 220ms ease; height: 20px; }
.press-logos img:hover { filter: grayscale(0.2) opacity(0.8); }
```

### 4g. Hero illustration — browser-chromed product preview

Wrap existing `.dash` inside a `.browser-frame`:

```html
<div class="hero-mock reveal">
  <div class="browser-frame">
    <div class="browser-chrome">
      <span class="bchrome-dot"></span>
      <span class="bchrome-dot"></span>
      <span class="bchrome-dot"></span>
      <div class="bchrome-bar">eatfuti.ai/dashboard</div>
    </div>
    <div class="dash">
      <!-- existing dashboard tiles — unchanged -->
    </div>
  </div>
</div>
```

```css
.browser-frame {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(20,20,19,0.18), 0 0 0 1px rgba(20,20,19,0.07);
}
.browser-chrome {
  background: #EBE6D9;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bchrome-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: rgba(20,20,19,0.18);
}
.bchrome-bar {
  flex: 1; margin-left: 12px;
  background: rgba(20,20,19,0.07);
  border-radius: 6px;
  height: 22px;
  font-size: 10px; color: var(--ink-400);
  display: flex; align-items: center;
  padding: 0 10px;
  font-family: var(--font-mono);
}
```

### 4h. Page background treatment

```css
.hero {
  background: radial-gradient(ellipse 70% 50% at 50% -5%, rgba(246,197,7,0.07) 0%, transparent 70%),
              var(--bg-page);
}
```

### 4i. Marquee strip (full-bleed, outside hero container)

```html
<div class="marquee-strip" aria-hidden="true">
  <div class="marquee-track">
    <!-- repeated ×2 for seamless loop -->
    <span class="marquee-item"><svg class="icon"><use href="#i-bag"/></svg> Online Ordering</span>
    <span class="marquee-sep">✦</span>
    <span class="marquee-item"><svg class="icon"><use href="#i-star"/></svg> Loyalty</span>
    <span class="marquee-sep">✦</span>
    <span class="marquee-item"><svg class="icon"><use href="#i-send"/></svg> Marketing</span>
    <span class="marquee-sep">✦</span>
    <span class="marquee-item"><svg class="icon"><use href="#i-headphones"/></svg> Real Support</span>
    <span class="marquee-sep">✦</span>
    <span class="marquee-item"><svg class="icon"><use href="#i-layout"/></svg> Easy Operations</span>
    <span class="marquee-sep">✦</span>
    <!-- duplicate set for seamless loop -->
  </div>
</div>
```

```css
.marquee-strip {
  width: 100%;
  background: #141413;
  height: 48px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.marquee-track {
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  animation: marquee-scroll 22s linear infinite;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold);
  padding: 0 28px;
}
.marquee-item .icon { width: 14px; height: 14px; }
.marquee-sep { color: var(--gold); opacity: 0.4; font-size: 10px; }

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

## 5. SECTION 2 — FEATURE TABS

**Replaces:** entire `.why` section (Why EatFuti 4 cards)

**Section ID:** `id="features"`

### 5a. Section header

```html
<div class="section-head reveal">
  <span class="eyebrow">Everything in one place</span>
  <h2>Everything you need to grow – in one place</h2>
  <p class="lede">Powerful tools. Built for restaurants. All working together.</p>
</div>
```

### 5b. Tab navigation

```html
<div class="tab-nav" role="tablist">
  <button class="tab-btn active" data-tab="ordering"  role="tab" aria-selected="true">🖥 Online Ordering</button>
  <button class="tab-btn"        data-tab="marketing" role="tab">📣 Marketing</button>
  <button class="tab-btn"        data-tab="loyalty"   role="tab">🏆 Loyalty & Rewards</button>
  <button class="tab-btn"        data-tab="dashboard" role="tab">📊 Smart Report</button>
</div>
```

```css
.tab-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.tab-btn {
  padding: 9px 22px;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: var(--ink-500);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 140ms ease;
}
.tab-btn.active {
  background: #141413;
  color: #fff;
}
.tab-btn:hover:not(.active) {
  background: rgba(20,20,19,0.06);
  color: var(--ink-900);
}
```

### 5c. Tab panel — shared structure

```html
<div class="tab-panels">

  <div class="tab-panel active" id="panel-ordering">
    <div class="tab-card tab-photo">  <!-- variant class per tab -->
      <div class="tab-left">
        <span class="tab-eyebrow">Online Ordering</span>
        <h3>Online Ordering that brings more orders to your restaurant</h3>
        <ul class="tab-features">
          <li>Branded ordering website & mobile app</li>
          <li>Custom menu, timing, delivery & pickup</li>
          <li>Built-in upsells to increase order value</li>
          <li>More direct orders, zero commission</li>
        </ul>
        <a href="#" class="btn-tab-cta btn-tab-light">Learn more <svg class="icon"><use href="#i-arrow"/></svg></a>
      </div>
      <div class="tab-right">
        <!-- illustration: phone with ordering UI -->
        <div class="tab-phone-mock">...</div>
      </div>
    </div>
  </div>

  <!-- Repeat for marketing, loyalty, dashboard -->

</div>
```

```css
.tab-card {
  border-radius: 24px;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 64px;
  gap: 48px;
  overflow: hidden;
  transition: opacity 220ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* Shared CTA button for tabs */
.btn-tab-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  margin-top: 28px;
}
.btn-tab-light { background: #141413; color: #fff; }  /* for light bg tabs */
.btn-tab-dark  { background: #ffffff; color: #141413; } /* for dark/photo bg tabs */
```

### 5d. Per-tab visual treatments

**Tab 1 — Online Ordering**
```css
.tab-photo {
  background: #1a1209;  /* dark placeholder until real photo available */
  position: relative;
}
/* When real photo: background: url('assets/ordering-hero.jpg') center/cover no-repeat; */
/* Add overlay: */
.tab-photo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 100%);
}
.tab-photo .tab-left { position: relative; z-index: 1; color: #fff; }
.tab-photo h3, .tab-photo .tab-eyebrow { color: #fff; }
.tab-photo .tab-features li { color: rgba(255,255,255,0.8); }
```
Right: elevated phone frame with ordering menu UI (adapted from existing `.sol-art.ordering`)

**Tab 2 — Marketing**
```css
.tab-marketing {
  background: linear-gradient(135deg, #141413 0%, #5C2A00 45%, #B86A00 75%, #F6C507 100%);
}
.tab-marketing .tab-left { color: #fff; }
.tab-marketing h3, .tab-marketing .tab-eyebrow { color: #fff; }
.tab-marketing .tab-features li { color: rgba(255,255,255,0.8); }
```
Right: phone frame with stacked notification cards (SMS/email/push), `animation: float 3s ease-in-out infinite`

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
```

**Tab 3 — Loyalty & Rewards**
```css
.tab-loyalty { background: #FFFBEB; } /* Gold-50 */
.tab-loyalty .tab-left { color: #141413; }
```
Right: loyalty card component (Espresso card, Gold points balance, reward progress bar)

**Tab 4 — Smart Report & Dashboard**
```css
.tab-dashboard { background: #EDE8DC; } /* warm neutral */
.tab-dashboard .tab-left { color: #141413; }
```
Right: desktop browser frame + 2×2 metric tiles (expanded from `.dash` component)

### 5e. Tab switching JS

```js
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const target = document.getElementById('panel-' + btn.dataset.tab);
    target.classList.add('active');
  });
});
```

---

## 6. SECTION 3 — ETHNIC & LOCAL CALLOUT

**Replaces:** old `#how` section (How We Grow — metric strip + grow cards)

**Section ID:** `id="ethnic"`

**Background:** `#F5EFE3` — warm neutral, creates visual section break

### 6a. Section header (centered, no eyebrow)

```html
<div class="section-head reveal">
  <h2>Made for ethnic & local restaurants.</h2>
  <p class="lede">Phở, bánh mì, dim sum, bibimbap, tacos, curry — your food is special, and your marketing should be too.</p>
</div>
```

### 6b. 2-column layout — 55/45

```html
<div class="ethnic-grid">

  <!-- Left: illustration card -->
  <div class="ethnic-visual">
    <div class="ethnic-phone-wrap">
      <div class="eth-phone">
        <!-- phone chrome + ethnic restaurant ordering UI -->
        <div class="eth-phone-header">
          <div class="eth-restaurant-name">Phở Hà Nội</div>
        </div>
        <div class="eth-hero-img"><!-- warm amber gradient placeholder --></div>
        <div class="eth-menu-list">
          <div class="eth-item">Phở Bò · $14.50</div>
          <div class="eth-item selected">Bánh Mì Thịt · $9.00</div>
          <div class="eth-item">Bún Chả · $13.00</div>
          <div class="eth-item">Gỏi Cuốn · $8.50</div>
        </div>
        <div class="eth-phone-ctas">
          <button class="eth-cta-btn">Order Pickup</button>
          <button class="eth-cta-btn">Order Delivery</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Right: 4 value props -->
  <div class="eth-list">
    <div class="eth-item-row">
      <div class="eth-icon"><svg class="icon"><use href="#i-chef"/></svg></div>
      <div class="eth-text">
        <h4>We know your cuisine</h4>
        <p>Dish names kept authentic.</p>
      </div>
    </div>
    <div class="eth-item-row">
      <div class="eth-icon"><svg class="icon"><use href="#i-globe"/></svg></div>
      <div class="eth-text">
        <h4>We speak your language</h4>
        <p>A real expert who supports you in your own language.</p>
      </div>
    </div>
    <div class="eth-item-row">
      <div class="eth-icon"><svg class="icon"><use href="#i-map-pin"/></svg></div>
      <div class="eth-text">
        <h4>Reach the right diners</h4>
        <p>Found by people searching for your food nearby.</p>
      </div>
    </div>
    <div class="eth-item-row">
      <div class="eth-icon"><svg class="icon"><use href="#i-camera"/></svg></div>
      <div class="eth-text">
        <h4>Make your dishes shine</h4>
        <p>Pro photos & daily posts that look irresistible.</p>
      </div>
    </div>
  </div>

</div>
```

```css
.ethnic-grid {
  display: grid;
  grid-template-columns: 55fr 45fr;
  gap: 64px;
  align-items: center;
  margin-top: 64px;
}

/* Left card */
.ethnic-visual {
  background: #EDE7D9;
  border-radius: 24px;
  padding: 40px 32px;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eth-phone {
  background: #fff;
  border-radius: 40px;
  width: 260px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(20,20,19,0.12);
  transform: rotate(-1.5deg);
}

/* Value prop rows */
.eth-list { display: flex; flex-direction: column; gap: 32px; }
.eth-item-row { display: flex; gap: 16px; align-items: flex-start; }
.eth-icon {
  width: 48px; height: 48px; flex-shrink: 0;
  border-radius: 12px;
  background: rgba(20,20,19,0.07);
  color: var(--ink-500);
  display: flex; align-items: center; justify-content: center;
}
.eth-icon .icon { width: 22px; height: 22px; }
.eth-text h4 { font-size: 20px; font-weight: 700; color: var(--ink-900); margin: 0 0 6px; }
.eth-text p  { font-size: 15px; color: var(--ink-600); line-height: 1.65; margin: 0; }
```

---

## 7. SECTION 4 — SOCIAL MEDIA WORKFLOW

**Replaces:** old `.solutions` accordion (`#solutions`)

**Section ID:** `id="how-it-works"`

**Background:** `#F5EFE3` (same as Section 3 — continuity across calm sections)

### 7a. 2-column layout — sticky left + scroll right

```html
<section id="how-it-works" class="smw-section">
  <div class="container smw-grid">

    <!-- Left: sticky -->
    <div class="smw-left">
      <span class="eyebrow">How It Works</span>
      <h2>Daily social media that brings hungry customers to your door.</h2>
      <p class="lede">Other tools let AI post whatever it writes — and it shows. We don't. Here's how your social media really works, every day:</p>
      <a href="#cta" class="btn btn-ghost">See How It Works <svg class="icon"><use href="#i-arrow"/></svg></a>
    </div>

    <!-- Right: scrollable timeline -->
    <div class="smw-right">
      <div class="smw-timeline">
        <div class="tl-line"><div class="tl-progress" id="tlProgress"></div></div>

        <div class="smw-step" data-step="0">
          <div class="smw-node"><svg class="icon"><use href="#i-spark"/></svg></div>
          <div class="smw-content">
            <span class="smw-num">01</span>
            <h3>Automatic Intelligence creates</h3>
            <p>Posts, short reels and stories from your menu and photos.</p>
          </div>
        </div>

        <div class="smw-step" data-step="1">
          <div class="smw-node"><svg class="icon"><use href="#i-check"/></svg></div>
          <div class="smw-content">
            <span class="smw-num">02</span>
            <h3>Our restaurant experts verify</h3>
            <p>They check tone, accuracy and your brand – so it always looks professional.</p>
          </div>
        </div>

        <div class="smw-step" data-step="2">
          <div class="smw-node"><svg class="icon"><use href="#i-send"/></svg></div>
          <div class="smw-content">
            <span class="smw-num">03</span>
            <h3>We post for you, daily</h3>
            <p>Live on Facebook, Instagram and TikTok. More reach, more orders, zero work for you.</p>
          </div>
        </div>

        <!-- Content type pills — below steps -->
        <div class="content-pills">
          <span class="cpill">Posts</span>
          <span class="cpill">Short reels</span>
          <span class="cpill">Stories</span>
          <span class="cpill">Comment replies</span>
          <span class="cpill">+ more</span>
        </div>

      </div>
    </div>

  </div>
</section>
```

```css
.smw-grid {
  display: grid;
  grid-template-columns: 40fr 60fr;
  gap: 80px;
  align-items: start;
}
.smw-left {
  position: sticky;
  top: 120px;
}
.smw-right { padding: 80px 0; }

/* Timeline */
.smw-timeline { position: relative; }
.tl-line {
  position: absolute;
  left: 20px; top: 20px; bottom: 0;
  width: 1px;
  background: rgba(20,20,19,0.12);
}
.tl-progress {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 0;
  background: var(--gold);
  transition: height 0.3s ease;
}

/* Steps */
.smw-step {
  display: flex;
  gap: 24px;
  padding-bottom: 72px;
  position: relative;
}
.smw-node {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(20,20,19,0.07);
  color: var(--ink-400);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 220ms ease, color 220ms ease, box-shadow 220ms ease;
  z-index: 1;
}
.smw-step.active .smw-node {
  background: var(--gold);
  color: #141413;
  box-shadow: 0 0 0 6px rgba(246,197,7,0.18);
}
.smw-num { font-size: 11px; font-weight: 700; color: var(--ink-400); letter-spacing: 0.1em; }
.smw-content h3 { font-size: 22px; font-weight: 700; color: var(--ink-900); margin: 4px 0 8px; }
.smw-content p  { color: var(--ink-600); line-height: 1.65; }

/* Content pills — neutral */
.content-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.cpill {
  border: 1px solid rgba(20,20,19,0.18);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 13px;
  color: var(--ink-600);
  background: transparent;
}
```

### 7b. Scroll interaction JS

```js
(function () {
  const steps    = Array.from(document.querySelectorAll('.smw-step'));
  const progress = document.getElementById('tlProgress');
  if (!steps.length || !progress) return;

  const tl = document.querySelector('.tl-line');

  function updateProgress() {
    let lastActive = -1;
    steps.forEach((step, i) => {
      const rect = step.getBoundingClientRect();
      const mid  = rect.top + rect.height * 0.4;
      if (mid < window.innerHeight * 0.65) {
        step.classList.add('active');
        lastActive = i;
      } else {
        step.classList.remove('active');
      }
    });

    if (lastActive >= 0) {
      const nodeEl   = steps[lastActive].querySelector('.smw-node');
      const tlTop    = tl.getBoundingClientRect().top;
      const nodeTop  = nodeEl.getBoundingClientRect().top;
      const lineH    = tl.offsetHeight;
      const fill     = Math.min((nodeTop - tlTop + 20) / lineH * 100, 100);
      progress.style.height = fill + '%';
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
```

---

## 8. SECTION 5 — PRICING COMPARISON

**This is a new section — no replacement of existing HTML block**

**Insert after:** Section 4 (`#how-it-works`)

**Section background:** `linear-gradient(180deg, #F5EFE3 0%, #FCF7ED 100%)` — smooth transition

### 8a. Section header

```html
<div class="section-head reveal">
  <span class="eyebrow">Pricing</span>
  <h2>Pay less. Sell more. Keep it all.</h2>
  <p class="lede">3rd-party apps take 25–30% of every order. With EatFuti you pay one flat fee, keep your customers, and we cover your credit card fees.</p>
</div>
```

### 8b. 2-card comparison grid

```html
<div class="pricing-grid reveal">

  <!-- EatFuti card -->
  <div class="price-card pcard-eatfuti">
    <div class="price-icon">
      <img src="assets/logo-symbol-yellow.png" width="32" height="32" alt="">
    </div>
    <span class="price-label">EatFuti Pro</span>
    <div class="price-amount">$500<span class="price-period">/mo</span></div>
    <p class="price-sub">One flat fee. Keep everything you earn.</p>
    <a href="/contact" class="btn-prestige">
      <span class="btn-prestige-label">Get started</span>
      <span class="btn-prestige-icon"><svg class="icon"><use href="#i-arrow"/></svg></span>
    </a>
    <div class="price-section-label">WHAT YOU GET</div>
    <ul class="price-list">
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Keep 100% of your order revenue</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Credit card fees covered by EatFuti</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Branded online ordering + app</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Loyalty & rewards program</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Email & SMS marketing automation</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Smart dashboard & analytics</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> Multilingual support team</li>
      <li><svg class="icon pcheck"><use href="#i-check"/></svg> No contracts. Cancel anytime.</li>
    </ul>
  </div>

  <!-- 3rd party card -->
  <div class="price-card pcard-third">
    <div class="price-icon">
      <svg class="icon" style="width:32px;height:32px;color:var(--ink-400)"><use href="#i-bag"/></svg>
    </div>
    <span class="price-label">3rd-Party Apps</span>
    <div class="price-amount">$2,800<span class="price-period">/mo</span></div>
    <p class="price-sub">Avg 30% commission on $10K/mo orders</p>
    <a href="#" class="btn btn-ghost">See breakdown <svg class="icon"><use href="#i-arrow"/></svg></a>
    <div class="price-section-label">WHAT YOU GIVE UP</div>
    <ul class="price-list price-list-no-icon">
      <li>25–30% commission on every order</li>
      <li>Credit card fees on top</li>
      <li>No branded presence or app</li>
      <li>No customer data ownership</li>
      <li>No loyalty or retention tools</li>
      <li>No marketing automation</li>
      <li>Impersonal, generic support</li>
      <li>Platform contracts & hidden fees</li>
    </ul>
  </div>

</div>

<!-- Savings callout -->
<div class="savings-callout reveal">
  <span class="savings-tag">Save ~$2,300/mo vs. 3rd-party apps</span>
</div>
```

```css
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 900px;
  margin: 56px auto 0;
}

/* Shared card */
.price-card {
  border-radius: 20px;
  padding: 40px 36px;
}
.price-label {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--ink-500); font-weight: 700;
  display: block; margin-bottom: 16px;
}
.price-amount {
  font-size: 48px; font-weight: 800; color: var(--ink-900); line-height: 1;
  margin-bottom: 8px;
}
.price-period { font-size: 18px; font-weight: 500; color: var(--ink-600); }
.price-sub { font-size: 14px; color: var(--ink-600); margin-bottom: 24px; }
.price-section-label {
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--ink-400); font-weight: 700;
  border-top: 1px solid rgba(20,20,19,0.12);
  padding-top: 20px; margin-top: 24px; margin-bottom: 16px;
}
.price-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.price-list li { font-size: 15px; display: flex; align-items: center; gap: 10px; color: var(--ink-800); }
.pcheck { width: 16px; height: 16px; flex-shrink: 0; color: #141413; }
.price-list-no-icon li { color: var(--ink-500); padding-left: 26px; }

/* EatFuti card */
.pcard-eatfuti {
  background: linear-gradient(145deg, #FFFCF0 0%, #FEF3C7 55%, #FDE68A 100%);
  box-shadow: 0 8px 40px rgba(246,197,7,0.2), 0 2px 8px rgba(20,20,19,0.06);
}

/* 3rd party card */
.pcard-third {
  background: #FFFFFF;
  border: 1px solid rgba(20,20,19,0.10);
  box-shadow: 0 2px 12px rgba(20,20,19,0.06);
}

/* Savings tag */
.savings-callout { text-align: center; margin-top: 32px; }
.savings-tag {
  background: #141413;
  color: var(--gold);
  border-radius: 999px;
  padding: 9px 22px;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
}
```

---

## 9. SECTION 6 — TESTIMONIALS

**Replaces:** old `.proof` section

**Section ID:** `id="proof"`

**Background:** `#FCF7ED` (page Cream — resets after pricing section gradient)

### 9a. 2-column layout — 50/50

```html
<section id="proof" class="test-section">
  <div class="container test-grid">

    <!-- Left: sticky -->
    <div class="test-left">
      <span class="eyebrow">Why They Choose EatFuti</span>
      <h2>Loved by local & ethnic restaurants</h2>
      <p class="lede">Real owners, real results — across every kind of cuisine.</p>
      <div class="test-controls">
        <button class="test-arrow" id="testPrev" aria-label="Previous"><svg class="icon"><use href="#i-chev-l"/></svg></button>
        <button class="test-arrow" id="testNext" aria-label="Next"><svg class="icon"><use href="#i-chev-r"/></svg></button>
      </div>
    </div>

    <!-- Right: card deck -->
    <div class="test-deck-wrap">
      <div class="test-deck" id="testDeck">
        <div class="test-card tc-butter" data-index="0">
          <div class="tc-tag">A Vietnamese restaurant · Des Moines</div>
          <blockquote>"People finally find us on Google, and the daily posts bring in customers we never reached before — without the 30% commission."</blockquote>
          <div class="tc-stars">★★★★★</div>
        </div>
        <div class="test-card tc-coral" data-index="1">
          <div class="tc-tag">A taquería · West Des Moines</div>
          <blockquote>"The app and rewards keep our regulars coming back, and the team speaks our language. That meant everything."</blockquote>
          <div class="tc-stars">★★★★★</div>
        </div>
        <div class="test-card tc-mint" data-index="2">
          <div class="tc-tag">A sushi & ramen spot · Ankeny</div>
          <blockquote>"We switched from the delivery apps and kept our profit — EatFuti even covers the card fees. Best decision for our family restaurant."</blockquote>
          <div class="tc-stars">★★★★★</div>
        </div>
        <div class="test-card tc-sky" data-index="3">
          <div class="tc-tag">Raj & Priya S. · Zaika Kitchen</div>
          <blockquote>"EatFuti helped us get more orders and keep more of what we earn. The team actually understands restaurants."</blockquote>
          <div class="tc-stars">★★★★★</div>
        </div>
      </div>
    </div>

  </div>
</section>
```

```css
.test-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.test-left { position: sticky; top: 120px; align-self: start; }
.test-controls { display: flex; gap: 12px; margin-top: 32px; }
.test-arrow {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1px solid rgba(20,20,19,0.2);
  background: transparent;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 140ms ease;
}
.test-arrow:hover { background: #141413; color: #fff; border-color: #141413; }

/* Card deck */
.test-deck-wrap { position: relative; height: 420px; }
.test-deck { position: relative; width: 100%; height: 100%; }
.test-card {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms ease;
}

/* Stack depth — CSS managed via JS class */
.test-card[data-depth="0"] { transform: translateY(0) scale(1);    z-index: 4; }
.test-card[data-depth="1"] { transform: translateY(10px) scale(0.96); z-index: 3; }
.test-card[data-depth="2"] { transform: translateY(20px) scale(0.92); z-index: 2; }
.test-card[data-depth="3"] { transform: translateY(30px) scale(0.88); z-index: 1; }

/* Exit animation */
.test-card.exiting {
  transform: translateX(-110%) rotate(-5deg) !important;
  opacity: 0;
  z-index: 5;
}

/* Card colors */
.tc-butter { background: #FDE68A; }
.tc-coral  { background: #FCA5A5; }
.tc-mint   { background: #6EE7B7; }
.tc-sky    { background: #7DD3FC; }

.tc-tag   { font-size: 13px; color: rgba(20,20,19,0.6); font-weight: 600; }
blockquote { font-size: 22px; font-weight: 600; line-height: 1.5; color: #141413; margin: 20px 0; font-style: normal; }
.tc-stars  { font-size: 18px; color: #141413; letter-spacing: 2px; }
```

### 9b. Card deck JS

```js
(function () {
  const deck  = document.getElementById('testDeck');
  if (!deck) return;
  const cards = Array.from(deck.querySelectorAll('.test-card'));
  let order = cards.map((_, i) => i); // [0,1,2,3]

  function assignDepths() {
    order.forEach((cardIdx, depth) => {
      cards[cardIdx].setAttribute('data-depth', depth);
    });
  }

  function advance() {
    const front = order[0];
    cards[front].classList.add('exiting');
    setTimeout(() => {
      cards[front].classList.remove('exiting');
      order.push(order.shift()); // move front to back
      assignDepths();
    }, 320);
  }

  function retreat() {
    order.unshift(order.pop()); // move last to front
    assignDepths();
  }

  assignDepths();
  document.getElementById('testNext').addEventListener('click', advance);
  document.getElementById('testPrev').addEventListener('click', retreat);
})();
```

---

## 10. SECTION 7 — FINAL CTA

**Replaces:** old `.final-cta` section

**Section ID:** `id="cta"`

**Important:** Remove old `.float-icons` decoration and inline testimonial entirely.

```html
<section id="cta" class="final-cta-section">
  <div class="container">
    <div class="final-cta-card">
      <span class="eyebrow final-eyebrow">Get Started</span>
      <h2>Ready to grow your restaurant?<br>Let's do it together.</h2>
      <p class="lede final-lede">Join hundreds of ethnic & local restaurants already growing with EatFuti.</p>

      <div class="trust-chips">
        <span class="tchip">No setup fees</span>
        <span class="tchip">No long-term contracts</span>
        <span class="tchip">Cancel anytime</span>
      </div>

      <a href="/contact" class="btn-prestige btn-prestige-inv">
        <span class="btn-prestige-label">Get started</span>
        <span class="btn-prestige-icon"><svg class="icon"><use href="#i-arrow"/></svg></span>
      </a>
    </div>
  </div>
</section>
```

```css
.final-cta-section { padding: 80px 0; }
.final-cta-card {
  background: #141413;
  border-radius: 28px;
  padding: 80px 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Subtle Gold radial glow from top */
.final-cta-card::before {
  content: '';
  position: absolute;
  top: -60px; left: 50%;
  transform: translateX(-50%);
  width: 500px; height: 300px;
  background: radial-gradient(ellipse, rgba(246,197,7,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.final-eyebrow { color: rgba(255,255,255,0.45); }
.final-cta-card h2  { color: #ffffff; margin-bottom: 16px; }
.final-lede  { color: rgba(255,255,255,0.6); margin-bottom: 32px; }

.trust-chips { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
.tchip {
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  padding: 7px 18px;
  font-size: 13px;
  font-weight: 600;
}
```

---

## 11. SECTION 8 — FOOTER (improved)

### 11a. Background + logo

- Background: `#17130C` (warm dark brown per spec, replaces generic dark)
- Logo: `<img src="assets/logo-symbol-yellow.png" width="28" height="28">` + `<span class="brand-name">EatFuti</span>`

### 11b. Updated columns

```html
<div class="footer-grid">
  <!-- Brand -->
  <div class="footer-brand">
    <a href="/" class="brand">
      <img src="assets/logo-symbol-yellow.png" alt="" width="28" height="28">
      <span class="brand-name">EatFuti</span>
    </a>
    <p>The growth platform for ethnic & local restaurants. Get found, sell more, keep your profit.</p>
  </div>

  <!-- Product -->
  <div class="footer-col">
    <h5>Product</h5>
    <ul>
      <li><a href="/how-it-works">How it works</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
  </div>

  <!-- Company -->
  <div class="footer-col">
    <h5>Company</h5>
    <ul>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/contact">Talk to our team</a></li>
      <li><a href="/contact">Get started</a></li>
    </ul>
  </div>

  <!-- Get in touch (non-link column) -->
  <div class="footer-col">
    <h5>Get in touch</h5>
    <ul class="footer-contact">
      <li>(515) 493-0243</li>
      <li>hello@eatfuti.ai</li>
      <li>Des Moines, IA</li>
    </ul>
  </div>
</div>
```

### 11c. Footer CSS updates

```css
.site-footer { background: #17130C; }

.footer-col h5 {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.35);
  font-weight: 700;
  margin-bottom: 16px;
}
.footer-col a {
  color: rgba(255,255,255,0.6);
  transition: color 140ms ease;
}
.footer-col a:hover { color: rgba(255,255,255,0.9); }
.footer-contact li { color: rgba(255,255,255,0.45); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
}
```

### 11d. Copyright

```html
<span>© 2026 EatFuti Inc. · Built for ethnic & local restaurants · One flat platform. Zero commission on Pro. We cover your credit card fees.</span>
```

---

## 12. RESPONSIVE BREAKPOINTS

### Tablet (≤ 1024px)
- Hero: stack to single column, mock below copy
- Feature Tabs: tab-card becomes single column (illustration below text)
- Ethnic grid: stack (visual top, list below)
- SMW: stack (left above, timeline below, sticky disabled)
- Pricing: stack cards 1fr

### Mobile (≤ 768px)
- Hero: H1 font-size reduced ~20%
- Highlight row: 2×2 grid
- Tab nav: wrap, 2 per row
- Press logos: 2 per row
- Marquee: speed up (18s)
- Test deck: full width
- Final CTA card: padding 40px 24px
- Footer: single column

### Mobile (≤ 480px)
- Highlight row: 1 column
- Tab card: min-height auto, padding 32px 24px
- Pricing grid: 1 column
- `.btn-prestige`: full width

---

## 13. BUILD ORDER

Execute in this order to avoid dependency issues:

1. **Prep:** Add new SVG symbols to `<defs>` sprite
2. **CSS:** Add all new component styles to `landing.css`
3. **NAV:** Update links + logo
4. **S1:** Hero — H1 icons, gradient text, btn-prestige, highlight-row, press-logos, browser-frame mock
5. **S1:** Marquee strip (full-bleed, after hero)
6. **S2:** Feature Tabs — remove `.why`, build tabs + 4 panels + JS
7. **S3:** Ethnic section — replace `#how`, build 2-col layout
8. **S4:** SMW section — replace `.solutions`, build sticky layout + timeline JS
9. **S5:** Pricing Comparison — new section, insert after S4
10. **S6:** Testimonials — replace `.proof`, build card deck + JS
11. **S7:** Final CTA — rebuild with Espresso card, trust chips, remove float-icons + inline testimonial
12. **S8:** Footer — update bg, logo, columns, copyright
13. **Assets:** Fetch press logos (AXIOS, DMR, KCCI) → save to `assets/press/`
14. **QA:** Check all sections at 1440px, 1024px, 768px, 375px

---

## 14. FILES TO MODIFY

| File | What changes |
|---|---|
| `index.html` | All sections per plan above |
| `landing.css` | Add all new component/section CSS |
| `assets/press/` | New folder — 3 press logo files |

`colors_and_type.css` — **do not modify**, import only.
