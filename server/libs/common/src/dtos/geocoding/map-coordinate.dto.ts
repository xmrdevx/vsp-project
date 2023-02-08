export class MapCoordinateDto {
  public latitude: number;
  public longitude: number;

  constructor(obj: any) {
    Object.assign(this, {
      latitude: obj?.latitude,
      longitude: obj?.longitude
    } satisfies MapCoordinateDto);
  }
}
