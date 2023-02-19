import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity({ name: 'app_claim' })
export class Claim extends BaseEntity {
  @Column()
  public type: string;

  @Column()
  public value: string;

  @Column({ default: false })
  public isSetByTenant: boolean = false;

  constructor(obj: Partial<Claim>) {
    super();
    Object.assign(this, obj);
  }
}
