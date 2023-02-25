import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Point } from 'geojson';

import { 
  DeleteOffenderCaseDto, 
  OffenderCase, 
  OffenderCaseDto, 
  OffenderCaseMapper, 
  CreateCaseDto, 
  CreateOffenderCaseWithOffenderDto, 
  MapBoundsDto, 
  MapCoordinateDto, 
  MapMarkerDto, 
  Offender, 
  UpdateOffenderCaseDto } from '@vsp/common';

import { CaseStatus } from '@vsp/common/enums/case-status.enum';
import { LoggerService } from '@vsp/logger';

import { OFFENDER_CASES_REPOSITORY_TOKEN, IOffenderCasesRepository } from '../interfaces/offender-cases-repository.interface';
import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';

@Injectable()
export class OffenderCasesService {
  @Inject(OFFENDER_CASES_REPOSITORY_TOKEN)
  private readonly _casesRepository: IOffenderCasesRepository;

  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;

  constructor(private _logger: LoggerService) {
    this._logger.setContext(OffenderCasesService.name);
  }


  public async create(createCaseDto: CreateCaseDto): Promise<OffenderCaseDto> {
    const offender: Offender | null = await this._offendersRepository
      .findByCondition({ where: { id: createCaseDto.offenderId }})
      
    if (!offender) {
      throw new RpcException(
        new NotFoundException("Offender was not found!")
      );
    }
    
    const newCase: OffenderCase = await this._casesRepository.save(
      this._casesRepository.create({ 
        ...createCaseDto,
        caughtAt: !createCaseDto?.caughtAt ? null : {
          latitude: createCaseDto.caughtAt.latitude,
          longitude: createCaseDto.caughtAt.longitude,
          fullAddressString: createCaseDto.caughtAt.fullAddressString,
          location: {
            type: "Point",
            coordinates: [
              createCaseDto.caughtAt.longitude, 
              createCaseDto.caughtAt.latitude
            ]
          } as Point
        }
      })
    );
    newCase.offender = offender;

    return OffenderCaseMapper.toDto(newCase);
  }


  public async update(caseId: string, updateCaseDto: UpdateOffenderCaseDto): Promise<OffenderCaseDto> {
    const existingCase: OffenderCase = await this._checkForExistingCase(caseId, updateCaseDto.offenderId);
    const updatedCase: OffenderCase = await this._casesRepository.save({ 
      ...existingCase, 
      ...updateCaseDto,
      caughtAt: !updateCaseDto?.caughtAt ? null : {
        latitude: updateCaseDto.caughtAt.latitude,
        longitude: updateCaseDto.caughtAt.longitude,
        fullAddressString: updateCaseDto.caughtAt.fullAddressString,
        location: {
          type: "Point",
          coordinates: [
            updateCaseDto.caughtAt.longitude, 
            updateCaseDto.caughtAt.latitude
          ]
        } as Point
      },
      closedOn: updateCaseDto.status === CaseStatus.CLOSED ? new Date() : undefined
    });
    
    updatedCase.offender = existingCase.offender;

    return OffenderCaseMapper.toDto(updatedCase);
  }
  

  public async delete(caseId: string, deleteCaseDto: DeleteOffenderCaseDto): Promise<OffenderCaseDto> {
    const existingCase: OffenderCase = await this._checkForExistingCase(caseId, deleteCaseDto.offenderId);
    const updatedCaseDto: OffenderCase = await this._casesRepository.save({ ...existingCase, ...deleteCaseDto });

    updatedCaseDto.offender = existingCase.offender;

    return OffenderCaseMapper.toDto(updatedCaseDto);
  }


  public async createWithOffender(createCaseWithOffenderDto: CreateOffenderCaseWithOffenderDto): Promise<OffenderCaseDto> {
    const newOffender: Offender = await this._offendersRepository
      .save(
        this._offendersRepository
          .create({
            ...createCaseWithOffenderDto.offender,
            createdById: createCaseWithOffenderDto.createdById,
            updatedById: createCaseWithOffenderDto.updatedById
          })
      );

    if (!newOffender) {
      throw new RpcException(
        new BadRequestException("Error creating new offender for case!")
      );
    }

    const newCase: OffenderCase = await this._casesRepository.save(
      this._casesRepository.create({
        ...createCaseWithOffenderDto, 
        offender: newOffender,
        caughtAt: !createCaseWithOffenderDto?.caughtAt ? null : {
          latitude: createCaseWithOffenderDto.caughtAt.latitude,
          longitude: createCaseWithOffenderDto.caughtAt.longitude,
          fullAddressString: createCaseWithOffenderDto.caughtAt.fullAddressString,
          location: {
            type: "Point",
            coordinates: [
              createCaseWithOffenderDto.caughtAt.longitude, 
              createCaseWithOffenderDto.caughtAt.latitude
            ]
          } as Point
        }
      })
    );
    
    return OffenderCaseMapper.toDto(newCase);
  }


  public async getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<OffenderCaseDto>[]> {
    return (await this._casesRepository
      .getRepository()
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.offender', 'o')
      .innerJoinAndSelect(
        'c.caughtAt', 'ca', 
        'location	&& ST_MakeEnvelope(:northEastLongitude, :southWestLatitude, :southWestLongitude, :nortEastLatitude, 4326)', {
          northEastLongitude: mapBounds.northEast.longitude,
          southWestLatitude: mapBounds.southWest.latitude,
          southWestLongitude: mapBounds.southWest.longitude,
          nortEastLatitude: mapBounds.northEast.latitude
        }
      )
      .select(['c', 'o', 'ca'])
      .getMany())
      .map(c => new MapMarkerDto<OffenderCaseDto>({
        coordinate: new MapCoordinateDto({
          latitude: c.caughtAt?.latitude || 0,
          longitude: c.caughtAt?.longitude || 0
        } satisfies MapCoordinateDto),
        payload: OffenderCaseMapper.toDto(c)
      } satisfies MapMarkerDto<OffenderCaseDto>));
  }

  private async _checkForExistingCase(caseId: string, offenderId: string): Promise<OffenderCase> {
    const existingCase: OffenderCase | null = await this._casesRepository.findByCondition({
      relations: ['offender'],
      where: [{ id : caseId, offenderId: offenderId }] 
    });

    if (!existingCase) {
      throw new RpcException(
        new NotFoundException("Offenders case was not found!")
      );
    }

    return existingCase;
  }
}
