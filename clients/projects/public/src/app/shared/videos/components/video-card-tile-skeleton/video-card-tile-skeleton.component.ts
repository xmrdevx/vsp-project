import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-video-card-tile-skeleton',
  templateUrl: './video-card-tile-skeleton.component.html',
  styleUrls: ['./video-card-tile-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzSkeletonModule
  ]
})
export class VideoCardTileSkeletonComponent { }
