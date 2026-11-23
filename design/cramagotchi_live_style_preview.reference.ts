import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  OnDestroy,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type TaskWeight = 'SNACK' | 'MEAL';
type MonsterStatus = 'IDLE' | 'HUNGRY' | 'EATING' | 'SLEEPING';
type EvolutionStage = 'EGG' | 'HATCHLING' | 'SCHOLAR' | 'GRADUATED_BEAST';

interface StudyTask {
  id: string;
  title: string;
  subjectTag: string | null;
  weight: TaskWeight;
  completed: boolean;
  createdAt: number;
  completedAt: number | null;
}

interface StageMeta {
  id: EvolutionStage;
  label: string;
  level: number;
  minXp: number;
  nextXp: number | null;
  description: string;
}

const STAGES: Record<EvolutionStage, StageMeta> = {
  EGG: {
    id: 'EGG',
    label: 'Egg',
    level: 1,
    minXp: 0,
    nextXp: 50,
    description: 'Warm & speckled, absorbing quiet study vibes.',
  },
  HATCHLING: {
    id: 'HATCHLING',
    label: 'Hatchling',
    level: 2,
    minXp: 50,
    nextXp: 150,
    description: 'Sprouting curiosity with every completed snack.',
  },
  SCHOLAR: {
    id: 'SCHOLAR',
    label: 'Scholar',
    level: 3,
    minXp: 150,
    nextXp: 300,
    description: 'Diligent reading companion with wire spectacles.',
  },
  GRADUATED_BEAST: {
    id: 'GRADUATED_BEAST',
    label: 'Graduated Beast',
    level: 4,
    minXp: 300,
    nextXp: null,
    description: 'Calm master of focus and deep exam prep.',
  },
};

const STAGE_LIST: StageMeta[] = [
  STAGES.EGG,
  STAGES.HATCHLING,
  STAGES.SCHOLAR,
  STAGES.GRADUATED_BEAST,
];

