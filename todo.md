# Cramagotchi — Progress

Workflow: worked on `feat/monster-motion-and-redesign` (from `dev`, per `agents.md`),
human-review approved, merged into `dev` (`5b738f9`), shipped as PR
https://github.com/JG-exe/cramagotchi-AI/pull/3 (`dev` → `main`, awaiting merge).

Legend: **X** = not done · **V** = done

---

## Release status

- V All implementation + verification items below complete (no X remaining).
- V Feature branch merged into `dev` with changelog merge commit.
- V PR #3 open on `personal` (`dev` → `main`) — final human merge pending.
- V Stray PR on `origin` (EHB-MCT) closed; note: a leftover `dev` branch remains
  pushed on `origin` and can be deleted there via the GitHub UI.

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

- V `ng test` — 24/24 Angular UI tests pass (12 original contracts + 12 invalid-input
  probes in `input-validation.spec.ts`: empty/malformed/impossible exam dates rejected,
  negative/zero/non-numeric estimates and actual-minutes rejected, empty title rejected).
- V Frontend boundary hardened: `isValidIsoDate()` (strict `YYYY-MM-DD` + real calendar
  check incl. leap days) now guards `onAddExam` — the engine stores `dateIso` verbatim,
  so garbage may never reach it; engine side already survives garbage via
  `isoDaysFromCivil → null` (`nearestExamDays` skips it, never crashes).
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

---

# Style finalization (vs `cramagotchi_live_style_preview.ts` reference)

- V **Decision:** adopt preview's task-first two-pane layout (Study Queue left 1.45fr,
  sanctuary right 1fr, sticky monster column on desktop); keep `monster.md`-exact motion
  timings (breathe 4.2s / chomp 360ms / rumble 180ms / sleep 5.9s), `transform-box:
  fill-box` anchoring, Material form fields, all testids, `prefers-reduced-motion`, and
  "≈ XP" wording — preview's 520ms chomp, stage/status switchers and swatch footer skipped.

Branch: `feat/style-finalization` (from `dev`). Reference archived at
`design/cramagotchi_live_style_preview.reference.ts`.
- V Refined monster art symbols into sanctuary: egg with speckles + crack line, hatchling
  with double sprout, graduated beast with bear ears + tilted mortarboard + ochre tassel.
- V Hand-drawn stroked Zzz glyphs (path-based, font-independent for old JavaFX WebKit)
  floating up-and-right, outside the monster-body group.
- V Stage meta: Lv. + label + one-line description caption under the arena
  ("Warm & speckled…" etc.).
- V Playful status pills, enum word first ("IDLE · Calm", "EATING · Nomming…",
  "SLEEPING · Sleeping", "HUNGRY · Peckish") — contains-checks in tests still pass.
- V Live MM:SS sleep countdown ("pomodoro-timer" chip) in the sleep banner.
- V "Study Nourishment" XP section label; "Calm, zero-punishment study sanctuary" tagline.
- V Study Queue header ("Study Queue" / "N remaining") and warmer empty-state copy
  ("All queued study tasks devoured! Add another small step whenever you're ready.").
- V Verification: 24/24 `ng test` pass; `ng build` clean; desktop bundle rebuilt via
  `./gradlew :desktopApp:processResources`.

---

# Editable tasks & deadline/exam migration

Branch: `feat/edit-and-deadlines` (from `dev`).

Metric: **V** = done

- V **Decision:** every dated item gains a *kind* — `DEADLINE` (default) or `EXAM`
  (the high-stakes upgrade). Legacy stored exams (written before kinds existed)
  deserialise as plain deadlines via the field default; no manual migration.
- V Engine (`CramagotchiEngine.kt`): `ExamKind` enum; `Exam.kind` field;
  `addExam(…, kind = DEADLINE)`; new pure `updateTask` (uncompleted tasks only —
  completed ones stay immutable for history consistency; blank title keeps the old
  title, non-positive/absent estimate clears it) and `updateExam` (subject/date/kind,
  unknown id = no-op); `nearestUpcomingExam` helper so the countdown banner can name
  the right item ("days until next deadline" vs "next exam").
- V Store (`monster-store.service.ts`): `ExamKind` type + `kind` on `ExamRef`;
  `nearestUpcomingExam` computed; `updateTask` / `updateExam` delegating to the engine;
  `addExam` passes the chosen kind.
