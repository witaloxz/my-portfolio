import { Injectable, computed, effect, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, dictionaries } from './translations';

const STORAGE_KEY = 'lang';

/**
 * Runtime EN/PT switch. English is the default. The choice is persisted in
 * localStorage and reflected on <html lang>. No external i18n library.
 *
 * Usage in a component:
 *   i18n = inject(I18nService);
 *   // template: {{ i18n.t().home.tagline }}
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.readInitialLang());

  /** Current dictionary — recomputes whenever the language changes. */
  readonly t = computed(() => dictionaries[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  toggle(): void {
    this.lang.set(this.lang() === 'en' ? 'pt' : 'en');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  private readInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'pt') {
        return stored;
      }
    } catch {
      /* storage unavailable — fall through */
    }
    return 'en';
  }
}