const STATUS_LIST: { id: MonsterStatus; label: string }[] = [
  { id: 'IDLE', label: 'Idle' },
  { id: 'EATING', label: 'Eating' },
  { id: 'SLEEPING', label: 'Sleeping' },
  { id: 'HUNGRY', label: 'Hungry' },
];

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

      :host {
        /* Base Neutrals (Warm Cream & Espresso — Zero Blue) */
        --color-cream-base: #FAF6F0;
        --color-surface-elevated: #FFFDF9;
        --color-espresso-dark: #2C221E;
        --color-espresso-muted: #6E5D55;

        /* Base Accents (Botanical & Warm Earth) */
        --color-sage-base: #6E9E7B;
        --color-ochre-base: #D69749;
        --color-terracotta-base: #D97757;
        --color-moss-sleep: #84A590;
        --color-rose-clay: #C97B7D;
        --color-plum-taupe: #9E7B8F;

        /* Semantic Assignments */
        --color-bg-primary: var(--color-cream-base);
        --color-surface: var(--color-surface-elevated);
        --color-surface-recessed: color-mix(
          in srgb,
          var(--color-espresso-dark) 4%,
          var(--color-cream-base)
        );
        --color-text-primary: var(--color-espresso-dark);
        --color-text-muted: var(--color-espresso-muted);

        --color-accent-meal: var(--color-sage-base);
        --color-accent-snack: var(--color-ochre-base);
        --color-status-hungry: var(--color-terracotta-base);
        --color-status-sleep: var(--color-moss-sleep);

        /* Computed Borders & Soft Diffusion Shadows */
        --color-border-subtle: color-mix(in srgb, var(--color-espresso-dark) 8%, transparent);
        --shadow-diffuse-sm: 0 4px 14px -2px
          color-mix(in srgb, var(--color-espresso-dark) 6%, transparent);
        --shadow-diffuse-md: 0 12px 32px -6px rgba(44, 34, 30, 0.09);

        /* Computed Subject Tag Pill Tokens */
        --tag-sage-bg: color-mix(in srgb, var(--color-sage-base) 14%, var(--color-surface-elevated));
        --tag-sage-fg: color-mix(in srgb, var(--color-sage-base) 70%, var(--color-espresso-dark));

        --tag-ochre-bg: color-mix(
          in srgb,
          var(--color-ochre-base) 14%,
          var(--color-surface-elevated)
        );
        --tag-ochre-fg: color-mix(in srgb, var(--color-ochre-base) 65%, var(--color-espresso-dark));

        --tag-rose-bg: color-mix(in srgb, var(--color-rose-clay) 14%, var(--color-surface-elevated));
        --tag-rose-fg: color-mix(in srgb, var(--color-rose-clay) 70%, var(--color-espresso-dark));

        --tag-plum-bg: color-mix(
          in srgb,
          var(--color-plum-taupe) 14%,
          var(--color-surface-elevated)
        );
        --tag-plum-fg: color-mix(in srgb, var(--color-plum-taupe) 70%, var(--color-espresso-dark));

        /* Distances & Typography */
        --space-2xs: 0.25rem;
        --space-xs: 0.5rem;
        --space-sm: 0.75rem;
        --space-md: 1rem;
        --space-lg: 1.5rem;
        --space-xl: 2rem;

        --radius-sm: 8px;
        --radius-md: 16px;
        --radius-lg: 24px;
        --radius-pill: 9999px;

        --font-sans: 'Quicksand', system-ui, -apple-system, sans-serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;

        --duration-fast: 180ms;
        --duration-normal: 360ms;
        --duration-breathe: 4200ms;
        --ease-soft: cubic-bezier(0.25, 0.8, 0.25, 1);

        display: block;
        min-height: 100vh;
        background-color: var(--color-bg-primary);
        color: var(--color-text-primary);
        font-family: var(--font-sans);
        -webkit-font-smoothing: antialiased;
      }

      /* Keyframe Animations */
      @keyframes breathe {
        0%,
        100% {
          transform: scale(1) translateY(0);
        }
        50% {
          transform: scale(1.022) translateY(-3px);
        }
      }

      @keyframes rumble {
        0%,
        100% {
          transform: translateX(0);
        }
        25% {
          transform: translateX(-2px);
        }
        75% {
          transform: translateX(2px);
        }
      }

      @keyframes chomp {
        0%,
        100% {
          transform: scaleY(1) scaleX(1);
        }
        50% {
          transform: scaleY(0.93) scaleX(1.035);
        }
      }

      @keyframes floatZzz {
        0% {
          opacity: 0;
          transform: translate(0, 4px) scale(0.85);
        }
        50% {
          opacity: 0.85;
        }
        100% {
          opacity: 0;
          transform: translate(8px, -14px) scale(1.05);
        }
      }

      .anim-breathe {
        transform-origin: 110px 155px;
        animation: breathe var(--duration-breathe) var(--ease-soft) infinite;
      }

      .anim-chomp {
        transform-origin: 110px 155px;
        animation: chomp 520ms var(--ease-soft) infinite;
      }

      .anim-rumble {
        transform-origin: 110px 155px;
        animation: rumble 650ms var(--ease-soft) infinite;
      }

      .anim-sleep {
        opacity: 0.92;
        transform-origin: 110px 155px;
        animation: breathe 5600ms var(--ease-soft) infinite;
      }

      .zzz-1 {
        animation: floatZzz 2800ms ease-in-out infinite;
      }

      .zzz-2 {
        animation: floatZzz 2800ms ease-in-out 1100ms infinite;
      }

      /* Layout Shell */
      .app-shell {
        max-width: 1080px;
        margin: 0 auto;
        padding: var(--space-lg) var(--space-md) var(--space-xl);
      }

      @media (min-width: 768px) {
        .app-shell {
          padding: var(--space-xl) var(--space-lg);
        }
      }

      .top-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
        margin-bottom: var(--space-lg);
      }

      .brand-group {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
      }

      .brand-title {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--color-text-primary);
        margin: 0;
      }

      .brand-subtitle {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-text-muted);
        margin: 0;
      }

      .exam-pill {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        background: var(--color-surface);
        padding: 0.45rem 0.9rem;
        border-radius: var(--radius-pill);
        box-shadow: var(--shadow-diffuse-sm);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }

      .exam-pill strong {
        color: var(--color-text-primary);
        font-weight: 700;
      }

      /* Responsive Two-Pane Grid (Mobile Stacked -> Desktop 60/40 Split) */
      .workspace-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-lg);
        align-items: start;
      }

      @media (min-width: 768px) {
        .workspace-grid {
          grid-template-columns: 1.45fr 1fr;
          gap: var(--space-xl);
        }
      }

      /* Mobile ordering: Sanctuary card on top on mobile, right column on desktop */
      .sanctuary-column {
        order: -1;
      }

      @media (min-width: 768px) {
        .sanctuary-column {
          order: 1;
          position: sticky;
          top: var(--space-lg);
        }
      }

      /* Surface Cards */
      .soft-card {
        background: var(--color-surface);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-diffuse-md);
        padding: var(--space-lg);
        transition: box-shadow var(--duration-normal) var(--ease-soft);
      }

      /* Sanctuary Styling */
      .sanctuary-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
        margin-bottom: var(--space-sm);
      }

      .monster-name-block h2 {
        font-size: 1.35rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
      }

      .monster-stage-sub {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.35rem 0.8rem;
        border-radius: var(--radius-pill);
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        transition: all var(--duration-normal) var(--ease-soft);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .status-IDLE {
        background: color-mix(in srgb, var(--color-sage-base) 14%, var(--color-surface));
        color: color-mix(in srgb, var(--color-sage-base) 72%, var(--color-espresso-dark));
      }
      .status-IDLE .status-dot {
        background: var(--color-sage-base);
      }

      .status-EATING {
        background: color-mix(in srgb, var(--color-ochre-base) 16%, var(--color-surface));
        color: color-mix(in srgb, var(--color-ochre-base) 68%, var(--color-espresso-dark));
      }
      .status-EATING .status-dot {
        background: var(--color-ochre-base);
      }

      .status-SLEEPING {
        background: color-mix(in srgb, var(--color-moss-sleep) 18%, var(--color-surface));
        color: color-mix(in srgb, var(--color-moss-sleep) 70%, var(--color-espresso-dark));
      }
      .status-SLEEPING .status-dot {
        background: var(--color-moss-sleep);
      }

      .status-HUNGRY {
        background: color-mix(in srgb, var(--color-terracotta-base) 15%, var(--color-surface));
        color: color-mix(in srgb, var(--color-terracotta-base) 72%, var(--color-espresso-dark));
      }
      .status-HUNGRY .status-dot {
        background: var(--color-terracotta-base);
      }

      /* Monster Canvas Stage */
      .monster-stage-arena {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--color-surface-recessed);
        border-radius: var(--radius-md);
        padding: var(--space-md);
        margin: var(--space-md) 0;
      }

      .monster-svg {
        width: 196px;
        height: 196px;
        overflow: visible;
      }

      .stage-caption {
        font-size: 0.82rem;
        font-weight: 500;
        color: var(--color-text-muted);
        text-align: center;
        margin: 0.25rem 0 0;
      }

      /* Sleep Banner (Anti-Distraction Passive Pomodoro) */
      .sleep-banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
        background: color-mix(in srgb, var(--color-moss-sleep) 15%, var(--color-surface));
        color: color-mix(in srgb, var(--color-moss-sleep) 65%, var(--color-espresso-dark));
        padding: 0.7rem 1rem;
        border-radius: var(--radius-md);
        margin-bottom: var(--space-md);
        font-size: 0.86rem;
        font-weight: 600;
      }

      .sleep-timer-mono {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        font-weight: 700;
        background: var(--color-surface);
        padding: 0.2rem 0.55rem;
        border-radius: var(--radius-pill);
        box-shadow: var(--shadow-diffuse-sm);
      }

      /* XP Progress Bar */
      .xp-section {
        margin-bottom: var(--space-md);
      }

      .xp-labels {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
        margin-bottom: 0.4rem;
      }

      .xp-labels strong {
        color: var(--color-text-primary);
        font-weight: 700;
      }

      .xp-track {
        width: 100%;
        height: 10px;
        border-radius: var(--radius-pill);
        background: color-mix(in srgb, var(--color-sage-base) 16%, transparent);
        overflow: hidden;
      }

      .xp-fill {
        height: 100%;
        border-radius: var(--radius-pill);
        background: var(--color-sage-base);
        transition: width var(--duration-normal) var(--ease-soft);
      }

      /* Interactive Preview Switchers */
      .preview-controls {
        border-top: 1px solid var(--color-border-subtle);
        padding-top: var(--space-md);
        margin-top: var(--space-sm);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      .control-row-label {
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--color-text-muted);
        margin-bottom: 0.3rem;
        display: block;
      }

      .pill-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
      }

      .switch-pill {
        appearance: none;
        border: none;
        background: var(--color-surface-recessed);
        color: var(--color-text-muted);
        font-family: var(--font-sans);
        font-size: 0.78rem;
        font-weight: 600;
        padding: 0.35rem 0.7rem;
        border-radius: var(--radius-pill);
        cursor: pointer;
        transition: all var(--duration-fast) var(--ease-soft);
      }

      .switch-pill:hover {
        background: color-mix(in srgb, var(--color-espresso-dark) 8%, var(--color-cream-base));
        color: var(--color-text-primary);
      }

      .switch-pill.active {
        background: var(--color-espresso-dark);
        color: var(--color-surface-elevated);
        box-shadow: var(--shadow-diffuse-sm);
      }

      /* Task Queue Section */
      .queue-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-md);
      }

      .queue-header h2 {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
      }

      .task-count-badge {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-text-muted);
        background: var(--color-surface-recessed);
        padding: 0.25rem 0.7rem;
        border-radius: var(--radius-pill);
      }

      /* Add Task Form */
      .add-task-form {
        background: var(--color-surface);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-diffuse-md);
        padding: var(--space-md);
        margin-bottom: var(--space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      .input-row {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      @media (min-width: 560px) {
        .input-row {
          flex-direction: row;
        }
      }

      .soft-input {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-primary);
        background: var(--color-surface-recessed);
        border: 1.5px solid transparent;
        border-radius: var(--radius-md);
        padding: 0.7rem 0.95rem;
        outline: none;
        transition: all var(--duration-fast) var(--ease-soft);
      }

      .soft-input::placeholder {
        color: color-mix(in srgb, var(--color-espresso-muted) 72%, transparent);
      }

      .soft-input:focus {
        background: var(--color-surface);
        border-color: color-mix(in srgb, var(--color-sage-base) 55%, transparent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-sage-base) 14%, transparent);
      }

      .title-input {
        flex: 2;
      }

      .subject-input {
        flex: 1;
      }

      .form-actions-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
      }

      /* Segmented SNACK / MEAL Selector */
      .weight-segmented {
        display: inline-flex;
        background: var(--color-surface-recessed);
        padding: 0.25rem;
        border-radius: var(--radius-pill);
        gap: 0.2rem;
      }

      .weight-option {
        appearance: none;
        border: none;
        background: transparent;
        font-family: var(--font-sans);
        font-size: 0.82rem;
        font-weight: 700;
        color: var(--color-text-muted);
        padding: 0.4rem 0.85rem;
        border-radius: var(--radius-pill);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: all var(--duration-fast) var(--ease-soft);
      }

      .weight-option.selected-snack {
        background: var(--color-surface);
        color: color-mix(in srgb, var(--color-ochre-base) 70%, var(--color-espresso-dark));
        box-shadow: var(--shadow-diffuse-sm);
      }

      .weight-option.selected-meal {
        background: var(--color-surface);
        color: color-mix(in srgb, var(--color-sage-base) 72%, var(--color-espresso-dark));
        box-shadow: var(--shadow-diffuse-sm);
      }

      .add-btn {
        appearance: none;
        border: none;
        background: var(--color-sage-base);
        color: var(--color-surface-elevated);
        font-family: var(--font-sans);
        font-size: 0.9rem;
        font-weight: 700;
        padding: 0.6rem 1.25rem;
        border-radius: var(--radius-pill);
        cursor: pointer;
        box-shadow: var(--shadow-diffuse-sm);
        transition: transform var(--duration-fast) var(--ease-soft),
          background var(--duration-fast) var(--ease-soft);
      }

      .add-btn:hover:not(:disabled) {
        background: color-mix(in srgb, var(--color-sage-base) 88%, var(--color-espresso-dark));
        transform: translateY(-1px);
      }

      .add-btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      /* Task List Items */
      .task-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      }

      .task-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
        background: var(--color-surface);
        border-radius: var(--radius-md);
        padding: 0.85rem 1rem;
        box-shadow: var(--shadow-diffuse-sm);
        transition: transform var(--duration-fast) var(--ease-soft),
          box-shadow var(--duration-fast) var(--ease-soft);
      }

      .task-card:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-diffuse-md);
      }

      .task-left {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        min-width: 0;
        flex: 1;
      }

      /* Custom Circular Checkbox */
      .feed-check-btn {
        appearance: none;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid color-mix(in srgb, var(--color-espresso-dark) 28%, transparent);
        background: var(--color-surface-recessed);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: transparent;
        transition: all var(--duration-fast) var(--ease-soft);
      }

      .feed-check-btn:hover {
        border-color: var(--color-sage-base);
        background: color-mix(in srgb, var(--color-sage-base) 14%, var(--color-surface));
        color: var(--color-sage-base);
      }

      .feed-check-btn.is-completed {
        border-color: var(--color-sage-base);
        background: var(--color-sage-base);
        color: var(--color-surface-elevated);
      }

      .task-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        min-width: 0;
      }

      .task-title {
        font-size: 0.98rem;
        font-weight: 600;
        color: var(--color-text-primary);
        word-break: break-word;
      }

      .task-title.completed-text {
        text-decoration: line-through;
        color: var(--color-text-muted);
      }

      .task-meta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.45rem;
      }

      .subject-pill {
        font-size: 0.74rem;
        font-weight: 700;
        padding: 0.15rem 0.6rem;
        border-radius: var(--radius-pill);
      }

      .pill-sage {
        background: var(--tag-sage-bg);
        color: var(--tag-sage-fg);
      }
      .pill-ochre {
        background: var(--tag-ochre-bg);
        color: var(--tag-ochre-fg);
      }
      .pill-rose {
        background: var(--tag-rose-bg);
        color: var(--tag-rose-fg);
      }
      .pill-plum {
        background: var(--tag-plum-bg);
        color: var(--tag-plum-fg);
      }

      .xp-tag {
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.15rem 0.55rem;
        border-radius: var(--radius-pill);
      }

      .xp-meal {
        background: color-mix(in srgb, var(--color-sage-base) 12%, transparent);
        color: color-mix(in srgb, var(--color-sage-base) 72%, var(--color-espresso-dark));
      }

      .xp-snack {
        background: color-mix(in srgb, var(--color-ochre-base) 14%, transparent);
        color: color-mix(in srgb, var(--color-ochre-base) 68%, var(--color-espresso-dark));
      }

      .delete-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--color-text-muted);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.45;
        transition: all var(--duration-fast) var(--ease-soft);
      }

      .task-card:hover .delete-btn,
      .delete-btn:focus-visible {
        opacity: 1;
      }

      .delete-btn:hover {
        background: color-mix(in srgb, var(--color-terracotta-base) 14%, transparent);
        color: var(--color-terracotta-base);
      }

      .empty-queue {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        background: var(--color-surface-recessed);
        border-radius: var(--radius-md);
        color: var(--color-text-muted);
        font-size: 0.92rem;
        font-weight: 500;
      }

      /* Collapsible Devoured History */
      .history-drawer {
        margin-top: var(--space-lg);
      }

      .history-toggle {
        appearance: none;
        border: none;
        background: transparent;
        font-family: var(--font-sans);
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--color-text-muted);
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.4rem 0.2rem;
        cursor: pointer;
        transition: color var(--duration-fast) var(--ease-soft);
      }

      .history-toggle:hover {
        color: var(--color-text-primary);
      }

      .history-list {
        margin-top: var(--space-sm);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        opacity: 0.85;
      }

      /* Compact Style Token Swatch Strip */
      .swatch-footer {
        margin-top: var(--space-xl);
        padding-top: var(--space-md);
        border-top: 1px solid var(--color-border-subtle);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
      }

      .swatch-label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--color-text-muted);
      }

      .swatch-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .swatch-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--color-surface);
        padding: 0.3rem 0.65rem;
        border-radius: var(--radius-pill);
        box-shadow: var(--shadow-diffuse-sm);
        font-size: 0.74rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }

      .swatch-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid var(--color-border-subtle);
      }
    `,
  ],
  template: `
    <div class="app-shell">
      <!-- Top Header -->
      <header class="top-bar">
        <div class="brand-group">
          <div>
            <h1 class="brand-title">Cramagotchi</h1>
            <p class="brand-subtitle">Calm, zero-punishment study sanctuary</p>
          </div>
        </div>

        <div class="exam-pill" aria-label="Exam Countdown">
          <span>Finals Window:</span>
          <strong>18 days left</strong>
        </div>
      </header>

      <!-- Responsive Two-Pane Workspace -->
      <main class="workspace-grid">
        <!-- Left Pane: Study Task Queue (60%) -->
        <section aria-label="Study Task Queue">
          <div class="queue-header">
            <h2>Study Queue</h2>
            <span class="task-count-badge">{{ activeTasks().length }} remaining</span>
          </div>

          <!-- Add Task Form -->
          <form class="add-task-form" [formGroup]="taskForm" (ngSubmit)="addTask()">
            <div class="input-row">
              <input
                type="text"
                class="soft-input title-input"
                formControlName="title"
                placeholder="What are you studying next? (e.g. Chapter 4 notes)"
                aria-label="Study task title"
              />
              <input
                type="text"
                class="soft-input subject-input"
                formControlName="subjectTag"
                placeholder="Subject (optional)"
                aria-label="Subject tag"
              />
            </div>

            <div class="form-actions-row">
              <div class="weight-segmented" role="radiogroup" aria-label="Task XP weight">
                <button
                  type="button"
                  class="weight-option"
                  [class.selected-snack]="selectedWeight() === 'SNACK'"
                  (click)="setWeight('SNACK')"
                >
                  <span>Snack</span>
                  <span>+10 XP</span>
                </button>
                <button
                  type="button"
                  class="weight-option"
                  [class.selected-meal]="selectedWeight() === 'MEAL'"
                  (click)="setWeight('MEAL')"
                >
                  <span>Meal</span>
                  <span>+25 XP</span>
                </button>
              </div>

              <button type="submit" class="add-btn" [disabled]="taskForm.invalid">
                + Add to Queue
              </button>
            </div>
          </form>

          <!-- Active Tasks List -->
          @if (activeTasks().length > 0) {
            <div class="task-list">
              @for (task of activeTasks(); track task.id) {
                <article class="task-card">
                  <div class="task-left">
                    <button
                      type="button"
                      class="feed-check-btn"
                      [title]="'Feed Munch: ' + task.title"
                      [attr.aria-label]="'Complete ' + task.title"
                      (click)="completeTask(task.id)"
                    >
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <div class="task-info">
                      <span class="task-title">{{ task.title }}</span>
                      <div class="task-meta-row">
                        @if (task.subjectTag) {
                          <span class="subject-pill" [class]="getSubjectPillClass(task.subjectTag)">
                            {{ task.subjectTag }}
                          </span>
                        }
                        <span
                          class="xp-tag"
                          [class.xp-meal]="task.weight === 'MEAL'"
                          [class.xp-snack]="task.weight === 'SNACK'"
                        >
                          {{ task.weight === 'MEAL' ? 'Meal · +25 XP' : 'Snack · +10 XP' }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="delete-btn"
                    aria-label="Remove task"
                    title="Remove task"
                    (click)="deleteTask(task.id)"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 4L12 12M12 4L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </article>
              }
            </div>
          } @else {
            <div class="empty-queue">
              All queued study tasks devoured! Add another small step whenever you're ready.
            </div>
          }

          <!-- Collapsible Devoured History -->
          @if (completedTasks().length > 0) {
            <div class="history-drawer">
              <button
                type="button"
                class="history-toggle"
                (click)="showHistory.set(!showHistory())"
                [attr.aria-expanded]="showHistory()"
              >
                <span>{{ showHistory() ? '▾' : '▸' }}</span>
                <span>Devoured History ({{ completedTasks().length }})</span>
              </button>

              @if (showHistory()) {
                <div class="history-list">
                  @for (task of completedTasks(); track task.id) {
                    <article class="task-card">
                      <div class="task-left">
                        <span class="feed-check-btn is-completed" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3.5 8.5L6.5 11.5L12.5 4.5"
                              stroke="currentColor"
                              stroke-width="2.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <div class="task-info">
                          <span class="task-title completed-text">{{ task.title }}</span>
                          <div class="task-meta-row">
                            @if (task.subjectTag) {
                              <span
                                class="subject-pill"
                                [class]="getSubjectPillClass(task.subjectTag)"
                              >
                                {{ task.subjectTag }}
                              </span>
                            }
                            <span class="xp-tag xp-meal">
                              +{{ task.weight === 'MEAL' ? 25 : 10 }} XP digested
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="delete-btn"
                        aria-label="Delete archived task"
                        (click)="deleteTask(task.id)"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M4 4L12 12M12 4L4 12"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </article>
                  }
                </div>
              }
            </div>
          }
        </section>

        <!-- Right Pane: Monster Sanctuary (40%) -->
        <aside class="sanctuary-column" aria-label="Monster Sanctuary">
          <div class="soft-card">
            <div class="sanctuary-header">
              <div class="monster-name-block">
                <h2>Munch</h2>
                <span class="monster-stage-sub">
                  Lv. {{ currentStageMeta().level }} · {{ currentStageMeta().label }}
                </span>
              </div>

              <span class="status-badge" [class]="'status-' + monsterStatus()">
                <span class="status-dot"></span>
                <span>{{ statusDisplayLabel() }}</span>
              </span>
            </div>

            <!-- Line-Art Blob Monster SVG Arena -->
            <div class="monster-stage-arena">
              <svg
                class="monster-svg"
                viewBox="0 0 220 220"
                role="img"
                [attr.aria-label]="'Munch the ' + currentStageMeta().label + ' is ' + monsterStatus()"
              >
                <!-- Ambient Ground Shadow -->
                <ellipse cx="110" cy="176" rx="48" ry="7.5" fill="#2C221E" opacity="0.07" />

                <!-- Floating Zzz when SLEEPING -->
                @if (monsterStatus() === 'SLEEPING') {
                  <g fill="none" stroke="#2C221E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path class="zzz-1" d="M152 62 H162 L152 72 H162" />
                    <path class="zzz-2" d="M167 44 H175 L167 52 H175" />
                  </g>
                }

                <!-- Animated Blob Group -->
                <g [class]="monsterAnimationClass()">
                  <!-- STAGE 1: EGG -->
                  @if (monsterStage() === 'EGG') {
                    <path
                      d="M110 54
                         C135 54, 152 84, 152 122
                         C152 154, 134 170, 110 170
                         C86 170, 68 154, 68 122
                         C68 84, 85 54, 110 54 Z"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <!-- Subtle Organic Speckles & Crack Line -->
                    <circle cx="91" cy="86" r="3" fill="#6E9E7B" opacity="0.35" />
                    <circle cx="131" cy="96" r="3.5" fill="#D69749" opacity="0.35" />
                    <circle cx="88" cy="144" r="2.5" fill="#6E9E7B" opacity="0.3" />
                    <path
                      d="M95 116 L104 122 L113 115 L123 121"
                      fill="none"
                      stroke="#2C221E"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  }

                  <!-- STAGE 2: HATCHLING -->
                  @if (monsterStage() === 'HATCHLING') {
                    <!-- Crown Sprout Leaf -->
                    <path
                      d="M110 68 C110 55, 116 48, 125 46 C124 56, 118 62, 110 64"
                      fill="#6E9E7B"
                      fill-opacity="0.35"
                      stroke="#2C221E"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M110 68 C108 58, 102 52, 95 51 C96 59, 102 64, 110 65"
                      fill="#6E9E7B"
                      fill-opacity="0.25"
                      stroke="#2C221E"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <!-- Small Round Pebble Blob -->
                    <path
                      d="M110 68
                         C137 68, 155 88, 157 118
                         C159 148, 142 168, 110 168
                         C78 168, 61 148, 63 118
                         C65 88, 83 68, 110 68 Z"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  }

                  <!-- STAGE 3: SCHOLAR -->
                  @if (monsterStage() === 'SCHOLAR') {
                    <!-- Plump Pear-Blob Body -->
                    <path
                      d="M110 48
                         C136 48, 152 68, 157 94
                         C163 123, 169 150, 150 164
                         C134 175, 86 175, 70 164
                         C51 150, 57 123, 63 94
                         C68 68, 84 48, 110 48 Z"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  }

                  <!-- STAGE 4: GRADUATED BEAST -->
                  @if (monsterStage() === 'GRADUATED_BEAST') {
                    <!-- Cozy Rounded Ears -->
                    <circle
                      cx="74"
                      cy="62"
                      r="13"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                    />
                    <circle
                      cx="146"
                      cy="62"
                      r="13"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                    />
                    <!-- Broad Cosy Bear-Blob Silhouette -->
                    <path
                      d="M110 48
                         C142 48, 162 68, 167 98
                         C172 130, 174 154, 152 167
                         C134 176, 86 176, 68 167
                         C46 154, 48 130, 53 98
                         C58 68, 78 48, 110 48 Z"
                      fill="#EBF1E8"
                      stroke="#2C221E"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <!-- Tilted Mortarboard Cap -->
                    <polygon
                      points="110,24 146,38 110,50 74,38"
                      fill="#2C221E"
                      stroke="#2C221E"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M91 44 V53 Q110 59 129 53 V44"
                      fill="#2C221E"
                      stroke="#2C221E"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <!-- Warm Ochre Tassel -->
                    <path
                      d="M136 41 L144 56"
                      stroke="#D69749"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <circle cx="144" cy="57" r="2.5" fill="#D69749" />
                  }

                  <!-- FACIAL EXPRESSIONS (Stages 2, 3, 4) -->
                  @if (monsterStage() !== 'EGG') {
                    <!-- Soft Cheek Blushes -->
                    <ellipse
                      cx="82"
                      [attr.cy]="monsterStage() === 'HATCHLING' ? 123 : 109"
                      rx="6.5"
                      ry="3.5"
                      fill="#D97757"
                      opacity="0.28"
                    />
                    <ellipse
                      cx="138"
                      [attr.cy]="monsterStage() === 'HATCHLING' ? 123 : 109"
                      rx="6.5"
                      ry="3.5"
                      fill="#D97757"
                      opacity="0.28"
                    />

                    <!-- Eyes & Mouth based on MonsterStatus -->
                    <g
                      [attr.transform]="
                        monsterStage() === 'HATCHLING' ? 'translate(0, 14)' : 'translate(0, 0)'
                      "
                    >
                      @switch (monsterStatus()) {
                        @case ('IDLE') {
                          <circle cx="94" cy="96" r="2.5" fill="#2C221E" />
                          <circle cx="126" cy="96" r="2.5" fill="#2C221E" />
                          <path
                            d="M105 107 Q110 111 115 107"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.3"
                            stroke-linecap="round"
                          />
                        }
                        @case ('EATING') {
                          <!-- Happy ^ ^ Eyes -->
                          <path
                            d="M89 97 Q94 91 99 97"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.3"
                            stroke-linecap="round"
                          />
                          <path
                            d="M121 97 Q126 91 131 97"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.3"
                            stroke-linecap="round"
                          />
                          <!-- Happy Chomp Mouth -->
                          <ellipse
                            cx="110"
                            cy="109"
                            rx="6"
                            ry="5"
                            fill="#D97757"
                            fill-opacity="0.45"
                            stroke="#2C221E"
                            stroke-width="2.2"
                          />
                        }
                        @case ('SLEEPING') {
                          <!-- Peaceful Closed Eyelids -->
                          <path
                            d="M89 96 Q94 101 99 96"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.3"
                            stroke-linecap="round"
                          />
                          <path
                            d="M121 96 Q126 101 131 96"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.3"
                            stroke-linecap="round"
                          />
                          <circle
                            cx="110"
                            cy="108"
                            r="2.4"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2"
                          />
                        }
                        @case ('HUNGRY') {
                          <!-- Gentle Worried Brows & Wavy Mouth -->
                          <path
                            d="M89 90 L98 92"
                            stroke="#2C221E"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            d="M131 90 L122 92"
                            stroke="#2C221E"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <circle cx="94" cy="97" r="2.5" fill="#2C221E" />
                          <circle cx="126" cy="97" r="2.5" fill="#2C221E" />
                          <path
                            d="M104 109 Q107 106 110 109 Q113 112 116 109"
                            fill="none"
                            stroke="#2C221E"
                            stroke-width="2.2"
                            stroke-linecap="round"
                          />
                        }
                      }

                      <!-- Scholar Round Wire Glasses -->
                      @if (monsterStage() === 'SCHOLAR') {
                        <circle
                          cx="94"
                          cy="96"
                          r="11"
                          fill="#FFFDF9"
                          fill-opacity="0.35"
                          stroke="#2C221E"
                          stroke-width="2.2"
                        />
                        <circle
                          cx="126"
                          cy="96"
                          r="11"
                          fill="#FFFDF9"
                          fill-opacity="0.35"
                          stroke="#2C221E"
                          stroke-width="2.2"
                        />
                        <path
                          d="M105 96 Q110 93 115 96"
                          fill="none"
                          stroke="#2C221E"
                          stroke-width="2.2"
                          stroke-linecap="round"
                        />
                      }
                    </g>

                    <!-- Scholar Tiny Open Study Book & Paws -->
                    @if (monsterStage() === 'SCHOLAR' || monsterStage() === 'GRADUATED_BEAST') {
                      <path
                        d="M88 135 Q99 131 110 136 Q121 131 132 135 L130 151 Q120 147 110 152 Q100 147 90 151 Z"
                        fill="#FAF6F0"
                        stroke="#2C221E"
                        stroke-width="2.2"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="110"
                        y1="136"
                        x2="110"
                        y2="152"
                        stroke="#2C221E"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M84 139 C79 140, 79 147, 86 147"
                        fill="#EBF1E8"
                        stroke="#2C221E"
                        stroke-width="2.4"
                        stroke-linecap="round"
                      />
                      <path
                        d="M136 139 C141 140, 141 147, 134 147"
                        fill="#EBF1E8"
                        stroke="#2C221E"
                        stroke-width="2.4"
                        stroke-linecap="round"
                      />
                    }
                  }
                </g>
              </svg>

              <p class="stage-caption">{{ currentStageMeta().description }}</p>
            </div>

            <!-- Anti-Distraction Sleep / Passive Pomodoro Banner -->
            @if (monsterStatus() === 'SLEEPING') {
              <div class="sleep-banner" role="status">
                <span>Digesting peacefully... keep studying!</span>
                <span class="sleep-timer-mono">{{ formattedSleepCountdown() }}</span>
              </div>
            }

            <!-- XP Progress Bar -->
            <div class="xp-section">
              <div class="xp-labels">
                <span>Study Nourishment</span>
                @if (currentStageMeta().nextXp !== null) {
                  <span>
                    <strong>{{ xp() }}</strong> / {{ currentStageMeta().nextXp }} XP
                  </span>
                } @else {
                  <span><strong>{{ xp() }} XP</strong> · Max Stage</span>
                }
              </div>
              <div
                class="xp-track"
                role="progressbar"
                [attr.aria-valuenow]="xpProgressPercent()"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="xp-fill" [style.width.%]="xpProgressPercent()"></div>
              </div>
            </div>

            <!-- Live Style Preview Switchers -->
            <div class="preview-controls">
              <div>
                <span class="control-row-label">Preview Evolution Stage</span>
                <div class="pill-group">
                  @for (stage of stages; track stage.id) {
                    <button
                      type="button"
                      class="switch-pill"
                      [class.active]="monsterStage() === stage.id"
                      (click)="selectStage(stage.id)"
                    >
                      {{ stage.label }}
                    </button>
                  }
                </div>
              </div>

              <div>
                <span class="control-row-label">Preview Monster State</span>
                <div class="pill-group">
                  @for (st of statuses; track st.id) {
                    <button
                      type="button"
                      class="switch-pill"
                      [class.active]="monsterStatus() === st.id"
                      (click)="selectStatus(st.id)"
                    >
                      {{ st.label }}
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <!-- Compact Style Token Swatch Strip -->
      <footer class="swatch-footer" aria-label="Theme Design Tokens">
        <span class="swatch-label">Espresso & Botanical Tokens (Zero Blue)</span>
        <div class="swatch-list">
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #FAF6F0;"></span>
            Cream #FAF6F0
          </span>
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #2C221E;"></span>
            Espresso #2C221E
          </span>
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #6E9E7B;"></span>
            Sage Meal #6E9E7B
          </span>
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #D69749;"></span>
            Ochre Snack #D69749
          </span>
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #D97757;"></span>
            Terracotta #D97757
          </span>
          <span class="swatch-chip">
            <span class="swatch-dot" style="background: #84A590;"></span>
            Moss Sleep #84A590
          </span>
        </div>
      </footer>
    </div>
  `,
})
export class App implements OnDestroy {
  readonly stages = STAGE_LIST;
  readonly statuses = STATUS_LIST;

  // Core Reactive Signals
  readonly xp = signal<number>(135);
  readonly monsterStage = signal<EvolutionStage>('SCHOLAR');
  readonly monsterStatus = signal<MonsterStatus>('IDLE');
  readonly sleepRemainingSec = signal<number>(1500);
  readonly showHistory = signal<boolean>(true);
  readonly selectedWeight = signal<TaskWeight>('MEAL');

  readonly tasks = signal<StudyTask[]>([
    {
      id: 't-1',
      title: 'Summarise Chapter 11: Cognitive Load',
      subjectTag: 'Psychology',
      weight: 'MEAL',
      completed: false,
      createdAt: Date.now() - 3600_000,
      completedAt: null,
    },
    {
      id: 't-2',
      title: 'Review 20 Anki flashcards',
      subjectTag: 'Anatomy',
      weight: 'SNACK',
      completed: false,
      createdAt: Date.now() - 2400_000,
      completedAt: null,
    },
    {
      id: 't-3',
      title: 'Draft essay outline on Industrial Treaties',
      subjectTag: 'History',
      weight: 'MEAL',
      completed: false,
      createdAt: Date.now() - 1200_000,
      completedAt: null,
    },
    {
      id: 't-4',
      title: 'Organise lecture PDFs & syllabus dates',
      subjectTag: 'Admin',
      weight: 'SNACK',
      completed: true,
      createdAt: Date.now() - 7200_000,
      completedAt: Date.now() - 5400_000,
    },
  ]);

  readonly taskForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    subjectTag: new FormControl('', { nonNullable: true }),
  });

  // Derived Computeds
  readonly activeTasks = computed(() => this.tasks().filter((t) => !t.completed));
  readonly completedTasks = computed(() => this.tasks().filter((t) => t.completed));

  readonly currentStageMeta = computed(() => STAGES[this.monsterStage()]);

  readonly xpProgressPercent = computed(() => {
    const meta = this.currentStageMeta();
    if (meta.nextXp === null) return 100;
    const currentXp = this.xp();
    const span = meta.nextXp - meta.minXp;
    const progress = Math.max(0, Math.min(span, currentXp - meta.minXp));
    return Math.round((progress / span) * 100);
  });

  readonly statusDisplayLabel = computed(() => {
    switch (this.monsterStatus()) {
      case 'IDLE':
        return 'Calm & Ready';
      case 'EATING':
        return 'Nomming...';
      case 'SLEEPING':
        return 'Sleeping';
      case 'HUNGRY':
        return 'Peckish';
    }
  });

  readonly monsterAnimationClass = computed(() => {
    switch (this.monsterStatus()) {
      case 'IDLE':
        return 'anim-breathe';
      case 'EATING':
        return 'anim-chomp';
      case 'SLEEPING':
        return 'anim-sleep';
      case 'HUNGRY':
        return 'anim-rumble';
    }
  });

  readonly formattedSleepCountdown = computed(() => {
    const total = Math.max(0, this.sleepRemainingSec());
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  });

  private eatTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private sleepIntervalId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    effect(() => {
      if (this.monsterStatus() === 'SLEEPING') {
        this.startSleepTicker();
      } else {
        this.stopSleepTicker();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.eatTimeoutId) clearTimeout(this.eatTimeoutId);
    this.stopSleepTicker();
  }

  setWeight(weight: TaskWeight): void {
    this.selectedWeight.set(weight);
  }

  addTask(): void {
    if (this.taskForm.invalid) return;
    const rawTitle = this.taskForm.controls.title.value.trim();
    if (!rawTitle) return;

    const rawTag = this.taskForm.controls.subjectTag.value.trim();
    const newTask: StudyTask = {
      id: `t-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      title: rawTitle,
      subjectTag: rawTag.length > 0 ? rawTag : null,
      weight: this.selectedWeight(),
      completed: false,
      createdAt: Date.now(),
      completedAt: null,
    };

    this.tasks.update((list) => [newTask, ...list]);
    this.taskForm.reset({ title: '', subjectTag: '' });
  }

  completeTask(taskId: string): void {
    const target = this.tasks().find((t) => t.id === taskId);
    if (!target || target.completed) return;

    const xpGain = target.weight === 'MEAL' ? 25 : 10;
    const updatedXp = this.xp() + xpGain;
    this.xp.set(updatedXp);
    this.evaluateEvolution(updatedXp);

    this.tasks.update((list) =>
      list.map((t) =>
        t.id === taskId ? { ...t, completed: true, completedAt: Date.now() } : t
      )
    );

    // Anti-Distraction Lock: If already SLEEPING, keep SLEEPING & preserve timer
    if (this.monsterStatus() === 'SLEEPING') {
      return;
    }

    // Trigger 3s EATING -> 25m SLEEPING cycle
    if (this.eatTimeoutId) clearTimeout(this.eatTimeoutId);
    this.monsterStatus.set('EATING');

    this.eatTimeoutId = setTimeout(() => {
      this.sleepRemainingSec.set(25 * 60);
      this.monsterStatus.set('SLEEPING');
    }, 3000);
  }

  deleteTask(taskId: string): void {
    this.tasks.update((list) => list.filter((t) => t.id !== taskId));
  }

  selectStage(stage: EvolutionStage): void {
    this.monsterStage.set(stage);
    // Align XP preview smoothly with selected stage threshold
    const min = STAGES[stage].minXp;
    const next = STAGES[stage].nextXp;
    this.xp.set(next !== null ? min + Math.round((next - min) * 0.45) : 320);
  }

  selectStatus(status: MonsterStatus): void {
    if (this.eatTimeoutId) {
      clearTimeout(this.eatTimeoutId);
      this.eatTimeoutId = null;
    }
    if (status === 'SLEEPING' && this.sleepRemainingSec() <= 0) {
      this.sleepRemainingSec.set(25 * 60);
    }
    this.monsterStatus.set(status);
  }

  getSubjectPillClass(subject: string): string {
    const classes = ['pill-sage', 'pill-ochre', 'pill-rose', 'pill-plum'];
    let hash = 0;
    for (let i = 0; i < subject.length; i++) {
      hash = (hash * 31 + subject.charCodeAt(i)) | 0;
    }
    return classes[Math.abs(hash) % classes.length];
  }

  private evaluateEvolution(currentXp: number): void {
    if (currentXp >= 300) {
      this.monsterStage.set('GRADUATED_BEAST');
    } else if (currentXp >= 150) {
      this.monsterStage.set('SCHOLAR');
    } else if (currentXp >= 50) {
      this.monsterStage.set('HATCHLING');
    } else {
      this.monsterStage.set('EGG');
    }
  }

  private startSleepTicker(): void {
    if (this.sleepIntervalId) return;
    this.sleepIntervalId = setInterval(() => {
      const next = this.sleepRemainingSec() - 1;
      if (next <= 0) {
        this.sleepRemainingSec.set(0);
        this.monsterStatus.set('IDLE');
      } else {
        this.sleepRemainingSec.set(next);
      }
    }, 1000);
  }

  private stopSleepTicker(): void {
    if (this.sleepIntervalId) {
      clearInterval(this.sleepIntervalId);
      this.sleepIntervalId = null;
    }
  }
}