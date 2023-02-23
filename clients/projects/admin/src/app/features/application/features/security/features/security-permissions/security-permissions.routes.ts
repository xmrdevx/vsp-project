import { Routes } from '@angular/router';

import { AvailablePermissionsLoadedGuard } from '@vsp/admin/core/guards';

import { InitialPermissionTemplatesSearchLoadedGuard } from './guards/initial-permission-templates-search-loaded.guard';
import { SelectedPermissionTemplateLoadedGuard } from './guards/selected-permission-template-loaded.guard';

export const securityPermissionsRoutes: Routes = [
  {
    path: '',
    canActivate: [InitialPermissionTemplatesSearchLoadedGuard],
    loadComponent: () => 
      import('./pages/security-permissions/security-permissions.component')
        .then(c => c.SecurityPermissionsComponent)
  },
  {
    path: 'create',
    canActivate: [AvailablePermissionsLoadedGuard],
    loadComponent: () => 
      import('./pages/security-permissions-create/security-permissions-create.component')
        .then(c => c.SecurityPermissionsCreateComponent)
  },
  // {
  //   path: ':templateId',
  //   canActivate: [SelectedPermissionTemplateLoadedGuard],
  //   children: [
  //     {
  //       path: 'edit',
  //       canActivate: [AvailablePermissionsLoadedGuard],
  //       loadComponent: () => 
  //         import('./pages/security-permissions-update/security-permissions-update.component')
  //           .then(c => c.SecurityPermissionsUpdateComponent)
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
