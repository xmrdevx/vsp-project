import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { OffenderComment, defaultInfiniteScrollSettings, fadeAnimation, InfiniteScrollSettings, Offender, Page, PageRequest, User } from '@vsp/core';
import { OffenderSimpleProfileComponent } from '@vsp/offenders';
import { CommentFormComponent, CommentListComponent, CommentListSkeletonComponent } from '@vsp/comments';

import { OffendersActions, OffendersSelectors } from '../../store';
import { OffenderCaseSimpleDetailsComponent } from 'projects/@vsp/offenders/src/lib/components/offender-case-simple-details/offender-case-simple-details.component';
import { defaultOffendersSearchFilter } from '@vsp/public/features/offenders/constants/offenders-search.defaults';

@Component({
  selector: 'vsp-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    CommentFormComponent,
    CommentListComponent,
    CommentListSkeletonComponent,
    DatePipe,
    InfiniteScrollModule,
    JsonPipe,
    NgFor,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
    RouterModule,
    OffenderCaseSimpleDetailsComponent,
    OffenderSimpleProfileComponent
  ]
})
export class OffenderProfileComponent implements OnDestroy {
  private readonly _store: Store = inject(Store);
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);

  public selectedOffender$: Observable<Offender | null> = 
    this._store.select(OffendersSelectors.selectSelectedOffender);

  public currentOffenderCommentsPage$: Observable<Page<OffenderComment> | null> = 
    this._store.select(OffendersSelectors.selectCurrentOffenderCommentsPage);

  public loadedOffenderCommentsPages$: Observable<Page<OffenderComment>[]> = 
    this._store.select(OffendersSelectors.selectLoadedOffenderCommentPages);

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  public onScrollDownComments(pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._route.paramMap
      .pipe(take(1))
      .subscribe(params => {
        const offenderId: string = params.get('offenderId') ?? '';
        this._store.dispatch(OffendersActions.searchOffenderCommentsRequest({ 
          offenderId: offenderId,
          filter: defaultOffendersSearchFilter,
          pageRequest: pageRequest
        }));
      });
  }

  public onSubmitComment(offenderId: string, comment: OffenderComment): void {
    this._store.dispatch(
      OffendersActions.createOffenderCommentRequest({
        offenderId,
        comment
      })
    )
  }

  ngOnDestroy(): void {
    this._store.dispatch(OffendersActions.resetSearchOffenderComments());
  }
}
