# Website Size, Spacing & Alignment Guide

A practical, standard reference for the exact dimensions, paddings, font sizes, container widths, and alignment rules that give a website a clean, professional, and balanced look.

---

## 1. The Golden Spacing System: The 8px Grid

Never use random spacing values (e.g., `13px`, `27px`, `39px`). Professional websites follow an **8px base grid** (with a `4px` half-step for micro adjustments).

| Spacing Token | Pixel Value | Typical Application |
| :--- | :--- | :--- |
| **Micro (4px)** | `4px` | Space between icon and adjacent badge, borders, tight tags |
| **Compact (8px)** | `8px` | Space between icon and button text, sub-labels |
| **Small (16px)** | `16px` | Inner padding of buttons, cards, form inputs; mobile margin |
| **Medium (24px)** | `24px` | Grid gap between cards, space between title and body text |
| **Large (32px)** | `32px` | Spacing between major elements inside a section |
| **X-Large (48px)**| `48px` | Vertical spacing between sub-components; mobile section padding |
| **2X-Large (64px)**| `64px` | Section padding on tablets |
| **Section (80px - 100px)** | `80px - 100px` | Standard top/bottom padding for desktop sections |

---

## 2. Container Widths & Page Margins (Horizontal Sizing)

Content should never stretch endlessly edge-to-edge on large monitors. A centered container with fixed maximum width gives the layout a stable anchor.

### Container Standards
- **Standard Desktop Container:** `max-width: 1200px;` (Alternative: `1140px` or `1280px`).
- **Reading / Article Container:** `max-width: 720px;` to `800px;` (Ensures 60–75 characters per line for optimal readability).
- **Narrow Form / Auth Container:** `max-width: 480px;` to `540px;` (Login, registration, simple enquiry forms).

### Page Margin (Gutters)
Always apply horizontal padding to `.container` so content never touches the screen edge on small displays:
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* 16px on mobile, 20px - 24px on desktop */
}
```

---

## 3. Section Vertical Rhythm (Vertical Breathing Space)

A cramped website looks amateur. Giving sections room to breathe immediately makes the design look premium.

| Section Type | Desktop Padding | Mobile Padding |
| :--- | :--- | :--- |
| **Hero Banner** | `padding: 100px 0;` to `120px 0;` | `padding: 60px 0;` |
| **Standard Section** | `padding: 80px 0;` to `100px 0;` | `padding: 48px 0;` |
| **Compact Section / Banner** | `padding: 48px 0;` to `60px 0;` | `padding: 32px 0;` |
| **Footer** | `padding: 60px 0 24px;` | `padding: 40px 0 20px;` |

---

## 4. Typography Scale & Line-Heights

Proper font sizes and line heights create natural visual hierarchy.

| Element | Desktop Size | Mobile Size | Weight | Line-Height | Bottom Margin |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title ($H1$)** | `44px - 48px` | `30px - 34px` | Bold (`700`) | `1.15 - 1.2` | `16px - 20px` |
| **Section Title ($H2$)**| `32px - 36px` | `24px - 26px` | Bold (`700`) | `1.25 - 1.3` | `12px - 16px` |
| **Card / Subheading ($H3$)** | `20px - 24px` | `18px - 20px` | Semi-bold (`600`) | `1.35` | `10px - 12px` |
| **Item Header ($H4$)** | `18px - 20px` | `16px - 17px` | Semi-bold (`600`) | `1.4` | `8px` |
| **Body Paragraph** | `16px` | `15px - 16px` | Regular (`400`) | `1.6` | `16px` |
| **Small / Meta / Captions** | `13px - 14px` | `12px - 13px` | Regular (`400`) | `1.4 - 1.5` | `0` |

> **Crucial Rule:** Body text line-height must always be between `1.5` and `1.65`. Never leave it at `1.0` or `1.2`, or text will look cramped and unreadable.

---

## 5. Component Dimensions (Buttons, Inputs, Cards & Icons)

### Buttons
- **Standard Button:** `height: 44px` to `48px;` | `padding: 12px 24px;` (Meets the 44px mobile touch target standard).
- **Small / Compact Button:** `height: 36px;` | `padding: 8px 16px;` | `font-size: 14px;`
- **Large Hero CTA Button:** `height: 52px;` | `padding: 14px 32px;` | `font-size: 17px;`
- **Border Radius:** Keep it uniform across the entire site (e.g., all `6px`, all `8px`, or all `50px` pill style).

### Input Fields (Forms)
- **Input Height:** Must match the button height! `height: 44px` to `48px;`.
- **Inner Padding:** `padding: 10px 16px;`
- **Font Size:** Minimum `16px` (prevents iOS Safari from auto-zooming when focused).

### Cards
- **Card Inner Padding:** `20px` to `28px;` (typically `padding: 24px;`).
- **Image Aspect Ratios:**
  - Standard Landscape: `16:9` (`aspect-ratio: 16 / 9; object-fit: cover;`)
  - Photo / Product: `4:3` or `1:1` square (`aspect-ratio: 1; object-fit: cover;`)
  - Banner: `21:9`

### Icons
- **Inline / Button Icons:** `18px` to `20px`
- **Navigation / Tool Icons:** `24px`
- **Feature Highlight Icons:** `40px` to `48px`

---

## 6. Grid Columns & Gaps

Use CSS Grid with defined gaps for consistent spacing:

```css
/* Responsive 3-Column Card Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px; /* Desktop: 24px - 32px; Mobile: 16px */
}

