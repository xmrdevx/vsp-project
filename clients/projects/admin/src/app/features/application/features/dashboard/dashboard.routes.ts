import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'overview',
    loadComponent: () => 
      import('./pages/dashboard/dashboard.component')
        .then(c => c.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];
