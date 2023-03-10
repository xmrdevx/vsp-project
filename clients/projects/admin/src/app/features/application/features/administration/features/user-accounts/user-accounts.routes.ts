import { Routes } from '@angular/router';
import { AvailablePermissionsLoadedGuard, PermissionTemplatesLoadedGuard } from '@vsp/admin/core/guards';

import { InitialUserAccountsSearchLoadedGuard } from './guards/initial-user-accounts-search-loaded.guard';
import { SelectedUsersAccountLoadedGuard } from './guards/selected-users-account-loaded.guard';

export const userAccountsRoutes: Routes = [
  {
    path: '',
    canActivate: [InitialUserAccountsSearchLoadedGuard],
    loadComponent: () => 
      import('./pages/user-accounts-overview/user-accounts-overview.component')
        .then(c => c.UserAccountsOverviewComponent)
  },
  {
    path: 'create',
    canActivate: [
      AvailablePermissionsLoadedGuard,
      PermissionTemplatesLoadedGuard,
    ],
    loadComponent: () => 
      import('./pages/user-accounts-create/user-accounts-create.component')
        .then(c => c.UserAccountsCreateComponent)
  },
  {
    path: ':userId',
    children: [
      {
        path: 'edit',
        canActivate: [
          AvailablePermissionsLoadedGuard,
          PermissionTemplatesLoadedGuard,
          SelectedUsersAccountLoadedGuard
        ],
        loadComponent: () => 
          import('./pages/user-accounts-update/user-accounts-update.component')
            .then(c => c.UserAccountsUpdateComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
