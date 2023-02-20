import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { userAccountsFeature, UserAccountsEffects } from './features/user-accounts/store';

export const administrationRoutes: Routes = [
  {
    path: 'settings',
    loadChildren: () => 
      import('./features/settings/settings.routes').then(r => r.settingRoutes)
  },
  {
    path: 'user-accounts',
    providers: [
      provideState(userAccountsFeature),
      provideEffects(UserAccountsEffects),
    ],
    loadChildren: () => 
      import('./features/user-accounts/user-accounts.routes').then(r => r.userAccountsRoutes)
  },
  {
    path: '**',
    redirectTo: 'settings',
    pathMatch: 'full'
  }
];
