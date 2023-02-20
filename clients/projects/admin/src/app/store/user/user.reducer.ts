import { createFeature, createReducer, on } from '@ngrx/store';

import { UserActions } from './user.actions';

export interface UserState {
  // @TODO fix this with type
  userSettings: any | null
}

export const initialUserState: UserState = {
  userSettings: null
}

const handleGetUserSettingsSuccess = (state: UserState, { settings }: any) => ({
  ...state,
  userSettings: settings
} as UserState);

export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialUserState,
    on(UserActions.getUserSettingsRequestSuccess, handleGetUserSettingsSuccess)
  )
});
