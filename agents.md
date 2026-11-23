# Project Specification: Cramagotchi (KMP + Angular Study Companion)

## 1. System Prompt & Agentic Workflow Protocol

Act as a Senior Software Architect specializing in Kotlin Multiplatform (KMP), Angular (Standalone Components & Signals), and strict Test-Driven Development (TDD). Build **Cramagotchi**, a browser-based, zero-punishment exam study companion for desktop and mobile viewports.

### 🚨 CRITICAL EXECUTION GATE (HUMAN-IN-THE-LOOP TDD)
You must strictly follow a **Test-First, Review-Gated** workflow:
1. **Phase 1 (Scaffolding & Tests ONLY):** Set up the project structure, interfaces/models, and write the complete unit test suites (Kotlin `commonTest` for domain/state logic and Jasmine/Jest for Angular UI). **DO NOT write implementation code yet.**
2. **STOP & NOTIFY:** Once the test files are written, **halt execution immediately**, present the test files to the user, and explicitly ask for review and approval.
3. **Phase 2 (Implementation):** Only after the user replies with approval ("greenlit" / "approved"), write the Kotlin business logic, KMP JS/Wasm exports, Angular components, and modular CSS until all tests pass.

---

## 2. Architecture & Tech Stack

### Core Philosophy
Encourage exam study momentum without becoming a source of procrastination. **No** mini-games, **no** cosmetic shops, **no** health decay, and **no** pet death. Completing a task feeds the monster and triggers a 25-minute sleep/digestion cycle (passive Pomodoro timer) so the student returns to studying.

### Stack Breakdown
* **Business Logic (Kotlin Multiplatform - KMP):**
  * Target: `js(IR)` / `wasmJs` compiling to an ES module consumable by Angular via TypeScript definitions (`@JsExport`).
  * Pure, deterministic state machine, XP/evolution calculations, timestamp evaluation, and `localStorage` serialization (`kotlinx.serialization`).
  * Testing: `kotlin.test` in `commonTest`.
* **Frontend (Angular 18+):**
  * Standalone components, Angular Signals for reactive state binding, OnPush change detection.
  * Thin UI layer: delegates all state transitions and business rules to the compiled KMP module.
  * Responsive mobile-first layout (stacked on mobile, two-pane split on desktop).
* UI Components & Styling (Angular Material + Modular Vanilla CSS):
  * Angular Material (`@angular/material`): Allowed and encouraged for accessible UI primitives (buttons, form fields, checkboxes, cards, chips, progress bars, tooltips).
  * Modular Vanilla CSS: All custom layout, spacing, custom SVG monster animations, and Material theme overrides must use CSS custom properties organized inside `src/styles/consts/` with one dedicated file per token category. Avoid hardcoded magic numbers in component stylesheets.

3. Directory & File Structure

cramagotchi/
├── shared-logic/                         # Kotlin Multiplatform Module
│   ├── build.gradle.kts                  # KMP config (js(IR), generateTypeScriptDefinitions())
│   └── src/
│       ├── commonMain/kotlin/com/cramagotchi/
│       │   ├── model/
│       │   │   └── Models.kt             # @JsExport data classes, enums, constants
│       │   ├── engine/
│       │   │   └── CramagotchiEngine.kt  # Pure state machine & time-evaluation logic
│       │   └── storage/
│       │       └── StorageRepository.kt  # Browser localStorage adapter & JSON serializer
│       └── commonTest/kotlin/com/cramagotchi/
│           └── engine/
│               └── CramagotchiEngineTest.kt # TDD Test Suite (Write & review FIRST)
│
└── web-app/                              # Angular Frontend Application
    └── src/
        ├── styles/
        │   ├── consts/                   # CSS Custom Properties (1 file per category)
        │   │   ├── _colours.css          # Palette, semantic colours, surface tones, Material M3 token overrides
        │   │   ├── _distances.css        # Spacing scale, margins, padding, gaps, radii
        │   │   ├── _typography.css       # Font families, sizes, weights, line-heights
        │   │   ├── _breakpoints.css      # Viewport thresholds & layout container widths
        │   │   └── _animations.css       # Keyframes & transition durations
        │   └── main.css                  # Imports Angular Material theme, /consts/*.css, & base resets
        └── app/
            ├── services/
            │   └── monster-store.service.ts # Wraps KMP module with Angular Signals
            ├── components/
            │   ├── task-queue/           # Task creation & active/devoured lists (using Material inputs/lists)
            │   │   ├── task-queue.component.ts
            │   │   ├── task-queue.component.html
            │   │   └── task-queue.component.css
            │   └── monster-sanctuary/    # Inline SVG monster, Material chips/status pill & XP bar
            │       ├── monster-sanctuary.component.ts
            │       ├── monster-sanctuary.component.html
            │       └── monster-sanctuary.component.css
            ├── app.component.ts
            ├── app.component.html
            ├── app.component.css
            └── app.component.spec.ts     # Angular component tests (Write & review FIRST)
