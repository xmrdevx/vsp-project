import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../identity';
import { OffenderComment } from './offender-comment.entity';

@Entity()
export class OffenderCommentLike extends BaseEntity {
  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public likedOn: Date;

  @Column()
  public likedById: string;

  @ManyToOne(type => User, { nullable: false })
  public likedBy: User | null | undefined;

  @Column()
  public commentId: string;

  @ManyToOne(type => OffenderComment, comment => comment.commentLikes)
  public comment: OffenderComment;

  @Column()
  @Index()
  public isLiked: boolean;

  constructor(obj: Partial<OffenderCommentLike>) {
    super();
    Object.assign(this, obj);
  }
}