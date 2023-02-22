import { AsyncPipe, JsonPipe, NgFor, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormArray, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'vsp-claim-permissions-control',
  templateUrl: './claim-permissions-control.component.html',
  styleUrls: ['./claim-permissions-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgFor,
    NgIf,
    NzButtonModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzDropDownModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzSwitchModule,
    ReactiveFormsModule,
    TitleCasePipe,
  ],
  viewProviders: [
    { 
      provide: ControlContainer, 
      useExisting: FormGroupDirective 
    }
  ]
})
export class VspClaimPermissionsControlComponent {
  private _claimPermissionsFormArray: UntypedFormArray = new UntypedFormArray([]);
  public claimPermissionsFormArrayName: string = 'null';

  @Input()
  public set claimPermissionsFormArray(formArray:  UntypedFormArray) {
    this._claimPermissionsFormArray = formArray ?? new UntypedFormArray([])

    this.claimPermissionsFormArrayName = Object
      .keys(formArray?.parent?.controls || [])
      .find(key => formArray?.parent?.get(key) == this.claimPermissionsFormArray) || 'null'
  };

  public get claimPermissionsFormArray(): UntypedFormArray {
    return this._claimPermissionsFormArray;
  }

  @Input()
  public claimPermissionTemplates: any[] = [];

  @Input()
  protected isDisabled: boolean = false;

  public claimPermissionGroupChildrenArray(control: AbstractControl): UntypedFormArray {
    const formGroup: UntypedFormGroup = control as FormGroup;
    return formGroup.get('children') as UntypedFormArray;
  }

  public claimPermissionFormGroup(index: number): FormGroup {
    return this.claimPermissionsFormArray?.controls[index] as FormGroup;
  }

  public onClaimPermissionAccessChange(event: any, control: AbstractControl): void {
    const children: UntypedFormArray = (control as FormGroup).get('children') as UntypedFormArray;
    children.controls.forEach(control => {
      control.patchValue({ hasPermission: event });
    });
  }
}
