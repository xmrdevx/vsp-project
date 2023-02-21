import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { 
  ForgotPassword,
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
    // Search User Account Actions
    'Search User Accounts Request': props<{ filter: BasicQuerySearchFilter, pageRequest: PageRequest }>(),
    'Search User Accounts Request Success': props<{ page: Page<User> }>(),
    'Search User Accounts Request Failure': props<{ message: ResponseMessage<void>}>(),
    
    // Create User Account Actions
    'Create User Account Request': props<{ user: User }>(),
    'Create User Account Request Success': props<{ message: ResponseMessage<void>}>(),
    'Create User Account Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Create User Account Request Response Message': props<{ message: ResponseMessage<void>| null }>(),
    
    // Get User Account By Id Actions
    'Get User Account By User Id Request': props<{ userId: string }>(),
    'Get User Account By User Id Request Success': props<{ user: User | null }>(),
    'Get User Account By User Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Selected User Account': props<{ user: User | null }>(),
    
    // Get Users Permissions By Id Actions
    // 'Get User Permissions By User Id Request': props<{ userId: string }>(),
    // 'Get User Permissions By User Id Request Success': props<{ userPermissions: UserPermission[] | null }>(),
    // 'Get User Permissions By User Id Request Failure': props<{ message: ResponseMessage<void>}>(),
    
    // Update User Account Actions
    'Update User Account Request': props<{ userId: string, user: User }>(),
    'Update User Account Request Success': props<{ message: ResponseMessage<void>}>(),
    'Update User Account Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Update User Account Request Response Message': props<{ message: ResponseMessage<void>| null }>(),
    
    'Reset Selected User Account State Slice': emptyProps(),
    'Set User Accounts Search Filter': props<{ filter: BasicQuerySearchFilter }>(),
    'Set User Accounts Table Definition': props<{ tableDefinition: TableDefinition | null }>(),
    'Reset User Accounts Table Definition': emptyProps(),

    // Lockout User Account Actions
    'Lockout User Account Request': props<{ user: User, request: LockoutUserRequest }>(),
    'Lockout User Account Request Success': props<{ user: User, message: ResponseMessage<void> }>(),
    'Lockout User Account Request Error': props<{ message: ResponseMessage<void> }>(),
    'Set Lockout User Account Response Message': props<{ message: ResponseMessage<void> | null }>(),

    // Issue Forgot Password Request
    'Issue Forgot Password Request': props<{ request: ForgotPassword }>(),
    'Issue Forgot Password Request Success': props<{ message: ResponseMessage<void> }>(),
    'Issue Forgot Password Request Failure': props<{ message: ResponseMessage<void> }>(),
    'Set Issue Forgot Password Request Response Message': props<{ message: ResponseMessage<void> | null }>(),
  }
});
