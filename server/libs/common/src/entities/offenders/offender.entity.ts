import { Column, Entity, OneToMany } from 'typeorm';
import { BaseTrackedEntity } from '../base-tracked.entity';
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

  constructor(obj: Partial<Offender>) {
    super();
    Object.assign(this, obj);
  }
}
