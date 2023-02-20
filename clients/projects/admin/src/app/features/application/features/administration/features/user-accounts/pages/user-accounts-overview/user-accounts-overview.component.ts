import { Component, OnInit, ChangeDetectionStrategy, inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation, LockoutUserRequest, Page, PageRequest, ResponseStatus, Sort, User } from '@vsp/core';
import { defaultBasicQuerySearchFilter, defaultPageRequest } from '@vsp/admin/core/constants';
import { VspDatatableComponent, VspDatatableWidgetColumnEditorComponent, TableDefinition } from '@vsp/datatable';
import { BasicQuerySearchFilter, BasicQuerySearchFilterComponent } from '@vsp/query-search-filters';

import { UserAccountsActions, UserAccountsSelectors } from '../../store';
import { defaultUserAccountsSort } from '../../constants/sort.defaults';

@Component({
  selector: 'vsp-user-accounts-overview',
  templateUrl: './user-accounts-overview.component.html',
  styleUrls: ['./user-accounts-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    BasicQuerySearchFilterComponent,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzTypographyModule,
    VspDatatableComponent,
    VspDatatableWidgetColumnEditorComponent,
    RouterLink
  ]
})
export class UserAccountsOverviewComponent implements OnDestroy {
  private readonly _destroy$: Subject<void> = new Subject<void>;
  private readonly _store: Store = inject(Store);
  private readonly _messageService: NzMessageService = inject(NzMessageService);

  public userAccountsPage$: Observable<Page<User> | null> = 
    this._store.select(UserAccountsSelectors.selectUserAccountsPage);

  private _defaultPageRequest: PageRequest = defaultPageRequest;
  public defaultSort: Sort = defaultUserAccountsSort;

  public userAccountsSearchFilter$: Observable<BasicQuerySearchFilter | null> = this._store
    .select(UserAccountsSelectors.selectUserAccountSearchFilter)
    .pipe(tap(filter => this.userAccountsSearchFilter = filter));

  public userAccountsSearchFilter!: BasicQuerySearchFilter | null;

  public userAccountsTableDefinition$: Observable<TableDefinition | null> = 
    this._store.select(UserAccountsSelectors.selectUserAccountsTableDefinition);


  constructor() {
    this._store
      .select(UserAccountsSelectors.selectLockoutUserAccountResponseMessage)
      .pipe(takeUntil(this._destroy$))
      .subscribe(message => {
        console.log("message ", message)
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message?.message);
          this._store.dispatch(
            UserAccountsActions.setLockoutUserAccountResponseMessage({ message: null })
          )
        }
      });
  }


  public onSearchFilterChanges(filter: BasicQuerySearchFilter): void {
    this._store.dispatch(UserAccountsActions.setUserAccountsSearchFilter({ filter: filter }));
    this._searchUserAccounts(filter, this._defaultPageRequest);
  }

  public onUserAccountsPageChange(pageRequest: PageRequest): void {
    this._searchUserAccounts(this.userAccountsSearchFilter, pageRequest);
  }

  public onApplyColumnChanges(tableDefinition: TableDefinition | null): void {
    this._store.dispatch(
      UserAccountsActions.setUserAccountsTableDefinition({
        tableDefinition: tableDefinition
      })
    );
  }

  public onResetColumnChanges(shouldReset: boolean): void {
    if (shouldReset) {
      this._store.dispatch(UserAccountsActions.resetUserAccountsTableDefinition());
    }
  }

  public onToggleLockoutUser(user: User, shouldLockoutUser: boolean): void {
    this._store.dispatch(
      UserAccountsActions.lockoutUserAccountRequest({ 
        user: user,
        request: { 
          isLockedOut: shouldLockoutUser 
        } as LockoutUserRequest
      }));
  }

  private _searchUserAccounts(filter: BasicQuerySearchFilter | null, pageRequest: PageRequest): void {
    this._store.dispatch(UserAccountsActions.searchUserAccountsRequest({
      filter: filter || defaultBasicQuerySearchFilter,
      pageRequest: pageRequest
    }));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
