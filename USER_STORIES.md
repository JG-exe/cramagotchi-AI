# Cramagotchi — User Stories (v1)

User stories for the v1 (MVP) scope of **Cramagotchi**, a browser-based, zero-punishment
exam study companion. Each story is scoped to what v1 can actually do, as defined by the
KMP domain models, engine, storage layer, and Angular UI in this repository.

## Personas

- **Sam the Crammer** — a university student with multiple exams approaching, studying in
  focused blocks and wanting gentle momentum rather than pressure.
- **Mia the Mobile Studier** — studies on phone between classes, needs a stacked, thumb-friendly layout.
- **Riley the Returner** — closes the tab/browser overnight and expects state to survive.

## Epic 1 — Task Management

### US-1.1 — Add a study task

**Priority:** Must · **Estimate:** M

**As** Sam, **I want** to add a study task with a title, size (Snack or Meal), and an
optional subject tag, **so that** I can queue the work I plan to do.

**Acceptance criteria**
- Title is required; empty submissions are ignored.
- Weight is selectable as Snack (+10 XP) or Meal (+25 XP).
- Subject tag is optional; when provided it is stored on the task.
- A new task is created uncompleted with `completedAt = null`.
- After submit, the input fields are cleared and reset to defaults.

### US-1.2 — Complete a task to feed the monster

**Priority:** Must · **Estimate:** M

**As** Sam, **I want** to check off a completed task, **so that** my Cramagotchi is fed
and earns XP.

**Acceptance criteria**
- Checking a task marks it completed and records `completedAt`.
- The task moves from the active list to the Devoured history.
- XP is awarded according to the task weight.
- The monster enters the EATING state.

### US-1.3 — Delete an uncompleted task

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** to delete a task I no longer need, **so that** my queue stays clean.

**Acceptance criteria**
- Only uncompleted tasks can be deleted.
- Completed (devoured) tasks remain in history and cannot be deleted.

### US-1.4 — Browse devoured history

**Priority:** Should · **Estimate:** S

**As** Sam, **I want** to expand a collapsible archive of completed tasks, **so that** I
can review what I've already finished and the XP each earned.

**Acceptance criteria**
- A "Devoured Tasks" section appears only when at least one task is completed.
- Expanding shows each completed task's title, weight badge, and awarded XP.
- The section can be collapsed again.

### US-1.5 — See active task count

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** to see how many tasks are still active, **so that** I know how
much work remains.

**Acceptance criteria**
- The task panel header displays the count of active (uncompleted) tasks.

## Epic 2 — Feeding State Machine & Focus Cycle

### US-2.1 — Eat then sleep after completing a task

**Priority:** Must · **Estimate:** M

**As** Sam, **I want** completing a task to trigger a short 3-second "eating" animation
followed by a 25-minute sleep, **so that** I'm encouraged to take a passive focus break
(Pomodoro) instead of rushing to the next task.

**Acceptance criteria**
- On completion, monster status becomes EATING and `eatingUntil = now + 3000ms`.
- `sleepUntil` is set to `now + 1503000ms` (3s eat + 25m sleep).
- `lastFedAt` is updated to `now`.

### US-2.2 — Automatic EATING → SLEEPING → IDLE transitions

**Priority:** Must · **Estimate:** M

**As** Sam, **I want** the monster to transition on its own as time passes, **so that**
I don't have to manage timers manually.

**Acceptance criteria**
- After `eatingUntil` passes, status becomes SLEEPING.
- After `sleepUntil` passes, status becomes IDLE.
- Transitions are evaluated every second while the tab is open.

### US-2.3 — Anti-distraction lock while sleeping

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** completing more tasks while my monster is sleeping to still award
XP without resetting the sleep timer, **so that** I'm rewarded for studying but not
tempted to spam tasks to "wake" the monster.

**Acceptance criteria**
- While status is SLEEPING, completing a task adds XP and marks the task complete.
- Status remains SLEEPING.
- The existing `sleepUntil` timestamp is preserved (not reset).

### US-2.4 — "Digesting peacefully" message

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** a calm message while my monster sleeps, **so that** I feel
encouraged to keep studying.

**Acceptance criteria**
- While SLEEPING, the UI shows "Digesting peacefully... keep studying!".
- A hint indicates a passive 25-minute focus block is active.

### US-2.5 — Zero-punishment 24-hour hunger

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** my monster to become HUNGRY (not dead or penalized) if I haven't
fed it in 24 hours, **so that** returning after a break feels welcoming, never punishing.

**Acceptance criteria**
- If `now - lastFedAt > 86400000ms` and status is IDLE, status becomes HUNGRY.
- XP never decays, regardless of absence length.
- Feeding (completing a task) resets hunger immediately.

### US-2.6 — Hungry visual cue

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** a distinct hungry animation (rumble), **so that** I notice my
monster wants food without being nagged.

**Acceptance criteria**
- When HUNGRY, the monster SVG plays a rumble animation.
- The status pill shows "HUNGRY".

## Epic 3 — Evolution & Progress

