import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag';

import { Link, LinkType } from '@vsp/core';

@Component({
  selector: 'vsp-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzTagModule,
    TitleCasePipe
  ]
})
export class LinkDetailsComponent {
  @Input()
  public link: Link | null | undefined = null;

  public get linkTypeBadgeColor(): string {
    switch (this.link?.type) {
      case LinkType.DOCUMENTATION: return 'processing';
      case LinkType.SOCIAL:        return 'social';
      case LinkType.OTHER:         return 'default';
      default:                     return 'default';
    }
  }
}
