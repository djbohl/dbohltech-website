# DBOHLTECH Design System

## Overview
Dark professional technical aesthetic built for backend engineers, data specialists, and cloud infrastructure experts. The design emphasizes clarity, reliability, and clean architecture through a cohesive color system, glass morphism components, and intentional typography.

---

## Color Palette

### Primary Colors
- **Background (Dark)**: `#070b11` — Primary page background
- **Surface (Dark)**: `#0d1421` — Secondary surface, solid variant
- **Text (Primary)**: `#e2e8f0` — Main text color
- **Text (Muted)**: `#94a3b8` — Secondary/tertiary text, reduced emphasis

### Accent Colors
All accents are blue-based for a technical, professional feel.

| Name | Hex | Usage |
|------|-----|-------|
| **Accent (Primary Blue)** | `#3b82f6` | Buttons, links, highlights, primary interactions |
| **Accent 2 (Cyan)** | `#06b6d4` | Secondary accents, hover states, secondary actions |
| **Accent 3 (Amber)** | `#f59e0b` | Tertiary highlights, special attention (cloud/infra theme) |

### Semantic Colors
- **Success Green**: `#10b981` — Positive states, confirmation
- **Error Red**: `#ef4444` — Errors, warnings (if used)
- **Border**: `rgba(255, 255, 255, 0.08)` — Subtle dividers, card borders
- **Border Light**: `rgba(255, 255, 255, 0.12)` — Slightly more visible borders
- **Dim**: `rgba(59, 130, 246, 0.10)` — Faint blue tint backgrounds

### Glass & Shadow
- **Glass (Standard)**: `rgba(255, 255, 255, 0.04)` — Semi-transparent overlay
- **Shadow**: `0 8px 32px rgba(59, 130, 246, 0.12)` — Blue-tinted shadow
- **Shadow Card**: `0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0,0,0,0.2)` — Card shadow stack

---

## Typography

### Font Families
- **Display/Headings**: `Syne` (sans-serif, 800 weight) — Bold, clean headlines
- **Body/UI**: `DM Mono` (monospace) — Technical, readable body text
- **Special (Card)**: `Bebas Neue` — Stylized business card titles

### Font Sizes & Hierarchy

| Level | Size | Weight | Letter-Spacing | Usage |
|-------|------|--------|-----------------|-------|
| **H1 (Hero)** | `clamp(3.5rem, 6vw, 5.5rem)` | 800 | -0.03em | Page hero headings |
| **H2 (Section)** | `clamp(2rem, 3.5vw, 3rem)` | 800 | -0.03em | Section titles |
| **H3 (Card)** | `1.2rem` | 700 | -0.01em | Card/component titles |
| **Label/Tag** | `0.62rem` | 600 | 0.2em | Tags, labels, small caps |
| **Body** | `0.82rem` | 400 | 0 | Main paragraph text |
| **Small** | `0.65rem` | 400 | 0.15em | Meta text, timestamps |

### Text Colors
- **Primary**: `var(--text)` = `#e2e8f0` — Main body content
- **Muted**: `var(--muted)` = `#94a3b8` — Secondary descriptions
- **Accent**: `var(--accent)` = `#3b82f6` — Links, CTAs, highlights

---

## Spacing Scale

All spacing uses consistent increments for a harmonious layout.

| Scale | Size | Usage |
|-------|------|-------|
| **XS** | `0.5rem` (8px) | Micro gaps, icon padding |
| **SM** | `1rem` (16px) | Tight spacing, icon margins |
| **MD** | `1.5rem` (24px) | Element gaps, section spacing |
| **LG** | `2rem` (32px) | Component separation |
| **XL** | `3rem` (48px) | Section padding |
| **2XL** | `4rem` (64px) | Major section padding |
| **3XL** | `6rem` (96px) | Hero padding, full-width sections |

### Padding Standards
- **Cards**: `1.5rem` (compact), `2rem` (standard), `2.5rem` (featured)
- **Sections**: `6rem 3rem` (desktop), `4rem 1.5rem` (mobile)
- **CTAs/Buttons**: `0.95rem 2.2rem`

---

## Glass Morphism Components

