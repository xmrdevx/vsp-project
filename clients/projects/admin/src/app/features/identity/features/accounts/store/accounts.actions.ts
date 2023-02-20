import { createActionGroup, props } from '@ngrx/store';

import { 
  ForgotPassword,
  ResetPassword,
  ResponseMessage } from '@vsp/core';

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Forgot Password Request': props<{ request: ForgotPassword }>(),
    'Forgot Password Request Success': props<{ message: ResponseMessage<void>}>(),
    'Forgot Password Request Failure': props<{ message: ResponseMessage<void>}>(),
    'Set Forgot Password Request Response Message': props<{ message: ResponseMessage<void>| null }>(),
    'Reset Password Request': props<{ request: ResetPassword }>(),
    'Reset Password Request Success': props<{ message: ResponseMessage<void>| null }>(),
    'Reset Password Request Failure': props<{ message: ResponseMessage<void>| null }>(),
    'Set Reset Password Request Response Message': props<{ message: ResponseMessage<void>| null }>()
  }
});
