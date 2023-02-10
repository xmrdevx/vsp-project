import { BaseEntity } from '../base.entity';
import { CaseStatus } from '../../enums/case-status.enum';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Offender } from './offender.entity';
import { GeoLocation } from '../geocoding/geo-location.entity';
import { Tenant } from '../identity/tenant.entity';
import { User } from '../identity/user.entity';

@Entity()
export class Case extends BaseEntity {
  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public openedOn: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  public closedOn: Date | null | undefined;

  @Column({ type: 'enum', enum: CaseStatus, default: CaseStatus.NEW })
  public status: CaseStatus;

  @Column({ nullable: true })
  public summary: string;

  @Column()
  public offenderId: string;

  @ManyToOne(type => Offender, offender => offender.cases, { nullable: false })
  @JoinColumn()
  public offender: Offender;

  @Column({ nullable: true })
  public caughtAtId: string;

  @OneToOne(type => GeoLocation, { nullable: true })
  @JoinColumn()
  public caughtAt: GeoLocation;

  @Column()
  public tenantId: string;

  @ManyToOne(type => Tenant)
  @JoinColumn()
  public tenant: Tenant;

  @Column()
  public createdById: string;

  @ManyToOne(type => User)
  @JoinColumn()
  public createdBy: User;

  // @TODO media
}