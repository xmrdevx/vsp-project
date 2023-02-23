import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SecurityPermissionsState, securityPermissionsFeature } from './security-permissions.reducer';

export const selectSecurityPermissionsState = createFeatureSelector<SecurityPermissionsState>(
  securityPermissionsFeature.name
);

export const selectPermissionTemplatesPage = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.permissionTemplatesPage
);

export const selectPermissionTemplatesSearchFilter = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.permissionTemplatesSearchFilter
);

export const selectCreatePermissionTemplateResponseMessage = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.createPermissionTemplateResponseMessage
);

export const selectUpdatePermissionTemplateResponseMessage = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.updatePermissionTemplateResponseMessage
);

export const selectSelectedPermissionTemplate = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.selectedPermissionTemplate
);

export const selectDeleteTemplateModulePermissionNameResponseMessage = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.deletePermissionTemplateResponseMessage
);

export const selectPermissionTemplatesTableDefinition = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.permissionTemplatesTableDefinition
);

export const selectRestorePermissionTemplateResponseMessage = createSelector(
  selectSecurityPermissionsState,
  (state: SecurityPermissionsState) => state.restorePermissionTemplateResponseMessage
);

export const SecurityPermissionsSelectors = {
  selectSecurityPermissionsState,
  selectPermissionTemplatesPage,
  selectPermissionTemplatesSearchFilter,
  selectCreatePermissionTemplateResponseMessage,
  selectUpdatePermissionTemplateResponseMessage,
  selectSelectedPermissionTemplate,
  selectDeleteTemplateModulePermissionNameResponseMessage,
  selectPermissionTemplatesTableDefinition,
  selectRestorePermissionTemplateResponseMessage,
};
