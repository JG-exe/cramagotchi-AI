import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MonsterStoreService, TaskWeight } from '../../services/monster-store.service';

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
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './task-queue.component.html',
  styleUrl: './task-queue.component.css',
})
export class TaskQueueComponent {
  readonly store = inject(MonsterStoreService);

  titleInput = signal('');
  weightInput = signal<TaskWeight>('SNACK');
  subjectInput = signal('');
  showDevoured = signal(false);

  onSubmit(): void {
    const title = this.titleInput().trim();
    if (!title) return;

    this.store.addTask(
      title,
      this.weightInput(),
      this.subjectInput().trim() || undefined
    );

    this.titleInput.set('');
    this.subjectInput.set('');
    this.weightInput.set('SNACK');
  }

  subjectHue(subjectTag: string): number {
    return subjectTagToHue(subjectTag);
  }

  toggleDevoured(): void {
    this.showDevoured.update(v => !v);
  }
}
