import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { fadeAnimation } from '@vsp/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'vsp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    NzPageHeaderModule
  ]
})
export class ContactComponent {
  @HostBinding('class')
  public hostClasses: string = 'block container mx-auto';
}
