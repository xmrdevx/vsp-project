import { UserDto } from '../dtos/identity';
import { User } from '../entities/identity';
import { ClaimMapper } from './claim.mapper';
import { ProfileMapper } from './profile.mapper';
import { RoleMapper } from './role.mapper';
import { TenantMapper } from './tenant.mapper';

export class UserMapper {
  public static toDto(entity: User): UserDto {
    return new UserDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      email: entity.email,
      username: entity.username,
      isLockedOut: entity.isLockedOut,
      profile: entity?.profile ? ProfileMapper.toDto(entity.profile) : undefined,
      tenant: entity?.tenant ? TenantMapper.toDto(entity.tenant) : undefined,
      roles: entity?.roles ? RoleMapper.toDtoList(entity.roles) : undefined,
      claims: entity?.claims ? ClaimMapper.toDtoList(entity.claims) : undefined,
    });
  }

  public static toDtoList(entities: User[]): UserDto[] {
    return entities.map(entity => UserMapper.toDto(entity));
  }

  public static toEntity(dto: UserDto): User {
    // @TODO Not really needed as of right now.
    return new User({

    });
  }

  public static toEntityList(dtos: UserDto[]): User[] {
    return dtos.map(dto => UserMapper.toEntity(dto));
  }
}
