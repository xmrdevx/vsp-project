import { AddressDto } from '../dtos/shared';
import { Address } from '../entities/shared';

export class AddressMapper {
  public static toDto(entity: Address): AddressDto {
    return new AddressDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      street: entity.street,
      street2: entity.street2,
      city: entity.city,
      state: entity.state,
      zip: entity.zip,
      country: entity.country,
      latitude: entity.latitude,
      longitude: entity.longitude,
    });
  }
  
  public static toDtoList(entities: Address[]): AddressDto[] {
    return entities.map(entity => AddressMapper.toDto(entity));
  }
  
  public static toEntity(dto: AddressDto): Address {
    return new Address({
      id: dto.id,
      street: dto.street,
      street2: dto.street2,
      city: dto.city,
      state: dto.state,
      zip: dto.zip,
      country: dto.country,
      latitude: dto.latitude,
      longitude: dto.longitude
    });
  }

  public static toEntityList(dtos: AddressDto[]): Address[] {
    return dtos.map(dto => AddressMapper.toEntity(dto))
  }
}
