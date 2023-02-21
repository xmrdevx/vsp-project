import { inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { catchError, debounceTime, filter, map, Observable, of, switchMap, take } from 'rxjs';
import { ValidationResult } from '@vsp/core';

import { AccountsService } from '@vsp/admin/core/services';

@Injectable({
  providedIn: 'root'
})
export class UserValidators  {
  private readonly _accountsService: AccountsService = inject(AccountsService);

  public validateEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        filter(value => value.trim().length > 0),
        take(1),
        switchMap(() => this._accountsService.doesEmailExist(control.value)
          .pipe(
            map(() => ({ emailExists: true })),
            catchError(error => of(null))
          )
        )
      );
    }
  }

  public validateUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        filter(value => value.trim().length > 0),
        take(1),
        switchMap(() => this._accountsService.doesUsernameExist(control.value)
          .pipe(
            map(() => ({ usernameExists: true })),
            catchError(error => of(null))
          )
        )
      );
    }
  }
}