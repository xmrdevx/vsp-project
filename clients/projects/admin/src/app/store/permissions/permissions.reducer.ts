import { createFeature, createReducer, on } from '@ngrx/store';
import { Claim } from 'projects/@vsp/core/src/public-api';

import { PermissionsActions } from './permissions.actions';

export interface PermissionsState {
  assignablePermissions: Claim[] | null
}

export const initialPermissionsState: PermissionsState = {
  assignablePermissions: null
}

const handleGetAssignablePermissionsRequestSuccess = (state: PermissionsState, { permissions }: any) => ({
  ...state,
  assignablePermissions: permissions
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
