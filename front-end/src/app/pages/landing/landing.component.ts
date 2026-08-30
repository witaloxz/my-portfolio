import {
  AfterViewInit,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProjectComponent } from '../project/project.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { SectionSpyService } from '../../core/section-spy.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <app-home />
    <app-about />
    <app-project />
    <app-skills />
    <app-contact />
  `,
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  private readonly spy = inject(SectionSpyService);

  ngAfterViewInit(): void {
    this.spy.start();
  }

  ngOnDestroy(): void {
    this.spy.stop();
  }
}
