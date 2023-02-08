import { Routes } from '@angular/router';

export const authenticationRoutes: Routes = [
  {
    path: 'reset-password',
    loadComponent: () => 
      import('./pages/reset-password/reset-password.component').then(c => c.ResetPasswordComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
