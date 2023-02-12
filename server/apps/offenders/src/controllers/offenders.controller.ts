import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { LoggerService } from '@vsp/logger';

import { 
  createOffenderCommand, 
  CreateOffenderDto, 
  CreateResourceRequest, 
  deleteOffenderCommand, 
  DeleteOffenderDto, 
  DeleteResourceRequest, 
  getLatestOffenderByCountCommand, 
  GetLatestOffendersRequestDto, 
  getOffenderByIdCommand, 
  GetOffenderByIdRequest, 
  OffenderDto, 
  Page, 
  searchOffendersByBoundsCommand, 
  SearchOffendersByBoundsRequest, 
  searchOffendersCommand, 
  SearchOffendersRequest, 
  updateOffenderCommand, 
  UpdateOffenderDto, 
  UpdateResourceRequest } from '@vsp/common';

import { IOffendersService, OFFENDERS_SERVICE_TOKEN } from '../interfaces/offenders-service.interface';

@Controller()
export class OffendersController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private _offendersService: IOffendersService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersController.name);
  }

  @MessagePattern(searchOffendersCommand)
  public async searchOffenders(request: SearchOffendersRequest): Promise<Page<OffenderDto>> {
    try {
      // @NOTE Have to remap this because of the pageRequest has is methods removed when serialized.
      request = new SearchOffendersRequest(request);
      return await this._offendersService.search(request.filter, request.pageable);
    } catch (error) {
      this._logger.error('Error searching offenders', error);
      throw error;
    }
  }

  @MessagePattern(searchOffendersByBoundsCommand)
  public async searchOffendersByBounds(request: SearchOffendersByBoundsRequest): Promise<Page<OffenderDto>> {
    try {
      // @NOTE Have to remap this because of the pageRequest has is methods removed when serialized.
      request = new SearchOffendersByBoundsRequest(request);
      return await this._offendersService.searchByBounds(request.mapBounds, request.pageable);
    } catch (error) {
      this._logger.error('Error searching offenders by bounds', error);
      throw error;
    }
  }

  @MessagePattern(getLatestOffenderByCountCommand)
  public async getLatestOffendersByCount(request: GetLatestOffendersRequestDto): Promise<OffenderDto[]> {
    try {
      return await this._offendersService.getLatestOffendersByCount(request.count);
    } catch (error) {
      this._logger.error('Error getting latest offenders', error);
      throw error;
    }
  }

  @MessagePattern(getOffenderByIdCommand)
  public async getOffenderById(request: GetOffenderByIdRequest): Promise<OffenderDto> {
    try {
      return await this._offendersService.getOffenderById(request.offenderId);
    } catch (error) {
      this._logger.error('Error getting latest offenders', error);
      throw error;
    }
  }

  @MessagePattern(createOffenderCommand)
  public async createOffender(request: CreateResourceRequest<CreateOffenderDto>): Promise<OffenderDto> {
    try {
      return await this._offendersService.create(request.resource);
    } catch (error) {
      this._logger.error('Error creating offender', error);
      throw error;
    }
  }

  @MessagePattern(updateOffenderCommand)
  public async updateOffender(request: UpdateResourceRequest<UpdateOffenderDto>): Promise<OffenderDto> {
    try {
      return await this._offendersService.update(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error updating offender', error);
      throw error;
    }
  }

  @MessagePattern(deleteOffenderCommand)
  public async deleteOffender(request: DeleteResourceRequest<DeleteOffenderDto>): Promise<OffenderDto> {
    try {
      return await this._offendersService.delete(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error deleting offender', error);
      throw error;
    }
  }
}
