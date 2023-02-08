import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { Media } from '@vsp/core';

@Component({
  selector: 'vsp-video-card-list',
  templateUrl: './video-card-list.component.html',
  styleUrls: ['./video-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    RouterLink,
  ]
})
export class VideoCardListComponent {
  @Input()
  public video: Media | null = null;

  @Input()
  public showDescription: boolean = true;

  @Input()
  public truncateDescriptionAt: number | null = null;

  public defaultVideoThumnailSrcUrl: string = 'assets/images/thumbnail-video-placeholder.jpeg';

  public get generateCardDescription(): string | null {
    if (this.truncateDescriptionAt) {
      return this.showDescription 
        ? `${this.video?.description?.slice(0, this.truncateDescriptionAt)}...`
        : ''
    }
    return this.showDescription ? (this.video?.description || '') : null;
  }
}
