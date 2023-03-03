import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseTrackedEntity } from '../base-tracked.entity';
import { Address } from '../shared';
import { OffenderCase } from './offender-case.entity';
import { OffenderComment } from './offender-comment.entity';

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

  @OneToMany(type => OffenderComment, comment => comment.offender)
  public comments: OffenderComment[] | null | undefined;

  @ManyToMany(type => Address, { eager: false })
  @JoinTable({
    name: 'offender_address',
    joinColumn: { name: 'offender_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'address_id', referencedColumnName: "id" }
  })
  public addresses: Address[] | null | undefined;

  constructor(obj: Partial<Offender>) {
    super();
    Object.assign(this, obj);
  }
}
