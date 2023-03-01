import { Routes } from '@angular/router';
import { InitialOffenderCommentSearchLoadedGuard } from './guards/initial-offender-comment-search-loaded.guard';
import { InitialOffendersSearchLoadedGuard } from './guards/initial-offenders-search-loaded.guard';
import { SelectedOffenderLoadedGuard } from './guards/selected-offender-loaded.guard';

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
    canActivate: [
      SelectedOffenderLoadedGuard
    ],
    children: [
      {
        path: 'edit',
        loadComponent: () => 
          import('./pages/offenders-update/offenders-update.component').then(c => c.OffendersUpdateComponent)
      },
      {
        path: 'profile',
        canActivate: [
          InitialOffenderCommentSearchLoadedGuard
        ],
        loadComponent: () =>
          import('./pages/offender-profile/offender-profile.component').then(c => c.OffenderProfileComponent)
      },
      {
        path: 'cases',
        children: [
          {
            path: ':caseId',
            children: [
              {
                path: 'details',
                loadComponent: () => 
                  import('./pages/offender-cases-details/offender-cases-details.component').then(c => c.OffenderCasesDetailsComponent)
              }
            ]
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'profile',
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

const offenderCasesRoutes: Routes = []
