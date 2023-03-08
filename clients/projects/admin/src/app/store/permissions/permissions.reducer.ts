import { createFeature, createReducer, on } from '@ngrx/store';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { createClaimPermissionGroups } from '@vsp/admin/shared/utils';
import { PermissionTemplate } from '@vsp/core';
import { Claim } from 'projects/@vsp/core/src/public-api';

import { PermissionsActions } from './permissions.actions';


export interface PermissionsState {
  assignablePermissions: Claim[] | null,
  claimPermissionGroups: ClaimPermissionNode[] | null,
  permissionTemplates: PermissionTemplate[] | null,
}


export const initialPermissionsState: PermissionsState = {
  assignablePermissions: null,
  claimPermissionGroups: null,
  permissionTemplates: null,
}


const handleGetAssignablePermissionsRequestSuccess = (state: PermissionsState, { permissions }: any) => ({
  ...state,
  assignablePermissions: permissions,
  claimPermissionGroups: createClaimPermissionGroups(permissions)
} as PermissionsState);


const handleGetPermissionTemplatesRequestSuccess = (state: PermissionsState, { permissionTemplates }: any) => ({
  ...state,
  permissionTemplates: permissionTemplates
} as PermissionsState);


const handleAddPermissionTemplateRequest = (state: PermissionsState, { permissionTemplate }: any) => ({
  ...state,
  permissionTemplates: [...(state.permissionTemplates || []), permissionTemplate]
    .sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1;
      return 0;
    })
} as PermissionsState);


const handleUpdatePermissionTemplateRequest = (state: PermissionsState, { permissionTemplate }: any) => ({
  ...state,
  permissionTemplates: (state.permissionTemplates || [])
    .map(template => template.id === permissionTemplate.id ? permissionTemplate : template)
} as PermissionsState);


const handleDeletePermissionTemplateRequest = (state: PermissionsState, { permissionTemplate }: any) => ({
  ...state,
  permissionTemplates: (state.permissionTemplates || [])
    .filter(template => template.id !== permissionTemplate.id)
} as PermissionsState);


export const permissionsFeature = createFeature({
  name: 'permissions',
  reducer: createReducer(
    initialPermissionsState,
    on(
      PermissionsActions.getAssignablePermissionsRequestSuccess,
      handleGetAssignablePermissionsRequestSuccess
    ),
    on(
      PermissionsActions.getPermissionTemplatesRequestSuccess,
      handleGetPermissionTemplatesRequestSuccess
    ),
    on(
      PermissionsActions.addPermissionTemplateRequest,
      handleAddPermissionTemplateRequest
    ),
    on(
      PermissionsActions.updatePermissionTemplateRequest,
      handleUpdatePermissionTemplateRequest
    ),
    on(
      PermissionsActions.deletePermissionTemplateRequest,
      handleDeletePermissionTemplateRequest
    ),
  )
});
