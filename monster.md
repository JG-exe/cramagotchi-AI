# Cramagotchi SVG Motion & Behaviour Specification

## 1. Core Architectural Approach
All monster motion is achieved through a **single inline `<svg>`** paired with declarative CSS `@keyframes` and Angular Signal-driven state classes—avoiding external SVG files, JavaScript animation loops (`requestAnimationFrame`), or heavy animation libraries.

- **Single Origin Anchor:** All body transformations pivot from the monster's base (`transform-origin` anchored at the bottom-centre ground contact point) so the creature remains grounded on its ambient shadow rather than floating awkwardly in space.
- **State-to-Class Binding:** Angular Signals map the current domain `MonsterStatus` (`IDLE`, `EATING`, `SLEEPING`, `HUNGRY`) directly to a root CSS modifier class on the SVG container, triggering seamless transitions without DOM teardown.
- **Calm Study Calibration:** Motion uses soft cubic-bezier easing and slow, organic rhythms designed to feel alive in the user's peripheral vision without pulling focus away from study material.

---

## 2. State Motion Matrix (When & How It Moves)

| Status | Trigger Condition | Visual Movement | Mechanical Execution |
| :--- | :--- | :--- | :--- |
| **`IDLE`** | Default resting state when fed within 24 hours and not actively digesting. | **Gentle Breathing:** A slow, subtle vertical rise paired with a slight outward expansion, mimicking calm resting respiration. | Continuous `breathe` keyframe loop over a long cycle (`~4.2s`) applying subtle vertical translation and uniform scale (`1.0` to `1.025`). |
| **`EATING`** | Triggered immediately when the student completes any study task (`SNACK` or `MEAL`); lasts exactly **3 seconds**. | **Playful Chomp:** A rhythmic squash-and-stretch bounce where the body widens slightly as it compresses downward, paired with happy curved eyes and an open mouth. | Fast, bouncy `chomp` keyframe loop (`~360ms`) alternating vertical compression (`scaleY(0.92)`) with horizontal expansion (`scaleX(1.04)`), layered over swapped facial vector paths. |
| **`SLEEPING`** | Automatically follows `EATING` after 3 seconds; lasts **25 minutes** as a passive Pomodoro study timer (remains uninterrupted if extra tasks are completed). | **Deep Slumber & Drifting Z's:** Overall silhouette dims slightly while performing an extra-slow, heavy breath; two lowercase `z` glyphs drift diagonally upward and fade out in staggered waves. | `breathe` loop slowed by `1.4x` with reduced group opacity (`0.9`), combined with staggered `floatZzz` keyframes translating two text elements upward and rightward while fading opacity from `0` to `0.85` and back to `0`. |
| **`HUNGRY`** | Triggered if more than **24 hours** elapse since the last completed task (`lastFedAt`); carries zero XP penalty. | **Soft Tummy Rumble:** A gentle, non-alarming horizontal quiver accompanied by upturned worried brows and a wavy mouth. | Short `rumble` keyframe loop (`~180ms`) oscillating horizontal translation (`-2px` to `+2px`) so it reads as a soft nudge rather than an urgent alert. |

---

## 3. Evolution & Stage Adaptation
- **Morphological Scaling:** As cumulative XP crosses evolution thresholds (`EGG` $\rightarrow$ `HATCHLING` $\rightarrow$ `SCHOLAR` $\rightarrow$ `GRADUATED_BEAST`), the internal body `<path>` and stage accessories swap inside the same grouped `<g>` wrapper.
- **Inherited Motion:** Because keyframe animations target the parent body group rather than individual paths, every evolution stage automatically inherits the exact same `IDLE`, `EATING`, `SLEEPING`, and `HUNGRY` physics without duplicating animation definitions.
- **Tonal Transitions:** Stage progressions smoothly interpolate the silhouette's computed CSS fill tint (`transition` on `fill` over `360ms`) while keeping the warm espresso line-art stroke constant[cite: 1].