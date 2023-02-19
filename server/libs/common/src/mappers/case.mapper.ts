import { CaseDto } from '../dtos/offenders';
import { Case } from '../entities/offenders';
import { GeoLocationMapper } from './geo-location.mapper';
import { OffenderMapper } from './offender.mapper';

export class CaseMapper {
  public static toDto(entity: Case): CaseDto {
    return new CaseDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      openedOn: entity.openedOn,
      closedOn: entity.closedOn,
      status: entity.status,
      visibility: entity.visibility,
      summary: entity.summary,
      offender: entity?.offender ? OffenderMapper.toDto(entity.offender) : undefined,
      caughtAt: entity?.caughtAt ? GeoLocationMapper.toDto(entity.caughtAt) : undefined
    });
  }
  
  public static toDtoList(entities: Case[]): CaseDto[] {
    return entities.map(entity => CaseMapper.toDto(entity));
  }
  
  public static toEntity(dto: CaseDto): Case {
    // @TODO Not really needed as of right now.
    return new Case({
      
    });
  }

  public static toEntityList(dtos: CaseDto[]): Case[] {
    return dtos.map(dto => CaseMapper.toEntity(dto))
  }
}
