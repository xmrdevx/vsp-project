import { GeoLocationDto } from '../dtos/geocoding';
import { GeoLocation } from '../entities/geocoding';
import { OffenderMapper } from './offender.mapper';

export class GeoLocationMapper {
  public static toDto(entity: GeoLocation): GeoLocationDto {
    return new GeoLocationDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      fullAddressString: entity.fullAddressString,
      latitude: entity.latitude,
      longitude: entity.longitude
    });
  }
  
  public static toDtoList(entities: GeoLocation[]): GeoLocationDto[] {
    return entities.map(entity => GeoLocationMapper.toDto(entity));
  }
  
  public static toEntity(dto: GeoLocationDto): GeoLocation {
    // @TODO Not really needed as of right now.
    return new GeoLocation({
      
    });
  }

  public static toEntityList(dtos: GeoLocationDto[]): GeoLocation[] {
    return dtos.map(dto => GeoLocationMapper.toEntity(dto))
  }
}