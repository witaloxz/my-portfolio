import { Injectable, signal } from '@angular/core';

/**
 * Tracks which `<section id>` is currently near the middle of the viewport,
 * so the header can highlight the matching nav link on the single-page layout.
 */
@Injectable({ providedIn: 'root' })
export class SectionSpyService {
  readonly active = signal('home');

  private observer?: IntersectionObserver;

  start(): void {
    this.stop();
    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    document
      .querySelectorAll<HTMLElement>('section[id]')
      .forEach(section => this.observer!.observe(section));
  }

  stop(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
