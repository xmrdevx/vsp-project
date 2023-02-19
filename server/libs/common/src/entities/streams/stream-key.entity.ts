import { Column, Entity, Generated, Index, JoinTable, ManyToMany } from 'typeorm';

import { BaseEntity } from '../base.entity';
import { User } from '../identity/user.entity';

@Entity()
export class StreamKey extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  @Generated('uuid')
  @Index()
  public key: string;

  @Column({ default: false })
  public isBlacklisted: boolean = false;

  @ManyToMany(type => User, { eager: false, cascade: true })
  public users: User[];

  constructor(obj: Partial<StreamKey>) {
    super();
    Object.assign(this, obj);
  }
}
