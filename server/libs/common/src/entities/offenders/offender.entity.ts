import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Case } from './case.entity';

@Entity()
export class Offender extends BaseEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
  
  @Column()
  public avatarUrl: string;
  
  @Column()
  public summary: string;

  @OneToMany(type => Case, c => c.id)
  public cases: Case[]; 
}
