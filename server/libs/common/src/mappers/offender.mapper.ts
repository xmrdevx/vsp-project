import { OffenderDto } from '../dtos/offenders';
import { Offender } from '../entities/offenders';
import { OffenderCaseMapper } from './offender-case.mapper';

export class OffenderMapper {
  public static toDto(entity: Offender): OffenderDto {
    return new OffenderDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      firstName: entity.firstName,
      lastName: entity.lastName,
      avatarUrl: entity.avatarUrl,
      summary: entity.summary,
      cases: entity?.cases?.length ? OffenderCaseMapper.toDtoList(entity.cases) : undefined
    });
  }
  
  public static toDtoList(entities: Offender[]): OffenderDto[] {
    return entities.map(entity => OffenderMapper.toDto(entity));
  }
  
  public static toEntity(dto: OffenderDto): Offender {
    // @TODO Not really needed as of right now.
    return new Offender({
      
    });
  }

  public static toEntityList(dtos: OffenderDto[]): Offender[] {
    return dtos.map(dto => OffenderMapper.toEntity(dto))
  }
}
