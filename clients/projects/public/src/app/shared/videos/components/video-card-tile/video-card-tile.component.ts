import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { EllipsisPipe } from '@vsp/public/shared/pipes';
import { Media } from '@vsp/core';

@Component({
  selector: 'vsp-video-card-tile',
  templateUrl: './video-card-tile.component.html',
  styleUrls: ['./video-card-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    EllipsisPipe,
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    RouterLink,
  ]
})
export class VideoCardTileComponent {
  @Input()
  public video: Media | null = null;
}
