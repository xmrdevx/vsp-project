import { Routes } from '@angular/router';
import { InitialOffendersSearchLoadedGuard } from './guards/initial-offenders-search-loaded.guard';

export const offendersRoutes: Routes = [
  {
    path: '',
    canActivate: [
      InitialOffendersSearchLoadedGuard
    ],
    loadComponent: () => 
      import('./pages/offenders-overview/offenders-overview.component').then(c => c.OffendersOverviewComponent)
  },
  {
    path: 'create',
    loadComponent: () => 
      import('./pages/offenders-create/offenders-create.component').then(c => c.OffendersCreateComponent)
  },
  {
    path: 'cases',
    children: [
      {
        path: '',
        loadComponent: () => 
          import('./pages/offender-cases-overview/offender-cases-overview.component').then(c => c.OffenderCasesOverviewComponent)
      },
      {
        path: 'edit',
        loadComponent: () => 
          import('./pages/offender-cases-update/offender-cases-update.component').then(c => c.OffenderCasesUpdateComponent)
      }
    ]
  },
  {
    path: ':offenderId',
    children: [
      {
        path: 'edit',
        loadComponent: () => 
          import('./pages/offenders-update/offenders-update.component').then(c => c.OffendersUpdateComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

const offenderCasesRoutes: Routes = []
