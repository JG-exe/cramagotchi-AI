# Cramagotchi

A zero-punishment study companion: feed a virtual monster by completing study
tasks, powered by a Kotlin Multiplatform engine shared across web, desktop and
Android. Rewards are gamified with time estimates, accuracy bonuses and a
little randomness — and never take anything away from the player.

This project explores agentic development.

Latest release: **v2.2.0** (`main`). Development happens on `dev` and reaches
`main` through review-gated pull requests.

In case the repo isn't updated, try: [personal github(jg-exe)](https://github.com/JG-exe/cramagotchi-AI)

To try out the web version of the app: [Cramagotchi web view](https://cramagotchi-pages.arch-box.net/)

## Up & running (optional) 🏃‍➡️

Prerequisites:

- Node.js 20+ and npm
- JDK 21 (`java -version` should match; set `JAVA_HOME="C:/Program Files/Java/jdk-21.0.10"` on Windows if needed)

Web (from the `cramagotchi/` directory):

```bash
npm install
npx ng serve        # http://localhost:4200
```

Desktop (JavaFX WebView shell embedding the compiled Angular bundle):

```bash
cd cramagotchi
./gradlew :desktopApp:installDist
./desktopApp/build/install/desktopApp/bin/desktopApp      # Windows: desktopApp.bat
```

Desktop with hot reload — point the shell at the Angular dev server:

```bash
npx ng serve        # terminal 1
CRAMAGOTCHI_DEV_SERVER_URL=http://localhost:4200/ ./gradlew :desktopApp:run   # terminal 2
```

Kotlin engine changes need a re-sync before the web bundle picks them up:

```bash
./gradlew :shared-logic:syncJsToSharedApp
```

Android debug APK:

```bash
./gradlew :androidApp:assembleDebug
# cramagotchi/androidApp/build/outputs/apk/debug/
```

Tests:

```bash
./gradlew :shared-logic:allTests   # Kotlin suites, all platform targets
npx ng test --watch=false          # Angular vitest suites
```

## Features

- Task queue with snack/meal sizing, optional subject tags (deterministic per-subject colour pills) and a collapsible "devoured" history.
- Optional time estimates on tasks; recording the actual time spent and landing within 25% of the estimate grants a +50% XP accuracy bonus — but wrong estimates never cost anything (zero-punishment).
- XP rewards are slightly variable (about 85-115% of base) and the exact amount is hidden until the task completes; the UI only shows approximations beforehand.
- Multiple exams and deadlines: track a portfolio, with the countdown banner following the nearest upcoming deadline. Deadline chips can be finished early for bonus XP; study tasks must be finished on the card. Older single-exam save files migrate automatically.
- Task and exam management: edit entries, form-level validation with field warnings, date masking with a native date picker (plus a fallback calendar for the desktop WebView), and sliding toggle switches.
- Collectible monsters: completing an exam awards a collectible with a random hue, and graduating the max-level monster starts a fresh egg — endless progress.
- Monster art & motion: single line-art SVG system (per-stage body symbols + status faces) with grounded, shared animations.
- Feeding state machine: completing a task triggers EATING, then a 25-minute SLEEPING focus lock ("Digesting peacefully..."), then IDLE. XP never decays and hunger never kills anything.
- Evolution at 50/150/300 XP: EGG → HATCHLING → SCHOLAR → GRADUATED_BEAST.

## Architecture

All business logic lives in a pure Kotlin Multiplatform state machine
(`shared-logic`), compiled for js(IR), wasmJs, JVM and Android. The Angular
(Material/Signals) UI in `shared-app` is a thin layer over the compiled KMP JS
module and is consumed unmodified by three shells:

| Directory | Role |
|---|---|
| `cramagotchi/shared-logic` | KMP engine + serialization storage adapter |
| `cramagotchi/shared-app` | all Angular components, services, CSS token system |
| `cramagotchi/web-app` | browser shell (tsconfigs) |
| `cramagotchi/desktopApp` | JavaFX 23 WebView shell + embedded loopback HTTP server (persistent localStorage via userDataDirectory) |
| `cramagotchi/androidApp` | Android WebView shell (WebViewAssetLoader), R8-minified release build |

The compiled KMP bundle is vendored into `shared-app/src/assets/kmp` with its
generated TypeScript definitions. One bundle, three platforms, one behaviour.

## Sources 🗃️

- agents.md setup and defining the project: [gemini](https://share.gemini.google/pH1UTPTy4APD)
- further setup for md files: [gemini](https://share.gemini.google/LhrH7Tx3mXLS)
