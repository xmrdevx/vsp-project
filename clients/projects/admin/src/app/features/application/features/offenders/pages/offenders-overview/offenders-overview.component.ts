import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation, Offender, Page, PageRequest, Sort } from '@vsp/core';
import { TableDefinition, VspDatatableComponent, VspDatatableWidgetColumnEditorComponent } from '@vsp/datatable';
import { BasicQuerySearchFilter, BasicQuerySearchWithDeletedFilterComponent } from '@vsp/query-search-filters';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { OffendersActions, OffendersSelectors } from '../../store';
import { defaultBasicQuerySearchWithDeletedFilter, defaultPageRequest } from '@vsp/admin/core/constants';
import { defaultSecurityPermissionsSort } from '../../../security/features/security-permissions/constants/sort.defaults';
import { defaultOffendersSort } from '../../constants/sort.defaults';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { OffendersCreateComponent } from '../offenders-create/offenders-create.component';
import { OffendersUpdateComponent } from '../offenders-update/offenders-update.component';

@Component({
  selector: 'vsp-offenders-overview',
  templateUrl: './offenders-overview.component.html',
  styleUrls: ['./offenders-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    BasicQuerySearchWithDeletedFilterComponent,
    NgIf,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzIconModule,
    NzModalModule,
    NzPageHeaderModule,
    NzPopconfirmModule,
    NzTypographyModule,
    VspDatatableWidgetColumnEditorComponent,
    VspDatatableComponent,
    RouterLink,
  ]
})
export class OffendersOverviewComponent {
  private readonly _store: Store = inject(Store);
  private readonly _modalService: NzModalService = inject(NzModalService);

  public offendersTableDefinition$: Observable<TableDefinition | null> = this._store
      .select(OffendersSelectors.selectOffendersTableDefinition);

  public offendersPage$: Observable<Page<Offender> | null> = this._store
      .select(OffendersSelectors.selectOffendersPage);

  private _defaultPageRequest: PageRequest = { ...defaultPageRequest, sort: {...defaultOffendersSort} } as PageRequest;
  public defaultSort: Sort = defaultSecurityPermissionsSort;

  public offendersSearchFilter!: BasicQuerySearchFilter | null;
  
  public offendersSearchFilter$: Observable<BasicQuerySearchFilter | null> = this._store
    .select(OffendersSelectors.selectOffendersSearchFilter)
    .pipe(tap(filter => this.offendersSearchFilter = filter));

  public onSearchFilterChanges(filter: BasicQuerySearchFilter): void {
    this._store.dispatch(
      OffendersActions.setOffendersSearchFilter({ 
        filter : filter
      })
    );
    this._searchOffenders(filter, this._defaultPageRequest);
  }

  public onDeleteOffender(offender: Offender): void {
    this._store.dispatch(
      OffendersActions.deleteOffenderRequest({
        offenderId: offender.id
      })
    )
  }

  public onRestoreOffender(offender: Offender): void {
    this._store.dispatch(
      OffendersActions.restoreOffenderRequest({
        offenderId: offender.id
      })
    )
  }

  public onOffendersPageChange(pageRequest: PageRequest): void {
    this._searchOffenders(this.offendersSearchFilter, pageRequest);
  }

  public onApplyColumnChanges(tableDefinition: TableDefinition | null): void {
    this._store.dispatch(
      OffendersActions.setOffendersTableDefinition({
        tableDefinition: tableDefinition
      })
    );
  }

  public onResetColumnChanges(shouldReset: boolean): void {
    if (shouldReset) {
      this._store.dispatch(OffendersActions.resetOffendersTableDefinition());
    }
  }

  public onCreateNewOffender(): void {
    this._modalService.create({
      nzTitle: undefined,
      nzFooter: null,
      nzContent: OffendersCreateComponent,
      nzComponentParams: {
        isModal: true
      }
    });
  }

  public onUpdateOffender(offenderId: string): void {
    this._store
      .dispatch(OffendersActions.getOffenderByIdRequest({ offenderId }));
    
    this._modalService.create({
      nzTitle: undefined,
      nzFooter: null,
      nzContent: OffendersUpdateComponent,
      nzComponentParams: {
        isModal: true
      }
    });
  }

  private _searchOffenders(filter: BasicQuerySearchFilter | null, pageRequest: PageRequest): void {
    this._store.dispatch(
      OffendersActions.searchOffendersRequest({
        filter: filter || defaultBasicQuerySearchWithDeletedFilter,
        pageRequest: pageRequest
      })
    );
  }
}
