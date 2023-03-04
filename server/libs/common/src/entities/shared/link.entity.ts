import { LinkType } from '../../enums/link-type.enum';
import { Visibility } from '../../enums/visibility.enum';
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class Link extends BaseEntity {
  @Column({ type: 'enum', enum: LinkType, default: LinkType.DOCUMENTATION })
  public type: LinkType;

  @Column()
  public name: string;

  @Column()
  public url: string;

  @Column({ type: 'enum', enum: Visibility, default: Visibility.PRIVATE })
  public visibility: Visibility;

  constructor(obj: Partial<Link>) {
    super();
    Object.assign(this, obj);
  }
}
