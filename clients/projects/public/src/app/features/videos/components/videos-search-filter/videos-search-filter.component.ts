import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';

import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

import { DistanceUnit, GeocodingLocation } from '@vsp/core';
import { GeocodingStore } from '@vsp/public/core/stores';
import { VspAutoFocusControlDirective } from '@vsp/forms';

@Component({
  selector: 'vsp-videos-search-filter',
  templateUrl: './videos-search-filter.component.html',
  styleUrls: ['./videos-search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NzAutocompleteModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    VspAutoFocusControlDirective,
    ReactiveFormsModule, 
  ]
})
export class VideosSearchFilterComponent implements OnInit, OnDestroy {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  private readonly _geocodingStore: GeocodingStore = inject(GeocodingStore);
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _geocodingLocationsSearch$: Subject<string> = new Subject<string>();

  public DistanceUnit = DistanceUnit;

  public geocodingLocationsResult$: Observable<GeocodingLocation[] | null> = this._geocodingStore.geocodingLocationsResult$;

  public form!: UntypedFormGroup;

  ngOnInit(): void {
    this._listenForGeocodingLocationSearchDebounce();
    this.form = this._controlContainer.control as UntypedFormGroup;
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

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
