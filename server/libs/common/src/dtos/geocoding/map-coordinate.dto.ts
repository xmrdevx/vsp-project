export class MapCoordinateDto {
  public latitude: number | null;
  public longitude: number | null;

  constructor(obj: any) {
    Object.assign(this, {
      latitude: obj?.latitude,
      longitude: obj?.longitude
    } satisfies MapCoordinateDto);
  }
}
