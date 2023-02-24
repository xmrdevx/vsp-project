import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { Comment, User } from '@vsp/core';

import { CommentTimeStringPipe } from '../../pipes/comment-time-string.pipe';

@Component({
  selector: 'vsp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    NzAvatarModule,
    NzCommentModule,
    NzIconModule,
    NzToolTipModule,
    CommentTimeStringPipe,
  ]
})
export class CommentComponent {
  @Input()
  public comment: Comment | null = null;

  public dislike(): void {
    // @TODO
  }

  public like(): void {
    // @TODO
  }

  public get commentAuthor(): string {
    const commentedBy: User | null = this.comment?.commentedBy || null;
    return `${commentedBy?.profile?.firstName} ${commentedBy?.profile?.lastName} (${commentedBy?.username})` || 'anonymous';
  }
}
