import { PermissionTemplateDto } from '../dtos/identity';
import { PermissionTemplate } from '../entities/identity';
import { ClaimMapper } from './claim.mapper';

export class PermissionTemplateMapper {
  public static toDto(entity: PermissionTemplate): PermissionTemplateDto {
    return new PermissionTemplateDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      deletedOn: entity.deletedOn,
      name: entity.name,
      description: entity.description,
      claims: entity?.claims?.length ? ClaimMapper.toDtoList(entity.claims) : undefined,
    });
  }
  
  public static toDtoList(entities: PermissionTemplate[]): PermissionTemplateDto[] {
    return entities.map(entity => PermissionTemplateMapper.toDto(entity));
  }
  
  public static toEntity(dto: PermissionTemplateDto): PermissionTemplate {
    // @TODO Not really needed as of right now.
    return new PermissionTemplate({
      
    });
  }

  public static toEntityList(dtos: PermissionTemplateDto[]): PermissionTemplate[] {
    return dtos.map(dto => PermissionTemplateMapper.toEntity(dto))
  }
}
