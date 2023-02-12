import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { 
  CaseDto, 
  GetOffenderCaseMarkersByBoundsRequest, 
  getOffenderCaseMarkersByBoundsCommand, 
  MapMarkerDto, 
  createCaseCommand, 
  CreateResourceRequest, 
  CreateCaseDto, 
  createCaseWithOffenderCommand, 
  CreateCaseWithOffenderDto, 
  updateCaseCommand,
  deleteCaseCommand,
  DeleteResourceRequest,
  UpdateResourceRequest,
  UpdateCaseDto,
  DeleteCaseDto} from '@vsp/common';

  import { LoggerService } from '@vsp/logger';
import { CASES_SERVICE_TOKEN, ICasesService } from '../interfaces/cases-service.interface';

@Controller('cases')
export class CasesController {
  @Inject(CASES_SERVICE_TOKEN)
  private _casesService: ICasesService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(CasesController.name);
  }

  @MessagePattern(getOffenderCaseMarkersByBoundsCommand)
  public async getOffenderCaseMarkersByBounds(
    request: GetOffenderCaseMarkersByBoundsRequest
  ): Promise<MapMarkerDto<CaseDto>[]> {
    try {
      return await this._casesService.getCaseMarkersByBounds(request.mapBounds);
    } catch (error) {
      this._logger.error('Error searching offenders', error);
      throw error;
    }
  }

  @MessagePattern(createCaseCommand)
  public async createCase(request: CreateResourceRequest<CreateCaseDto>): Promise<CaseDto> {
    try {
      return await this._casesService.create(request.resource);
    } catch (error) {
      this._logger.error('Error creating new case!', error);
      throw error;
    }
  }

  @MessagePattern(createCaseWithOffenderCommand)
  public async createCaseWithOffender(request: CreateResourceRequest<CreateCaseWithOffenderDto>): Promise<CaseDto> {
    try {
      return await this._casesService.createWithOffender(request.resource);
    } catch (error) {
      this._logger.error('Error creating new case with offender!', error);
      throw error;
    }
  }

  @MessagePattern(updateCaseCommand)
  public async updateOffenderCase(request: UpdateResourceRequest<UpdateCaseDto>): Promise<CaseDto> {
    try {
      return await this._casesService.update(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error updating offenders case', error);
      throw error;
    }
  }

  @MessagePattern(deleteCaseCommand)
  public async deleteOffenderCase(request: DeleteResourceRequest<DeleteCaseDto>): Promise<CaseDto> {
    try {
      return await this._casesService.delete(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error deleting offenders case', error);
      throw error;
    }
  }
}
