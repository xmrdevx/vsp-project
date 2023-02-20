import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { 
  LockoutUserRequest,
  Page, 
  PageRequest, 
  ResponseMessage, 
  User } from '@vsp/core';

import { TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter } from '@vsp/query-search-filters';

export const UserAccountsActions = createActionGroup({
  source: 'User Accounts',
  events: {
    'Search User Accounts Request': props<{ filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search User Accounts Request Success': props<{ page: Page<User> }>(),
    'Search User Accounts Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Create User Account Request': props<{ userAccount: UserAccount }>(),
    // 'Create User Account Request Success': props<{ message: ResponseMessage<void>}>(),
    // 'Create User Account Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Set Create User Account Request Response Message': props<{ message: ResponseMessage<void>| null }>(),
    // 'Get User Account By User Id Request': props<{ userId: string }>(),
    // 'Get User Account By User Id Request Success': props<{ user: UserAccountDto | null }>(),
    // 'Get User Account By User Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Set Selected User Account': props<{ user: UserAccountDto | null }>(),
    // 'Get User Permissions By User Id Request': props<{ userId: string }>(),
    // 'Get User Permissions By User Id Request Success': props<{ userPermissions: UserPermission[] | null }>(),
    // 'Get User Permissions By User Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Update User Account Request': props<{ userId: string, userAccount: UserAccount }>(),
    // 'Update User Account Request Success': props<{ message: ResponseMessage<void>}>(),
    // 'Update User Account Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Set Update User Account Request Response Message': props<{ message: ResponseMessage<void>| null }>(),
    
    // @TODO remove these??
    // 'Get All Template Module Permission Names Request': emptyProps(),
    // 'Get All Template Module Permission Names Request Success': props<{ templateModulePermissionNames: TemplateModulePermissionName[] }>(),
    // 'Get All Template Module Permission Names Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Set Template Module Permission Names': props<{ templateModulePermissionNames: TemplateModulePermissionName[] | null }>(),
    // 'Get Template Module Permission Name By Id Request': props<{ templateModulePermissionNameId: string }>(),
    // 'Get Template Module Permission Name By Id Request Success': props<{ templateModulePermissionName: TemplateModulePermissionName }>(),
    // 'Get Template Module Permission Name By Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Set Selected Template Module Permission Name': props<{ templateModulePermissionName: TemplateModulePermissionName | null }>(),
    
    
    'Reset Selected User Account State Slice': emptyProps(),
    'Set User Accounts Search Filter': props<{ filter: BasicQuerySearchFilter }>(),
    'Set User Accounts Table Definition': props<{ tableDefinition: TableDefinition | null }>(),
    'Reset User Accounts Table Definition': emptyProps(),

    'Lockout User Account Request': props<{ user: User, request: LockoutUserRequest }>(),
    'Lockout User Account Request Success': props<{ user: User, message: ResponseMessage<void> }>(),
    'Lockout User Account Request Error': props<{ message: ResponseMessage<void> }>(),
    'Set Lockout User Account Response Message': props<{ message: ResponseMessage<void> | null }>(),
  }
});
