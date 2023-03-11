import { OffenderCaseDto } from '../dtos/offenders';
import { OffenderCase } from '../entities/offenders';
import { AddressMapper } from './address.mapper';
import { GeoLocationMapper } from './geo-location.mapper';
import { OffenderMapper } from './offender.mapper';

export class OffenderCaseMapper {
  public static toDto(entity: OffenderCase): OffenderCaseDto {
    return new OffenderCaseDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      openedOn: entity.openedOn,
      closedOn: entity.closedOn,
      status: entity.status,
      visibility: entity.visibility,
      summary: entity.summary,
      offender: entity?.offender ? OffenderMapper.toDto(entity.offender) : undefined,
      caughtAt: entity?.caughtAt ? AddressMapper.toDto(entity.caughtAt) : undefined
    });
  }
  
  public static toDtoList(entities: OffenderCase[]): OffenderCaseDto[] {
    return entities.map(entity => OffenderCaseMapper.toDto(entity));
  }
  
  public static toEntity(dto: OffenderCaseDto): OffenderCase {
    // @TODO Not really needed as of right now.
    return new OffenderCase({
      
    });
  }

  public static toEntityList(dtos: OffenderCaseDto[]): OffenderCase[] {
    return dtos.map(dto => OffenderCaseMapper.toEntity(dto))
  }
}
