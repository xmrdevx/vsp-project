import { Routes } from '@angular/router';

export const accountRoutes: Routes = [
  {
    path: 'profile',
    loadComponent: () => 
      import('./pages/account-profile/account-profile.component').then(c => c.AccountProfileComponent)
  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];
