import { Point } from 'geojson';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity()
export class GeoLocation extends BaseEntity {
  @Column({ nullable: true })
  public fullAddressString: string;

  @Column({ type: 'float8' })
  public latitude: number;

  @Column({ type: 'float8' })
  public longitude: number;

  @Column({ type: 'geography', spatialFeatureType: 'Point', srid: 4326 })
  public location: Point;

  constructor(obj: Partial<GeoLocation>) {
    super();
    Object.assign(this, obj);
  }
}
