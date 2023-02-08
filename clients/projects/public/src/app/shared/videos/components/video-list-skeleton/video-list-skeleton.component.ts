import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { VideoCardListSkeletonComponent } from '../video-card-list-skeleton/video-card-list-skeleton.component';

@Component({
  selector: 'vsp-video-list-skeleton',
  templateUrl: './video-list-skeleton.component.html',
  styleUrls: ['./video-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NzGridModule,
    VideoCardListSkeletonComponent
  ]
})
export class VideoListSkeletonComponent { }
