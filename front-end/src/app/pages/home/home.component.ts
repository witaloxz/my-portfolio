import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);

  typed = '';

  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  private readonly reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  private get roles(): string[] {
    return this.i18n.t().home.roles;
  }

  ngOnInit(): void {
    if (this.reduceMotion) {
      this.typed = this.roles[0];
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const roles = this.roles;
    const word = roles[this.wordIndex % roles.length];

    if (!this.deleting) {
      this.typed = word.slice(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex >= word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1600);
        return;
      }
    } else {
      this.typed = word.slice(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex <= 0) {
        this.charIndex = 0;
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % roles.length;
      }
    }

    this.timer = setTimeout(() => this.tick(), this.deleting ? 40 : 95);
  }
}
