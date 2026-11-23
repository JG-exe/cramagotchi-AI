import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Formats a date input as the user types, turning keystrokes into the
 * strict `YYYY-MM-DD` shape the engine stores: digits only, with a dash
 * auto-inserted after the year and after the month ("2026012" → "2026-01-2").
 *
 * Pair it with `placeholder="YYYY-MM-DD"` so the expected format is visible
 * before typing, and with a hidden `<input type="date">` companion for the
 * native picker (see ExamPortfolioComponent.openDatePicker).
 */
@Directive({
  selector: 'input[appDateMask]',
})
export class DateMaskDirective {
  constructor(private readonly el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement;
    // Guard against the extra `input` event this handler dispatches below.
    if (input.dataset['maskBusy']) return;

    const raw = input.value;
    // Only normalise pure digit/ dash streams while typing. Anything with
    // stray characters (e.g. the '/' of "2026/02/10") is left untouched so
    // the validity guard rejects it instead of the mask silently healing it.
    if (/[^0-9-]/.test(raw)) return;

    const caret = input.selectionStart ?? raw.length;
    const digitsBeforeCaret = raw.slice(0, caret).replace(/\D/g, '').length;

    const digits = raw.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length > 4) formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`;
    if (digits.length > 6) formatted = `${formatted.slice(0, 7)}-${formatted.slice(7)}`;

    if (formatted === input.value) return;

    input.value = formatted;
    input.dataset['maskBusy'] = '1';
    // Re-dispatch so the (input) template binding reads the formatted value.
    input.dispatchEvent(new Event('input'));
    delete input.dataset['maskBusy'];

    // Keep the caret where the user was typing.
    const pos = this.positionAfterDigits(formatted, Math.min(digitsBeforeCaret, digits.length));
    input.setSelectionRange(pos, pos);
  }

  private positionAfterDigits(text: string, count: number): number {
    if (count <= 0) return 0;
    let seen = 0;
    for (let i = 0; i < text.length; i++) {
      if (/\d/.test(text[i])) {
        seen++;
        if (seen === count) return i + 1;
      }
    }
    return text.length;
  }
}
