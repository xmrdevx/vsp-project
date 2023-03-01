import { BaseCommentLike } from '../base-comment-like.entity';
import { BaseEntity } from '../base.entity';
import { User } from '../identity/user.entity';
import { OffenderComment } from './offender-comment.entity';

export interface OffenderCommentLike extends BaseCommentLike {
  comment?: OffenderComment,
}
