import { RoleDto } from '../dtos/identity';
import { Role } from '../entities/identity';

export class RoleMapper {
  public static toDto(entity: Role): RoleDto {
    return new RoleDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      name: entity.name
    });
  }
  
  public static toDtoList(entities: Role[]): RoleDto[] {
    return entities.map(entity => RoleMapper.toDto(entity));
  }
  
  public static toEntity(dto: RoleDto): Role {
    // @TODO Not really needed as of right now.
    return new Role({
      
    });
  }

  public static toEntityList(dtos: RoleDto[]): Role[] {
    return dtos.map(dto => RoleMapper.toEntity(dto))
  }
}
