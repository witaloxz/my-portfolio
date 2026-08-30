import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { techInfo } from '../../core/tech-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly i18n = inject(I18nService);
  readonly techInfo = techInfo;

  onIconError(event: Event): void {
    (event.target as HTMLElement).remove();
  }
}
