import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { BaseComment, BaseCommentLike, User } from '@vsp/core';

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
  public comment: BaseComment | null = null;

  @Input()
  public canReply: boolean = false;

  @Output()
  public commentLikeChange: EventEmitter<BaseCommentLike> = new EventEmitter<BaseCommentLike>();

  public dislike(): void {
    this.commentLikeChange.emit({
      isLiked: false,
      commentId: this.comment?.id,
    } as BaseCommentLike);
  }

  public like(): void {
    this.commentLikeChange.emit({
      isLiked: true,
      commentId: this.comment?.id,
    } as BaseCommentLike);
  }

  public get commentAuthor(): string {
    const commentedBy: User | null = this.comment?.commentedBy || null;
    return `${commentedBy?.profile?.firstName} ${commentedBy?.profile?.lastName} (${commentedBy?.username})` || 'anonymous';
  }
}