- V Sanctuary UI: Deadline/Exam segmented toggle in the add form (deadline preselected);
  chips show a `Due` vs a stronger espresso `Exam` kind tag; per-chip pencil button
  opens an inline edit form (subject / date / kind + Save/Cancel) — invalid dates
  never reach the engine (same `isValidIsoDate` gate).
- V Task queue UI: pencil button per active task opens an inline edit form
  (title / subject / estimate / Snack-Meal segmented control); save disabled on blank
  title; garbage estimate passes null (cleared), never a raw string.
- V Task add form weight selector (and edit form) moved off Material radio-group
  (whose initial `[ngModel]` writeValue renders checked too late in some harnesses)
  onto deterministic signal-driven segmented buttons.
- V Tests: Kotlin `EditFeatureTest` (12 cases) + deadline/kind cases in
  `ExamPortfolioTest`; Angular suites grow 24 → 32 (kind toggle, chip kind tags,
  banner wording, task & exam edit flows, edit-form invalid-input probes).
- V Verification: `:shared-logic:allTests` green (JVM/JS/wasm), JS assets re-synced,
  32/32 `ng test`, `ng build` clean, desktop bundle + android unit tests green.

---

# Persistent storage on desktop (+ Android audit)

Branch: `fix/platform-persistent-storage` (from `dev`).

Metric: **V** = done

- V **Diagnosis:** the Angular store saves to `localStorage` on every mutation on all
  three platforms, but JavaFX 21's `WebEngine` kept DOM storage in memory only —
  desktop saves evaporated on app exit (browser + Android were unaffected).
- V `WebEngine.userDataDirectory` (added in JavaFX 23) now points at a per-user
  profile dir: `%APPDATA%\Cramagotchi\webview` on Windows, `~/.cramagotchi/webview`
  elsewhere (macOS/Linux). Set before the engine loads content; created on demand.
- V JavaFX bump: `21.0.4 → 23.0.1` (first version with `userDataDirectory`;
  verified present in the resolved `javafx-web-23.0.1-win.jar`).
- V Desktop JDK: `jvmToolchain(17 → 21)` — matches the Gradle daemon JVM
  (`org.gradle.java.home=jdk-21.0.10`), JavaFX 23's runtime baseline.
- V Guarded fallback: if the profile dir cannot be created (read-only home,
  safety software), the engine silently falls back to the previous session-only
  behaviour with a warning — startup never crashes.
- V Android audit: **no change needed** — `MainActivity` already sets
  `domStorageEnabled = true` and Android WebView persists localStorage per app
  install; the `WebViewAssetLoader` origin (`https://appassets.androidplatform.net`)
  is stable across restarts; `allowBackup="true"` is already set.
- V Verification: desktop compiles + bundles, `:androidApp:compileDebugKotlin`,
  `:shared-logic:allTests`, 32/32 `ng test`, desktop `processResources` green.

## Risk register (what the Java/JavaFX bump might break)

- **New WebKit inside JavaFX 23** may render the redesigned UI slightly
  differently. The bundled literal CSS fallbacks (`color-mix`/`min`/
  `aspect-ratio` predecessors) stay in place and are ignored harmlessly —
  newer WebKit supports the real properties. → Smoke-test the desktop app
  once on your machine.
- **Toolchain 21 on desktop only** — `shared-logic` and `androidApp` stay on
  17 (bytecode target), so the Android/AGP build path is untouched; desktop
  consumes `shared-logic`'s `desktopJar` (jvmTarget 17) fine from Java 21.
- **First desktop launch after the bump** starts with an empty profile (the
  old data was never persisted anyway), i.e. a fresh EGG monster once.
- **Profile-lock:** if the desktop app is launched twice, the second instance
  may fail to open the same profile dir → the guarded fallback returns null
  and session-only storage kicks in instead of crashing.
- **CRAMAGOTCHI_DEV_SERVER_URL dev path** uses the same profile dir; deleting
  `%APPDATA%\Cramagotchi\webview` resets desktop state.
- Nothing else references JavaFX or the desktop toolchain (verified by grep),
  so the blast radius is limited to `desktopApp`.
