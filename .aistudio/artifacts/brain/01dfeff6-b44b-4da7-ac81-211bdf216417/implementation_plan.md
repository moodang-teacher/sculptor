# SCULPTOR 2026 FW Brand Experience Website

A high-fashion, Y2K cyber-fairycore digital storefront and editorial brand website for **SCULPTOR (스컬프터)**, built with pure **HTML + Tailwind CSS + Vanilla JavaScript**, featuring buttery Lenis smooth scrolling, GSAP ScrollTrigger reveals, dynamic Swiper.js product carousels, and an interactive shopping drawer.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed based on your requirements and design preferences:
> - **Brand Aesthetic & Motion**: Y2K Cyber Fairycore aesthetic blending raw editorial streetwear with ethereal sparkle particles, custom magnetic cursor, and delicate ornamental chrome flourishes.
> - **Typography Pairing**: Google Fonts **Bodoni Moda** (bold display serif) and **Syne** (contemporary avant-garde sans) paired with **Pretendard** for Korean typography.
> - **Interactive Features**: Quick View product modal, slide-out Cart drawer with real state persistence, Lookbook hotspot pin tags, and Swiper.js carousels.
> - **Zero React Policy**: 100% Vanilla JS + Tailwind CSS + Vite static build, directly exportable and deployable to GitHub Pages.

---

## 1. Overview & Core Concept

- **What It Does**: Transposes the designer's SCULPTOR 2026 FW lookbook and storefront into an ultra-sleek, interactive fashion destination. Users experience silky smooth scrolling, explore new drops via touch/drag Swiper carousels, inspect outfits through an editorial "Style Edit" lookbook with interactive hotspots, and add items to a functional slide-over cart with live subtotal calculation.
- **Target Audience / Persona**: Gen Z & Millennial trendsetters, high-street streetwear enthusiasts, K-fashion followers looking for avant-garde, 2000s cyber-fairycore fashion.
- **Key Value**: Delivers the tactile, moody aesthetic of an editorial fashion magazine combined with the seamless functionality of an e-commerce flagship—free from bloated frameworks, fast-loading, and responsive across all screens.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero Entrance & Immersion**:
   - The user arrives to find the high-impact SCULPTOR campaign visual featuring the FW26 muse.
   - A floating custom magnetic cursor follows the pointer with delicate sparkle particles trail.
   - Smooth header navigation (`SCULPTOR` wordmark, Search modal trigger, Cart drawer button with live badge, Hamburger menu drawer).
2. **New Drop Discovery (Swiper Carousel)**:
   - "New drop" section presents 4 highlight items (Velour Track Hooded Zip-Up, Faux Shaggy Fur Coat, Boyfriend Hooded Shirts, Cross Chainmail Big Bag).
   - Desktop and mobile users can drag/swipe smoothly, view subtle hover lift animations, and click "Quick View" to open the detail popup or "Add to Bag" directly.
3. **Full Release Editorial Campaign**:
   - High-contrast visual campaign banner ("스컬프터 FW26 컬렉션") with kinetic text marquee, micro-interactions, and GSAP scroll-triggered parallax.
4. **Style Edit Lookbook with Interactive Hotspots**:
   - Editorial collage echoing the designer's draft.
   - Clickable plus hotspots on the model cutout revealing the worn pieces (e.g., "Faithless Jeans", "Lace Corset Cardigan") with price and instant "Add to Bag".
   - Delicate Y2K ornamental chrome scroll divider anchoring the section.
5. **Best Seller Showcase**:
   - 5-item curated grid with hover secondary angles, price in tabular numerals, and quick action affordances.
6. **Inside Sculptor & PopUp Story**:
   - Visual cultural tiles ("The Hyundai Seoul PopUp" & "FW26 Photoshoot Behind the Scenes") with interactive video/gallery modal previews.
7. **Footer & Compliance**:
   - Clean, authentic brand footer matching corporate details (Roots Corporation, 사업자등록번호, 통신판매업신고) and copyright.

### Visual Identity & Theme
- **Color Palette**:
  - Dominant Canvas (60%): Ultra-clean crisp off-white (`#FBFBFB`) and subtle atmospheric bone (`#F4F4F6`).
  - Structural Contrast (30%): Deep obsidian charcoal (`#0D0D11`) for typography, hairline borders (`#E5E5E9`), and pure white cards (`#FFFFFF`).
  - Y2K Accent Budget (10%): Electric cyber magenta / teal chrome highlights (`#E82B8C`, `#24C7B8`) used selectively for badges, active states, and sparkle trails.
- **Typography**:
  - Display & Headings: `Bodoni Moda` (high-contrast editorial serif, 600-800 weight) for brand wordmark and section headers ("New drop", "style edit", "best seller").
  - Sub-Headlines & Accents: `Syne` (modern eccentric geometric sans) for campaign subtitles and callouts.
  - Body & Korean Text: `Pretendard` for effortless readability in Korean descriptions, labels, and specs.
