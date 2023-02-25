import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseTrackedEntity } from '../base-tracked.entity';
import { Comment } from '../comments';
import { OffenderCase } from './offender-case.entity';

@Entity()
export class Offender extends BaseTrackedEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
  
  @Column({ type: String, nullable: true })
  public avatarUrl: string | null | undefined;
  
  @Column({ type: String, nullable: true })
  public summary: string | null | undefined;

  @OneToMany(type => OffenderCase, c => c.offender)
  public cases: OffenderCase[] | null | undefined;

  @ManyToMany(type => Comment, { eager: false })
  @JoinTable({ 
    name: 'offender_comment',
    joinColumn: { name: 'offender_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'comment_id', referencedColumnName: "id" }
  })
  public comments: Comment[] | null | undefined;

  constructor(obj: Partial<Offender>) {
    super();
    Object.assign(this, obj);
  }
}
