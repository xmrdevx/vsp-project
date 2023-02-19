import { Column, Entity, Generated, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

import { BaseEntity } from '../base.entity';
import { User } from '../identity/user.entity';

@Entity()
export class Stream extends BaseEntity {
  @Column()
  public title: string;

  @Column({ nullable: true })
  public summary: string;

  @Column()
  @Generated('uuid')
  @Index()
  public identifier: string;

  @Column({ default: false })
  public isActive: boolean = false;

  @Column({ default: false })
  public isPublished: boolean = false;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn({ name: 'app_user_id' })
  public user: User;

  constructor(obj: Partial<Stream>) {
    super();
    Object.assign(this, obj);
  }
}
