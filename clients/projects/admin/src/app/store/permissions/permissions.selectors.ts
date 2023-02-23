import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PermissionsState, permissionsFeature } from './permissions.reducer';

export const selectPermissionsState = createFeatureSelector<PermissionsState>(
  permissionsFeature.name
);

export const selectAssignablePermissions = createSelector(
  selectPermissionsState,
  (state: PermissionsState) => state.assignablePermissions
);

export const selectClaimPermissionGroups = createSelector(
  selectPermissionsState,
  (state: PermissionsState) => state.claimPermissionGroups
);

export const selectPermissionTemplates = createSelector(
  selectPermissionsState,
  (state: PermissionsState) => state.permissionTemplates
);

export const PermissionsSelectors = {
  selectPermissionsState,
  selectAssignablePermissions,
  selectClaimPermissionGroups,
  selectPermissionTemplates
};
