import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MonsterStoreService } from '../../services/monster-store.service';

@Component({
  selector: 'app-monster-sanctuary',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './monster-sanctuary.component.html',
  styleUrl: './monster-sanctuary.component.css',
})
export class MonsterSanctuaryComponent {
  readonly store = inject(MonsterStoreService);

  onExamDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.store.setExamDate(input.value || null);
  }
}
