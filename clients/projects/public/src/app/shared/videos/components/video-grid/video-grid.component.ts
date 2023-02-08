import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { FlattenPageCollectionPipe } from '@vsp/public/shared/pipes';
import { Media, Page } from '@vsp/core';

import { VideoCardTileComponent } from '../video-card-tile/video-card-tile.component';

@Component({
  selector: 'vsp-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FlattenPageCollectionPipe,
    NgFor,
    NgIf,
    NzCardModule,
    NzGridModule,
    NzEmptyModule,
    VideoCardTileComponent,
  ]
})
export class VideoGridComponent {
  @Input()
  public loadedPages: Page<Media>[] | null = null;
}
