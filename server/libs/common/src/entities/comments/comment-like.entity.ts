import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../identity';
import { Comment } from './comment.entity';

@Entity()
export class CommentLike extends BaseEntity {
  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public likedOn: Date;

  @Column()
  public likedById: string;

  @ManyToOne(type => User, { nullable: false })
  public likedBy: User;

  @Column()
  public commentId: string;

  @ManyToOne(type => Comment, comment => comment.commentLikes)
  public comment: Comment;

  @Column()
  @Index()
  public isLiked: boolean;
}