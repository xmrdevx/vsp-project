import { inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { catchError, debounceTime, filter, map, Observable, of, switchMap, take } from 'rxjs';

import { ValidationResult } from '@vsp/core';

import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserAsyncValidators {
  private readonly _userService: UserService = inject(UserService);

  public validateEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        filter(value => value.trim().length > 0),
        take(1),
        switchMap(() => this._userService.verifyEmail(control.value)
          .pipe(
            map((result: ValidationResult) => result.isValid ? null : { emailExists: true }),
            catchError(error => of(null))
          )
        )
      );
    }
  }

  public validateUserName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        filter(value => value.trim().length > 0),
        take(1),
        switchMap(() => this._userService.verifyUserName(control.value)
          .pipe(
            map((result: ValidationResult) => result.isValid ? null : { userNameExists: true }),
            catchError(error => of(null))
          )
        )
      );
    }
  }
}
