import { MapCoordinateDto } from '@vsp/common/dtos/geocoding/map-coordinate.dto'

export interface MyPvtLocationsResponse {
  locations: MyPvtLocation[]
}

export interface MyPvtCoordinate {
  latitude: number,
  longitude: number,
}

export interface MyPvtLocation {
  referencePosition: MyPvtCoordinate,
  roadAccessPosition: MyPvtCoordinate,
  formattedAddress: string,
}
