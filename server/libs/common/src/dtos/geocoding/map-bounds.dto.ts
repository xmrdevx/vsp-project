import { MapCoordinateDto } from './map-coordinate.dto';

export class MapBoundsDto {
  public northEast: MapCoordinateDto;
  public southWest: MapCoordinateDto;

  constructor(obj: Partial<MapBoundsDto>) {
    Object.assign(this, {
      northEast: new MapCoordinateDto({ ...obj.northEast }),
      southWest: new MapCoordinateDto({ ...obj.southWest })
    } satisfies MapBoundsDto);
  }
}
