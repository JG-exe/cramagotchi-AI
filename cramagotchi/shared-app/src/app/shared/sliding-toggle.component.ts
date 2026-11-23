import { Component, computed, input, output } from '@angular/core';

/**
 * A two-option sliding toggle: one track, one thumb that glides between
 * the two halves — no per-option "pressed" backgrounds that only mimic
 * sliding. The label buttons stay real buttons (keyboard + tests).
 *
 * Usage (forms keep a single signal for the value):
 * ```html
 * <app-sliding-toggle
 *   class="toggle-track"
 *   left="Deadline" right="Exam"
 *   leftTestId="exam-kind-deadline" rightTestId="exam-kind-exam"
 *   [value]="examKindInput()" [rightValue]="'EXAM'"
 *   (change)="examKindInput.set($event === 'right' ? 'EXAM' : 'DEADLINE')" />
 * ```
 */
@Component({
  selector: 'app-sliding-toggle',
  template: `
    <span class="toggle-thumb" [class.toggle-thumb-right]="isRight()"></span>
    <button
      type="button"
      class="toggle-option"
      [class.toggle-option-active]="!isRight()"
      [attr.data-testid]="leftTestId()"
      (click)="select(false)"
    >{{ left() }}</button>
    <button
      type="button"
      class="toggle-option"
      [class.toggle-option-active]="isRight()"
      [attr.data-testid]="rightTestId()"
      (click)="select(true)"
    >{{ right() }}</button>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
        min-height: 40px;
        padding: 3px;
        border-radius: var(--radius-pill, 9999px);
        background: var(--color-surface-recessed, #f2eee8);
      }

      .toggle-thumb {
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 3px;
        width: calc(50% - 3px);
        border-radius: var(--radius-pill, 9999px);
        background: var(--color-surface-elevated, #fffdf9);
        box-shadow: var(--shadow-diffuse-sm, 0 4px 14px -2px rgba(44, 34, 30, 0.08));
        transition: transform 220ms var(--ease-standard, ease);
        pointer-events: none;
      }

      .toggle-thumb.toggle-thumb-right {
        transform: translateX(100%);
      }

      .toggle-option {
        position: relative;
        z-index: 1;
        appearance: none;
        border: none;
        background: transparent;
        color: var(--color-text-muted, #6E5D55);
        font-family: inherit;
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold, 600);
        min-height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 var(--space-sm);
        border-radius: var(--radius-pill, 9999px);
        cursor: pointer;
        white-space: nowrap;
        transition: color var(--duration-fast) var(--ease-standard, ease);
      }

      .toggle-option-active {
        color: var(--color-text-primary, #2C221E);
        font-weight: var(--weight-bold, 700);
      }
    `,
  ],
})
export class SlidingToggleComponent {
  /** Left option label. */
  readonly left = input.required<string>();
  /** Right option label. */
  readonly right = input.required<string>();
  /** Value emitted when the right option is picked. */
  readonly rightValue = input.required<string>();
  /** Current value (compared against rightValue). */
  readonly value = input.required<string>();

  readonly leftTestId = input<string>('toggle-left');
  readonly rightTestId = input<string>('toggle-right');

  /** Emits the chosen option's value ('left' label value or rightValue). */
  readonly change = output<'left' | 'right'>();

  readonly isRight = computed(() => this.value() === this.rightValue());

  select(isRight: boolean): void {
    this.change.emit(isRight ? 'right' : 'left');
  }
}
