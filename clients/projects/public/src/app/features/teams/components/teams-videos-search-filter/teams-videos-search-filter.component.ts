import { NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'vsp-teams-videos-search-filter',
  templateUrl: './teams-videos-search-filter.component.html',
  styleUrls: ['./teams-videos-search-filter.component.scss'],
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
export class TeamsVideosSearchFilterComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);

  public form!: UntypedFormGroup;

  ngOnInit(): void {
    this.form = this._controlContainer.control as UntypedFormGroup;
  }
}
