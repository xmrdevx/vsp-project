import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Claim, PermissionTemplate, ResponseMessage } from '@vsp/core';

export const PermissionsActions = createActionGroup({
  source: 'Security Permissions',
  events: {
    // Assignable permission claims
    'Get Assignable Permissions Request': emptyProps(),
    'Get Assignable Permissions Request Success': props<{ permissions: Claim[] }>(),
    'Get Assignable Permissions Request Failure': props<{ message: ResponseMessage<void>}>(),

    // Assignable permission templates
    'Get Permission Templates Request': emptyProps(),
    'Get Permission Templates Request Success': props<{ permissionTemplates: PermissionTemplate[] }>(),
    'Get Permission Templates Request Failure': props<{ message: ResponseMessage<void>}>()
  }
});
