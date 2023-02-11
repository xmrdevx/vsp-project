import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { 
  DistanceUnit, 
  IPageable, 
  Offender, 
  OffenderDto, 
  OffendersSearchFilter, 
  Page,
  milesToMeters,
  kilometersToMeters, 
  PageRequest,
  MapBoundsDto,
  CreateOffenderDto,
  UpdateOffenderDto,
  DeleteOffenderDto} from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { off } from 'process';

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


  public async create(offender: CreateOffenderDto): Promise<OffenderDto> {
    const newOffender: Offender = await this._offendersRepository.save(
      this._offendersRepository.create({ ...offender })
    );
    return new OffenderDto(newOffender);
  }


  public async update(offenderId: string, offender: UpdateOffenderDto): Promise<OffenderDto> {
    let existingOffender: Offender | null = await this._offendersRepository.findOneById(offenderId);

    if (!existingOffender) {
      throw new RpcException(
        new NotFoundException("Offender was not found!")
      );
    }

    const updatedOffender: Offender = await this._offendersRepository
      .save({
        ...existingOffender,
        ...offender
      });

    return new OffenderDto(updatedOffender);
  }


  public async delete(offenderId: string, offender: DeleteOffenderDto): Promise<OffenderDto> {
    const existingOffender: Offender | null = await this._offendersRepository.findByCondition({
      relations: ['cases'],
      where: [{ id: offenderId }]
    });

    if (!existingOffender) {
      throw new RpcException(
        new NotFoundException("Offender was not found!")
      );
    }

    const deletedOn: Date = new Date();
    const deletedById: string = offender.deletedById;

    const updatedOffender = await this._offendersRepository.save({
      ...existingOffender, deletedOn, deletedById, 
      cases: existingOffender?.cases?.map(c => ({ ...c, deletedOn, deletedById })) || []
    });

    return new OffenderDto(updatedOffender);
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

      sourceQuery = sourceQuery
        .innerJoin('o.cases', 'c')
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

  
  public async searchByBounds(mapBounds: MapBoundsDto, pageable: IPageable): Promise<Page<OffenderDto>> {
    // @Notes - ST_MakeEnvelope params
    // ST_MakeEnvelope(min_lng, min_lat, max_lng, max_lat) Or ST_MakeEnvelope(ne_lng, sw_lat, sw_lng, ne_lat)
    const [elements, count]: [Offender[], number] = await this._offendersRepository
      .getRepository()
      .createQueryBuilder('o')
      .select(['o'])
      .innerJoin('o.cases', 'c')
      .innerJoin(
        'c.caughtAt', 'ca', 
        'location	&& ST_MakeEnvelope(:northEastLongitude, :southWestLatitude, :southWestLongitude, :nortEastLatitude, 4326)', {
          northEastLongitude: mapBounds.northEast.longitude,
          southWestLatitude: mapBounds.southWest.latitude,
          southWestLongitude: mapBounds.southWest.longitude,
          nortEastLatitude: mapBounds.northEast.latitude
        }
      )
      .orderBy(`o.${pageable.getSort().getSortColumn()}`, pageable.getSort().getSortDirection())
      .limit(+pageable.getPageSize())
      .offset(+pageable.getPageNumber() * +pageable.getPageSize())
      .getManyAndCount();

    return new Page<OffenderDto>(elements, count, pageable);
  }

  
  public async getLatestOffendersByCount(count: number): Promise<OffenderDto[]> {
    return await this._offendersRepository
      .getRepository()
      .createQueryBuilder('o')
      .select(['o', 'c'])
      .innerJoin('o.cases', 'c')
      .orderBy('c.openedOn', 'DESC')
      .take(count)
      .getMany();
  }

  public async getOffenderById(offenderId: string): Promise<OffenderDto> {
    const offender: Offender | null =  await this._offendersRepository.findByCondition({
      relations: ['cases'],
      where: [{ id: offenderId }]
    });

    if (!offender) {
      throw new RpcException(
        new NotFoundException("Offender was not found!")
      );
    }

    return offender;
  }

  
  private _isLocationFilterValid(filter: OffendersSearchFilter): boolean {
    return (filter?.distance || 0) > 0
      && filter.location !== null 
      && (filter?.location?.latitude || 0) !== 0
      && (filter?.location?.longitude || 0) !== 0
      && filter?.distanceUnit !== null
  }
}
