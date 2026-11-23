import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MonsterStoreService } from '../../services/monster-store.service';

export function subjectTagToHue(subjectTag: string): number {
  let hash = 0;
  for (let i = 0; i < subjectTag.length; i++) {
    hash = (hash * 31 + subjectTag.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 360;
}

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

  onAddExam(): void {
    const date = this.examDateInput();
    if (!date) return;
    this.store.addExam(this.examSubjectInput().trim() || null, date);
    this.examSubjectInput.set('');
    this.examDateInput.set('');
  }

  removeExam(examId: string): void {
    this.store.removeExam(examId);
  }

  subjectHue(subjectTag: string): number {
    return subjectTagToHue(subjectTag);
  }
}
