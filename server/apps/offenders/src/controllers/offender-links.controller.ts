import { BadRequestException, Controller, Inject } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { CreateLinkDto, createOffenderLinkCommand, CreateResourceRequest, getOffenderLinksCommand, GetResourceRequest, LinkDto } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { IOffenderLinksService, OFFENDER_LINKS_SERVICE_TOKEN } from '../interfaces/offender-links-service.interface';

@Controller('offenders/links')
export class OffenderLinksController {
  @Inject(OFFENDER_LINKS_SERVICE_TOKEN)
  private _offenderLinksService: IOffenderLinksService;

  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffenderLinksController.name);
  }

  
  @MessagePattern(createOffenderLinkCommand)
  public async createOffenderAddress(request: CreateResourceRequest<CreateLinkDto>): Promise<LinkDto> {
    try {
      if (!request.resourceId) throw new RpcException(new BadRequestException('Resource ID was not supplied!'));
      return await this._offenderLinksService.createLink(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error creating offender link', error);
      throw error;
    }
  }

  
  @MessagePattern(getOffenderLinksCommand)
  public async getOffenderAddresses(request: GetResourceRequest<void>): Promise<LinkDto[]> {
    try {
      return await this._offenderLinksService.getAllLinks(request.resourceId);
    } catch (error) {
      this._logger.error('Error getting offender links', error);
      throw error;
    }
  }
}
