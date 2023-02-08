import { NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'vsp-teams-cases-search-filter',
  templateUrl: './teams-cases-search-filter.component.html',
  styleUrls: ['./teams-cases-search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class TeamsCasesSearchFilterComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  
  public form!: UntypedFormGroup;

  ngOnInit(): void {
    this.form = this._controlContainer.control as UntypedFormGroup;
  }
}
