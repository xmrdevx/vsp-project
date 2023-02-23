import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseTrackedEntity } from '../base-tracked.entity';
import { Claim } from './claim.entity';
import { Tenant } from './tenant.entity';

@Entity({ name: 'app_permission_template' })
export class PermissionTemplate extends BaseTrackedEntity {
  @Column()
  public name: string;

  @Column({ type: String, nullable: true })
  public description: string | null | undefined;

  @Column({ name: 'app_tenant_id' })
  public tenantId: string;

  @ManyToOne(type => Tenant, { nullable: false })
  @JoinColumn({ name: 'app_tenant_id' })
  public tenant: Tenant;

  @ManyToMany(type => Claim, { eager: false })
  @JoinTable({ 
    name: 'app_permission_template_claim',
    joinColumn: { name: 'app_permission_template_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'app_claim_id', referencedColumnName: "id" }
  })
  public claims: Claim[] | null | undefined;

  constructor(obj: Partial<PermissionTemplate>) {
    super();
    Object.assign(this, obj);
  }
}