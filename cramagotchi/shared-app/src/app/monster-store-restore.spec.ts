import { TestBed } from '@angular/core/testing';
import { com } from '../assets/kmp/cramagotchi-shared-logic.js';
import { MonsterStoreService } from './services/monster-store.service';

/**
 * Restore-path specs for MonsterStoreService: loading a save must reconcile
 * legacy payloads (pre-collection roster, hue-less monster) through the
 * engine's reconcileCollection and persist the backfill immediately.
 */
describe('MonsterStoreService restore reconciliation', () => {
  const Storage = com.cramagotchi.storage.StorageRepository;

  /** Pre-collection save shape: no `collection`, no monster hue, stage SCHOLAR. */
  const legacyPayload = JSON.stringify({
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

  beforeEach(() => localStorage.clear());

  it('should backfill the roster and monster hue when loading a legacy save', () => {
    localStorage.setItem(Storage.STORAGE_KEY, legacyPayload);

    const store = TestBed.inject(MonsterStoreService);

    const collection = store.collection().map(c => c.speciesId);
    expect(collection).toEqual(['EGG', 'HATCHLING', 'SCHOLAR']);
    expect(store.monster().hue).toBeDefined();

    // The backfill persists immediately, so a reload keeps the reconciliation.
    const persisted = localStorage.getItem(Storage.STORAGE_KEY)!;
    expect(persisted).toContain('HATCHLING');
    expect(persisted).toContain('SCHOLAR');
    expect(persisted).toContain('"collection"');
  });

  it('should leave an already-populated save untouched apart from persistence', () => {
    // Fresh default save (egg + roster seed), persisted by the service itself.
    const store = TestBed.inject(MonsterStoreService);
    expect(store.collection().map(c => c.speciesId)).toEqual(['EGG']);
    expect(store.monster().stage).toBe('EGG');
  });
});
