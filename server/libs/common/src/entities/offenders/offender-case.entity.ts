import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { BaseTrackedEntity } from '../base-tracked.entity';
import { CaseStatus } from '../../enums/case-status.enum';
import { Visibility } from '../../enums/visibility.enum';
import { Offender } from './offender.entity';
import { GeoLocation } from '../geocoding/geo-location.entity';
import { Tenant } from '../identity/tenant.entity';

@Entity()
export class OffenderCase extends BaseTrackedEntity {
  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public openedOn: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  public closedOn: Date | null | undefined;

  @Column({ type: 'enum', enum: CaseStatus, default: CaseStatus.OPEN })
  public status: CaseStatus;

  @Column({ type: 'enum', enum: Visibility, default: Visibility.PRIVATE })
  public visibility: Visibility;

  @Column({ type: String, nullable: true })
  public summary: string | null | undefined;

  @Column()
  public offenderId: string;

  @ManyToOne(type => Offender, offender => offender.cases, { nullable: false })
  @JoinColumn()
  public offender: Offender;

  @Column({ type: String, nullable: true })
  public caughtAtId: string | null | undefined;

  @OneToOne(type => GeoLocation, { nullable: true, cascade: ['insert'] })
  @JoinColumn()
  public caughtAt: GeoLocation | null | undefined;

  @Column()
  public tenantId: string;

  @ManyToOne(type => Tenant)
  @JoinColumn()
  public tenant: Tenant;

  // @TODO media

  constructor(obj: Partial<OffenderCase>) {
    super();
    Object.assign(this, obj);
  }
}