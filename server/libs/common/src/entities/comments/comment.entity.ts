import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../identity';
import { CommentLike } from './comment-like.entity';

@Entity()
export class Comment extends BaseEntity {
  @Column()
  public message: string;

  @Column()
  public commentedById: string;

  @ManyToOne(type => User, { nullable: false })
  public commentedBy: User;

  @Column({ type: String, nullable: true })
  public parentId: string | null | undefined;

  @ManyToOne(type => Comment, comment => comment.children)
  public parent: Comment | null | undefined;

  @OneToMany(type => Comment, comment => comment.parent)
  public children: Comment[] | null | undefined;

  @OneToMany(type => CommentLike, commentLike => commentLike.comment)
  public commentLikes: CommentLike[];
}
