import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { OffendersEffects, offendersFeature } from './features/offenders/store';

export const applicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/application/application.component').then(c => c.ApplicationComponent),
    children: [
      {
        path: 'account',
        loadChildren: () => 
          import('./features/account/account.routes').then(r => r.accountRoutes)
      },
      {
        path: 'admin',
        loadChildren: () => 
          import('./features/administration/administration.routes').then(r => r.administrationRoutes)
      },
      {
        path: 'dashboard',
        loadChildren: () => 
          import('./features/dashboard/dashboard.routes').then(r => r.dashboardRoutes)
      },
      {
        path: 'offenders',
        providers: [
          provideState(offendersFeature),
          provideEffects(OffendersEffects)
        ],
        loadChildren: () => 
          import('./features/offenders/offenders.routes').then(r => r.offendersRoutes)
      },
      {
        path: 'security',
        loadChildren: () => 
          import('./features/security/security.routes').then(r => r.securityRoutes)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
