import { BaseComment } from '../base-comment.entity';
import { BaseEntity } from '../base.entity';
import { User } from '../identity/user.entity';
import { OffenderCommentLike } from './offender-comment-like.entity';
import { Offender } from './offender.entity';

export interface OffenderComment extends BaseComment {
  offender?: Offender,
  parent?: OffenderComment,
  children?: OffenderComment[],
  commentLikes?: OffenderCommentLike[];
}