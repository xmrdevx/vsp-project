import { ChangeDetectionStrategy, Component, HostBinding, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, of, take, tap } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { 
  Comment, 
  defaultInfiniteScrollSettings, 
  EnvironmentService, 
  fadeAnimation, 
  InfiniteScrollSettings, 
  LoadingState, 
  Media, 
  Page, 
  PageRequest } from '@vsp/core';

import { VspIfAuthenticatedDirective } from '@vsp/public/shared/authenticated';
import { CommentListComponent, CommentListSkeletonComponent } from '@vsp/public/shared/comments';
import { VideoCardPlayerComponent, VideoCardPlayerSkeletonComponent, VideoListComponent, VideoListSkeletonComponent } from '@vsp/public/shared/videos';

import { WatchStore } from '../../store/watch-store.service';

@Component({
  selector: 'vsp-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    CommentListComponent,
    CommentListSkeletonComponent,
    InfiniteScrollModule,
    NgIf,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzGridModule,
    NzTypographyModule,
    VspIfAuthenticatedDirective,
    VideoListComponent,
    VideoListSkeletonComponent,
    VideoCardPlayerComponent,
    VideoCardPlayerSkeletonComponent,
  ]
})
export class WatchComponent implements OnDestroy {
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _watchStore: WatchStore = inject(WatchStore);

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto';

  public params$: Observable<Params> = this._route.queryParams.pipe(
    tap(queryParams => {
      
    })
  );

  public currentWatchVideo$: Observable<Media | null> = this._watchStore.currentWatchVideo$;
  public currentWatchVideoLoadingState$: Observable<LoadingState> = this._watchStore.currentWatchVideoLoadingState$;

  public currentNearByPage$: Observable<Page<Media> | null> = this._watchStore.currentNearByPage$;
  public nearByPageLoadingState$: Observable<LoadingState> = this._watchStore.nearByPageLoadingState$;
  public loadedNearByPages$: Observable<Page<Media>[]> = this._watchStore.loadedNearByPages$;

  public currentWatchVideoCommentsPage$: Observable<Page<Comment> | null> = this._watchStore.currentWatchVideoCommentsPage$;
  public watchVideoCommentsLoadingState$: Observable<LoadingState> = this._watchStore.watchVideoCommentsLoadingState$;
  public loadedWatchVideoCommentsPages$: Observable<Page<Comment>[]> = this._watchStore.loadedWatchVideoCommentsPages$;

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  public LoadingState = LoadingState;

  public onScrollDownNearByCards(pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._route.queryParams.pipe(take(1)).subscribe(params => {
      this._watchStore.loadNearByVideosPage({ videoId: params['vid'], pageRequest: pageRequest });
    });
  }

  public onScrollDownComments(pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._route.queryParams.pipe(take(1)).subscribe(params => {
      this._watchStore.loadWatchVideoCommentsPage({ videoId: params['vid'], pageRequest: pageRequest });
    });
  }

  public get baseApiVideoWatchUrl(): string {
    return `${this._environmentService.getBaseApiUrl()}/videos/watch`
  }

  ngOnDestroy(): void {
    this._watchStore.resetWatchState();
  }
}
