import { Component, OnInit, ChangeDetectionStrategy, HostBinding, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, of, take } from 'rxjs';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { Offender, fadeAnimation, LoadingState } from '@vsp/core';
import { OffendersStore } from '@vsp/public/core/stores/offenders-store.service';
import { OffenderSimpleProfileComponent, OffenderSimpleProfileSkeletonComponent } from '@vsp/public/shared/offenders';

@Component({
  selector: 'vsp-offender-profile',
  templateUrl: './offender-profile.component.html',
  styleUrls: ['./offender-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    NzPageHeaderModule,
    OffenderSimpleProfileComponent,
    OffenderSimpleProfileSkeletonComponent,
  ]
})
export class OffenderProfileComponent implements OnInit {
  private readonly _route: ActivatedRoute = inject(ActivatedRoute);
  private readonly _offendersStore: OffendersStore = inject(OffendersStore);

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto'

  public selectedOffender$: Observable<Offender | null> = this._offendersStore.selectedOffender$;
  public selectedOffenderLoadingState$: Observable<LoadingState> = this._offendersStore.selectedOffenderLoadingState$;

  ngOnInit(): void {
    this._route.paramMap
      .pipe(take(1))
      .subscribe((params: ParamMap) => {
        const offenderId: string = params.get('offenderId') ?? '';
        this._offendersStore.findOffenderById(offenderId);
      });
  }
}
