import { createFeature, createReducer, on } from '@ngrx/store';
import { defaultBasicQuerySearchWithDeletedFilter } from '@vsp/admin/core/constants';

import { Page, PermissionTemplate, ResponseMessage } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';
import { getDefaultSecurityPermissionsTableDefinition } from '../pages/security-permissions/security-permissions-table-definition.defaults';

import { SecurityPermissionsActions } from './security-permissions.actions';

export const securityPermissionsFeatureKey = 'securityPermissions';

export interface SecurityPermissionsState {
  createPermissionTemplateResponseMessage: ResponseMessage<void>| null,
  updatePermissionTemplateResponseMessage: ResponseMessage<void>| null,
  deletePermissionTemplateResponseMessage: ResponseMessage<void>| null,
  restorePermissionTemplateResponseMessage: ResponseMessage<void>| null,
  permissionTemplatesPage: Page<PermissionTemplate> | null,
  permissionTemplatesSearchFilter: BasicQuerySearchFilter | null,
  permissionTemplatesTableDefinition: TableDefinition | null,
  selectedPermissionTemplate: PermissionTemplate | null,
}

export const initialSecurityPermissionsState: SecurityPermissionsState = {
  createPermissionTemplateResponseMessage: null,
  updatePermissionTemplateResponseMessage: null,
  deletePermissionTemplateResponseMessage: null,
  restorePermissionTemplateResponseMessage: null,
  permissionTemplatesPage: null,
  permissionTemplatesSearchFilter: defaultBasicQuerySearchWithDeletedFilter,
  permissionTemplatesTableDefinition: getDefaultSecurityPermissionsTableDefinition(),
  selectedPermissionTemplate: null,
}

const handleSeachPermissionTemplatesRequestSuccess = (state: SecurityPermissionsState, { page }: any) => ({
  ...state,
  permissionTemplatesPage: page
} as SecurityPermissionsState);

const handleSetPermissionTemplatesSearchFilter = (state: SecurityPermissionsState, { filter }: any) => ({
  ...state,
  permissionTemplatesSearchFilter: filter
} as SecurityPermissionsState);

const handleCreatePermissionTemplateResponseMessage = (state: SecurityPermissionsState, { message }: any) => ({
  ...state,
  permissionTemplatesPage: null,
  createPermissionTemplateResponseMessage: message
} as SecurityPermissionsState);

const handleUpdatePermissionTemplateResponseMessage = (state: SecurityPermissionsState, { message }: any) => ({
  ...state,
  permissionTemplatesPage: null,
  updatePermissionTemplateResponseMessage: message
} as SecurityPermissionsState);

const handleGetPermissionTemplateByIdRequestSuccess = (state: SecurityPermissionsState, { permissionTemplate }: any) => ({
  ...state,
  selectedPermissionTemplate: permissionTemplate
} as SecurityPermissionsState);

const handleDeletePermissionTemplateRequestSuccess = (state: SecurityPermissionsState, { permissionTemplate }: any) => {
  const permissionTemplatesPage: Page<PermissionTemplate> | null = !state?.permissionTemplatesPage ? null : {
    ...state.permissionTemplatesPage,
    elements: state.permissionTemplatesPage
      ?.elements?.map((template: PermissionTemplate) => {
        return template.id === permissionTemplate.id ? permissionTemplate : template
      }) 
      || []
  } as Page<PermissionTemplate>;
  
  return {
    ...state,
    permissionTemplatesPage: permissionTemplatesPage
  } as SecurityPermissionsState
};

const handleRestorePermissionTemplateRequestSuccess = (state: SecurityPermissionsState, { permissionTemplate }: any) => {
  const permissionTemplatesPage: Page<PermissionTemplate> | null = !state?.permissionTemplatesPage ? null : {
    ...state.permissionTemplatesPage,
    elements: state.permissionTemplatesPage
      ?.elements?.map((template: PermissionTemplate) => {
        return template.id === permissionTemplate.id ? permissionTemplate : template
      }) 
      || []
  } as Page<PermissionTemplate>;
  
  return {
    ...state,
    permissionTemplatesPage: permissionTemplatesPage
  } as SecurityPermissionsState
};

const handleSetDeletePermissionPermissionResponseMessage = (state: SecurityPermissionsState, { message }: any) => ({
  ...state,
  deletePermissionTemplateResponseMessage: message
} as SecurityPermissionsState);

const handleSetRestorePermissionTemplateResponseMessage = (state: SecurityPermissionsState, { message }: any) => ({
  ...state,
  restorePermissionTemplateResponseMessage: message
} as SecurityPermissionsState);

const handleSetPermissionTemplateTableDefinition = (state: SecurityPermissionsState, { tableDefinition }: any) => ({
  ...state,
  permissionTemplatesTableDefinition: tableDefinition
} as SecurityPermissionsState);

const handleResetPermissionTemplateTableDefinition = (state: SecurityPermissionsState) => ({
  ...state,
  permissionTemplatesTableDefinition: getDefaultSecurityPermissionsTableDefinition()
} as SecurityPermissionsState);

export const securityPermissionsFeature = createFeature({
  name: 'securityPermissions',
  reducer: createReducer(
    initialSecurityPermissionsState,
    on(
      SecurityPermissionsActions.searchPermissionTemplatesRequestSuccess,
      handleSeachPermissionTemplatesRequestSuccess 
    ),
    on(
      SecurityPermissionsActions.setPermissionTemplatesSearchFilter,
      handleSetPermissionTemplatesSearchFilter 
    ),
    on(
      SecurityPermissionsActions.createPermissionTemplateRequestSuccess,
      SecurityPermissionsActions.createPermissionTemplateRequestFailure,
      SecurityPermissionsActions.setCreatePermissionTemplateResponseMessage,
      handleCreatePermissionTemplateResponseMessage 
    ),
    on(
      SecurityPermissionsActions.updatePermissionTemplateRequestSuccess,
      SecurityPermissionsActions.updatePermissionTemplateRequestFailure,
      SecurityPermissionsActions.setUpdatePermissionTemplateResponseMessage,
      handleUpdatePermissionTemplateResponseMessage 
    ),
    on(
      SecurityPermissionsActions.getPermissionTemplateByIdRequestSuccess,
      SecurityPermissionsActions.setSelectedPermissionTemplate,
      handleGetPermissionTemplateByIdRequestSuccess 
    ),
    on(
      SecurityPermissionsActions.deletePermissionTemplateRequestSuccess,
      handleDeletePermissionTemplateRequestSuccess
    ),
    on(
      SecurityPermissionsActions.setDeletePermissionTemplateResponseMessage,
      SecurityPermissionsActions.deletePermissionTemplateRequestFailure,
      handleSetDeletePermissionPermissionResponseMessage 
    ),
    on(
      SecurityPermissionsActions.setPermissionTemplatesTableDefinition,
      handleSetPermissionTemplateTableDefinition
    ),
    on(
      SecurityPermissionsActions.resetPermissionsTemplatesTableDefinition,
      handleResetPermissionTemplateTableDefinition 
    ),
    on(
      SecurityPermissionsActions.restorePermissionTemplateRequestSuccess,
      handleRestorePermissionTemplateRequestSuccess 
    ),
    on(
      SecurityPermissionsActions.setRestorePermissionTemplateResponseMessage,
      handleSetRestorePermissionTemplateResponseMessage
    )
  )
});
