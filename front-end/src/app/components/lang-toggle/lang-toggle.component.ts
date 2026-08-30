import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  template: `
    <button
      type="button"
      class="lang-toggle"
      (click)="i18n.toggle()"
      [attr.aria-label]="
        i18n.lang() === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'
      "
    >
      <span [class.is-active]="i18n.lang() === 'en'">EN</span>
      <span class="sep" aria-hidden="true">/</span>
      <span [class.is-active]="i18n.lang() === 'pt'">PT</span>
    </button>
  `,
  styles: [`
    .lang-toggle {
      background: none;
      border: none;
      padding: 4px 0;
      cursor: pointer;

      font: inherit;
      font-size: 0.8rem;
      letter-spacing: 0.08em;

      display: inline-flex;
      align-items: center;
      gap: 6px;

      color: var(--fg-muted);
      transition: color var(--transition);
    }

    .lang-toggle:hover {
      color: var(--fg);
    }

    .lang-toggle .is-active {
      color: var(--accent);
    }

    .lang-toggle .sep {
      color: var(--fg-faint);
    }
  `],
})
export class LangToggleComponent {
  readonly i18n = inject(I18nService);
}
