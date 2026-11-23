import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MonsterStoreService, TaskWeight } from '../../services/monster-store.service';
import { SlidingToggleComponent } from '../../shared/sliding-toggle.component';

/**
 * Deterministically maps a subject tag to a hue (0-359).
 * Same tag always yields the same colour; different tags usually differ.
 */
export function subjectHue(subjectTag: string): number {
  return subjectTagToHue(subjectTag);
}

function subjectTagToHue(subjectTag: string): number {
  let hash = 0;
  for (let i = 0; i < subjectTag.length; i++) {
    hash = (hash * 31 + subjectTag.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 360;
}

@Component({
  selector: 'app-task-queue',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SlidingToggleComponent,
  ],
  templateUrl: './task-queue.component.html',
  styleUrl: './task-queue.component.css',
})
export class TaskQueueComponent {
  readonly store = inject(MonsterStoreService);

  titleInput = signal('');
  weightInput = signal<TaskWeight>('SNACK');
  subjectInput = signal('');
  estimateInput = signal('');
  showDevoured = signal(false);

  /** Add form's sliding Snack/Meal toggle. */
  onWeightToggle(side: 'left' | 'right'): void {
    this.weightInput.set(side === 'right' ? 'MEAL' : 'SNACK');
  }

  /** Inline edit form's sliding Snack/Meal toggle. */
  onEditWeightToggle(side: 'left' | 'right'): void {
    this.editWeight.set(side === 'right' ? 'MEAL' : 'SNACK');
  }

  /** Actual minutes spent, keyed by task id — user-recorded per task. */
  actualMinutes: Record<string, string> = {};

  /** Which active task is currently being edited (id), if any. */
  editingTaskId = signal<string | null>(null);
  editTitle = signal('');
  editSubject = signal('');
  editEstimate = signal('');
  editWeight = signal<TaskWeight>('SNACK');

  /** Open the inline edit form for one active task card. */
  startEditTask(taskId: string): void {
    const task = this.store.activeTasks().find(t => t.id === taskId);
    if (!task) return;
    this.editingTaskId.set(taskId);
    this.editTitle.set(task.title);
    this.editSubject.set(task.subjectTag ?? '');
    this.editEstimate.set(task.estimatedMinutes != null ? String(task.estimatedMinutes) : '');
    this.editWeight.set(task.weight);
  }

  cancelEditTask(): void {
    this.editingTaskId.set(null);
  }

  /**
   * Persist the task edit. The title is required (blank input aborts, the
   * old task is kept); the estimate must be a positive number if supplied —
   * the same invalid-input rules as the add form.
   */
  saveEditTask(): void {
    const taskId = this.editingTaskId();
    if (!taskId) return;

    const title = this.editTitle().trim();
    if (!title) return;

    const estimate = Number(this.editEstimate());
    const validEstimate = Number.isFinite(estimate) && estimate > 0 ? estimate : null;

    this.store.updateTask(
      taskId,
      title,
      this.editWeight(),
      this.editSubject().trim() || null,
      validEstimate
    );
    this.editingTaskId.set(null);
  }

  onSubmit(): void {
    const title = this.titleInput().trim();
    if (!title) return;

    const estimate = Number(this.estimateInput());
    this.store.addTask(
      title,
      this.weightInput(),
      this.subjectInput().trim() || undefined,
      Number.isFinite(estimate) && estimate > 0 ? estimate : undefined
    );

    this.titleInput.set('');
    this.subjectInput.set('');
    this.estimateInput.set('');
    this.weightInput.set('SNACK');
  }

  /** Complete a task, passing the minutes the user recorded for it. */
  complete(taskId: string): void {
    const recorded = Number(this.actualMinutes[taskId]);
    const actual = Number.isFinite(recorded) && recorded > 0 ? recorded : null;
    this.store.completeTaskWithTime(taskId, actual);
  }

  subjectHue(subjectTag: string): number {
    return subjectTagToHue(subjectTag);
  }

  toggleDevoured(): void {
    this.showDevoured.update(v => !v);
  }
}
