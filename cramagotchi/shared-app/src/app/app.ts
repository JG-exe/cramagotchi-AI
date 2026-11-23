import { Component, inject } from '@angular/core';
import { MonsterStoreService } from './services/monster-store.service';
import { ExamPortfolioComponent } from './components/exam-portfolio/exam-portfolio.component';
import { TaskQueueComponent } from './components/task-queue/task-queue.component';
import { MonsterSanctuaryComponent } from './components/monster-sanctuary/monster-sanctuary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExamPortfolioComponent, TaskQueueComponent, MonsterSanctuaryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly store = inject(MonsterStoreService);
}
