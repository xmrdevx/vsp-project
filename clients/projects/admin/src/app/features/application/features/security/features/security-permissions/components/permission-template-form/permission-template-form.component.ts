import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewChild, inject } from '@angular/core';
import { AbstractControl, ControlContainer, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { VspAutoFocusControlDirective } from '@vsp/forms';
import { VspClaimPermissionsControlComponent } from '@vsp/admin/shared/form-controls';

@Component({
  selector: 'vsp-permission-template-form',
  templateUrl: './permission-template-form.component.html',
  styleUrls: ['./permission-template-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzCheckboxModule,
    NzCollapseModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzListModule,
    NzSwitchModule,
    ReactiveFormsModule,
    VspClaimPermissionsControlComponent
  ]
})
export class PermissionTemplateFormComponent {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);

  @ViewChild(VspAutoFocusControlDirective)
  public autoFocusControl!: VspAutoFocusControlDirective;
  
  public permissionTemplateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.permissionTemplateForm = this._controlContainer?.control as UntypedFormGroup;
  }

  public get claimPermissionGroupsArray(): UntypedFormArray {
    return this.permissionTemplateForm.get('claimPermissionGroups') as UntypedFormArray;
  }

  public getTemplatePermissionsFormArray(control: AbstractControl): UntypedFormArray {
    const formGroup: UntypedFormGroup = control as UntypedFormGroup;
    return formGroup.get('templatePermissions') as UntypedFormArray;
  }
}
