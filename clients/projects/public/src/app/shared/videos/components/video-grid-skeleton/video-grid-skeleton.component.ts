import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { VideoCardTileSkeletonComponent } from '../video-card-tile-skeleton/video-card-tile-skeleton.component';

@Component({
  selector: 'vsp-video-grid-skeleton',
  templateUrl: './video-grid-skeleton.component.html',
  styleUrls: ['./video-grid-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NzGridModule,
    VideoCardTileSkeletonComponent
  ]
})
export class VideoGridSkeletonComponent { }
