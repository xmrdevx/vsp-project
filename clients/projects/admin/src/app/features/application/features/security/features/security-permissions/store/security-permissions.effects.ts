import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Page, PermissionTemplate, ResponseMessage, ResponseStatus } from '@vsp/core';
import { PermissionsService } from '@vsp/admin/core/services';
import { catchError, exhaustMap, mergeMap, of, switchMap } from 'rxjs';

import { SecurityPermissionsActions } from './security-permissions.actions';

@Injectable()
export class SecurityPermissionsEffects {
  private readonly _actions: Actions = inject(Actions);
  private readonly _permissionsService: PermissionsService = inject(PermissionsService);

  public createPermissionTemplateRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.createPermissionTemplateRequest),
      exhaustMap(({ permissionTemplate }) => 
        this._permissionsService.createTemplate(permissionTemplate)
          .pipe(
            mergeMap((templateModulePermission) => of(SecurityPermissionsActions.createPermissionTemplateRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created permission template!'
              } as ResponseMessage<void>
            }))),
            catchError((error: any) => of(SecurityPermissionsActions.createPermissionTemplateRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating permission template!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );

  public updatePermissionTemplateRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.updatePermissionTemplateRequest),
      exhaustMap(({ templateId, permissionTemplate }) => 
        this._permissionsService.updateTemplate(templateId, permissionTemplate)
          .pipe(
            mergeMap((templateModulePermission) => of(SecurityPermissionsActions.updatePermissionTemplateRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created permission template!'
              } as ResponseMessage<void>
            }))),
            catchError((error: any) => of(SecurityPermissionsActions.updatePermissionTemplateRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating permission template!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );

  public searchPermissionTemplateRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.searchPermissionTemplatesRequest),
      switchMap(({ filter, pageRequest }) => 
        this._permissionsService.searchTemplates(filter, pageRequest)
          .pipe(
            mergeMap((page: Page<PermissionTemplate>) => 
              of(SecurityPermissionsActions.searchPermissionTemplatesRequestSuccess({ page: page }))),
            catchError((error: any) => 
              of(SecurityPermissionsActions.searchPermissionTemplatesRequestFailure({
                message: {
                  status: ResponseStatus.ERROR,
                  message: error.error || 'Error searching permission templates!'
                } as ResponseMessage<void>
              }))
            )
          )
      )
    )
  );

  public getPermissionTemplateByIdRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.getPermissionTemplateByIdRequest),
      switchMap(({ templateId }) =>
        this._permissionsService.getTemplateById(templateId)
          .pipe(
            mergeMap((permissionTemplate: PermissionTemplate) => of(
              SecurityPermissionsActions.getPermissionTemplateByIdRequestSuccess({ 
                permissionTemplate: permissionTemplate 
              })
            )),
            catchError((error: any) => of(SecurityPermissionsActions.getPermissionTemplateByIdRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error getting permission template'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  )

  public deletePermissionTemplateRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.deletePermissionTemplateRequest),
      switchMap(({ templateId }) =>
        this._permissionsService.deleteTemplate(templateId)
          .pipe(
            mergeMap((permissionTemplate: PermissionTemplate) => of(
              SecurityPermissionsActions.deletePermissionTemplateRequestSuccess({ 
                permissionTemplate: permissionTemplate
              })
            )),
            catchError((error: any) => of(SecurityPermissionsActions.deletePermissionTemplateRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error deleting permission template'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  )

  public deletePermissionTemplateRequestSuccess = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.deletePermissionTemplateRequestSuccess),
      mergeMap(({ permissionTemplate }) => of(
        SecurityPermissionsActions.setDeletePermissionTemplateResponseMessage({ 
          message: {
            status: ResponseStatus.SUCCESS,
            message: 'Successfully deleted permission template!'
          } as ResponseMessage<void>
        })
      )),
      catchError((error: any) => of(
        SecurityPermissionsActions.setDeletePermissionTemplateResponseMessage({
          message: {
            status: ResponseStatus.ERROR,
            message: error?.error || 'Error deleting permission template!'
          } as ResponseMessage<void>
        })
      ))
    )
  )

  public restorePermissionPermissionRequest = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.restorePermissionTemplateRequest),
      switchMap(({ templateId }) =>
        this._permissionsService.restoreTemplate(templateId)
          .pipe(
            mergeMap((permissionTemplate: PermissionTemplate) => of(
              SecurityPermissionsActions.restorePermissionTemplateRequestSuccess({ 
                permissionTemplate: permissionTemplate 
              })
            )),
            catchError((error: any) => of(SecurityPermissionsActions.setRestorePermissionTemplateResponseMessage({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error restoring permission template'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  )

  public restorePermissionTemplateRequestSuccess = createEffect(() => this._actions
    .pipe(
      ofType(SecurityPermissionsActions.restorePermissionTemplateRequestSuccess),
      mergeMap(({ permissionTemplate }) => of(
        SecurityPermissionsActions.setRestorePermissionTemplateResponseMessage({ 
          message: {
            status: ResponseStatus.SUCCESS,
            message: 'Successfully restored permission template!'
          } as ResponseMessage<void>
        })
      )),
      catchError((error: any) => of(
        SecurityPermissionsActions.setRestorePermissionTemplateResponseMessage({
          message: {
            status: ResponseStatus.ERROR,
            message: error?.error || 'Error restoring permission template!'
          } as ResponseMessage<void>
        })
      ))
    )
  )
}