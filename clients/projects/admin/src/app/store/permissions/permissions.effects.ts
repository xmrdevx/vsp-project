import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, switchMap } from 'rxjs';

import { PermissionsService } from '@vsp/admin/core/services';

import { Claim, PermissionTemplate, ResponseMessage, ResponseStatus } from '@vsp/core';

import { PermissionsActions } from './permissions.actions';

@Injectable()
export class PermissionsEffects {
  private readonly _actions: Actions = inject(Actions);
  private readonly _permissionsService: PermissionsService = inject(PermissionsService);

  public getAssignablePermissionRequest = createEffect(() => this._actions
    .pipe(
      ofType(PermissionsActions.getAssignablePermissionsRequest),
      switchMap(() => 
        this._permissionsService.getAssignablePermission()
          .pipe(
            mergeMap((permissions: Claim[]) => of(PermissionsActions.getAssignablePermissionsRequestSuccess({
              permissions: permissions 
            }))),
            catchError((error: any)=> of(PermissionsActions.getAssignablePermissionsRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error.error || 'Error getting assignable permissions!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );

  public getPermissionTemplatesRequest = createEffect(() => this._actions
    .pipe(
      ofType(PermissionsActions.getPermissionTemplatesRequest),
      switchMap(() => 
        this._permissionsService.getTemplates()
          .pipe(
            mergeMap((permissionTemplates: PermissionTemplate[]) => 
              of(PermissionsActions.getPermissionTemplatesRequestSuccess({ permissionTemplates }))
            ),
            catchError((error: any)=> of(PermissionsActions.getAssignablePermissionsRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error.error || 'Error getting permission templates!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );
}
