import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { fadeAnimation, LoadingState, Team } from '@vsp/core';

import { TeamsStore } from '../../store/teams-store.service';
import { TeamsSimpleProfileComponent } from '../../components/teams-simple-profile/teams-simple-profile.component';
import { TeamsSimpleProfileSkeletonComponent } from '../../components/teams-simple-profile-skeleton/teams-simple-profile-skeleton.component';

@Component({
  selector: 'vsp-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
    TeamsSimpleProfileComponent,
    TeamsSimpleProfileSkeletonComponent,
  ]
})
export class TeamsComponent implements OnInit, OnDestroy {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly _teamsStore: TeamsStore = inject(TeamsStore);

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto'

  private _destroy$: Subject<any> = new Subject<any>();
  private _searchTeamsSubject$: Subject<string> = new Subject<string>();

  public teamsLoadingState$: Observable<LoadingState> = this._teamsStore.teamsLoadingState$;
  public teamsSearchForm: UntypedFormGroup = this._formBuilder.group({ query: [''] });
  public filteredTeams: Team[] | null = null;

  public LoadingState = LoadingState;

  ngOnInit(): void {
    this._teamsStore.loadAllTeams();
    this._listenForSearchFormChanges();
    this._listenForSearchEvents();
    this._listenForTeamsStateChanges();
    this._searchTeamsSubject$.next('');
  }

  private _listenForSearchFormChanges(): void {
    this.teamsSearchForm.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((form) => {
        const query = form?.query?.trim().toLocaleLowerCase() || '';
        this._searchTeamsSubject$.next(query);
      });
  }

  private _listenForTeamsStateChanges(): void {
    this._teamsStore.teams$
      .pipe(takeUntil(this._destroy$))
      .subscribe(teams => {
        const query: string = this.teamsSearchForm?.get('query')?.value?.trim()?.toLocaleLowerCase() || '';
        this._searchTeamsSubject$.next(query);
      });
  }

  private _listenForSearchEvents(): void {
    this._searchTeamsSubject$
      .pipe(
        takeUntil(this._destroy$),
        withLatestFrom(this._teamsStore.teams$)  
      )
      .subscribe(([query, teams]) => {
        if (query.length > 0) {
          this.filteredTeams = teams?.filter(
            team => team?.name?.trim().toLocaleLowerCase()?.includes(query)) || null;
        } else {
          this.filteredTeams = teams;
        }
        this._changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
