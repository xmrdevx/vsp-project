import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '@vsp/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LinkDetailsComponent } from '../link-details/link-details.component';

@Component({
  selector: 'vsp-link-details-list',
  templateUrl: './link-details-list.component.html',
  styleUrls: ['./link-details-list.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgStyle,
    NzListModule,
    NzTypographyModule,
    LinkDetailsComponent,
  ]
})
export class LinkDetailsListComponent {
  @Input()
  public links: Link[] = [];

  @Input()
  public maxHeight: number | null | undefined = null;
}
