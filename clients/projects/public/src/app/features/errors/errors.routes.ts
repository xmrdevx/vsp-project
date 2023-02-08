import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: 'unauthorized',
    loadComponent: () => 
      import('./pages/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent)
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
