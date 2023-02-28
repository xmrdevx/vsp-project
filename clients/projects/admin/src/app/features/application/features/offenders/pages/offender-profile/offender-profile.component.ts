import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

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

import { Comment, defaultInfiniteScrollSettings, fadeAnimation, InfiniteScrollSettings, Offender, Page, PageRequest, User } from '@vsp/core';
import { OffenderSimpleProfileComponent } from '@vsp/offenders';
import { CommentListComponent, CommentListSkeletonComponent } from '@vsp/comments';

import { OffendersSelectors } from '../../store';
import { OffenderCaseSimpleDetailsComponent } from 'projects/@vsp/offenders/src/lib/components/offender-case-simple-details/offender-case-simple-details.component';

@Component({
  selector: 'vsp-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
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
    RouterLink,
    OffenderCaseSimpleDetailsComponent,
    OffenderSimpleProfileComponent
  ]
})
export class OffenderProfileComponent {
  private readonly _store: Store = inject(Store);

  public selectedOffender$: Observable<Offender | null> = 
    this._store.select(OffendersSelectors.selectSelectedOffender);


  // @TEMP
  public mockCommentPage: Page<Comment> = {
    current: { } as PageRequest,
    next: { } as PageRequest,
    previous: {} as PageRequest,
    elements: [
      {
        id: 'ajsdfkljasdlf',
        commentedBy: { profile: { firstName: 'John', lastName: 'Doe' }} as User,
        commentedOn: new Date(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
      } as Comment,
      {
        id: 'ajsdfkljasdlf',
        commentedBy: { profile: { firstName: 'John', lastName: 'Doe' }} as User,
        commentedOn: new Date(),
        message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      } as Comment,
      {
        id: 'ajsdfkljasdlf',
        commentedBy: { profile: { firstName: 'John', lastName: 'Doe' }} as User,
        commentedOn: new Date(),
        message: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
      } as Comment,
      {
        id: 'ajsdfkljasdlf',
        commentedBy: { profile: { firstName: 'John', lastName: 'Doe' }} as User,
        commentedOn: new Date(),
        message: 'Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
      } as Comment,
      {
        id: 'ajsdfkljasdlf',
        commentedBy: { profile: { firstName: 'John', lastName: 'Doe' }} as User,
        commentedOn: new Date(),
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      } as Comment,
    ],
    totalElements: 5,
    totalPages: 1,
  } satisfies Page<Comment>;

  public currentOffenderCommentsPage$: Observable<Page<Comment>> = of(this.mockCommentPage);
  public loadedOffenderCommentsPages$: Observable<Page<Comment>[]> = of([this.mockCommentPage]);

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;


  public onScrollDownComments(pageRequest: PageRequest | null): void {
    console.log("loading next page");
    // if (!pageRequest) return;
    // this._route.paramMap
    //   .pipe(take(1))
    //   .subscribe((params: ParamMap) => {
    //     this._missingStore.loadMissingPersonCommentsPage({ 
    //       missingId: params.get('missingId') ?? '', 
    //       pageRequest: pageRequest 
    //     });
    //   });
  }
}
