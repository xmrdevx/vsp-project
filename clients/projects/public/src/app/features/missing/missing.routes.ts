import { Routes } from '@angular/router';
import { SelectedMissingPersonCommentsLoadedGuard } from './guards/selected-missing-person-comments-loaded.guard';

export const missingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/missing/missing.component').then(c => c.MissingComponent)
  },
  {
    path: ':missingId',
    children: [
      {
        path: 'profile',
        canActivate: [SelectedMissingPersonCommentsLoadedGuard],
        loadComponent: () => 
          import('./pages/missing-profile/missing-profile.component').then(c => c.MissingProfileComponent)
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
