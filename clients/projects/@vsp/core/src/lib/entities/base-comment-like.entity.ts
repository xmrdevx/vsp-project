import { BaseComment } from './base-comment.entity';
import { BaseEntity } from './base.entity';
import { User } from './identity/user.entity';

export interface BaseCommentLike extends BaseEntity {
  likedOn: Date,
  likedById: string,
  commentId: string,
  isLiked: boolean,
  likedBy?: User,
  comment?: BaseComment,
}
