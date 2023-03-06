import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, Observable, switchMap, takeUntil } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';

import { defaultCountryListOptions, GeocodingLocation, GeocodingService, ListOption } from '@vsp/core';

@Component({
  selector: 'vsp-address-search-control',
  templateUrl: './address-search-control.component.html',
  styleUrls: ['./address-search-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NzAutocompleteModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    GeocodingService
  ]
})
export class AddressSearchControlComponent implements OnInit, OnDestroy {
  private readonly _destroy$: Subject<void> = new Subject<void>();
  private readonly _geocodingService: GeocodingService = inject(GeocodingService);
  private readonly _debouncedSearch: Subject<string> = new Subject<string>()

  @Input()
  public debounceTime: number = 250;

  @Input()
  public defaultCountryDigraph: string = 'US';

  @Output()
  public selectedLocationChange: EventEmitter<GeocodingLocation> = new EventEmitter<GeocodingLocation>();

  public geocodingLocationsResult: GeocodingLocation[] | null = [];
  public defaultCountryListOptions: ListOption[] = defaultCountryListOptions;

  public searchForm: UntypedFormGroup = new UntypedFormGroup({
    location: new UntypedFormGroup({
      location: new UntypedFormGroup({
        latitude: new UntypedFormControl(''),
        longitude: new UntypedFormControl('')
      }),
      fullAddressString: new UntypedFormControl(''),
      address: new UntypedFormGroup({
        street: new UntypedFormControl(''),
        street2: new UntypedFormControl(''),
        city: new UntypedFormControl(''),
        state: new UntypedFormControl(''),
        zip: new UntypedFormControl(''),
        country: new UntypedFormControl(''),
        latitude: new UntypedFormControl(''),
        longitude: new UntypedFormControl(''),
      })
    }),
    country: new UntypedFormControl(null)   
  })

  ngOnInit(): void {
    this.searchForm.patchValue({ country: this.defaultCountryDigraph });
    this._listenForAddressSearchChanges();
  }

  public onGeocodingLocationSelection(option: NzAutocompleteOptionComponent): void {
    const location: GeocodingLocation = option.nzValue as GeocodingLocation;
    this.selectedLocationChange.emit(location);
    this.searchForm.patchValue({ location: { ...location } });
    console.log("address contorl value is ", this.searchForm.value);
  }

  public onSearchGeocodingLocations(event: Event): void {
    const searchText: string = (event?.target as any)?.value?.trim();
    if (searchText.length) {
      this._debouncedSearch.next(searchText);
    }
  }

  private _listenForAddressSearchChanges(): void {
    this._debouncedSearch
      .pipe(
        takeUntil(this._destroy$),
        // debounceTime(this.debounceTime || 250),
        switchMap((searchText: string) => this._geocodingService.searchGeocodingLocationsByText(searchText))
      ).subscribe((locations: GeocodingLocation[]) => this.geocodingLocationsResult = locations);
  }

  ngOnDestroy(): void {
    this._destroy$.next()
    this._destroy$.complete();
  }
}
