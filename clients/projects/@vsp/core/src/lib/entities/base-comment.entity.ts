import { BaseEntity } from './base.entity';
import { User } from './identity/user.entity';
import { BaseCommentLike } from './base-comment-like.entity';

export interface BaseComment extends BaseEntity {
  message: string,
  commentedById: string,
  offenderId: string,
  parentId: string,
  commentedBy?: User,
  parent?: BaseComment,
  children?: BaseComment[],
  commentLikes?: BaseCommentLike[] 
}