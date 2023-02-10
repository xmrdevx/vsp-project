import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CaseDto, GetOffenderCaseMarkersByBoundsRequest, getOffenderCaseMarkersByBoundsCommand, MapMarkerDto } from '@vsp/common';
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
}
