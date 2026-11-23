import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterStoreService, EvolutionStage, MonsterStatus } from '../../services/monster-store.service';

/** Level + flavour copy shown under the monster (per evolution stage). */
const STAGE_META: Record<EvolutionStage, { level: number; label: string; description: string }> = {
  EGG: {
    level: 1,
    label: 'Egg',
    description: 'Warm & speckled, absorbing quiet study vibes.',
  },
  HATCHLING: {
    level: 2,
    label: 'Hatchling',
    description: 'Sprouting curiosity with every completed snack.',
  },
  SCHOLAR: {
    level: 3,
    label: 'Scholar',
    description: 'Diligent reading companion with round spectacles.',
  },
  GRADUATED_BEAST: {
    level: 4,
    label: 'Graduated Beast',
    description: 'Calm master of focus and deep exam prep.',
  },
};

/** Playful, zero-pressure companion tone per machine status. */
const STATUS_TONE: Record<MonsterStatus, string> = {
  IDLE: 'Calm',
  EATING: 'Nomming',
  SLEEPING: 'Sleeping',
  HUNGRY: 'Peckish',
};

@Component({
  selector: 'app-monster-sanctuary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster-sanctuary.component.html',
  styleUrl: './monster-sanctuary.component.css',
})
export class MonsterSanctuaryComponent {
  readonly store = inject(MonsterStoreService);

  /** Lowercased evolution stage, used to pick the body symbol: #cram-body-… */
  readonly stageKey = computed(() => this.store.monster().stage.toLowerCase());

  /** Lowercased status, used to pick the face symbol: #cram-face-… */
  readonly statusKey = computed(() => this.store.monster().status.toLowerCase());

  /** Level + label for the current evolution stage. */
  readonly stageMeta = computed(() => STAGE_META[this.store.monster().stage]);

  /** Companion-tone label for the current status. */
  readonly statusTone = computed(() => STATUS_TONE[this.store.monster().status]);

  /** Live read of the remaining passive sleep block, in seconds.
   *  `dayTick()` re-evaluates this once per second while the tab is open. */
  readonly sleepRemainingSec = computed(() => {
    this.store.dayTick();
    const until = this.store.monster().sleepUntil;
    if (!until) return null;
    return Math.max(0, Math.round((until - Date.now()) / 1000));
  });

  /** MM:SS countdown for the sleep banner. */
  readonly sleepCountdown = computed(() => {
    const total = this.sleepRemainingSec();
    if (total === null) return null;
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  });
}
