import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-video-card-player-skeleton',
  templateUrl: './video-card-player-skeleton.component.html',
  styleUrls: ['./video-card-player-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzCardModule,
    NzSkeletonModule,
  ]
})
export class VideoCardPlayerSkeletonComponent { }
