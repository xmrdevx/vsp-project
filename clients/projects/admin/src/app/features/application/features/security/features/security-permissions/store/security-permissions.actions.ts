import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Page, PageRequest, ResponseMessage, PermissionTemplate } from '@vsp/core';
import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

export const SecurityPermissionsActions = createActionGroup({
  source: 'Secuirty Permissions',
  events : {
    'Search Permission Templates Request': props<{ filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search Permission Templates Request Success': props<{ page: Page<PermissionTemplate> }>(),
    'Search Permission Templates Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Permission Templates Search Filter': props<{ filter: BasicQuerySearchFilter }>(),
    'Create Permission Template Request': props<{ permissionTemplate: PermissionTemplate }>(),
    'Create Permission Template Request Success': props<{ message: ResponseMessage<void>}>(),
    'Create Permission Template Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Create Permission Template Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Update Permission Template Request': props<{ templateId: string, permissionTemplate: PermissionTemplate }>(),
    'Update Permission Template Request Success': props<{ message: ResponseMessage<void>}>(),
    'Update Permission Template Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Update Permission Template Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Get Permission Template By Id Request': props<{ templateId: string }>(),
    'Get Permission Template By Id Request Success': props<{ permissionTemplate: PermissionTemplate }>(),
    'Get Permission Template By Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Selected Permission Template': props<{ permissionTemplate: PermissionTemplate | null }>(),
    'Delete Permission Template Request': props<{ templateId: string }>(),
    'Delete Permission Template Request Success': props<{ permissionTemplate: PermissionTemplate }>(),
    'Delete Permission Template Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Delete Permission Template Response Message': props<{ message: ResponseMessage<void>}>(),
    'Set Permission Templates Table Definition': props<{ tableDefinition: TableDefinition | null }>(),
    'Reset Permissions Templates Table Definition': emptyProps(),
    'Restore Permission Template Request': props<{ templateId: string }>(),
    'Restore Permission Template Request Success': props<{ permissionTemplate: PermissionTemplate }>(),
    'Restore Permission Template Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Restore Permission Template Response Message': props<{ message: ResponseMessage<void>}>(),
  }
});
