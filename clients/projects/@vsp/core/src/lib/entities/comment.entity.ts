import { User } from './user.entity';
import { BaseEntity } from './base.entity';

export interface Comment extends BaseEntity {
  commentedBy: User,
  commentedOn: Date,
  message: string,
  parentComponentId: string,
  likes?: number,
  dislikes?: number;
  children?: Comment[] | null
}
