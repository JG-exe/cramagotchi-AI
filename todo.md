# Cramagotchi — Progress

Branch: `feat/monster-motion-and-redesign` (from `dev`, per `agents.md` workflow)

Legend: **X** = not done · **V** = done

---

## 1. Monster replacement & motion (`monster.md` + `monster.svg`)

- V Replace the current hardcoded stage SVGs (blue scholar, purple graduate) with the
  `monster.svg` line-art style: single inline `<svg>`, warm token fills
  (`--monster-fill-*`), constant espresso stroke (`--stroke-monster` style, 2.75px).
- V Derive sibling variants for **EGG**, **HATCHLING**, **GRADUATED_BEAST** in the same
  style (decision: derivation approved by user — monster.svg only ships SCHOLAR).
- V Each stage body + each status face is defined once as an SVG `<symbol>` and combined
  with `<use>` inside a single `<g class="monster-body">` — keyframes target the parent
  group, so all stages inherit identical motion (no duplicated animation definitions).
- V All body transforms pivot from the bottom-centre ground contact point
  (`transform-box: fill-box; transform-origin: 50% 100%`) — grounded on the ambient shadow.
- V `MonsterStatus` → root container class (`is-idle`, `is-eating`, `is-sleeping`,
  `is-hungry`) via Angular signal bindings — CSS-only, no DOM teardown.
- V **IDLE:** `breathe` keyframes, 4.2s cycle, subtle rise + uniform scale (1.0 → 1.025),
  soft cubic-bezier easing.
- V **EATING:** `chomp` squash-and-stretch, 360ms loop, `scaleY(0.92)` + `scaleX(1.04)`,
  happy curved eyes + open mouth (expression swap).
- V **SLEEPING:** breath slowed 1.4× (5.9s), group opacity 0.9, dimmed silhouette,
  staggered `floatZzz` keyframes on two `z` glyphs drifting up-right and fading
  (0 → 0.85 → 0), closed sleepy eyes.
- V **HUNGRY:** `rumble`, 180ms loop, ±2px horizontal quiver, worried brows + wavy mouth.
- V Facial vector paths swap per status inside the SVG (symbol per face — idle, eating,
  sleeping, hungry), not pixel-overlay hacks.
- V Fill tint transitions interpolate (~360ms `transition` on the stage art) while the
  espresso line-art stroke stays constant.

## 2. User stories gap audit (`USER_STORIES.md`)

- V Epic 1 verified: add task (title required, weight, optional subject), complete →
  EATING + XP + devoured history, delete only uncompleted, collapsible archive, active
  count in header. No gaps found.
- V Epic 2 verified: 3s eat → 25m sleep timestamps, 1s-tick auto transitions,
  SLEEPING completion keeps XP without resetting `sleepUntil`, "Digesting peacefully..."
  banner, 24h zero-punishment HUNGRY, rumble cue + HUNGRY status pill. No gaps found.
- V Epic 3 verified: thresholds 50/150/300, stage updates automatically, XP progress bar
  with percent + "Maximum Evolution Achieved!" at cap.
- V US-3.3: distinct stage visuals (egg / hatchling / scholar w/ glasses+book / mortarboard
  beast) with status-matched animations — implemented in section 1.
- V Epic 4 verified: optional `estimatedMinutes`, ±15% variable XP with 85% floor,
  +50% accuracy bonus (inclusive 1.25× boundary), awarded XP hidden until completion and
  revealed in devoured history; active tasks show "≈" approximate wording only.
- V Epic 5 verified: multi-exam add/remove chips, nearest-upcoming countdown, 0 on the day,
  negative after, legacy `examDateIso` migration in `StorageRepository`.
- V Epic 6 verified: auto-save on every mutation to `cramagotchi_state`, restore on boot
  + immediate `evaluateTime`, unique-ID derivation from highest existing suffix.
- V Epic 7: subject pills map deterministically to a hue (0–359) via `--subject-hue`, now
  tonally mixed into the warm gamut (still deterministic per tag — no default blue).
- V Epic 8: mobile-first single column below 768px (monster header card first), two-pane
  split ≥768px (sanctuary 1fr / tasks 1.45fr); web + desktop + Android wiring untouched.

## 3. Full visual redesign (`design.md`)

- V Colour system: cool blue-gray neutrals fully replaced by the cream/espresso palette;
  all `color-mix()` computed borders, diffuse shadows, tag pills, monster fills and
  Material M3 `--mat-sys` overrides implemented (zero blue / cool slate / cyan).
- V Typography: **Quicksand** loaded in `index.html` (preconnect + stylesheet, faster than
  CSS `@import`), full size/weight/leading scale in `_typography.css`.
- V Distances: spacing scale, radii 8/16/24/pill, `--layout-max-width: 1080px`,
  `--stroke-monster: 2.75px`.
- V Breakpoints: `--bp-desktop: 768px`, pane ratios `--pane-ratio-tasks: 1.45fr` /
  `--pane-ratio-sanctuary: 1fr`.
- V Animations: duration tokens, soft cubic-bezier easings, warm diffuse hover/press
  shadows, plus a global `prefers-reduced-motion` fallback that stills all loops.
- V Redesigned **monster-sanctuary**: no harsh borders anywhere — soft diffused elevation
  only; token-based status pill with a calm semantic dot (emoji palette removed); refined
  exam chips/form; polished XP bar on recessed surface.
- V Redesigned **task-queue**: calm card form, warm Snack/Meal badges from tag tokens,
  warm subject pills, borderless recessed devoured-history toggle.
- V App shell: professional header (app title + calm tagline), consistent gutters,
  ground-aligned layout; all experimental dead CSS removed.

## Verification

- V `ng test` — 12/12 Angular UI tests pass (all `data-testid` contracts preserved).
- V `ng build` — production build clean (web / desktop / android all consume this output).
- V Desktop/web parity: desktop serves the Angular bundle copied into classpath resources
  at build time (`:desktopApp:bundleWebApp` → `/webapp/**`), so a stale desktop jar shows
  an old UI. After any frontend change, rebuild with `./gradlew :desktopApp:processResources`
  (bundled extras: literal CSS fallbacks added before every `color-mix()` / `min()` /
  `aspect-ratio()` declaration and in every SVG fill, so the older JavaFX WebView
  (WebKit) degrades gracefully instead of dropping declarations).

## Decisions log

- V monster.svg only contains the SCHOLAR stage → user chose to **derive 3 sibling
  variants** (EGG, HATCHLING, GRADUATED_BEAST) in the same art style (satisfies US-3.3).
- V Noted & fixed: old scholar (blue) / graduate (violet) SVGs and subject-pill fallback
  violated design.md's zero-blue rule — resolved by the token rewrite.
- V Scholar's original "book-as-mouth" repositioned to a small held book so status
  expressions (eat/sleep/hungry faces) can swap freely in the mouth area, per monster.md.
