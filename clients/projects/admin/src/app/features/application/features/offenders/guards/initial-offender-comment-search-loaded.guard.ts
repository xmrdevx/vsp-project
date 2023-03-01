import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { catchError, combineLatest, filter, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { OffenderComment, Page } from '@vsp/core';

import { OffendersActions, OffendersSelectors } from '../store';
import { defaultBasicQuerySearchFilter, defaultPageRequest } from '@vsp/admin/core/constants';
import { defaultOffenderCommentsSort } from '../constants/sort.defaults';

@Injectable({
  providedIn: 'root'
})
export class InitialOffenderCommentSearchLoadedGuard implements CanActivate {
  private _store: Store = inject(Store);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const offenderId: string = route.params['offenderId'] || '';
    return this._getOffenderCommentsPageFromStoreOrApi(offenderId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
  
  private _getOffenderCommentsPageFromStoreOrApi(offenderId: string): Observable<Page<OffenderComment> | null> {

    // @TODO remove search filter???
    
    return combineLatest([
        this._store.select(OffendersSelectors.selectSelectedOffender),
        this._store.select(OffendersSelectors.selectOffendersSearchFilter),
        this._store.select(OffendersSelectors.selectCurrentOffenderCommentsPage)
      ])
      .pipe(tap(([offender, filter, page]) => {
        if (!page && offender?.id) {
          this._store.dispatch(OffendersActions.searchOffenderCommentsRequest({
            offenderId: offender.id,
            filter: filter || defaultBasicQuerySearchFilter,
            pageRequest: {
              ...defaultPageRequest,
              sort: {
                ...defaultOffenderCommentsSort
              }
            }
          }));
        }
      }),
      filter(([offender, filter, page]) => !!page),
      mergeMap(([offender, filter, page]) => of(page)),
      take(1));
  }
}
