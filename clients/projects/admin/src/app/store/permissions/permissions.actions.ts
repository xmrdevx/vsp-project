import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Claim, ResponseMessage } from '@vsp/core';

export const PermissionsActions = createActionGroup({
  source: 'Security Permissions',
  events: {
    'Get Assignable Permissions Request': emptyProps(),
    'Get Assignable Permissions Request Success': props<{ permissions: Claim[] }>(),
    'Get Assignable Permissions Request Failure': props<{ message: ResponseMessage<void>}>()
  }
});
