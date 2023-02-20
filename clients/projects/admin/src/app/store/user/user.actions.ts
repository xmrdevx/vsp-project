import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ResponseMessage } from '@vsp/core';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get User Settings Request': emptyProps(),

    // @TODO fix settinsg type
    'Get User Settings Request Success': props<{ settings: any }>(),
    'Get User Settings Request Failure': props<{ message: ResponseMessage<void>}>(),
    // 'Get User Permissions Request': emptyProps(),
    // 'Get User Permissions Request Success': props<{ userModulePermissions: UserModulePermissions }>(),
    // 'Get User Permissions Request Failure': props<{ message: ResponseMessage<void>}>()
  }
});
