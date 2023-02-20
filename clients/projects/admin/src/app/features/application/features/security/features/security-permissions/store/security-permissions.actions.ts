import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Page, PageRequest, ResponseMessage, TemplateModulePermissionName } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

export const SecurityPermissionsActions = createActionGroup({
  source: 'Secuirty Permissions',
  events : {
    'Search Template Module Permissions Names Request': props<{ filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search Template Module Permissions Names Request Success': props<{ page: Page<TemplateModulePermissionName> }>(),
    'Search Template Module Permissions Names Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Template Module Permissions Search Filter': props<{ filter: BasicQuerySearchFilter }>(),
    'Create Template Module Permission Name Request': props<{ templateModulePermissionName: TemplateModulePermissionName }>(),
    'Create Template Module Permission Name Request Success': props<{ message: ResponseMessage<void>}>(),
    'Create Template Module Permission Name Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Create Template Module Permission Name Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Update Template Module Permission Name Request': props<{ templateModulePermissionNameId: string, templateModulePermissionName: TemplateModulePermissionName }>(),
    'Update Template Module Permission Name Request Success': props<{ message: ResponseMessage<void>}>(),
    'Update Template Module Permission Name Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Update Template Module Permission Name Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Get Template Module Permission Name By Id Request': props<{ templateModulePermissionNameId: string }>(),
    'Get Template Module Permission Name By Id Request Success': props<{ templateModulePermissionName: TemplateModulePermissionName }>(),
    'Get Template Module Permission Name By Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Selected Template Module Permission Name': props<{ templateModulePermissionName: TemplateModulePermissionName | null }>(),
    'Delete Template Module Permission Name Request': props<{ templateModulePermissionNameId: string }>(),
    'Delete Template Module Permission Name Request Success': props<{ templateModulePermissionName: TemplateModulePermissionName }>(),
    'Delete Template Module Permission Name Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Delete Template Module Permission Name Response Message': props<{ message: ResponseMessage<void>}>(),
    'Set Security Permissions Table Definition': props<{ tableDefinition: TableDefinition | null }>(),
    'Reset Security Permissions Table Definition': emptyProps(),
    'Restore Template Module Permission Name Request': props<{ templateModulePermissionNameId: string }>(),
    'Restore Template Module Permission Name Request Success': props<{ templateModulePermissionName: TemplateModulePermissionName }>(),
    'Restore Template Module Permission Name Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Restore Template Module Permission Name Response Message': props<{ message: ResponseMessage<void>}>(),
  }
});
