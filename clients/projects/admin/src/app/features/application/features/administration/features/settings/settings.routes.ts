import { Routes } from '@angular/router';

import { SettingsComponent } from './pages/settings/settings.component';

export const settingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/settings/settings.component')
        .then(c => c.SettingsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