/* 2-Column Split (e.g. 50/50 Image & Text) */
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px; /* Generous gap between columns */
    align-items: center; /* Vertically centers text with image */
}

@media (max-width: 768px) {
    .grid-2 {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
```

---

## 7. Golden Alignment Rules (What Makes It Look "Nice")

1. **Left-Align Long Paragraphs:**
   - Never center-align paragraphs longer than 2–3 lines. The ragged left edge causes eye fatigue. Always keep body text left-aligned.
   - Symmetrical section titles and short subtitles can be center-aligned (`text-align: center;`).

2. **Vertical Alignment in Headers & Rows:**
   - Always use `display: flex; align-items: center;` when placing logos, navigation links, and buttons in the same row so their optical centers line up.

3. **Equal-Height Cards with Bottom-Pinned Buttons:**
   - When cards have different text lengths, buttons can look uneven. Fix this by making cards flex containers and pushing buttons to the bottom:
   ```css
   .card {
       display: flex;
       flex-direction: column;
       height: 100%;
   }
   .card .btn {
       margin-top: auto; /* Pushes button to bottom of card */
   }
   ```

4. **The Left-Edge Alignment Anchor:**
   - In any section, ensure the title, paragraph, and CTA button start on the exact same vertical left line. Never indent one element without intent.

5. **Button Pairs Gap:**
   - When placing Primary and Secondary CTA buttons side by side, use a `12px` to `16px` gap:
   ```css
   .hero-actions {
       display: flex;
       gap: 16px;
       align-items: center;
       justify-content: center; /* Or flex-start if left-aligned */
   }
   ```

---

## 8. Dedicated Blueprints: Headers, Hero Sections & Footers

These three sections form the backbone of almost every website. Below are the exact alignment structures, dimensions, and spacing rules for each.

```
+-----------------------------------------------------------------------+
|  [Logo]                 [Link 1]  [Link 2]  [Link 3]       [CTA Btn]  |  HEADER (70px-80px)
+-----------------------------------------------------------------------+
|                                                                       |
|                          [ Eyebrow Badge ]                            |
|                 HERO HEADLINE (44px - 56px Bold)                      |
|           Descriptive subtitle paragraph (18px - 20px)                |  HERO (100px - 120px pad)
|                    [Primary CTA]  [Secondary CTA]                     |
|                                                                       |
+-----------------------------------------------------------------------+
|  CONTENT SECTIONS (Cards, Features, Grids) (80px - 100px pad)         |
+-----------------------------------------------------------------------+
|  [Brand Bio]       [Quick Links]     [Products]       [Newsletter]    |
|  Social Icons      - Link A          - Item 1         [Input] [Btn]   |  FOOTER (60px - 80px pad)
|-----------------------------------------------------------------------|
|  (C) 2026 Brand Name. All rights reserved.    Privacy | Terms | Help   |  SUB-FOOTER (24px pad)
+-----------------------------------------------------------------------+
```

---

### 8.1 Header (Navigation Bar) Blueprint

#### Dimensions & Spacing:
- **Desktop Bar Height:** `70px` to `80px` (or `padding: 16px 0;`).
- **Mobile Bar Height:** `56px` to `64px` (or `padding: 12px 0;`).
- **Logo Size:** `28px` to `36px` icon/mark + `1.25rem` to `1.5rem` text.
- **Link Item Gap:** `24px` to `32px` between navigation links.
- **Link Padding:** `padding: 8px 12px;` to ensure a generous, accessible hover target.
- **Action Buttons Gap:** `12px` to `16px` between utility icons (theme/lang) and the CTA button.

#### Standard Header Layout (Flexbox Alignment):
```css
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    height: 76px;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.35rem;
    font-weight: 700;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
    list-style: none;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 14px;
}
```

#### The 3 Common Header Alignment Patterns:
1. **Left Logo + Right Nav (Most Popular):**
   - Logo is aligned far left, all links and CTA button sit on the far right.
2. **Left Logo + Center Nav + Right CTA (Modern SaaS / Agency):**
   - Logo on far left (`flex: 1; text-align: left;`), Nav links perfectly centered in the viewport, CTA and utility icons on far right (`flex: 1; text-align: right;`).
3. **Centered Logo with Split Navigation (Boutique / Luxury):**
   - 3 navigation links on left, Logo centered in the middle, 3 navigation links or utilities on the right.

---

### 8.2 Hero Section Blueprint

The Hero section is the first screen the user sees. It must balance impact with clarity.

#### Sizing & Vertical Spacing Hierarchy:
- **Section Padding:**
  - Desktop: `padding: 100px 0;` to `120px 0;` (or `min-height: 75vh;` with flexbox centering).
  - Mobile: `padding: 60px 0;`
- **Max Content Width:**
  - Centered Hero: `max-width: 800px; margin: 0 auto;`
  - Split Hero (Text Column): `max-width: 580px;`

#### Spacing Steps Inside the Hero:
1. **Eyebrow Badge (Optional):**
   - Size: `13px` to `14px;` | Padding: `6px 14px;` | Border-radius: `999px;`
   - Margin below: `16px;`
2. **Headline ($H1$):**
   - Desktop: `44px` to `56px;` | Mobile: `30px` to `36px;`
   - Line-height: `1.15;` | Font-weight: `700` or `800;`
   - Margin below: `20px` to `24px;`
3. **Subtitle Paragraph:**
   - Desktop: `18px` to `20px;` | Mobile: `16px;`
   - Line-height: `1.6;` | Color: Muted text
   - Margin below: `32px` to `40px;`
4. **CTA Button Group:**
   - Gap between buttons: `16px;`
   - Primary Button: `padding: 14px 28px; font-size: 16px; font-weight: 600;`
   - Secondary Button: `padding: 14px 24px; font-size: 16px;`

#### Pattern A: Centered Focus Hero (Clean & Impactful)
```css
.hero-centered {
    padding: 110px 0;
    text-align: center;
}

.hero-centered .hero-content {
    max-width: 780px;
    margin: 0 auto;
}

.hero-centered .hero-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}
```

#### Pattern B: Split 50/50 Hero (Text Left + Media Right)
```css
.hero-split {
    padding: 90px 0;
}

