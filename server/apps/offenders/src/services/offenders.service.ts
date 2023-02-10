import { Inject, Injectable } from '@nestjs/common';

import { 
  DistanceUnit, 
  IPageable, 
  Offender, 
  OffenderDto, 
  OffendersSearchFilter, 
  Page,
  milesToMeters,
  kilometersToMeters } from '@vsp/common';

import { LoggerService } from '@vsp/logger';

import { CASES_REPOSITORY_TOKEN, ICasesRepository } from '../interfaces/cases-repository.interface';
import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';
import { IOffendersService } from '../interfaces/offenders-service.interface';

@Injectable()
export class OffendersService implements IOffendersService {
  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;

  @Inject(CASES_REPOSITORY_TOKEN)
  private readonly _casesRepository: ICasesRepository;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersService.name);
  }

  public async search(filter: OffendersSearchFilter, pageable: IPageable): Promise<Page<OffenderDto>> {
    let sourceQuery = this._offendersRepository
      .getRepository()
      .createQueryBuilder('o')
      .select(['o']);

    // If query is not null and has length filter first and last name
    if (filter?.query?.trim()?.length) {
      const queryText: string = `%${filter.query.trim().toLowerCase()}%`;
      sourceQuery = sourceQuery.where(
        '(o.firstName ILIKE :queryText OR o.lastName ILIKE :queryText)', 
        { queryText }
      );
    }

    // If distacne values are set, filter within distance
    if (this._isLocationFilterValid(filter)) {
      const distanceInMeters: number = filter?.distanceUnit === DistanceUnit.KILOMETERS
        ? kilometersToMeters(filter.distance || 0)
        : milesToMeters(filter.distance || 0);

      sourceQuery = sourceQuery.innerJoin('o.cases', 'c')
        .innerJoin(
          'c.caughtAt', 'ca', 
          'ST_Distance("location" , ST_MakePoint(:longitude,:latitude)) <= :distance', {
            longitude: filter.location?.longitude,
            latitude: filter.location?.latitude,
            distance: distanceInMeters
          }
        );
    }
    
    const [elements, count]: [Offender[], number] = await sourceQuery
      .orderBy(`o.${pageable.getSort().getSortColumn()}`, pageable.getSort().getSortDirection())
      .limit(+pageable.getPageSize())
      .offset(+pageable.getPageNumber() * +pageable.getPageSize())
      .getManyAndCount();
    
    return new Page<OffenderDto>(elements, count, pageable);
  }

  private _isLocationFilterValid(filter: OffendersSearchFilter): boolean {
    return (filter?.distance || 0) > 0
      && filter.location !== null 
      && (filter?.location?.latitude || 0) !== 0
      && (filter?.location?.longitude || 0) !== 0
      && filter?.distanceUnit !== null
  }
}