- **Component Styling & Layout**:
  - Zero-pill discipline: Clean unboxed metadata with typographic separators (`·` or `/`).
  - Strict 3-zone Top Bar Contract: `[SCULPTOR]` — `[Collections, Lookbook, Drops, Pop-Up, Archive]` — `[Search, Bag (Count), Menu]`.
  - Refined hairline dividers and delicate jewelry-like ornamental flourishes.

---

## 3. Key Product Decisions & Trade-Offs

- **Pure HTML5 + Vanilla JS (No React)**:
  - *Rationale*: Direct user constraint. Eliminates React bundle overhead and hydration lag. Everything is driven by native DOM APIs, clean modular JavaScript classes/functions, and event delegation.
  - *GitHub Pages Compatibility*: Uses Vite's static bundling or pure relative asset references so `npm run build` outputs a self-contained `dist/` directory easily hosted on GitHub Pages.
- **Lenis.js + GSAP ScrollTrigger Integration**:
  - *Rationale*: Delivers luxury smooth scrolling without hijacking native touch physics. GSAP ScrollTrigger handles scroll reveals, pinned lookbook sections, and magnetic cursor tracking.
- **Swiper.js for Touch-Ready Carousels**:
  - *Rationale*: Standard in fashion e-commerce for fluid touch gestures, grab cursors, responsive breakpoints (1-col mobile, 2-col tablet, 4-col desktop), and zero lag.
- **Lucide Icons via Vanilla SVG**:
  - *Rationale*: Crisp vector rendering, zero extraneous font loading issues, lightweight inline or DOM-injected SVG icons for search, bag, close, arrows, and plus badges.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      index.html                        │
│  - Top Bar (Brand, Navigation, Quick Actions)          │
│  - Hero Campaign (High-res Editorial + Parallax)       │
│  - New Drop (Swiper.js Carousel + Cards)               │
│  - Full Release Banner (Kinetic Marquee)               │
│  - Style Edit (Editorial Collage + Pin Hotspots)       │
│  - Best Seller Grid (5 Curated Items + Quick Add)      │
│  - Inside Sculptor (Popup & BTS Media Cards)           │
│  - Footer (Corporate Info, Notices, Legal)            │
│  - Global Overlays (Cart Drawer, Quick View Modal)     │
└──────────────────────────┬─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
┌─────────────────────────┐ ┌─────────────────────────┐
│     src/main.js         │ │     src/index.css       │
│ - Lenis Smooth Scroll   │ │ - Tailwind CSS v4       │
│ - GSAP ScrollTrigger    │ │ - Bodoni Moda + Syne    │
│ - Swiper Initialization │ │ - Pretendard Korean     │
│ - Cart Drawer State     │ │ - Custom Keyframes      │
│ - Quick View Modal      │ │ - Sparkle & Cursor CSS  │
│ - Lookbook Hotspots     │ └─────────────────────────┘
│ - Magnetic Glitter Trail│
└─────────────────────────┘
```

### State & Interaction Model
- **Cart State**: Lightweight client-side cart manager stored in `localStorage` supporting add, remove, quantity update, subtotal calculation, and drawer toggle.
- **Quick View Modal**: Injects active product data dynamically into an accessible dialog overlay with variant selection (size, color) and instant add-to-bag.
- **Lookbook Hotspots**: Interactive pin buttons positioned on the editorial collage; clicking a pin displays a floating micro-card with product details.
- **Sparkle Particle Generator**: Lightweight canvas/DOM particle effect on mousemove and hero hover, embodying the Y2K fairycore aesthetic without performance penalty.

---

## 5. Implementation Steps (To be executed upon approval)

1. **Setup & Assets**:
   - Configure `index.html` with Google Fonts (`Bodoni Moda`, `Syne`), `Pretendard`, and dependencies (GSAP, ScrollTrigger, Lenis, Swiper, Lucide).
   - Ensure local designer asset `/public/assets/aistudio/______f92a0869.png` and high-fidelity product images are integrated seamlessly.
2. **Markup & Layout**:
   - Construct semantic HTML structure with Tailwind CSS following the designer's composition.
   - Implement the slide-out Cart Drawer and Quick View modal templates in the DOM.
3. **Core Vanilla JavaScript (`src/main.js`)**:
   - Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger.
   - Initialize Swiper for the "New Drop" carousel.
   - Code cart state handling with live counter updates and drawer animations.
   - Add lookbook hotspot click handlers and Quick View dialog behavior.
   - Implement the Y2K glitter spark trail and magnetic cursor.
4. **Verification & Build**:
   - Verify build and responsive behavior across viewports with `compile_applet`.
