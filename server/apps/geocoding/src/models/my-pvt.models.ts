import { MapCoordinateDto } from '@vsp/common/dtos/geocoding/map-coordinate.dto'

export interface MyPvtLocationsResponse {
  locations: MyPvtLocation[]
}

export interface MyPvtCoordinate {
  latitude: number,
  longitude: number,
}

export interface MyPvtAddress {
  countryName: string,
  state: string,
  province: string,
  postalCode: string | number,
  city: string,
  district: string,
  subdistrict: string,
  street: string,
  houseNumber: string
}

export interface MyPvtLocation {
  referencePosition: MyPvtCoordinate,
  roadAccessPosition: MyPvtCoordinate,
  formattedAddress: string,
  address: MyPvtAddress
}
