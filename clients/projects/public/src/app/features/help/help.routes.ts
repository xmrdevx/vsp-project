import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/help/help.component').then(c => c.HelpComponent)
  }
];
