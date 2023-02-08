import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { Media, Page } from '@vsp/core';
import { FlattenPageCollectionPipe } from '@vsp/public/shared/pipes';

import { VideoCardListComponent } from '../video-card-list/video-card-list.component';
import { VideoCardTileSkeletonComponent } from '../video-card-tile-skeleton/video-card-tile-skeleton.component';

@Component({
  selector: 'vsp-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    VideoCardListComponent,
    VideoCardTileSkeletonComponent,
  ]
})
export class VideoListComponent {
  @Input()
  public loadedPages: Page<Media>[] | null = null;

  @Input()
  public showDescriptions: boolean = true;

  @Input()
  public truncateDescriptionsAt: number | null = null;
}
