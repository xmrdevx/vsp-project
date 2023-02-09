import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { getOffendersCommand } from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { IOffendersService, OFFENDERS_SERVICE_TOKEN } from '../interfaces/offenders-service.interface';

@Controller()
export class OffendersController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private _offendersService: IOffendersService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersController.name);
  }

  @MessagePattern(getOffendersCommand)
  public async getOffenders(): Promise<string> {
    return "success";
  }
}
