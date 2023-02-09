import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OffenderDto, Page, PageRequest, searchOffendersCommand, SearchOffendersRequest } from '@vsp/common';

import { LoggerService } from '@vsp/logger';
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
      return this._offendersService.search(request.filter, request.pageable);
    } catch (error) {
      this._logger.error('Error searching offenders', error);
      throw error;
    }
  }
}