### US-3.1 — Evolve as XP accumulates

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** my monster to evolve at XP milestones (50, 150, 300), **so that**
long-term studying feels visibly rewarding.

**Acceptance criteria**
- 0–49 XP: EGG stage.
- 50–149 XP: HATCHLING stage.
- 150–299 XP: SCHOLAR stage.
- 300+ XP: GRADUATED_BEAST stage.
- Stage updates automatically when XP crosses a threshold.

### US-3.2 — XP progress bar

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** to see my XP and progress toward the next evolution, **so that**
I know how close I am to the next stage.

**Acceptance criteria**
- The monster card displays current XP and current stage.
- A progress bar shows percentage toward the next milestone.
- At GRADUATED_BEAST, the bar is full and shows "Maximum Evolution Achieved!".

### US-3.3 — Stage-specific monster visuals

**Priority:** Must · **Estimate:** L

**As** Sam, **I want** the monster's appearance to change per evolution stage, **so
that** growth feels tangible.

**Acceptance criteria**
- Each stage renders a distinct inline SVG (egg, hatchling, scholar with glasses/book,
  graduated beast with mortarboard).
- Animations match status (breathe when idle, chomp when eating, sleep zzz when sleeping).

## Epic 4 — Gamified Time-Estimated XP

### US-4.1 — Estimate task duration

**Priority:** Could · **Estimate:** M

**As** Sam, **I want** to optionally estimate how many minutes a task will take, **so
that** I can practice planning and earn bonus XP for accuracy.

**Acceptance criteria**
- Tasks accept an optional `estimatedMinutes` value.
- Tasks without an estimate still work normally.

### US-4.2 — Variable XP reward

**Priority:** Could · **Estimate:** M

**As** Sam, **I want** XP rewards to vary slightly (±15%) per completion, **so that**
rewards feel fresh without being unfair.

**Acceptance criteria**
- Awarded XP = round(base × (0.85 + 0.30 × rng)), with rng ∈ [0,1].
- Variation is deterministic given the rng seed supplied by the caller.
- XP is never reduced below the 85% floor (zero punishment).

### US-4.3 — Accuracy bonus for good estimates

**Priority:** Could · **Estimate:** M

**As** Sam, **I want** a +50% XP bonus when my actual time is within 25% of my
estimate, **so that** accurate planning is rewarded.

**Acceptance criteria**
- If an estimate and actual minutes are both provided and |actual − estimate| ≤ 25% of
  the estimate, XP is multiplied by 1.5.
- The boundary (actual = estimate × 1.25) is inclusive.
- Without an actual time recorded, no bonus is applied.

### US-4.4 — Hidden awarded XP until completion

**Priority:** Could · **Estimate:** S

**As** Sam, **I want** the awarded XP to be revealed only after I complete a task, **so
that** the reward feels like a surprise rather than a target to game.

**Acceptance criteria**
- `awardedXp` is null on uncompleted tasks.
- On completion, `awardedXp` is recorded on the task.
- The devoured history displays the awarded XP.

## Epic 5 — Exam Countdown

### US-5.1 — Set a single exam date

**Priority:** Should · **Estimate:** M

**As** Sam, **I want** to set an exam date, **so that** I can see a countdown and stay
motivated.

**Acceptance criteria**
- A date input accepts `YYYY-MM-DD`.
- The banner shows days remaining until the exam.
- On the exam day itself, the countdown reads 0.
- After the exam day, the countdown turns negative.

### US-5.2 — Manage multiple exams

**Priority:** Should · **Estimate:** M

**As** Sam, **I want** to add and remove multiple exams (each with a subject tag and
date), **so that** I can track all my upcoming exams in one place.

**Acceptance criteria**
- `addExam` appends an Exam with a unique id.
- `removeExam` deletes by id, preserving the rest.
- Each exam stores an optional subject tag and an ISO date.

### US-5.3 — Nearest upcoming exam countdown

**Priority:** Should · **Estimate:** S

**As** Sam, **I want** the countdown to target the closest upcoming exam, **so that**
the most urgent deadline is always in focus.

**Acceptance criteria**
- `nearestExamDays` returns whole calendar days (UTC) to the closest upcoming exam
  (examDay ≥ today).
- Past exams are ignored when a future exam exists.
- Returns null when nothing is upcoming.

### US-5.4 — Legacy exam date migration

**Priority:** Should · **Estimate:** S

**As** Riley, **I want** my old single-exam-date setting to keep working after an app
update, **so that** I don't lose my countdown.

**Acceptance criteria**
- Old localStorage payloads with `examDateIso` still deserialize.
- The legacy field migrates into the `exams` list on restore.
- The legacy countdown (`examCountdownDays`) remains available.

## Epic 6 — Persistence & Offline Recovery

### US-6.1 — Auto-save on every change

**Priority:** Must · **Estimate:** S

**As** Sam, **I want** my state to be saved automatically, **so that** I never lose
progress.

**Acceptance criteria**
- Every state mutation persists `AppState` to `localStorage` under `cramagotchi_state`.
- Serialization uses `kotlinx.serialization` JSON with unknown keys ignored.

### US-6.2 — Restore on boot

