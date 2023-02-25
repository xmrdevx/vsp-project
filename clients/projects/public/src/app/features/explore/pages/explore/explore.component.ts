import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { combineLatest, debounceTime, first, map, Observable, Subject, takeUntil } from 'rxjs';
import { AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet, TitleCasePipe } from '@angular/common';

import { LeafletControlLayersConfig, LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { MarkerClusterGroup, MarkerClusterGroupOptions, popup, LatLngBounds, Map, Marker, marker, tooltip } from 'leaflet';

import { NzDrawerModule, NzDrawerPlacement, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { GeocodingStore } from '@vsp/public/core/stores/geocoding-store.service';
import { MissingPersonSimpleProfileComponent, MissingPersonSimpleProfileSkeletonComponent } from '@vsp/public/shared/missing-person';
import { OffenderSimpleProfileComponent, OffenderSimpleProfileSkeletonComponent } from '@vsp/offenders';

import { 
  GeocodingLocation, 
  MapBounds, 
  MapCoordinate, 
  MapMarker, 
  fadeAnimation, 
  LoadingState, 
  OffenderCase,
  Offender, 
  ExploreMarkerType, 
  MissingPerson } from '@vsp/core';

import { 
  createMissingMapMarker, 
  createOffenderMapMarker, 
  defaultLeafletLayerControls, 
  defaultLeafletMarkerIcon, 
  defaultLeafletMissingMarkerIcon, 
  defaultLeafletOffenderMarkerIcon, 
  defaultLeafletOptions, 
  defaultLeafletOffenderPopoverOptions, 
  defaultLeafletOffenderTooltipOptions } from '../../constants/map.constants';

import { ExploreStore } from '../../stores/explore-store.service';
import { ExploreOffenderDialogContentComponent } from '../../components/explore-offender-dialog-content/explore-offender-dialog-content.component';
import { ExploreMissingDialogContentComponent } from '../../components/explore-missing-dialog-content/explore-missing-dialog-content.component';
import { ExploreCaseStatisticsComponent } from '../../components/explore-case-statistics/explore-case-statistics.component';
import { ExploreMissingStatisticsComponent } from '../../components/explore-missing-statistics/explore-missing-statistics.component';

@Component({
  selector: 'pjo-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    FormsModule,
    // ReactiveFormsModule,
    AsyncPipe,
    ExploreCaseStatisticsComponent,
    ExploreMissingDialogContentComponent,
    ExploreMissingStatisticsComponent,
    ExploreOffenderDialogContentComponent,
    LeafletModule,
    LeafletMarkerClusterModule,
    MissingPersonSimpleProfileComponent,
    MissingPersonSimpleProfileSkeletonComponent,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet,
    NzAutocompleteModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzDrawerModule,
    NzEmptyModule,
    NzGridModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzRadioModule,
    NzStatisticModule,
    NzTypographyModule,
    OffenderSimpleProfileComponent,
    OffenderSimpleProfileSkeletonComponent,
    TitleCasePipe,
  ]
})
export class ExploreComponent implements OnInit, OnDestroy {
  private readonly _router: Router = inject(Router);
  private readonly _elementRef: ElementRef = inject(ElementRef);
  private readonly _zone: NgZone = inject(NgZone);
  private readonly _geocodingStore: GeocodingStore = inject(GeocodingStore); 
  private readonly _exploreStore: ExploreStore = inject(ExploreStore);
  private readonly _drawerService: NzDrawerService = inject(NzDrawerService);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _geocodingLocationsSearch$: Subject<string> = new Subject<string>();

  public LoadingState = LoadingState;
  public ExploreMarkerType = ExploreMarkerType;

  public defaultLeafletLayerControls: LeafletControlLayersConfig = defaultLeafletLayerControls;
  public defaultLeafletOptions: any = defaultLeafletOptions;
  public defaultLeafletMarkerIcon = defaultLeafletMarkerIcon;
  public defaultLeafletOffenderMarkerIcon = defaultLeafletOffenderMarkerIcon;
  public defaultLeafletMissingMarkerIcon = defaultLeafletMissingMarkerIcon;
  public defaultLeafletTooltipOptions = defaultLeafletOffenderTooltipOptions;
  public defaultLeafletPopoverOptions = defaultLeafletOffenderPopoverOptions;
  
  public defaultLeafletFlyToZoom = 11;
  public defaultFlyToOptions: any = { animate: true, duration: 1.5 };

  public currentMapBounds$: Observable<MapBounds | null> = this._exploreStore.currentMapBounds$;
  public currentOffendersMapMarkersLoadingState$: Observable<LoadingState> = this._exploreStore.currentOffendersMapMarkersLoadingState$;
  public currentOffendersMapMarkers$: Observable<MapMarker<OffenderCase>[] | null> = this._exploreStore.currentOffendersMapMarkers$;
  public currentMissingMapMarkersLoadingState$: Observable<LoadingState> = this._exploreStore.currentMissingPeopleMapMarkersLoadingState$;
  public currentMissingMapMarkers$: Observable<MapMarker<MissingPerson>[] | null> = this._exploreStore.currentMissingPeopleMarkMarkers$;
  public geocodingLocationsResult$: Observable<GeocodingLocation[] | null> = this._geocodingStore.geocodingLocationsResult$;
  public selectedGeocodingLocation$: Observable<GeocodingLocation | null> = this._geocodingStore.selectedGeocodingLocation$;

  public currentCasesWithinBounds$: Observable<OffenderCase[] | null> = this.currentOffendersMapMarkers$
      .pipe(map(markers => markers?.map(m => m.payload) || null));

  public currentMissingWithinBounds$: Observable<MissingPerson[] | null> = this.currentMissingMapMarkers$
      .pipe(map(markers => markers?.map(m => m.payload) || null));

  public mapInstance: Map | null = null;
  public activeMarkers: Marker[] = [];
  public activeOffenderMarkers: Marker[] = [];
  public activeMissingMarkers: Marker[] = [];
  public markerClusterGroup: MarkerClusterGroup | null | undefined;
  public markerClusterOptions: MarkerClusterGroupOptions = {} as MarkerClusterGroupOptions;

  public drawerVisibility: boolean = false;
  public drawerPlacement: NzDrawerPlacement = 'right';

  public exploreMarkerTypes: ExploreMarkerType = ExploreMarkerType.OFFENDERS;

  ngOnInit(): void {
    this._listenForGeocodingLocationSearchDebounce();
    this._listenForGeocodingLocationSelectionChange();
    this._listenForMapMarkersChanges();
  }

  public onMapReady(map: Map): void {
    this.mapInstance = map;
    
    // Resets the previouse center and zoom from store
    combineLatest([
        this._exploreStore.currentMapBounds$,
        this._exploreStore.currentMapZoom$,
        this.selectedGeocodingLocation$
      ])
      .pipe(first())
      .subscribe(([currentBounds, currentZoom, location]) => {
        if (currentBounds && currentZoom) {
          this.mapInstance?.flyTo(
            [currentBounds.center.latitude, currentBounds.center.longitude],
            currentZoom || this.defaultLeafletFlyToZoom,
            { ...this.defaultFlyToOptions, animate: false }
          );
        } else if (location) {
            this.mapInstance?.flyTo(
              [location.location.latitude, location.location.longitude] , 
              this.defaultLeafletFlyToZoom,
              { ...this.defaultFlyToOptions, animate: false }
            );
        } else {
          this._updateMapBounds();
        }
      });
  }

  public markerClusterReady(group: MarkerClusterGroup): void {
    this.markerClusterGroup = group;
  }

  public onMapMoveEnd(event: any): void {
    this._updateMapBounds();
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

  public onOpenDrawer(): void {
    this.drawerVisibility = true;
  }

  public onCloseDrawer(): void {
    this.drawerVisibility = false;
    this._changeDetectorRef.detectChanges();
  }

  private _updateMapBounds(): void {
    const bounds: LatLngBounds | undefined = this.mapInstance?.getBounds();

    if (bounds) {
      const mapBounds: MapBounds = this._toMapBounds(bounds);
      const zoom: number = this.mapInstance?.getZoom() || this.defaultLeafletFlyToZoom;
      this._exploreStore.setMapBounds(mapBounds);
      this._exploreStore.setMapZoom(zoom);
      this._exploreStore.mapBoundsChanged(mapBounds);
    }
  }

  private _toMapBounds(bounds: LatLngBounds): MapBounds {
    return {
      northEast: {
        latitude: bounds?.getNorthEast()?.lat,
        longitude: bounds?.getNorthEast()?.lng
      } as MapCoordinate,
      southWest: {
        latitude: bounds?.getSouthWest()?.lat,
        longitude: bounds?.getSouthWest()?.lng
      } as MapCoordinate,
      center: {
        latitude: bounds?.getCenter()?.lat,
        longitude: bounds?.getCenter()?.lng
      }
    } as MapBounds
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

  private _listenForMapMarkersChanges(): void {
    combineLatest([
      this.currentOffendersMapMarkers$,
      this.currentMissingMapMarkers$
    ]).pipe(takeUntil(this._destroy$))
      .subscribe(([offenderMapMarkers, missingMapMarkers]) => {
        this._handleUpdatedMapMarkersFromBounds(offenderMapMarkers, missingMapMarkers);
      });
  }

  private _listenForGeocodingLocationSelectionChange() {
    this.selectedGeocodingLocation$
      .pipe(takeUntil(this._destroy$))
      .subscribe((location: GeocodingLocation | null) => this._handleMapUpdateWithGeoLocation(location));
  }

  private _handleMapUpdateWithGeoLocation(location: GeocodingLocation | null): void {
    if (location) {
      this._exploreStore.setOffendersMapMarkersLoadingState(LoadingState.LOADING);
      this.mapInstance?.flyTo(
        [location.location.latitude, location.location.longitude] , 
        this.defaultLeafletFlyToZoom,
        this.defaultFlyToOptions  
      );
    }
  }

  private _handleUpdatedMapMarkersFromBounds(offenderMapMarkers: MapMarker<OffenderCase>[] | null, missingMapMarkers: MapMarker<MissingPerson>[] | null): void {
    // Remove the current active markers
    if (this.activeMarkers?.length) {
      this.activeMarkers.forEach(m => m.remove());
    }
    
    // Add new offender map markers.
    if (offenderMapMarkers?.length && this.mapInstance) {
      this.activeOffenderMarkers = offenderMapMarkers.map((m: MapMarker<OffenderCase>) => 
        createOffenderMapMarker(m)
          .on('click', (e: any) => this._handleOffenderMarkerClickEventListener(m))
      ) || [];
    }
    
    // Add new missing map markers.
    if (missingMapMarkers?.length && this.mapInstance) {
      this.activeMissingMarkers = missingMapMarkers.map((m: MapMarker<MissingPerson>) => 
          createMissingMapMarker(m)
            .on('click', (e: any) => this._handleMissingMarkerClickEventListener(m))
        ) || [];
    }

    // Set new active markers, this should be set based on filter form (whether all, offenders or missing are checked).
    this.activeMarkers = [
      ...this.activeOffenderMarkers, 
      ...this.activeMissingMarkers
    ];

    this.mapInstance?.invalidateSize();
  }

  private _handleOffenderMarkerClickEventListener(marker: MapMarker<OffenderCase>): void {
    this._zone.run(() => {
      const offender: Offender | null = marker?.payload?.offender || null;
      if (!offender) return;
      this._drawerService.create({
        nzWrapClassName: 'explore-drawer-lg',
        nzContent: ExploreOffenderDialogContentComponent,
        nzContentParams: {
          offenderId: `${offender?.id}`
        },
        nzSize: 'large'
      });
    });
  }

  private _handleMissingMarkerClickEventListener(marker: MapMarker<MissingPerson>): void {
    this._zone.run(() => {
      const missingPerson: MissingPerson | null = marker?.payload || null;
      
      if (!missingPerson) return;
      
      this._drawerService.create({
        nzWrapClassName: 'explore-drawer-lg',
        nzContent: ExploreMissingDialogContentComponent,
        nzContentParams: {
          missingId: `${missingPerson?.id}`
        },
        nzSize: 'large'
      });
    });
  }

  public _addMarkerPopoverEventListeners(marker: MapMarker<OffenderCase>): void {
    this._elementRef.nativeElement.querySelector(`[id="${marker?.payload?.id || 0}"]`)
      .addEventListener('click', (e: any) => {
        this._zone.run(() => {
          this._router.navigate(['/offenders', marker?.payload?.offender?.id || 0, 'profile']);
        });
      });
  }

  ngOnDestroy(): void {
    this._exploreStore.setMapBounds(null);
    this._exploreStore.setOffenderCaseMapMappers(null);
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
