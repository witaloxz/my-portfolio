import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // No scroll features: the single-page layout uses native `#anchor`
    // links + CSS `scroll-behavior: smooth`, so the router must not
    // interfere with in-page fragment navigation.
    provideRouter(routes),
  ],
};
