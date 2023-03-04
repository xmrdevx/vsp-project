import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { 
  OffenderCaseDto, 
  GetOffenderCaseMarkersByBoundsRequest, 
  getOffenderCaseMarkersByBoundsCommand, 
  MapMarkerDto, 
  createOffenderCaseCommand, 
  CreateResourceRequest, 
  CreateCaseDto, 
  createOffenderCaseWithOffenderCommand, 
  CreateOffenderCaseWithOffenderDto, 
  updateOffenderCaseCommand,
  deleteOffenderCaseCommand,
  DeleteResourceRequest,
  UpdateResourceRequest,
  UpdateOffenderCaseDto,
  DeleteOffenderCaseDto } from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { OFFENDER_CASES_SERVICE_TOKEN, IOffenderCasesService } from '../interfaces/offender-cases-service.interface';

@Controller('offenders/cases')
export class OffenderCasesController {
  @Inject(OFFENDER_CASES_SERVICE_TOKEN)
  private _casesService: IOffenderCasesService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffenderCasesController.name);
  }

  @MessagePattern(getOffenderCaseMarkersByBoundsCommand)
  public async getOffenderCaseMarkersByBounds(
    request: GetOffenderCaseMarkersByBoundsRequest
  ): Promise<MapMarkerDto<OffenderCaseDto>[]> {
    try {
      return await this._casesService.getCaseMarkersByBounds(request.mapBounds);
    } catch (error) {
      this._logger.error('Error searching offenders', error);
      throw error;
    }
  }

  @MessagePattern(createOffenderCaseCommand)
  public async createOffenderCase(request: CreateResourceRequest<CreateCaseDto>): Promise<OffenderCaseDto> {
    try {
      return await this._casesService.create(request.resource);
    } catch (error) {
      this._logger.error('Error creating new case!', error);
      throw error;
    }
  }

  @MessagePattern(createOffenderCaseWithOffenderCommand)
  public async createOffenderCaseWithOffender(request: CreateResourceRequest<CreateOffenderCaseWithOffenderDto>): Promise<OffenderCaseDto> {
    try {
      return await this._casesService.createWithOffender(request.resource);
    } catch (error) {
      this._logger.error('Error creating new case with offender!', error);
      throw error;
    }
  }

  @MessagePattern(updateOffenderCaseCommand)
  public async updateOffenderCase(request: UpdateResourceRequest<UpdateOffenderCaseDto>): Promise<OffenderCaseDto> {
    try {
      return await this._casesService.update(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error updating offenders case', error);
      throw error;
    }
  }

  @MessagePattern(deleteOffenderCaseCommand)
  public async deleteOffenderCase(request: DeleteResourceRequest<DeleteOffenderCaseDto>): Promise<OffenderCaseDto> {
    try {
      return await this._casesService.delete(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error deleting offenders case', error);
      throw error;
    }
  }
}
