import { AsyncPipe, JsonPipe, Location, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { fadeAnimation, Offender, ResponseStatus } from '@vsp/core';

import { OffendersActions, OffendersSelectors } from '../../store';

import { buildOffenderForm } from '../../components/offender-form/offender-form.builder';
import { OffenderFormComponent } from '../../components/offender-form/offender-form.component';

@Component({
  selector: 'vsp-offenders-update',
  templateUrl: './offenders-update.component.html',
  styleUrls: ['./offenders-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgTemplateOutlet,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzModalModule,
    NzTypographyModule,
    OffenderFormComponent,
    ReactiveFormsModule,
  ]
})
export class OffendersUpdateComponent implements OnInit, OnDestroy {
  private readonly _destroy$: Subject<void> = new Subject<void>();
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _modalRef: NzModalRef | null = inject(NzModalRef, { optional: true });
  private readonly _location: Location = inject(Location);

  public selectedOffender$: Observable<Offender | null> = 
    this._store.select(OffendersSelectors.selectSelectedOffender);

  @Input()
  public isModal: boolean = false;

  public updateOffenderForm: UntypedFormGroup = buildOffenderForm(this._formBuilder);

  ngOnInit(): void {
    this._patchThroughOffenderToForm();
  }

  public updateOffender(offender: Offender): void {
    if (this.updateOffenderForm.invalid) return;
    this._store.dispatch(OffendersActions.updateOffenderRequest({ offenderId: offender?.id, offender }));
    this._handleUpdateOffenderResponseMessage();
  }

  public cancelUpdate(): void {
    if (this.isModal) {
      this._modalRef?.close();
    } else {
      this._location.back();
    }
  }

  private _handleUpdateOffenderResponseMessage(): void {
    this._store
      .select(OffendersSelectors.selectUpdateOffenderResponseMessage)
      .pipe(filter(message => !!message), take(1))
      .subscribe(message => {
        if (message?.status === ResponseStatus.SUCCESS) {
          this._messageService.success(message.message || 'Success');
          this.updateOffenderForm.reset();
          if (this.isModal) {
            this._modalRef?.close();
          } else {
            this._location.back();
          }
        }
      });
  }

  private _patchThroughOffenderToForm(): void {
    this._store
      .select(OffendersSelectors.selectSelectedOffender)
      .pipe(takeUntil(this._destroy$), filter(selectedOffender => !!selectedOffender))
      .subscribe(selectedOffender => {
        this.updateOffenderForm.patchValue({ ...selectedOffender });
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