### Standard Card
```css
background: rgba(13, 20, 33, 0.80);
backdrop-filter: blur(24px) saturate(1.2);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 24px;
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.05),
  0 4px 24px rgba(0,0,0,0.4),
  0 1px 4px rgba(0,0,0,0.2);
```

### Terminal/Code Block
```css
background: rgba(13, 20, 33, 0.90);
backdrop-filter: blur(28px) saturate(1.2);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 22px;
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.06),
  0 12px 40px rgba(0,0,0,0.5),
  0 3px 8px rgba(0,0,0,0.3);
```

### Light Glass (Navigation)
```css
background: rgba(7, 11, 17, 0.88);
backdrop-filter: blur(20px) saturate(1.3);
border: 1px solid rgba(59, 130, 246, 0.18);
```

### Button (Primary - Solid Blue)
```css
background: #2563eb;
padding: 0.95rem 2.2rem;
border-radius: 100px;
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.15),
  inset 0 -2px 0 rgba(0,0,0,0.20),
  0 8px 24px rgba(37, 99, 235, 0.40),
  0 3px 8px rgba(0,0,0,0.3);
```

### Button (Ghost - Transparent)
```css
background: rgba(59, 130, 246, 0.06);
backdrop-filter: blur(12px);
border: 1px solid rgba(59, 130, 246, 0.25);
color: var(--accent);
```

---

## Components

### Service Cards
- **Grid**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap**: `1.1rem`
- **Hover**: `translateY(-6px) scale(1.01)`, enhanced shadow
- **Border on hover**: `rgba(59, 130, 246, 0.35)`

### Project Cards
- **Grid**: 2 columns (desktop), 1 column (mobile)
- **Featured variant**: `grid-column: span 2; grid-template-columns: 1fr 1fr`
- **Thumbnail height**: `200px` (standard), `320px` (featured)
- **Background gradients**:
  - Blue: `linear-gradient(135deg, #0f1c32 0%, #0c2040 60%, #0e2a4a 100%)`
  - Purple: `linear-gradient(135deg, #120e22 0%, #1a1040 60%, #14103a 100%)`
  - Green: `linear-gradient(135deg, #0a1a12 0%, #0c2218 60%, #0e2a1c 100%)`

### Featured Projects Carousel (Horizontal Scroll)
```css
display: flex;
gap: 1.2rem;
overflow-x: auto;
scroll-behavior: smooth;
scroll-snap-type: x mandatory;

/* Individual card */
flex: 0 0 min(calc(100% - 2rem), 500px);
scroll-snap-align: start;

/* Mobile */
flex: 0 0 min(calc(100% - 1rem), 350px);
```

### Skill Bars
- **Track**: `rgba(255, 255, 255, 0.06)`, 5px height
- **Fill**: `linear-gradient(90deg, #2563eb, #3b82f6, #06b6d4)`
- **Animation**: `scaleX(0 → 1)`, 1.2s ease

### Tags
- **Size**: `0.58rem` with `0.08em` letter-spacing
- **Padding**: `0.28rem 0.8rem`
- **Background**: `rgba(59, 130, 246, 0.07)`
- **Border**: `1px solid rgba(59, 130, 246, 0.18)`
- **Hover**: Background 2x darker, border 2x more visible

---

## Effects & Animations

### Entrance Animations
- **fadeUp**: `opacity 0 → 1, translateY(20px) → 0`
- **Duration**: 0.6–0.8s
- **Timing**: `ease`
- **Stagger**: 80–160ms delays

### Hover Effects (Standard)
- **Cards**: `translateY(-6px) scale(1.01)`
- **Buttons**: `translateY(-3px) scale(1.02)`
- **Links**: `color` transition 0.2s

### Shine Sweep
Used on buttons for shimmer effect:
```css
@keyframes shimmer-sweep {
  0% { left: -80%; }
  60%, 100% { left: 140%; }
}
duration: 3.5s ease infinite;
```

### Pulse
Used on glows and accents:
```css
@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}
duration: 6–8s ease-in-out infinite;
```

---

## Responsive Breakpoints

| Breakpoint | Width | Purpose |
|------------|-------|---------|
| **Desktop** | ≥1025px | Full layout, 3-column grids |
| **Tablet** | 769–1024px | 2-column layouts |
| **Mobile** | ≤768px | Single column, optimized touch |
| **Small Mobile** | ≤480px | Micro adjustments, readable type |

