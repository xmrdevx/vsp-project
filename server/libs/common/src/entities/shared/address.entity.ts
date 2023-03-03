import { Point } from 'geojson';
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";

/**
 * Note: There is also UserAddress entity in identity which relates to the user accounts.
 * This address entity relates to resources data and has nothing to do with user account/identity.
 */
@Entity()
export class Address extends BaseEntity {
  @Column({ type: String, nullable: true })
  public street: string | null | undefined;

  @Column({ type: String, nullable: true })
  public street2: string | null | undefined;

  @Column({ type: String, nullable: true })
  public city: string | null | undefined;

  @Column({ type: String, nullable: true })
  public state: string | null | undefined;

  @Column({  type: String,nullable: true })
  public zip: string | null | undefined;

  @Column({ type: String, nullable: true })
  public country: string | null | undefined;

  @Column({ type: 'float8', nullable: true, default: null })
  public latitude: number;

  @Column({ type: 'float8', nullable: true, default: null  })
  public longitude: number;

  @Column({ type: 'geography', spatialFeatureType: 'Point', srid: 4326, nullable: true, default: null })
  public location: Point | null | undefined;

  constructor(obj: Partial<Address>) {
    super();
    Object.assign(this, obj);
  }
}
