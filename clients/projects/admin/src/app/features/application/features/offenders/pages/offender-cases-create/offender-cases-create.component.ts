import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeEmptyKeys } from '@vsp/admin/shared/utils';
import { fadeAnimation, OffenderCase, ResponseStatus } from '@vsp/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { filter, take } from 'rxjs';
import { OffenderFormComponent } from '../../components/offender-form/offender-form.component';
import { OffendersActions, OffendersSelectors } from '../../store';

@Component({
  selector: 'vsp-offender-cases-create',
  templateUrl: './offender-cases-create.component.html',
  styleUrls: ['./offender-cases-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgTemplateOutlet,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzFormModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzTypographyModule,
    OffenderFormComponent,
    ReactiveFormsModule,
  ]
})
export class OffenderCasesCreateComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly _store: Store = inject(Store);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: NzMessageService = inject(NzMessageService);
  private readonly _modalRef: NzModalRef | null = inject(NzModalRef, { optional: true });

  @Input()
  public isModal: boolean = false;

  public createOffenderCaseForm: UntypedFormGroup = this._formBuilder.group({});//buildOffenderForm(this._formBuilder);

  public createOffenderCase(offender: OffenderCase, shouldRedirect: boolean = false): void {
    // if (this.createOffenderForm.invalid) return;
    // removeEmptyKeys(offender);
    // this._store.dispatch(OffendersActions.createOffenderRequest({ offender Case}));
    // this._handleCreateOffenderCaseResponseMessage(shouldRedirect);
  }

  private _handleCreateOffenderCaseResponseMessage(shouldRedirect: boolean): void {
    // this._store
    //   .select(OffendersSelectors.selectCreateOffenderCaseResponseMessage)
    //   .pipe(filter(message => !!message), take(1))
    //   .subscribe(message => {
    //     if (message?.status === ResponseStatus.SUCCESS) {
    //       this._messageService.success(message.message || 'Success');
    //       this.createOffenderForm.reset();
    //       if (shouldRedirect) {
    //         this._modalRef?.close();
    //         this._router.navigate(['/app/offenders', message?.payload?.id]);
    //       }
    //     }
    //   });
  }
}
