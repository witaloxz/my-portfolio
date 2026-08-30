import {
  Directive,
  ElementRef,
  OnInit,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Fades / slides an element in the first time it scrolls into view.
 * Add `appReveal` to any element; pass a number for a stagger delay in ms:
 *
 *   <h2 appReveal>…</h2>
 *   <p [appReveal]="80">…</p>
 *
 * Honours `prefers-reduced-motion` (element just shows, no animation).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly delay = input(0, { alias: 'appReveal', transform: numberAttribute });

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');

    const delay = Number(this.delay()) || 0;
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
  }
}
