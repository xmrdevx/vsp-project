import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef, inject } from '@angular/core';
import { AbstractControl, ControlContainer, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Observable, Observer } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { EnvironmentService, ForgotPassword } from '@vsp/core';
import { VspAutoFocusControlDirective } from '@vsp/forms';
import { ClaimPermissionNode } from '@vsp/admin/core/models';


@Component({
  selector: 'vsp-user-account-update-form',
  templateUrl: './user-account-update-form.component.html',
  styleUrls: ['./user-account-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NgTemplateOutlet,
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
    NzUploadModule,
    VspAutoFocusControlDirective,
    ReactiveFormsModule,
    TitleCasePipe,
  ]
})
export class UserAccountUpdateFormComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public claimPermissionGroups: ClaimPermissionNode[] | null = [];

  @Output()
  public selectTemplateModulePermissionName: EventEmitter<any | null> = 
    new EventEmitter<any | null>();

  @Output()
  public issueForgotPasswordRequest: EventEmitter<ForgotPassword> = new EventEmitter<ForgotPassword>();

  public userAccountForm!: UntypedFormGroup;

  public hasIssuedForgotPasswordRequest: boolean = false;
  public isLoadingTemplate: boolean = false;

  ngOnInit(): void {
    this.userAccountForm = this._controlContainer.control as UntypedFormGroup;
  }

  public get uploadAvatarUrl(): string {
    return `${this._environmentService.getBaseApiUrl()}/files/avatar`;
  }

  public get claimPermissionGroupsArray(): UntypedFormArray {
    return this.userAccountForm.get('claimPermissionGroups') as UntypedFormArray;
  }

  public claimPermissionGroupChildrenArray(control: AbstractControl): UntypedFormArray {
    const formGroup: UntypedFormGroup = control as UntypedFormGroup;
    return formGroup.get('children') as UntypedFormArray;
  }

  public onApplyPermissionTemplate(templateModulePermissionName: any | null): void {
    this.isLoadingTemplate = true;
    this.selectTemplateModulePermissionName.emit(templateModulePermissionName);
    setTimeout(() => {
      this.isLoadingTemplate = false;
      this._changeDetectorRef.markForCheck();
    }, 500);
  }

  public onIssueForgotPasswordRequest(request: ForgotPassword): void {
    this.hasIssuedForgotPasswordRequest = true;
    this.issueForgotPasswordRequest.emit(request);
  }

  public onClaimPermissionAccessChange(event: any, control: AbstractControl): void {
    const children: UntypedFormArray = (control as UntypedFormGroup).get('children') as UntypedFormArray;
    children.controls.forEach(control => {
      control.patchValue({ hasPermission: event });
    });
  }

  // @TODO clean up
  loading = false;
  avatarUrl?: string;

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        console.log('You can only upload JPG file!')
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        console.log('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        console.log('Network error');
        this.loading = false;
        break;
    }
  }
}
