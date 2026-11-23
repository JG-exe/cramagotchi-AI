import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MonsterStoreService, ExamKind } from '../../services/monster-store.service';
import { DateMaskDirective } from '../../shared/date-mask.directive';

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

/**
 * Deadlines & Exams portfolio — lives above the Study Queue on the left
 * pane (mobile, web, desktop and Android all share this single layout).
 * Every dated item defaults to a plain DEADLINE and can be escalated —
 * never demoted blind — to a high-stakes EXAM from the same card.
 */
@Component({
  selector: 'app-exam-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, DateMaskDirective],
  templateUrl: './exam-portfolio.component.html',
  styleUrl: './exam-portfolio.component.css',
})
export class ExamPortfolioComponent {
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

  /** True when the nearest upcoming dated item is the high-stakes EXAM kind. */
  readonly nearestIsExam = computed(() => this.store.nearestUpcomingExam()?.kind === 'EXAM');

  /**
   * Opens the browser/WebView native date picker from a click gesture
   * (especially valuable on Android/mobile where typing is clumsy).
   * Engines without `showPicker()` (older desktop WebKit) ignore this
   * silently — the masked text input remains the fallback there.
   */
  openDatePicker(picker: HTMLInputElement | undefined, current: string): void {
    if (!picker) return;
    picker.value = current;
    try {
      (picker as HTMLInputElement & { showPicker?: () => void }).showPicker?.();
    } catch {
      // not a user gesture / unsupported engine — typed masked input still works
    }
  }

  /** Native picker → add form (picker always yields strict `YYYY-MM-DD`). */
  onPickedAddDate(iso: string, input: HTMLInputElement | undefined): void {
    if (!iso || !isValidIsoDate(iso)) return;
    this.examDateInput.set(iso);
    if (input) input.value = iso;
  }

  /** Native picker → inline edit form. */
  onPickedEditDate(iso: string, input: HTMLInputElement | undefined): void {
    if (!iso || !isValidIsoDate(iso)) return;
    this.editExamDate.set(iso);
    if (input) input.value = iso;
  }

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
