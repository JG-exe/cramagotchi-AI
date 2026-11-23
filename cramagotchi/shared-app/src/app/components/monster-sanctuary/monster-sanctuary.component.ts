import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MonsterStoreService, EvolutionStage, MonsterStatus, ExamKind } from '../../services/monster-store.service';

export function subjectTagToHue(subjectTag: string): number {
  let hash = 0;
  for (let i = 0; i < subjectTag.length; i++) {
    hash = (hash * 31 + subjectTag.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 360;
}

/** Strict `YYYY-MM-DD` + real-calendar-day check (no 2026-02-30 leaks). */
export function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  if (month < 1 || month > 12 || day < 1) return false;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return day <= daysInMonth;
}

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
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './monster-sanctuary.component.html',
  styleUrl: './monster-sanctuary.component.css',
})
export class MonsterSanctuaryComponent {
  readonly store = inject(MonsterStoreService);

  examSubjectInput = signal('');
  examDateInput = signal('');
  /** Every dated item starts as a plain deadline; escalate to EXAM explicitly. */
  examKindInput = signal<ExamKind>('DEADLINE');

  /** Which exam/deadline chip is currently being edited (id), if any. */
  editingExamId = signal<string | null>(null);
  editExamSubject = signal('');
  editExamDate = signal('');
  editExamKind = signal<ExamKind>('DEADLINE');

  /** Lowercased evolution stage, used to pick the body symbol: #cram-body-… */
  readonly stageKey = computed(() => this.store.monster().stage.toLowerCase());

  /** Lowercased status, used to pick the face symbol: #cram-face-… */
  readonly statusKey = computed(() => this.store.monster().status.toLowerCase());

  /** Level + label for the current evolution stage. */
  readonly stageMeta = computed(() => STAGE_META[this.store.monster().stage]);

  /** True when the nearest upcoming dated item is the high-stakes EXAM kind. */
  readonly nearestIsExam = computed(() => this.store.nearestUpcomingExam()?.kind === 'EXAM');

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

  onAddExam(): void {
    const date = this.examDateInput();
    // Empty submissions are ignored, and only a well-formed calendar date
    // reaches the engine (which stores dateIso verbatim).
    if (!date || !isValidIsoDate(date)) return;
    this.store.addExam(this.examSubjectInput().trim() || null, date, this.examKindInput());
    this.examSubjectInput.set('');
    this.examDateInput.set('');
    this.examKindInput.set('DEADLINE');
  }

  removeExam(examId: string): void {
    this.store.removeExam(examId);
  }

  /** Open the inline edit form for one exam/deadline chip. */
  startEditExam(examId: string): void {
    const exam = this.store.exams().find(e => e.id === examId);
    if (!exam) return;
    this.editingExamId.set(examId);
    this.editExamSubject.set(exam.subjectTag ?? '');
    this.editExamDate.set(exam.dateIso);
    this.editExamKind.set(exam.kind ?? 'DEADLINE');
  }

  cancelEditExam(): void {
    this.editingExamId.set(null);
  }

  /** Persist the chip edit — only a valid calendar date reaches the engine. */
  saveEditExam(): void {
    const examId = this.editingExamId();
    if (!examId) return;
    const date = this.editExamDate();
    if (!date || !isValidIsoDate(date)) return;
    this.store.updateExam(examId, this.editExamSubject().trim() || null, date, this.editExamKind());
    this.editingExamId.set(null);
  }

  subjectHue(subjectTag: string): number {
    return subjectTagToHue(subjectTag);
  }
}