### Key Changes by Breakpoint
- **Services Grid**: 3 cols → 2 cols → 1 col
- **Projects Grid**: 2 cols → 1 col
- **Featured Projects**: Full width with scroll
- **Padding**: `3rem` → `1.5rem` → `1.2rem`
- **Font Sizes**: Use `clamp()` for fluid scaling

---

## Navigation & UI Patterns

### Mobile Navigation Panel
- **Background**: `rgba(7, 11, 17, 0.95)`
- **Backdrop**: `blur(36px) saturate(1.2)`
- **Width**: `min(380px, 88vw)`
- **Border**: `rgba(59, 130, 246, 0.20)`
- **Edge Accent**: `2px` vertical blue gradient stripe

### Overlay
- **Background**: `rgba(7, 11, 17, 0.60)`
- **Blur**: `6px`
- **Opacity**: 0 (closed) → 1 (open)

---

## Business Card (/card)

### Card Dimensions
- **Physical Size**: 3.5" × 2"
- **Padding**: `20px 24px`
- **Border Radius**: `6px`

### Card Design
- **Background**: `#070b11`
- **Border**: `1px solid rgba(59, 130, 246, 0.18)`
- **Top Stripe**: `2px linear-gradient(90deg, #3b82f6 0%, #06b6d4 60%, transparent 100%)`
- **Glow**: `radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)`

### Logo Badge
- **Size**: `50px` (desktop), `40px` (mobile)
- **Position**: Top-right corner, 10–12px inset
- **Shape**: Circle (`border-radius: 50%`)
- **Background**: `rgba(59, 130, 246, 0.10)`
- **Border**: `1px solid rgba(59, 130, 246, 0.25)`
- **Image**: `object-fit: cover`, 90% opacity

---

## Usage Guidelines

### Color Usage
1. **Primary Brand Actions**: Use `#3b82f6` (accent blue)
2. **Hover/Focus States**: Use `#06b6d4` (cyan)
3. **Tertiary Highlights**: Use `#f59e0b` (amber) sparingly
4. **Text Hierarchy**: Use `#e2e8f0` (main) → `#94a3b8` (muted)

### Component Reuse
- **Cards**: Use standard glass morphism styling for consistency
- **Buttons**: Prefer solid blue primary, ghost secondary
- **Spacing**: Use defined scale, avoid arbitrary values
- **Typography**: Use font families and sizes from hierarchy

### Accessibility
- **Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Hover States**: Always provide clear visual feedback
- **Color Alone**: Never convey information via color alone
- **Focus**: Use outline or highlight on interactive elements

### Dark Mode Optimization
- Design assumes dark backgrounds; light text
- Use low opacity overlays for depth
- Rely on subtle borders and shadows (not harsh contrasts)
- Reserve high-saturation colors for key CTAs only

---

## Implementation Checklist

When adding new components or pages:

- [ ] Use CSS variables from `:root` in `globals.css`
- [ ] Apply standard spacing scale (no arbitrary gaps)
- [ ] Use glass morphism for cards/panels
- [ ] Add hover/focus states with transitions
- [ ] Check contrast ratios for accessibility
- [ ] Test responsive layout at 3 breakpoints
- [ ] Animate entrances with fadeUp or similar
- [ ] Use blue accent palette consistently
- [ ] Document any new components added
- [ ] Verify mobile touch targets (44px minimum)

---

## File Structure

**Styles:**
- `app/globals.css` — All CSS variables, utilities, components
- `app/card/card.module.css` — Business card-specific styles
- `app/[route]/[file].module.css` — Route-specific overrides (if needed)

**Design:**
- `DESIGN_SYSTEM.md` — This document
- Colors, spacing, components all defined here for team reference

---

## References

- **Font**: [Syne on Google Fonts](https://fonts.google.com/specimen/Syne)
- **Font**: [DM Mono on Google Fonts](https://fonts.google.com/specimen/DM+Mono)
- **Color Palette**: Blue (#3b82f6), Cyan (#06b6d4), Amber (#f59e0b)
- **Glass Morphism**: Tailwind CSS backdrop-filter utilities
- **Icons**: Custom SVG inline, 24×24 standard

---

**Last Updated**: April 2025
**Version**: 1.0
