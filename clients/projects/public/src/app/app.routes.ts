import { Routes } from '@angular/router';

import { LatestOffendersLoadedGuard, LatestMissingLoadedGuard } from './core/guards';
import { AuthenticatedGuard } from './features/authentication/guards/authenticated.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    canActivate: [LatestOffendersLoadedGuard],
    // canActivate: [LatestOffendersLoadedGuard, LatestMissingLoadedGuard],
    loadChildren: () => 
      import('./features/home/home.routes').then(r => r.homeRoutes)
  },
  {
    path: 'explore',
    loadChildren: () => 
      import('./features/explore/explore.routes').then(c => c.exploreRoutes)
  },
  {
    path: 'offenders',
    loadChildren: () => 
      import('./features/offenders/offenders.routes').then(r => r.offenderRoutes)
  },
  // {
  //   path: 'teams',
  //   loadChildren: () => 
  //     import('./features/teams/teams.routes').then(r => r.teamsRoutes)
  // },
  // {
  //   path: 'missing',
  //   loadChildren: () => 
  //     import('./features/missing/missing.routes').then(c => c.missingRoutes)
  // },
  {
    path: 'report',
    loadChildren: () => 
      import('./features/report/report.routes').then(r => r.reportRoutes)
  },
  {
    path: 'help',
    loadChildren: () => 
      import('./features/help/help.routes').then(c => c.homeRoutes)
  },
  {
    path: 'contact',
    loadChildren: () => 
      import('./features/contact/contact.routes').then(r => r.contactRoutes)
  },
  // {
  //   path: 'videos',
  //   loadChildren: () => 
  //     import('./features/videos/videos.routes').then(r => r.videoRoutes)
  // },
  // {
  //   path: 'account',
  //   canActivate: [AuthenticatedGuard],
  //   loadChildren: () => 
  //     import('./features/account/account.routes').then(r => r.accountRoutes)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => 
  //     import('./features/authentication/authentication.routes').then(r =>  r.authenticationRoutes)
  // },
  {
    path: 'error',
    loadChildren: () => 
      import('./features/errors/errors.routes').then(r => r.errorRoutes)
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./features/identity/identity.routes').then(r => r.identityRoutes)    
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
