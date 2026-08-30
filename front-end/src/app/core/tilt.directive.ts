import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Subtle cursor-following 3D tilt for cards. Springs back on leave.
 * Honours reduced-motion.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
  host: { style: 'will-change: transform; transform-style: preserve-3d' },
})
export class TiltDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (
      event.pointerType === 'touch' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.transform =
      `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) ` +
      `rotateY(${(x * 7).toFixed(2)}deg) translateY(-4px)`;
  }

  @HostListener('pointerleave')
  reset(): void {
    this.host.nativeElement.style.transform = '';
  }
}