**Priority:** Must · **Estimate:** M

**As** Riley, **I want** my tasks, monster, XP, and exam date to reappear when I reopen
the app, **so that** I can pick up where I left off.

**Acceptance criteria**
- On load, state is deserialized from `localStorage`.
- If no saved state exists, a fresh initial state is created.

### US-6.3 — Evaluate elapsed offline time

**Priority:** Must · **Estimate:** S

**As** Riley, **I want** the monster's status to resolve correctly after I've been away,
**so that** a finished sleep cycle doesn't leave it stuck sleeping.

**Acceptance criteria**
- On restore, `evaluateTime(now)` runs immediately.
- If sleep timer expired while away, status resolves to IDLE (or HUNGRY if >24h).
- XP is preserved across the absence.

### US-6.4 — Unique task IDs after restore

**Priority:** Must · **Estimate:** S

**As** Riley, **I want** new tasks added after a restore to never collide with restored
task IDs, **so that** completions and deletions target the right task.

**Acceptance criteria**
- New task IDs are derived from the highest existing numeric suffix.
- No collisions occur even after a state restore.

## Epic 7 — Subject Colour Pills

### US-7.1 — Colour-coded subject badges

**Priority:** Should · **Estimate:** S

**As** Sam, **I want** each subject tag to get a consistent, distinct colour, **so that**
I can visually group tasks by subject at a glance.

**Acceptance criteria**
- Each subject tag maps deterministically to a hue (0–359).
- The same tag always yields the same hue.
- Different tags usually yield different hues.
- The hue is applied via a CSS custom property (`--subject-hue`).

## Epic 8 — Responsive Layout & Platforms

### US-8.1 — Mobile-first stacked layout

**Priority:** Must · **Estimate:** M

**As** Mia, **I want** a single-column stacked layout on small screens, **so that** the
app is usable on my phone.

**Acceptance criteria**
- Below 768px, panels stack vertically with the monster as a header card.

### US-8.2 — Desktop two-pane split

**Priority:** Must · **Estimate:** M

**As** Sam, **I want** a 60/40 split pane on desktop, **so that** the monster and
tasks are visible side by side.

**Acceptance criteria**
- At ≥768px, the layout splits into two panes (monster panel / task panel).

### US-8.3 — Run on web, desktop, and Android

**Priority:** Must · **Estimate:** L

**As** Sam, **I want** to use Cramagotchi in the browser, as a desktop app, or on
Android, **so that** it's available wherever I study.

**Acceptance criteria**
- The KMP shared logic compiles to js(IR)/wasmJs for the web app.
- A desktop app embeds the web app via a local server.
- An Android app hosts the shared logic.

## Out of Scope for v1 (Won't Have)

- No mini-games, cosmetic shops, or virtual currency.
- No health/happiness meters or pet death.
- No intrusive audio alerts or notifications.
- No multi-user accounts or cloud sync (local-only persistence).
- No task editing (only add/complete/delete).
- No manual timer controls (passive 25-minute cycle only).
---

## Follow-up Brainstorm (post-v1)

Ideas to explore once v1 ships. None are committed; listed for prioritisation.

### Product / UX
- **Task editing & reordering** — let users edit titles/tags/estimates and drag to reorder.
- **Multiple named monsters / profiles** — separate companions per subject or exam.
- **Streak tracking** — consecutive study days with a gentle, non-punitive streak (no reset shame).
- **Focus soundscapes** — optional ambient audio (opt-in, muted by default) during sleep blocks.
- **Dark mode** — theme toggle respecting system preference.
- **Accessibility pass** — keyboard navigation, screen-reader labels, reduced-motion support.
- **Onboarding tour** — first-run walkthrough explaining eat/sleep cycle.

### Gamification (still zero-punishment)
- **Evolution cosmetics (earned, not bought)** — stage-specific accessories unlocked by XP, no shop/currency.
- **Milestone celebrations** — subtle confetti/animation at 50/150/300 XP, no intrusive alerts.
- **Weekly recap** — summary of XP earned, tasks completed, accuracy of estimates.

### Data & Sync
- **Export/import state** — JSON download/upload for backup and device transfer.
- **Cloud sync (optional)** — opt-in account-based sync across devices (privacy-first).
- **Calendar integration** — pull exam dates from Google/Apple Calendar.

### Platform
- **PWA install** — offline-capable progressive web app with service worker.
- **iOS app** — KMP shared logic reused for a native iOS target.
- **Widgets** — home-screen widget showing monster status + next exam countdown.

### Analytics (privacy-respecting, local-first)
- **Study time insights** — per-subject time spent, estimate accuracy trends.
- **Hunger/feeding patterns** — gentle nudges based on 24h gaps, never guilt.

### Technical
- **Task recurrence / templates** — reusable task templates for recurring study routines.
- **Subtasks** — break a Meal into smaller Snack-sized steps.
- **Tag-based filtering & search** — filter active/devoured lists by subject.
- **Undo delete** — short undo window after deleting a task.
- **Automated tests expansion** — e2e (Playwright) for critical flows; visual regression.
