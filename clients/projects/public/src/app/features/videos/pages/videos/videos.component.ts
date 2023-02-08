import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, inject, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable, Subject, take, tap, withLatestFrom } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { 
  fadeAnimation, 
  slideUpDownAnimation, 
  DistanceUnit, 
  LoadingState, 
  VideosSearchFilter, 
  PageRequest, 
  Page, 
  Media, 
  DataLayoutStyle, 
  InfiniteScrollSettings, 
  defaultInfiniteScrollSettings } from '@vsp/core';

import { 
  VideoGridComponent, 
  VideoGridSkeletonComponent, 
  VideoListComponent, 
  VideoListSkeletonComponent } from '@vsp/public/shared/videos';

import { VideosSearchFilterComponent } from '../../components/videos-search-filter/videos-search-filter.component';
import { defaultVideosSearchPageRequest } from '../../constants/videos-search-filter.defaults';
import { VideosStore } from '../../store/videos-store.service';

@Component({
  selector: 'vsp-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation, slideUpDownAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    InfiniteScrollModule,
    NgIf,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    ReactiveFormsModule,
    VideoGridComponent,
    VideoGridSkeletonComponent,
    VideoListComponent,
    VideoListSkeletonComponent,
    VideosSearchFilterComponent,
  ]
})
export class VideosComponent implements OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _videosStore: VideosStore = inject(VideosStore);
  private readonly _destroy$: Subject<any> = new Subject<any>();

  public mockFeatureLive: Media = {
    id: 'asdjflasjdf',
    title: 'Mock Testing Live'
  } as Media;

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto';

  public showAdvancedFilter: boolean = false;

  public videosSearchLayoutStyle$: Observable<DataLayoutStyle> = this._videosStore.videosSearchLayoutStyle$;
  public videosPageLoadingState$: Observable<LoadingState> = this._videosStore.videosPageLoadingState$;
  public currentVideosSearchPage$: Observable<Page<Media> | null> = this._videosStore.currentVideosSearchPage$;
  public loadedVideosPages$: Observable<Page<Media>[]> = this._videosStore.loadedVideosPages$;
  
  public videosSearchForm: UntypedFormGroup  = this._formBuilder.group({
    searchKeywords: [''],
    location: [null],
    distance: [null],
    distanceUnit: [DistanceUnit.Miles]
  });

  public LoadingState = LoadingState;
  public DataLayoutStyle = DataLayoutStyle;

  public defaultInfiniteScrollSettings: InfiniteScrollSettings = defaultInfiniteScrollSettings;

  constructor() {
    this._patchThroughCurrentVideosSearchFilter();
  }

  public resetVideosSearchFilter(): void {
    this._videosStore.resetCurrentVideosSearchFilter();
  }

  public searchVideos(searchFilter: VideosSearchFilter): void {
    this._searchVideos(searchFilter, defaultVideosSearchPageRequest);
    this._videosStore.setCurrentVideosSearchFilter(searchFilter);
  }

  public changeVideoSearchLayoutStyle(style: DataLayoutStyle): void {
    this._videosStore.setVideosSearchLayoutStyle(style);
  }

  public onScrollDown(pageRequest: PageRequest | null): void {
    if (!pageRequest) return;
    this._videosStore.searchVideos({
      searchFilter: this.videosSearchForm.value,
      pageRequest: pageRequest
    });
  }

  private _searchVideos(searchFilter: VideosSearchFilter, pageRequest: PageRequest): void {
    this._videosStore.searchVideos({ 
      searchFilter: searchFilter, 
      pageRequest: pageRequest 
    });
  }

  private _patchThroughCurrentVideosSearchFilter(): void {
    this._videosStore.currentVideosSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(this._videosStore.currentVideosSearchPage$)   
      )
      .subscribe(([searchFilter, page]) => {
        const currentSearchPageRequest = page?.current ? page?.current : defaultVideosSearchPageRequest;
        this.videosSearchForm.patchValue({ ...searchFilter });
        this._searchVideos(searchFilter, currentSearchPageRequest);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
