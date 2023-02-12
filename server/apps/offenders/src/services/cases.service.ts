import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { Case, CaseDto, CreateCaseDto, CreateCaseWithOffenderDto, MapBoundsDto, MapCoordinateDto, MapMarkerDto, Offender, UpdateCaseDto } from '@vsp/common';
import { DeleteCaseDto } from '@vsp/common/dtos/offenders/delete-case.dto';
import { CaseStatus } from '@vsp/common/enums/case-status.enum';
import { LoggerService } from '@vsp/logger';
import { off } from 'process';

import { CASES_REPOSITORY_TOKEN, ICasesRepository } from '../interfaces/cases-repository.interface';
import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';

@Injectable()
export class CasesService {
  @Inject(CASES_REPOSITORY_TOKEN)
  private readonly _casesRepository: ICasesRepository;

  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;

  constructor(private _logger: LoggerService) {
    this._logger.setContext(CasesService.name);
  }


  public async create(createCaseDto: CreateCaseDto): Promise<CaseDto> {
    const offender: Offender | null = await this._offendersRepository
      .findByCondition({ where: { id: createCaseDto.offenderId }})
      
    if (!offender) {
      throw new RpcException(
        new NotFoundException("Offender was not found!")
      );
    }
    
    const newCase: Case = await this._casesRepository.save(
      this._casesRepository.create({ ...createCaseDto })
    );
    newCase.offender = offender;
    return new CaseDto(newCase);
  }


  public async update(caseId: string, updateCaseDto: UpdateCaseDto): Promise<CaseDto> {
    const existingCase: Case = await this._checkForExistingCase(caseId, updateCaseDto.offenderId);
    const updatedCase: Case = await this._casesRepository.save({ 
      ...existingCase, 
      ...updateCaseDto,
      closedOn: updateCaseDto.status === CaseStatus.CLOSED ? new Date() : null
    });
    
    updatedCase.offender = existingCase.offender;

    return new CaseDto(updatedCase);
  }
  

  public async delete(caseId: string, deleteCaseDto: DeleteCaseDto): Promise<CaseDto> {
    const existingCase: Case = await this._checkForExistingCase(caseId, deleteCaseDto.offenderId);
    const updatedCaseDto: Case = await this._casesRepository.save({ ...existingCase, ...deleteCaseDto });

    updatedCaseDto.offender = existingCase.offender;

    return new CaseDto(updatedCaseDto);
  }


  public async createWithOffender(createCaseWithOffenderDto: CreateCaseWithOffenderDto): Promise<CaseDto> {
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

    const newCase: Case = await this._casesRepository.save(
      this._casesRepository.create({
        ...createCaseWithOffenderDto, offender: newOffender
      })
    );
    
    return new CaseDto(newCase);
  }


  public async getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<CaseDto>[]> {
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
      .map(c => new MapMarkerDto<CaseDto>({
        coordinate: new MapCoordinateDto({
          latitude: c.caughtAt.latitude,
          longitude: c.caughtAt.longitude
        } satisfies MapCoordinateDto),
        payload: new CaseDto(c)
      } satisfies MapMarkerDto<CaseDto>));
  }

  private async _checkForExistingCase(caseId: string, offenderId: string): Promise<Case> {
    const existingCase: Case | null = await this._casesRepository.findByCondition({
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
