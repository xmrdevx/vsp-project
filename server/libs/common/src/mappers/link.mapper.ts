import { LinkDto } from '../dtos/shared/link.dto';
import { Link } from '../entities/shared/link.entity';

export class LinkMapper {
  public static toDto(entity: Link): LinkDto {
    return new LinkDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      type: entity.type,
      name: entity.name,
      url: entity.url,
      visibility: entity.visibility
    });
  }
  
  public static toDtoList(entities: Link[]): LinkDto[] {
    return entities.map(entity => LinkMapper.toDto(entity));
  }
  
  public static toEntity(dto: LinkDto): Link {
    // @TODO Not really needed as of right now.
    return new Link({
      
    });
  }

  public static toEntityList(dtos: LinkDto[]): Link[] {
    return dtos.map(dto => LinkMapper.toEntity(dto))
  }
}
