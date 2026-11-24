import { TestBed } from '@angular/core/testing';
import { com } from '../assets/kmp/cramagotchi-shared-logic.js';
import { MonsterStoreService } from './services/monster-store.service';

/**
 * Restore-path specs for MonsterStoreService: loading a save must reconcile
 * legacy payloads through the engine's reconcileCollection — dropping
 * intermediate species cards (only fully evolved monsters stay in the
 * gallery), minting a permanent hue for hue-less monsters, and graduating
 * legacy saves stuck at the max stage — then persist the migration.
 */
describe('MonsterStoreService restore reconciliation', () => {
  const Storage = com.cramagotchi.storage.StorageRepository;

  /** Pre-2.2 save shape: no collection, no monster hue, mid-growth stage. */
  const legacyGrowth = JSON.stringify({
    tasks: [],
    monster: {
      name: 'Munch',
      xp: 200,
      stage: 'SCHOLAR',
      status: 'IDLE',
      lastFedAt: 1.7e12,
    },
    exams: [],
  });

  /** Legacy save whose XP filled before graduation existed: stuck at max. */
  const legacyStuckAtMax = JSON.stringify({
    tasks: [],
    monster: {
      name: 'Munch',
      xp: 340,
      stage: 'GRADUATED_BEAST',
      status: 'IDLE',
      lastFedAt: 1.7e12,
    },
    exams: [],
  });

  beforeEach(() => localStorage.clear());

  it('should keep a growing legacy monster intact and mint a persisted hue', () => {
    localStorage.setItem(Storage.STORAGE_KEY, legacyGrowth);

    const store = TestBed.inject(MonsterStoreService);

    expect(store.collection()).toEqual([]); // no fully-evolved captures yet
    expect(store.monster().stage).toBe('SCHOLAR');
    expect(store.monster().hue).toBeDefined();

    // The migration persists immediately, so a reload keeps the minted hue.
    const persisted = localStorage.getItem(Storage.STORAGE_KEY)!;
    const parsed = JSON.parse(persisted);
    expect(parsed.monster.hue).toBe(store.monster().hue);
  });

  it('should graduate a legacy save stuck at the max stage on load', () => {
    localStorage.setItem(Storage.STORAGE_KEY, legacyStuckAtMax);

    const store = TestBed.inject(MonsterStoreService);

    // The creature retires into the gallery and a fresh egg spawns.
    expect(store.collection().length).toBe(1);
    expect(store.collection()[0].speciesId).toBe('GRADUATED_BEAST');
    expect(store.monster().stage).toBe('EGG');
    expect(store.monster().xp).toBe(0);

    // The retirement persists, so a reload shows the same gallery + egg.
    const persisted = JSON.parse(localStorage.getItem(Storage.STORAGE_KEY)!);
    expect((persisted.collection ?? []).length).toBe(1);
    expect(persisted.monster.stage).toBe('EGG');
  });

  it('should leave an already-migrated save untouched apart from persistence', () => {
    // Fresh default save (empty gallery, tinted egg), seeded by the service.
    const store = TestBed.inject(MonsterStoreService);
    expect(store.collection()).toEqual([]);
    expect(store.monster().stage).toBe('EGG');
    expect(store.monster().hue).toBeDefined();
  });
});
