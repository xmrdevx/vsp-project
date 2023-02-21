import { createFeature, createReducer, on } from '@ngrx/store';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { createClaimPermissionGroups } from '@vsp/admin/shared/utils';
import { Claim } from 'projects/@vsp/core/src/public-api';

import { PermissionsActions } from './permissions.actions';

export interface PermissionsState {
  assignablePermissions: Claim[] | null,
  claimPermissionGroups: ClaimPermissionNode[] | null,
}

export const initialPermissionsState: PermissionsState = {
  assignablePermissions: null,
  claimPermissionGroups: null,
}

const handleGetAssignablePermissionsRequestSuccess = (state: PermissionsState, { permissions }: any) => ({
  ...state,
  assignablePermissions: permissions,
  claimPermissionGroups: createClaimPermissionGroups(permissions)
} as PermissionsState);

export const permissionsFeature = createFeature({
  name: 'permissions',
  reducer: createReducer(
    initialPermissionsState,
    on(
      PermissionsActions.getAssignablePermissionsRequestSuccess,
      handleGetAssignablePermissionsRequestSuccess
    )
  )
});
