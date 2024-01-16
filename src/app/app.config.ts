import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ counter: counterReducer }),
    provideAnimations(),
    MaterialModule,
  ],
};
