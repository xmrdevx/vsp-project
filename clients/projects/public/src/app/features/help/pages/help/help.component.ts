import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy, HostBinding, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { fadeAnimation } from '@vsp/core';

import { defaultFaqItems } from '../../constants/faq.defaults';
import { FaqItem } from '../../models/faq-item.model';

@Component({
  selector: 'vsp-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NgFor,
    NzButtonModule,
    NzCardModule,
    NzCollapseModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzPageHeaderModule,
    NzTypographyModule,
    ReactiveFormsModule,
  ]
})
export class HelpComponent {
  private readonly _formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);

  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto';

  public defaultFaqItems: FaqItem[] = defaultFaqItems;

  public helpForm: UntypedFormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required]]
  });

  public onSubmitHelpForm(formValue: any): void {
    console.log('submitting help form', formValue);
  }
}
