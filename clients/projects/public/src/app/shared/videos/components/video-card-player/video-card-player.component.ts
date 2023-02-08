import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, inject } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

import { EnvironmentService, LoadingState, Media } from '@vsp/core';

@Component({
  selector: 'vsp-video-card-player',
  templateUrl: './video-card-player.component.html',
  styleUrls: ['./video-card-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzCardModule,
  ]
})
export class VideoCardPlayerComponent {
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);

  @Input()
  public loadingState: LoadingState | null = LoadingState.INITIAL;

  @Input()
  public video: Media | null = null;

  @Input()
  public showControls: boolean = true;

  @Input()
  public autoplay: boolean = true;

  public get baseApiVideoWatchUrl(): string {
    return `${this._environmentService.getBaseApiUrl()}/videos/watch`
  }
}