```
---

## 4. Kotlin Domain Models (`@JsExport`)

All core models must be immutable and exported cleanly to TypeScript:

```kotlin
package com.cramagotchi.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
enum class TaskWeight(val xpValue: Int) {
    SNACK(10),
    MEAL(25)
}

@JsExport
enum class MonsterStatus {
    IDLE,
    HUNGRY,
    EATING,
    SLEEPING
}

@JsExport
enum class EvolutionStage(val level: Int, val minXp: Int) {
    EGG(1, 0),
    HATCHLING(2, 50),
    SCHOLAR(3, 150),
    GRADUATED_BEAST(4, 300)
}

@JsExport
@Serializable
data class StudyTask(
    val id: String,
    val title: String,
    val subjectTag: String? = null,
    val weight: TaskWeight,
    val completed: Boolean = false,
    val createdAt: Double, // Use Double for safe JS number interop (epoch millis)
    val completedAt: Double? = null
)

@JsExport
@Serializable
data class MonsterState(
    val name: String = "Munch",
    val xp: Int = 0,
    val stage: EvolutionStage = EvolutionStage.EGG,
    val status: MonsterStatus = MonsterStatus.IDLE,
    val lastFedAt: Double,
    val eatingUntil: Double? = null,
    val sleepUntil: Double? = null
)

@JsExport
@Serializable
data class AppState(
    val tasks: Array<StudyTask> = emptyArray(),
    val monster: MonsterState,
    val examDateIso: String? = null
)
```

*(Note: Use `Double` for Unix epoch timestamps in Kotlin common code to guarantee lossless `@JsExport` interoperability with JavaScript's `Date.now()`).*

---

## 5. MoSCoW Feature Scope

### Must Have (MVP Core)
1. **Task CRUD:** Add task (title, optional subject tag, `SNACK` or `MEAL`), complete task, delete task.
2. **Deterministic Feeding State Machine:**
   * Completing a task awards XP (`SNACK` = +10, `MEAL` = +25) and updates `lastFedAt = now`.
   * Monster transitions to `EATING` for 3 seconds (`eatingUntil = now + 3_000.0`).
   * After 3 seconds, monster transitions to `SLEEPING` for 25 minutes (`sleepUntil = now + 1_503_000.0`) to act as a passive focus block.
3. **Anti-Distraction Lock:** Completing additional tasks while `SLEEPING` awards XP and marks the task complete, but keeps `status == SLEEPING` and preserves the existing `sleepUntil` timestamp (displays *"Digesting peacefully... keep studying!"*).
4. **Zero-Punishment 24h Hunger:** If `now - lastFedAt > 86_400_000.0` (24 hours) and monster is not `SLEEPING` or `EATING`, status becomes `HUNGRY`. **XP never decays.** Feeding resets hunger immediately.
5. **Evolution Thresholds:** Automatically updates `EvolutionStage` when cumulative XP crosses `50`, `150`, and `300`.
6. **Local Persistence:** Automatically serializes `AppState` to browser `localStorage` on every state mutation and restores on boot (evaluating elapsed offline time immediately).

### Should Have
* **Exam Countdown Banner:** Optional date input (`YYYY-MM-DD`) calculating days remaining via KMP logic.
* **Subject Colour Pills:** Subtle badge colours per subject tag.
* **Devoured History:** Collapsible archive of completed tasks.

### Won't Have (Strict Anti-Distraction Rules)
* No virtual currency, shops, or cosmetics.
* No interactive mini-games or happiness/health meters.
* No intrusive audio alerts or notifications.

---

## 6. Modular Vanilla CSS Specification (`src/styles/consts/`)

Every CSS file must adhere strictly to its domain without hardcoding magic numbers in component stylesheets:

* **`_colours.css`:** `--color-bg-primary: #FAF8F5;`, `--color-surface: #FFFFFF;`, `--color-text-primary: #2D3748;`, `--color-text-muted: #718096;`, `--color-accent-meal: #68A377;`, `--color-accent-snack: #D99B52;`, `--color-status-hungry: #E07A5F;`, `--color-status-sleep: #81B29A;`, `--color-border: #E2E8F0;`
* **`_distances.css`:** `--space-2xs: 0.25rem;`, `--space-xs: 0.5rem;`, `--space-sm: 0.75rem;`, `--space-md: 1rem;`, `--space-lg: 1.5rem;`, `--space-xl: 2rem;`, `--radius-sm: 6px;`, `--radius-md: 12px;`, `--radius-pill: 9999px;`, `--layout-max-width: 1100px;`
* **`_typography.css`:** `--font-sans: system-ui, -apple-system, sans-serif;`, `--font-mono: ui-monospace, monospace;`, `--text-xs: 0.75rem;`, `--text-sm: 0.875rem;`, `--text-base: 1rem;`, `--text-lg: 1.25rem;`, `--text-xl: 1.5rem;`, `--weight-regular: 400;`, `--weight-semibold: 600;`, `--weight-bold: 700;`
* **`_breakpoints.css`:** Custom media queries / container rules for mobile (`< 768px`, single-column stacked with monster header card) and desktop (`>= 768px`, 60/40 split pane).
* **`_animations.css`:** `--duration-fast: 150ms;`, `--duration-normal: 300ms;`, keyframe animations `@keyframes breathe`, `@keyframes rumble`, `@keyframes chomp`, `@keyframes floatZzz`.

