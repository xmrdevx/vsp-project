import { Component, ChangeDetectionStrategy, HostBinding, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, take } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { 
  defaultInfiniteScrollSettings, 
  fadeAnimation, 
  InfiniteScrollSettings, 
  LoadingState, 
  MissingPerson, 
  Page, 
  PageRequest, 
  Comment } from '@vsp/core';

import { MissingStore } from '@vsp/public/core/stores';

import { 
  MissingPersonSimpleProfileComponent, 
  MissingPersonSimpleProfileSkeletonComponent } from '@vsp/public/shared/missing-person';

import { 
  CommentListComponent, 
  CommentListSkeletonComponent } from '@vsp/comments';

import { VspIfAuthenticatedDirective } from '@vsp/public/shared/authenticated';


@Component({
  selector: 'vsp-missing-profile',
  templateUrl: './missing-profile.component.html',
  styleUrls: ['./missing-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    CommentListComponent,
    CommentListSkeletonComponent,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzGridModule,
    NzPageHeaderModule,
    MissingPersonSimpleProfileComponent,
    MissingPersonSimpleProfileSkeletonComponent,
    VspIfAuthenticatedDirective,
  ]
})
export class MissingProfileComponent implements OnDestroy {
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);
  private readonly _missingStore: MissingStore = inject(MissingStore);

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto'

  public selectedMissing$: Observable<MissingPerson | null> = this._missingStore.selectedMissing$;
  public selectedMissingLoadingState$: Observable<LoadingState> = this._missingStore.selectedMissingLoadingState$;

  public currentMissingCommentsPage$: Observable<Page<Comment> | null> = this._missingStore.currentMissingCommentsPage$;
  public loadedMissingCommentsPages$: Observable<Page<Comment>[]> = this._missingStore.loadedMissingCommentsPages$;

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  public onScrollDownComments(pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._route.paramMap
      .pipe(take(1))
      .subscribe((params: ParamMap) => {
        this._missingStore.loadMissingPersonCommentsPage({ 
          missingId: params.get('missingId') ?? '', 
          pageRequest: pageRequest 
        });
      });
  }

  ngOnDestroy(): void {
    this._missingStore.resetSelectedMissingPerson();
  }
}
