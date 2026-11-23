import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonsterStoreService } from '../../services/monster-store.service';

@Component({
  selector: 'app-monster-sanctuary',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
