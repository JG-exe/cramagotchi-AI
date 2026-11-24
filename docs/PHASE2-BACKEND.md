# Phase 2 Plan — Backend & Friend Codes

Status: planning (out of current scope). Decisions below are locked by the owner;
implementation happens in a later phase via the normal `feat/*` workflow.

## Locked decisions

1. **Share collections only.** The public snapshot contains retired monsters (`CollectedMonster`)
   and a light current-monster descriptor (`stage`, `hue`). No XP, no awardedXp, no stats,
   no leaderboard — ever. Comparison is celebration, not competition.
2. **Sync points are boot and monster graduation.** The server is a display mirror,
   not the source of truth:
   - Push a full snapshot on app boot (any platform).
   - Push again when the engine graduates the active monster (a new entry enters
     `AppState.collection` — detected by the store as a collection-length change).
   - Between sync points the server may lag. This is accepted by design.
3. **No anti-cheat, no server-side validation beyond schema shape.** If someone wants
   to fake a collection, that is their issue.
4. **Display names:** free text, unmoderated — including profanity. No filtering.

## Backend choice

**Ktor (Kotlin) + Postgres, self-hosted** (small VPS, Render, or Fly.io).

Why not Supabase/Firebase: DTOs would have to be re-declared in TypeScript and we
would lose model sharing with the existing KMP module. Ktor lets us put
`@Serializable` request/response types in a shared module consumed by the web app,
`androidApp`, and `desktopApp` alike.

The server never runs game logic. `CramagotchiEngine` stays client-side, pure, and
deterministic; the backend is a dumb, mostly-anonymous snapshot store.

## Data model

Two tables:

- `players` — `code` (PK, 6–8 chars Crockford base32), `device_token`,
  `display_name`, `current_stage`, `current_hue`, `collection_json`, `updated_at`.
- `friend_links` — `owner_code`, `friend_code` (one-way: you see them).

`collection_json` stores the raw list of `CollectedMonster` blobs — no relational
parsing server-side, since the server does not understand game semantics.

## API

- `POST /players` — generate + return a friend code and a device token
  (private; guards writes).
- `PUT /players/{code}` — upload snapshot (auth: device token). Body is the DTO below.
- `GET /players/{code}` — read a snapshot. No auth: knowing a friend code is the grant.
- `PUT /players/{code}/friends` — add a friend code. The compare view fetches each
  friend with GET and caching results in localStorage for offline viewing.
  Fetch trigger (on view open, manual refresh button, or both) — undecided at
  implementation time.

No accounts, no passwords, no email. The code is the identity; the device token only
prevents strangers from overwriting someone's snapshot.

## Shared DTO module

New `shared-network` Gradle module (or an extension of `shared-logic`) holding:

```kotlin
@Serializable
data class PlayerSnapshot(
    val code: String,
    val displayName: String,
    val currentStage: String,   // EvolutionStage name
    val currentHue: Int,
    val collection: List<CollectedMonster>,  // reused from Models.kt as-is
    val updatedAt: Double
)
```

Ktor clients are wired per target (web/Android/desktop) in a thin platform layer;
`MonsterStoreService` remains the single SSR-ish gateway the UI talks to.

## Client changes

- Storage stays exactly as it is today: the local save is the truth of play state.
- One new store effect: after any state mutation, if `collection.size` increased since
  the last push, queue a snapshot push. Push also runs once on boot after the
  offline-recovery evaluation completes.
- Friends data lives in a separate small cache, never merged into `AppState`.
- UI (Angular): "My code" card, "Add friend" form, friends-compare gallery reusing the
  existing collection gallery rendering.
- Offline-first: the app must keep working fully if the server is unreachable;
  sync failures are silent and retried at the next sync point.

## Milestones (feature branches off `dev`, review-gated per agents.md)

1. `feat/collection-sharing-domain` — KMP snapshot codegen + engine/store support
   (`commonTest` first, human review pause before implementing).
2. `feat/backend` — Ktor server, schema, endpoints, integration tests; deployment target
   decided at implementation time (Render default).
3. `feat/shared-network` — Ktor client module + DTO sharing across all three app targets.
4. `feat/friends-ui` — Angular compare gallery and friend-code UI.

## Cheap future-proofing for the current scope (do before phase 2)

- Add `schemaVersion: Int = 1` to `AppState` with a migration hook, so two copies
  (local save vs. server payload shape) can diverge safely later.
- Nothing else in the current scope depends on the backend.

## Open question (settle at implementation time)

One-way vs mutual friend links: planned one-way (simpler data, mutual can be layered on).
