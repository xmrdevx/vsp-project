import { UserAddressDto } from '../dtos/identity';
import { UserAddress } from '../entities/identity';

export class UserAddressMapper {
  public static toDto(entity: UserAddress): UserAddressDto {
    return new UserAddressDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      street: entity.street,
      street2: entity.street2,
      city: entity.city,
      state: entity.state,
      zip: entity.zip,
      country: entity.country
    });
  }
  
  public static toDtoList(entities: UserAddress[]): UserAddressDto[] {
    return entities.map(entity => UserAddressMapper.toDto(entity));
  }
  
  public static toEntity(dto: UserAddressDto): UserAddress {
    return new UserAddress({
      id: dto.id,
      street: dto.street,
      street2: dto.street2,
      city: dto.city,
      state: dto.state,
      zip: dto.zip,
      country: dto.country
    });
  }

  public static toEntityList(dtos: UserAddressDto[]): UserAddress[] {
    return dtos.map(dto => UserAddressMapper.toEntity(dto))
  }
}
