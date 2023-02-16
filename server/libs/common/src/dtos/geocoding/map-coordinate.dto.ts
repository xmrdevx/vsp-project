export class MapCoordinateDto {
  public latitude: number | null;
  public longitude: number | null;

  constructor(obj: Partial<MapCoordinateDto>) {
    Object.assign(this, {
      latitude: obj?.latitude,
      longitude: obj?.longitude
    });
  }
}
