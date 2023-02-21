import { ClaimDto } from '../dtos/identity';
import { Claim } from '../entities/identity';

export class ClaimMapper {
  public static toDto(entity: Claim): ClaimDto {
    return new ClaimDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      type: entity.type,
      value: entity.value
    });
  }
  
  public static toDtoList(entities: Claim[]): ClaimDto[] {
    return entities.map(entity => ClaimMapper.toDto(entity));
  }
  
  public static toEntity(dto: ClaimDto): Claim {
    // @TODO Not really needed as of right now.
    return new Claim({
      
    });
  }

  public static toEntityList(dtos: ClaimDto[]): Claim[] {
    return dtos.map(dto => ClaimMapper.toEntity(dto))
  }
}