---

## 7. TDD Specification (Tests to Write & Review First)

### A. Kotlin Common Tests (`CramagotchiEngineTest.kt`)
1. **`testAddTaskCreatesUncompletedTask`:** Adding `"Finish Chapter 11"` (`MEAL`) appends task with `completed = false` and preserves existing state.
2. **`testCompleteTaskFeedsMonsterAndStartsEatSleepCycle`:** Completing a `MEAL` task at timestamp $T$ sets `xp = 25`, `status = EATING`, `eatingUntil = T + 3000.0`, and `sleepUntil = T + 1503000.0`.
3. **`testEvaluateTimeTransitionsEatingToSleepingToIdle`:**
   * Evaluating at $T + 3001.0$ transitions `EATING` $\rightarrow$ `SLEEPING`.
   * Evaluating at $T + 1503001.0$ transitions `SLEEPING` $\rightarrow$ `IDLE`.
4. **`testCompletingTaskWhileSleepingQueuesXpWithoutResettingTimer`:** When `status == SLEEPING` (`sleepUntil = T + 1000000.0`), completing a `SNACK` adds `10` XP, keeps `status == SLEEPING`, and leaves `sleepUntil` unchanged.
5. **`testZeroPunishmentHungerAfter24Hours`:** When `now - lastFedAt > 86400000.0` and `xp == 120`, evaluating state sets `status = HUNGRY` while keeping `xp == 120`.
6. **`testEvolutionStageProgression`:** Crossing `50`, `150`, and `300` XP updates `stage` to `HATCHLING`, `SCHOLAR`, and `GRADUATED_BEAST` respectively.
7. **`testOfflineBrowserReloadRecovery`:** Restoring serialized JSON from `localStorage` where `sleepUntil` passed while the tab was closed immediately resolves status to `IDLE` (or `HUNGRY` if $>24\text{h}$).

### B. Angular Component Tests (`app.component.spec.ts`)
1. Renders mobile/desktop layout containers and binds initial `MonsterState` from `MonsterStoreService`.
2. Submitting the task form calls `store.addTask()` and clears the input field.
3. Checking a task item triggers `store.completeTask()` and updates the visible XP bar and monster status badge.
4. Displays the *"Digesting peacefully"* anti-distraction message when monster status is `SLEEPING`.

---

## 8. Build Execution Instructions for AI Agent

1. **STEP 1 (Current Task):** Generate the Gradle KMP configuration, Angular workspace configuration, TypeScript/Kotlin model definitions, CSS `/consts` files, and **all unit test files** (`CramagotchiEngineTest.kt` and `app.component.spec.ts`).
2. **STEP 2 (Mandatory Pause):** Stop after creating the tests. Output a clear summary of the test cases written and ask the user: *"Tests are ready for your review. Please reply to greenlight implementation."*
3. **STEP 3 (Post-Approval):** Implement `CramagotchiEngine.kt`, `StorageRepository.kt`, `MonsterStoreService`, Angular components, and component CSS, then verify all Kotlin and Angular tests pass.