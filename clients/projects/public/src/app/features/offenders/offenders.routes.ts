import { Routes } from '@angular/router';

export const offenderRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/offenders/offenders.component').then(c => c.OffendersComponent)
  },
  {
    path: ':offenderId',
    children: [
      {
        path: 'profile',
        loadComponent: () => 
          import('./pages/offender-profile/offender-profile.component').then(c => c.OffenderProfileComponent)
      },
      {
        path: '**',
        redirectTo: './',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
