# UI & Design Implementation Prompt: Cramagotchi

Act as a Principal Frontend Architect and UI Designer specializing in Kotlin Multiplatform (KMP) integration, Angular (Standalone Components, Signals, OnPush), Angular Material M3 theming, and modular CSS architecture.

Implement the complete visual layer, CSS design system, and interactive Angular components for **Cramagotchi**, adhering
strictly to the aesthetic, token, SVG art direction, and anti-distraction rules below.

---

## 1. Visual Philosophy & Anti-Distraction Rules

- **Calm Study Sanctuary:** Prioritise low-stimulus visual calm so the student focuses on studying, not the interface.
- **Strictly No Blue:** Zero blue hues, cool slates, or cyan tints anywhere in surfaces, text, shadows, or Material M3
  ripple/focus states. All neutrals must be rooted in warm cream and espresso tones.
- **Soft Diffusion:** Replace harsh borders with warm, diffused ambient elevation (`0 8px 24px -4px` using warm espresso
  alpha) and subtle tonal surface shifts.
- **Zero-Punishment Feedback:** Visual states (`IDLE`, `HUNGRY`, `EATING`, `SLEEPING`) must feel gentle and
  organic—never alarming, punitive, or urgent. No virtual currency, mini-games, health decay, or intrusive audio alerts.

---

## 2. Modular CSS Design Tokens (`src/styles/consts/`)

Create and populate the five modular CSS token files. Avoid hardcoded magic numbers or redundant hex values in component
stylesheets—use CSS `color-mix()` to compute tints, surface elevations, borders, and subject tag pills dynamically from
base tokens.

### `colours`

```css
:root {
    /* Base Neutrals (Warm Cream & Espresso — Zero Blue) */
    --color-cream-base: #FAF6F0;
    --color-surface-elevated: #FFFDF9;
    --color-espresso-dark: #2C221E;
    --color-espresso-muted: #6E5D55;

    /* Base Accents (Botanical & Warm Earth) */
    --color-sage-base: #6E9E7B;
    --color-ochre-base: #D69749;
    --color-terracotta-base: #D97757;
    --color-moss-sleep: #84A590;
    --color-rose-clay: #C97B7D;
    --color-plum-taupe: #9E7B8F;

    /* Semantic Assignments */
    --color-bg-primary: var(--color-cream-base);
    --color-surface: var(--color-surface-elevated);
    --color-surface-recessed: color-mix(in srgb, var(--color-espresso-dark) 4%, var(--color-cream-base));
    --color-text-primary: var(--color-espresso-dark);
    --color-text-muted: var(--color-espresso-muted);

    --color-accent-meal: var(--color-sage-base);
    --color-accent-snack: var(--color-ochre-base);
    --color-status-hungry: var(--color-terracotta-base);
    --color-status-sleep: var(--color-moss-sleep);

    /* Computed Borders & Soft Diffusion Shadows */
    --color-border-subtle: color-mix(in srgb, var(--color-espresso-dark) 8%, transparent);
    --shadow-diffuse-sm: 0 4px 14px -2px color-mix(in srgb, var(--color-espresso-dark) 6%, transparent);
    --shadow-diffuse-md: 0 12px 32px -6px color-mix(in srgb, var(--color-espresso-dark) 9%, transparent);

    /* Computed Subject Tag Pill Tokens (Background 14% tint, Text darkened with Espresso) */
    --tag-sage-bg: color-mix(in srgb, var(--color-sage-base) 14%, var(--color-surface-elevated));
    --tag-sage-fg: color-mix(in srgb, var(--color-sage-base) 70%, var(--color-espresso-dark));

    --tag-ochre-bg: color-mix(in srgb, var(--color-ochre-base) 14%, var(--color-surface-elevated));
    --tag-ochre-fg: color-mix(in srgb, var(--color-ochre-base) 65%, var(--color-espresso-dark));

    --tag-rose-bg: color-mix(in srgb, var(--color-rose-clay) 14%, var(--color-surface-elevated));
    --tag-rose-fg: color-mix(in srgb, var(--color-rose-clay) 70%, var(--color-espresso-dark));

    --tag-plum-bg: color-mix(in srgb, var(--color-plum-taupe) 14%, var(--color-surface-elevated));
    --tag-plum-fg: color-mix(in srgb, var(--color-plum-taupe) 70%, var(--color-espresso-dark));

    /* Monster SVG Computed Fills */
    --monster-fill-egg: color-mix(in srgb, var(--color-ochre-base) 12%, var(--color-surface-elevated));
    --monster-fill-hatchling: color-mix(in srgb, var(--color-sage-base) 14%, var(--color-surface-elevated));
    --monster-fill-scholar: color-mix(in srgb, var(--color-sage-base) 18%, var(--color-surface-elevated));
    --monster-fill-graduated: color-mix(in srgb, var(--color-ochre-base) 18%, var(--color-surface-elevated));
    --monster-blush: color-mix(in srgb, var(--color-terracotta-base) 28%, transparent);

    /* Angular Material M3 Token Overrides */
    --mat-sys-primary: var(--color-sage-base);
    --mat-sys-on-primary: var(--color-surface-elevated);
    --mat-sys-surface: var(--color-surface-elevated);
    --mat-sys-on-surface: var(--color-espresso-dark);
    --mat-sys-on-surface-variant: var(--color-espresso-muted);
    --mat-sys-outline: color-mix(in srgb, var(--color-espresso-dark) 18%, transparent);
    --mat-sys-outline-variant: var(--color-border-subtle);
    --mdc-filled-text-field-container-color: var(--color-surface-recessed);
    --mdc-linear-progress-active-indicator-color: var(--color-sage-base);
    --mdc-linear-progress-track-color: color-mix(in srgb, var(--color-sage-base) 18%, transparent);
}
```

### `font`

```css
@import url('[https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap)');

:root {
    --font-sans: 'Quicksand', system-ui, -apple-system, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;

    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.25rem;
    --text-xl: 1.5rem;

    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semibold: 600;
    --weight-bold: 700;

    --leading-tight: 1.25;
    --leading-normal: 1.5;
}
```

### `distances`
```css
:root {
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 2.75rem;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;

  --layout-max-width: 1080px;
  --stroke-monster: 2.75px;
}
```

### `breakpoints`
```css
:root {
  --bp-desktop: 768px;
  --pane-ratio-tasks: 1.45fr;
  --pane-ratio-sanctuary: 1fr;
}
```