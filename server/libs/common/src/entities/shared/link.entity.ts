import { LinkType, Visibility } from '@vsp/common/enums';
import { Point } from 'geojson';
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class Address extends BaseEntity {
  @Column({ type: 'enum', enum: LinkType, default: LinkType.DOCUMENTATION })
  public type: string | null | undefined;

  @Column()
  public name: string;

  @Column()
  public url: string;

  @Column({ type: 'enum', enum: Visibility, default: Visibility.PRIVATE })
  public visibility: Visibility;

  constructor(obj: Partial<Address>) {
    super();
    Object.assign(this, obj);
  }
}
