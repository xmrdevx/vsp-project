import { ProfileDto } from '../dtos/identity';
import { Profile } from '../entities/identity';
import { UserAddressMapper } from './user-address.mapper';

export class ProfileMapper {
  public static toDto(entity: Profile): ProfileDto {
    return new ProfileDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      firstName: entity.firstName,
      lastName: entity.lastName,
      summary: entity.summary,
      avatarUrl: entity.avatarUrl,
      address: entity?.address ? UserAddressMapper.toDto(entity.address) : undefined
    });
  }
  
  public static toDtoList(entities: Profile[]): ProfileDto[] {
    return entities.map(entity => ProfileMapper.toDto(entity));
  }
  
  public static toEntity(dto: ProfileDto): Profile {
    // @TODO Not really needed as of right now.
    return new Profile({

    });
  }

  public static toEntityList(dtos: ProfileDto[]): Profile[] {
    return dtos.map(dto => ProfileMapper.toEntity(dto))
  }
}