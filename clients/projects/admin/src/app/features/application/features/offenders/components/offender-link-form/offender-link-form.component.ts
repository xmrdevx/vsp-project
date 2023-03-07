import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { JsonPipe, NgFor, NgIf, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { EnumToArrayPipe } from '@vsp/pipes';
import { defaultLinkTypeListOptions, defaultVisibilityListOptions, ListOption } from '@vsp/core';


@Component({
  selector: 'vsp-offender-link-form',
  templateUrl: './offender-link-form.component.html',
  styleUrls: ['./offender-link-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    EnumToArrayPipe,
    JsonPipe,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    ReactiveFormsModule,
    TitleCasePipe,
  ]
})
export class OffenderLinkFormComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);

  public defaultLinkTypeListOptions: ListOption[] = defaultLinkTypeListOptions;
  public defaultVisibilityListOptions: ListOption[] = defaultVisibilityListOptions;


  public linkForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.linkForm = this._controlContainer.control as UntypedFormGroup;
  }
}
