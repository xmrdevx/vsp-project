import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'vsp-comment-skeleton',
  templateUrl: './comment-skeleton.component.html',
  styleUrls: ['./comment-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzAvatarModule,
    NzSkeletonModule,
  ]
})
export class CommentSkeletonComponent { }
