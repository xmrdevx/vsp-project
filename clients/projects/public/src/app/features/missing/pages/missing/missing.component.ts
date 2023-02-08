import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { debounceTime, Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';

import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { GeocodingStore, MissingStore } from '@vsp/public/core/stores';

import { 
  DistanceUnit, 
  fadeAnimation, 
  GeocodingLocation, 
  LoadingState, 
  Page, 
  PageRequest,
  PagingUtils,
  MissingPerson, 
  MissingSearchFilter, 
  SortDirection } from '@vsp/core';

import { 
  defaultMissingSearchFilter, 
  defaultMissingSearchPageRequest } from '@vsp/public/core/constants/missing-search.defaults';

import { 
  MissingPersonSimpleProfileComponent, 
  MissingPersonSimpleProfileSkeletonComponent } from '@vsp/public/shared/missing-person';
  
import { VspAutoFocusControlDirective } from '@vsp/forms';

@Component({
  selector: 'vsp-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    MissingPersonSimpleProfileComponent,
    MissingPersonSimpleProfileSkeletonComponent,
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
    VspAutoFocusControlDirective,
    ReactiveFormsModule,
  ]
})
export class MissingComponent implements OnInit, OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _missingStore: MissingStore = inject(MissingStore);
  private readonly _geocodingStore: GeocodingStore = inject(GeocodingStore);
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _geocodingLocationsSearch$: Subject<string> = new Subject<string>();

  private _defaultPageRequest: PageRequest = defaultMissingSearchPageRequest;
  private _defaultOffendersSearchFilter: MissingSearchFilter = defaultMissingSearchFilter;

  public DistanceUnit = DistanceUnit;
  public LoadingState = LoadingState;

  public missingSearchPageLoadingState$: Observable<LoadingState> = this._missingStore.missingSearchPageLoadingState$;
  public currentMissingPage$: Observable<Page<any> | null> = this._missingStore.currentMissingSearchPage$;
  public geocodingLocationsResult$: Observable<GeocodingLocation[] | null> = this._geocodingStore.geocodingLocationsResult$;

  public missingSearchForm: UntypedFormGroup = this._formBuilder.group({
    searchTerm: [''],
    location: [null],
    distance: [null],
    distanceUnit: [DistanceUnit.Miles]
  });

  ngOnInit(): void {
    this._listenForGeocodingLocationSearchDebounce();
    this._patchThroughCurrentOffendersSearchFilter();
  }

  public pageIndexChanges(pageNumber: number, currentPage: Page<MissingPerson>): void {
    const newPageRequest: PageRequest = PagingUtils.from(
      pageNumber - 1, 
      currentPage.current.size || 10, 
      currentPage.current.sort.column || 'id', 
      currentPage.current.sort.direction || SortDirection.Ascend
    );
    const newSearchFilter = {
      ...this._defaultOffendersSearchFilter,
      ...this.missingSearchForm.value
    } as MissingSearchFilter;
    this._searchMissing(newSearchFilter, newPageRequest)
  }

  public onSearchMissing(searchFilter: MissingSearchFilter): void {
    this._missingStore.setCurrentMissingSearchFilter(searchFilter);
    this._searchMissing(searchFilter, this._defaultPageRequest);
  }

  public onResetOffenders(): void {
    this.missingSearchForm.patchValue({...this._defaultOffendersSearchFilter});
    this._missingStore.setCurrentMissingSearchFilter(this._defaultOffendersSearchFilter);
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

  private _searchMissing(searchFilter: MissingSearchFilter, pageRequest: PageRequest): void {
    this._missingStore.searchMissing({ 
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
    this._missingStore.currentMissingSearchFilter$
      .pipe(
        take(1),
        withLatestFrom(this._missingStore.currentMissingSearchPage$)   
      )
      .subscribe(([searchFilter, page]) => {
        const currentSearchFilter = searchFilter ?? this._defaultOffendersSearchFilter;
        const currentSearchPage = page?.current ?? this._defaultPageRequest;
        this.missingSearchForm.patchValue({ ...currentSearchFilter });
        this._searchMissing(currentSearchFilter, currentSearchPage);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
