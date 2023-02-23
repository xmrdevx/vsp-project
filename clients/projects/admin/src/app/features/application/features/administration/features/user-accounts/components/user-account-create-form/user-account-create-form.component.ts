import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Observable, Observer } from 'rxjs';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { EnvironmentService, PermissionTemplate } from '@vsp/core';
import { VspAutoFocusControlDirective } from '@vsp/forms';
import { ClaimPermissionNode } from '@vsp/admin/core/models';
import { VspClaimPermissionsControlComponent } from '@vsp/admin/shared/form-controls';

@Component({
  selector: 'vsp-user-account-create-form',
  templateUrl: './user-account-create-form.component.html',
  styleUrls: ['./user-account-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    NzButtonModule,
    NzDropDownModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzUploadModule,
    ReactiveFormsModule,
    VspAutoFocusControlDirective,
    VspClaimPermissionsControlComponent,
  ]
})
export class UserAccountCreateFormComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @ViewChild(VspAutoFocusControlDirective)
  public autoFocusControl!: VspAutoFocusControlDirective;
  
  @Input()
  public permissionTemplates: PermissionTemplate[] | null = [];

  @Output()
  public selectPermissionTemplate: EventEmitter<PermissionTemplate | null> = 
    new EventEmitter<PermissionTemplate | null>();

  public userAccountForm!: UntypedFormGroup;

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

  public onApplyPermissionTemplate(permissionTemplate: PermissionTemplate | null): void {
    this.isLoadingTemplate = true;
    this.selectPermissionTemplate.emit(permissionTemplate);
    setTimeout(() => {
      this.isLoadingTemplate = false;
      this._changeDetectorRef.markForCheck();
    }, 500);
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