.hero-split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center; /* Vertically centers text with visual */
}

@media (max-width: 900px) {
    .hero-split-grid {
        grid-template-columns: 1fr;
        gap: 36px;
        text-align: center;
    }
}
```

---

### 8.3 Footer Blueprint

The footer serves as the safety net for visitors seeking sitemaps, contact info, and legal credentials.

#### Sizing & Layout Structure:
- **Top Section Padding:** `60px 0;` to `80px 0;`
- **Sub-Footer Bottom Bar Padding:** `24px 0;`
- **Column Gap:** `40px` to `48px` on desktop; `32px` on mobile.

#### 4-Column Layout Proportions:
- Column 1 (Brand & Socials): `2fr` (wider to fit logo, bio, and social icon row).
- Column 2 (Quick Links): `1fr`.
- Column 3 (Products / Services): `1fr`.
- Column 4 (Contact / Newsletter): `1.5fr`.

```css
/* Footer Main Grid */
.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
}

@media (max-width: 992px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr; /* 2 columns on tablet */
        gap: 32px;
    }
}

@media (max-width: 600px) {
    .footer-grid {
        grid-template-columns: 1fr; /* 1 column on mobile */
        gap: 32px;
    }
}
```

#### Detailed Element Alignments Inside Columns:
- **Column Titles ($H4$):**
  - Size: `16px` to `18px;` | Font-weight: `600;` | Margin-bottom: `20px;`
- **Link Lists (`<ul>`):**
  - `display: flex; flex-direction: column; gap: 12px; list-style: none;`
  - Links: `font-size: 14px` to `15px;` | `line-height: 1.4;`
- **Social Media Icons Row:**
  - `display: flex; gap: 12px; margin-top: 16px;`
  - Icon buttons: `width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;`
- **Bottom Sub-Footer Bar:**
  ```css
  .footer-bottom {
      border-top: 1px solid var(--border-color);
      margin-top: 48px;
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 14px;
  }
  ```

