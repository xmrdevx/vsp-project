import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { debounceTime, Observable, of, Subject, takeUntil } from 'rxjs';

import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { 
  Offender, 
  GeocodingLocation, 
  NavigationLink, 
  fadeAnimation, 
  LoadingState, 
  MissingPerson } from '@vsp/core';

import { LayoutFooterComponent } from '@vsp/public/shared/layout/components/layout-footer/layout-footer.component';
import { defaultLeftNavigationMenu, defaultRightNavigationMenu } from '@vsp/public/constants/navigation-menu.defaults';
import { OffendersStore, GeocodingStore, MissingStore } from '@vsp/public/core/stores';

import { LatestMissingChildrenGridComponent } from '../../components/latest-missing-children-grid/latest-missing-children-grid.component';
import { LatestOffendersGridComponent } from '../../components/latest-offenders-grid/latest-offenders-grid.component';

@Component({
  selector: 'vsp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    LatestMissingChildrenGridComponent,
    LatestOffendersGridComponent,
    LayoutFooterComponent,
    NzAutocompleteModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTypographyModule,
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _router: Router = inject(Router);
  private readonly _geocodingStore: GeocodingStore = inject(GeocodingStore);
  private readonly _offendersStore: OffendersStore = inject(OffendersStore);
  private readonly _missingStore: MissingStore = inject(MissingStore);
  private readonly _destroy$: Subject<any> = new Subject<any>();
  private readonly _geocodingLocationsSearch$: Subject<string> = new Subject<string>();

  public footerLinks: NavigationLink[] = [...defaultLeftNavigationMenu, ...defaultRightNavigationMenu];

  public geocodingLocationsResult$: Observable<GeocodingLocation[] | null> = this._geocodingStore.geocodingLocationsResult$;

  public latestOffendersLoadingState$: Observable<LoadingState | null> = this._offendersStore.latestOffendersLoadingState$;
  public latestOffenders$: Observable<Offender[] | null> = this._offendersStore.latestOffenders$;

  public latestMissingLoadingState$: Observable<LoadingState | null> = this._missingStore.latestMissingLoadingState$;
  public latestMissing$: Observable<MissingPerson[] | null>  = this._missingStore.latestMissing$;

  public LoadingState = LoadingState;

  ngOnInit(): void {
    this._listenForGeocodingLocationSearchDebounce();
  }

  public onGeocodingLocationSelection(option: NzAutocompleteOptionComponent): void {
    const location: GeocodingLocation = option.nzValue as GeocodingLocation;
    this._geocodingStore.setSelectedGeocodingLocation(location);
    this._router.navigateByUrl('/explore');
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
