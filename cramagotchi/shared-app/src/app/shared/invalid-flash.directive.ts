import { Directive, ElementRef, effect, inject, input, numberAttribute } from '@angular/core';

/**
 * Invalid-submit feedback: shakes the host element and applies the shared
 * warning highlight (`.invalid-flash`) for exactly one animation cycle.
 *
 * Bound to a counter that the component increments on every rejected submit;
 * incrementing (never the initial 0) triggers the shake. The class is removed
 * on `animationend` so the red button flash / field shake lasts exactly one
 * cycle — including under `prefers-reduced-motion`, where the duration is
 * collapsed to ~0 and `animationend` still fires.
 *
 * The keyframes, warning colour and flash styling live globally in
 * `src/styles/consts/_animations.css` so every form application looks the same.
 */
@Directive({
  selector: '[appInvalidFlash]',
  standalone: true,
  host: {
    '(animationend)': 'onAnimationEnd($event)',
  },
})
export class InvalidFlashDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Increment on every rejected submit; 0 (the initial value) never flashes. */
  readonly appInvalidFlash = input(0, { transform: numberAttribute });

  constructor() {
    effect(() => {
      const n = this.appInvalidFlash();
      if (!Number.isFinite(n) || n === 0) return;

      const node = this.el.nativeElement;
      // Removing the class, forcing a style flush, then re-adding restarts the
      // animation even on quick consecutive submits (N > 1 within one cycle).
      node.classList.remove('invalid-flash');
      void node.offsetWidth; // style flush
      node.classList.add('invalid-flash');
    });
  }

  /** One cycle done — drop the warning styling so the element returns to base. */
  onAnimationEnd(event: AnimationEvent): void {
    if (event.animationName !== 'invalid-shake') return;
    this.el.nativeElement.classList.remove('invalid-flash');
  }
}
