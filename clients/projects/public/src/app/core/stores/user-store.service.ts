import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';

import { ResponseMessage, LoadingState, ResponseStatus, RegistrationUser } from '@vsp/core';
import { catchError, EMPTY, Observable, of, switchMap, take, tap } from 'rxjs';

import { UserService } from '../services';

export interface UserState {
  registerUserResponseMessage: ResponseMessage<void>| null,
  registrationLoadingState: LoadingState,
  updateUserResponseMessage: ResponseMessage<void>| null,
  userSettings: any | null
}

export const initialUserState: UserState = {
  registerUserResponseMessage: null,
  registrationLoadingState: LoadingState.INITIAL,
  updateUserResponseMessage: null,
  userSettings: null
} as UserState

@Injectable({
  providedIn: 'root'
})
export class UserStore extends ComponentStore<UserState> {
  public readonly registerUserResponseMessage$ = this.select(state => state.registerUserResponseMessage);
  public readonly registrationLoadingState$ = this.select(state => state.registrationLoadingState);
  public readonly updateUserResponseMessage$ = this.select(state => state.updateUserResponseMessage);
  public readonly userSettings$ = this.select(state => state.userSettings);

  constructor(private _userService: UserService) {
    super({ ... initialUserState });
  }

  public readonly setRegisterUserResponseMessage = this.updater((state: UserState, message: ResponseMessage<void>| null) => ({
    ...state,
    registerUserResponseMessage: message
  }));

  public readonly setUpdateUserResponseMessage = this.updater((state: UserState, message: ResponseMessage<void>) => ({
    ...state,
    updateUserResponseMessage: message
  }));

  public readonly setUserSettings = this.updater((state: UserState, settings: any | null) => ({
    ...state,
    userSettings: settings
  }));

  public readonly resetUserState = this.updater(() => ({
    ...initialUserState
  }));

  public readonly setRegistrationLoadingState = this.updater((state: UserState, loadingState: LoadingState) => ({
    ...state,
    registrationLoadingState: loadingState
  }));

  public readonly registerUser = this.effect((registration$: Observable<RegistrationUser>) => {
    return registration$
      .pipe(
        tap(() => this.setRegistrationLoadingState(LoadingState.LOADING)),
        switchMap((registration: RegistrationUser) => {
          return this._userService.registerUser(registration).pipe(
            take(1),
            tapResponse(
              userAccount => {
                this.setRegisterUserResponseMessage({ 
                  status: ResponseStatus.SUCCESS, 
                  message: 'Successfully create new user!' 
                });
                this.setRegistrationLoadingState(LoadingState.LOADED);
              },
              (e: string) => {
                this.setRegisterUserResponseMessage({ 
                  status: ResponseStatus.ERROR, 
                  message: 'Error creating new user' 
                });
                this.setRegistrationLoadingState(LoadingState.ERROR);
              }
            ),
            catchError((error) => {
              this.setRegisterUserResponseMessage({ 
                status: ResponseStatus.ERROR, 
                message: 'Error creating new user' 
              });
              this.setRegistrationLoadingState(LoadingState.ERROR);
              return of(error);
            })
          );
        })
      )
  });

  public getUserSettings(): void {
    this._userService.getUserSettings()
      .pipe(
        take(1),
        catchError((error) => {
          this.setUserSettings(null);
          return EMPTY;
        })
      )
      .subscribe((userSettings: any) => {
        this.setUserSettings(userSettings);
      });
  };
}
