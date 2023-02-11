import { Column, Entity, OneToMany } from 'typeorm';
import { BaseTrackedEntity } from '../base-tracked.entity';
import { Case } from './case.entity';

@Entity()
export class Offender extends BaseTrackedEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
  
  @Column()
  public avatarUrl: string;
  
  @Column()
  public summary: string;

  @OneToMany(type => Case, c => c.offender)
  public cases: Case[]; 
}
