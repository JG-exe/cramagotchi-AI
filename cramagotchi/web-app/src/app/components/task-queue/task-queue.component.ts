import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonsterStoreService, TaskWeight } from '../../services/monster-store.service';

@Component({
  selector: 'app-task-queue',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  toggleDevoured(): void {
    this.showDevoured.update(v => !v);
  }
}
