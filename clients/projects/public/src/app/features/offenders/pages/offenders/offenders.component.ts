import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { debounceTime, Observable, of, Subject, take, takeUntil, withLatestFrom } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { 
  OffenderSimpleProfileComponent, 
  OffenderSimpleProfileSkeletonComponent } from '@vsp/public/shared/offenders';

import { 
  Offender, 
  Page, 
  PageRequest, 
  PagingUtils, 
  fadeAnimation, 
  SortDirection, 
  OffendersSearchFilter, 
  DistanceUnit, 
  GeocodingLocation, 
  LoadingState } from '@vsp/core';

import { GeocodingStore, OffendersStore } from '@vsp/public/core/stores';
import { defaultOffendersSearchFilter, defaultOffendersSearchPageRequest } from '../../constants/offenders-search.defaults';

@Component({
  selector: 'vsp-offenders',
  templateUrl: './offenders.component.html',
  styleUrls: ['./offenders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    NzAutocompleteModule,
    NzButtonModule,
    NzCardModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzSelectModule,
    OffenderSimpleProfileComponent,
    OffenderSimpleProfileSkeletonComponent,
    ReactiveFormsModule,
  ]
})
export class OffendersComponent implements OnInit, OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _offendersStore: OffendersStore = inject(OffendersStore);
  private readonly _geocodingStore: GeocodingStore = inject(GeocodingStore);
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _geocodingLocationsSearch$: Subject<string> = new Subject<string>();

  private _defaultPageRequest: PageRequest = defaultOffendersSearchPageRequest;
  private _defaultOffendersSearchFilter: OffendersSearchFilter = defaultOffendersSearchFilter;

  public DistanceUnit = DistanceUnit;
  public LoadingState = LoadingState;

  public offenderSearchPageLoadingState$: Observable<LoadingState> = this._offendersStore.offendersSearchPageLoadingState$;
  public currentOffendersPage$: Observable<Page<Offender> | null> = this._offendersStore.currentOffendersSearchPage$;
  public geocodingLocationsResult$: Observable<GeocodingLocation[] | null> = this._geocodingStore.geocodingLocationsResult$;

  public offendersSearchForm: UntypedFormGroup  = this._formBuilder.group({
    offenderName: [''],
    location: [null],
    distance: [null],
    distanceUnit: [DistanceUnit.Miles]
  });

  ngOnInit(): void {
    this._listenForGeocodingLocationSearchDebounce();
    this._patchThroughCurrentOffendersSearchFilter();
  }

  public pageIndexChanges(pageNumber: number, currentPage: Page<Offender>): void {
    const newPageRequest: PageRequest = PagingUtils.from(
      pageNumber - 1, 
      currentPage.current.size || 10, 
      currentPage.current.sort.column || 'id', 
      currentPage.current.sort.direction || SortDirection.Ascend
    );
    const newSearchFilter = {
      ...this._defaultOffendersSearchFilter,
      ...this.offendersSearchForm.value
    } as OffendersSearchFilter;
    this._searchOffenders(newSearchFilter, newPageRequest)
  }

  public onSearchOffenders(searchFilter: OffendersSearchFilter): void {
    this._offendersStore.setCurrentOffendersSearchFilter(searchFilter);
    this._searchOffenders(searchFilter, this._defaultPageRequest);
  }

  public onResetOffenders(): void {
    this.offendersSearchForm.patchValue({...defaultOffendersSearchFilter});
    this._offendersStore.setCurrentOffendersSearchFilter(this._defaultOffendersSearchFilter);
  }

  public onGeocodingLocationSelection(option: NzAutocompleteOptionComponent): void {
    const location: GeocodingLocation = option.nzValue as GeocodingLocation;
    this._geocodingStore.setSelectedGeocodingLocation(location);
  }

  public onSearchGeocodingLocations(event: Event): void {
    const searchText: string = (event?.target as any)?.value?.trim();
    if (searchText.length) {
      this._geocodingLocationsSearch$.next(searchText);
    }
  }

  private _searchOffenders(searchFilter: OffendersSearchFilter, pageRequest: PageRequest): void {
    this._offendersStore.searchOffenders({ 
      searchFilter: searchFilter, 
      pageRequest: pageRequest 
    });
  }

  private _listenForGeocodingLocationSearchDebounce(): void {
    this._geocodingLocationsSearch$
      .pipe(
        takeUntil(this._destroy$),
        debounceTime(500)
      )
      .subscribe((searchTerm: string) => {
        if (searchTerm.trim().length) {
          this._geocodingStore.searchGeocodingLocationsByText(searchTerm.trim());
        }        
      })
  }

  private _patchThroughCurrentOffendersSearchFilter(): void {
    this._offendersStore.currentOffendersSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(this._offendersStore.currentOffendersSearchPage$)   
      )
      .subscribe(([searchFilter, page]) => {
        const currentSearchFilter = searchFilter ?? this._defaultOffendersSearchFilter;
        const currentSearchPage = page?.current ?? this._defaultPageRequest;
        this.offendersSearchForm.patchValue({ ...currentSearchFilter });
        this._searchOffenders(currentSearchFilter, currentSearchPage);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
