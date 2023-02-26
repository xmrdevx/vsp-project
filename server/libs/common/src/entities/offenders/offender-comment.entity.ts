import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../identity';
import { OffenderCommentLike } from './offender-comment-like.entity';
import { Offender } from './offender.entity';

@Entity()
export class OffenderComment extends BaseEntity {
  @Column()
  public message: string;

  @Column()
  public commentedById: string;

  @ManyToOne(type => User, { nullable: false })
  public commentedBy: User;

  @Column()
  public offenderId: string; 

  @ManyToOne(type => Offender, { nullable: false })
  public offender: Offender;

  @Column({ type: String, nullable: true })
  public parentId: string | null | undefined;

  @ManyToOne(type => OffenderComment, comment => comment.children)
  public parent: OffenderComment | null | undefined;

  @OneToMany(type => OffenderComment, comment => comment.parent)
  public children: OffenderComment[] | null | undefined;

  @OneToMany(type => OffenderCommentLike, commentLike => commentLike.comment)
  public commentLikes: OffenderCommentLike[];

  constructor(obj: Partial<OffenderComment>) {
    super();
    Object.assign(this, obj);
  }
}
