import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SectionSpyService } from '../../core/section-spy.service';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LangToggleComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  readonly spy = inject(SectionSpyService);

  /** Mobile navigation panel state. Ignored on desktop (CSS forces it open). */
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
