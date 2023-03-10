import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, mergeMap, of, switchMap } from 'rxjs';

import { Address, Link, Offender, OffenderComment, Page, ResponseMessage, ResponseStatus } from '@vsp/core';

import { OffendersService } from '../services/offenders.service';
import { OffendersActions } from './offenders.actions';

@Injectable()
export class OffendersEffects {
  private readonly _actions: Actions = inject(Actions);
  private readonly _offendersService: OffendersService = inject(OffendersService);

  public createOffenderRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.createOffenderRequest),
      exhaustMap(({ offender }) => 
        this._offendersService.createOffender(offender)
          .pipe(
            mergeMap((offender) => of(OffendersActions.createOffenderRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created offender!',
                payload: offender
              } as ResponseMessage<Offender>
            }))),
            catchError((error: any) => of(OffendersActions.createOffenderRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating offender!',
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );


  public createOffenderCommentRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.createOffenderCommentRequest),
      exhaustMap(({ offenderId, comment }) => 
        this._offendersService.createOffenderComment(offenderId, comment)
          .pipe(
            mergeMap((comment) => of(OffendersActions.createOffenderCommentRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created comment!',
                payload: comment
              } as ResponseMessage<OffenderComment>
            }))),
            catchError((error: any) => of(OffendersActions.createOffenderCommentRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating comment!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );


  public createOffenderAddressRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.createOffenderAddressRequest),
      exhaustMap(({ offenderId, address }) => 
        this._offendersService.createOffenderAddress(offenderId, address)
          .pipe(
            mergeMap((address: Address) => of(OffendersActions.createOffenderAddressRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created address!',
                payload: address
              } as ResponseMessage<Address>
            }))),
            catchError((error: any) => of(OffendersActions.createOffenderAddressRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating address!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );


  public createOffenderLinkRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.createOffenderLinkRequest),
      exhaustMap(({ offenderId, link }) => 
        this._offendersService.createOffenderLink(offenderId, link)
          .pipe(
            mergeMap((link: Link) => of(OffendersActions.createOffenderLinkRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully created link!',
                payload: link
              } as ResponseMessage<Link>
            }))),
            catchError((error: any) => of(OffendersActions.createOffenderLinkRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error creating address!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );


  public updateOffenderRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.updateOffenderRequest),
      exhaustMap(({ offenderId, offender }) => 
        this._offendersService.updateOffender(offenderId, offender)
          .pipe(
            mergeMap((offender) => of(OffendersActions.updateOffenderRequestSuccess({
              message: {
                status: ResponseStatus.SUCCESS,
                message: 'Successfully updated offender!',
                payload: offender
              } as ResponseMessage<Offender>
            }))),
            catchError((error: any) => of(OffendersActions.updateOffenderRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error updating offender!'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );

  public searchOffendersReqeust = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.searchOffendersRequest),
      switchMap(({ filter, pageRequest }) => 
        this._offendersService.searchOffenders(filter, pageRequest)
          .pipe(
            mergeMap((page: Page<Offender>) => 
              of(OffendersActions.searchOffendersRequestSuccess({ page }))
            ),
            catchError((error: any) => 
              of(OffendersActions.searchOffendersRequestFailure({
                message: {
                  status: ResponseStatus.ERROR,
                  message: error.error || 'Error searching offenders!'
                } as ResponseMessage<void>
              }))
            )
          )
      )
    )
  );


  public searchOffenderCommentsReqeust = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.searchOffenderCommentsRequest),
      switchMap(({ offenderId, filter, pageRequest }) => 
        this._offendersService.searchOffenderComments(offenderId, filter, pageRequest)
          .pipe(
            mergeMap((page: Page<OffenderComment>) => 
              of(OffendersActions.searchOffenderCommentsRequestSuccess({ page }))
            ),
            catchError((error: any) => 
              of(OffendersActions.searchOffenderCommentsRequestFailure({
                message: {
                  status: ResponseStatus.ERROR,
                  message: error.error || 'Error searching offender comments!'
                } as ResponseMessage<void>
              }))
            )
          )
      )
    )
  );


  public getOffenderByIdRequest = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.getOffenderByIdRequest),
      switchMap(({ offenderId }) =>
        this._offendersService.getOffenderById(offenderId)
          .pipe(
            mergeMap((offender: Offender) => of(
              OffendersActions.getOffenderByIdRequestSuccess({ 
                offender: offender 
              })
            )),
            catchError((error: any) => of(OffendersActions.getOffenderByIdRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error getting offender'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  )

  // public deleteOffenderRequest = createEffect(() => this._actions
  //   .pipe(
  //     ofType(OffendersActions.deleteOffenderRequest),
  //     switchMap(({ offenderId }) =>
  //       this._offendersService.deleteOffender(offenderId)
  //         .pipe(
  //           mergeMap((offender: Offender) => of(
  //             OffendersActions.deleteOffenderRequestSuccess({ 
  //               offender: offender
  //             })
  //           )),
  //           catchError((error: any) => of(OffendersActions.deleteOffenderRequestFailure({
  //             message: {
  //               status: ResponseStatus.ERROR,
  //               message: error?.error || 'Error deleting offender'
  //             } as ResponseMessage<void>
  //           })))
  //         )
  //     )
  //   )
  // )

  // public deleteOffenderRequestSuccess = createEffect(() => this._actions
  //   .pipe(
  //     ofType(OffendersActions.deleteOffenderRequestSuccess),
  //     mergeMap(({ offender }) => of(
  //       OffendersActions.setDeleteOffenderResponseMessage({ 
  //         message: {
  //           status: ResponseStatus.SUCCESS,
  //           message: 'Successfully deleted offender!'
  //         } as ResponseMessage<void>
  //       })
  //     )),
  //     catchError((error: any) => of(
  //       OffendersActions.setDeleteOffenderResponseMessage({
  //         message: {
  //           status: ResponseStatus.ERROR,
  //           message: error?.error || 'Error deleting offender!'
  //         } as ResponseMessage<void>
  //       })
  //     ))
  //   )
  // )

  // public restorePermissionPermissionRequest = createEffect(() => this._actions
  //   .pipe(
  //     ofType(OffendersActions.restoreOffenderRequest),
  //     switchMap(({ offenderId }) =>
  //       this._offendersService.restoreOffender(offenderId)
  //         .pipe(
  //           mergeMap((offender: Offender) => of(
  //             OffendersActions.restoreOffenderRequestSuccess({ 
  //               offender: offender 
  //             })
  //           )),
  //           catchError((error: any) => of(OffendersActions.setRestoreOffenderResponseMessage({
  //             message: {
  //               status: ResponseStatus.ERROR,
  //               message: error?.error || 'Error restoring offender'
  //             } as ResponseMessage<void>
  //           })))
  //         )
  //     )
  //   )
  // )

  // public restoreOffenderRequestSuccess = createEffect(() => this._actions
  //   .pipe(
  //     ofType(OffendersActions.restoreOffenderRequestSuccess),
  //     mergeMap(({ offender }) => of(
  //       OffendersActions.setRestoreOffenderResponseMessage({ 
  //         message: {
  //           status: ResponseStatus.SUCCESS,
  //           message: 'Successfully restored offender!'
  //         } as ResponseMessage<void>
  //       })
  //     )),
  //     catchError((error: any) => of(
  //       OffendersActions.setRestoreOffenderResponseMessage({
  //         message: {
  //           status: ResponseStatus.ERROR,
  //           message: error?.error || 'Error restoring offender!'
  //         } as ResponseMessage<void>
  //       })
  //     ))
  //   )
  // )

  public getOffenderAddresses = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.getOffenderAddressesRequest),
      switchMap(({ offenderId }) =>
        this._offendersService.getOffenderAddresses(offenderId)
          .pipe(
            mergeMap((addresses: Address[]) => of(
              OffendersActions.getOffenderAddressesRequestSuccess({ addresses })
            )),
            catchError((error: any) => of(OffendersActions.getOffenderAddressesRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error getting offender addresses'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );

  public getOffenderLinks = createEffect(() => this._actions
    .pipe(
      ofType(OffendersActions.getOffenderLinksRequest),
      switchMap(({ offenderId }) =>
        this._offendersService.getOffenderLinks(offenderId)
          .pipe(
            mergeMap((links: Link[]) => of(
              OffendersActions.getOffenderLinksRequestSuccess({ links })
            )),
            catchError((error: any) => of(OffendersActions.getOffenderLinksRequestFailure({
              message: {
                status: ResponseStatus.ERROR,
                message: error?.error || 'Error getting offender links'
              } as ResponseMessage<void>
            })))
          )
      )
    )
  );
}
