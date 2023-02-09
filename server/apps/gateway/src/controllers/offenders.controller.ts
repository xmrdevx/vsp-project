import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { getOffendersCommand, OffenderDto, OFFENDERS_SERVICE_TOKEN } from '@vsp/common';
import { LoggerService } from '@vsp/logger';
import { catchError, Observable, throwError } from 'rxjs';

@Controller('offenders')
export class OffendersController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private readonly _offendersServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersController.name);
  }

  @Get()
  public getOffenders(): Observable<OffenderDto[]> {
    return this._offendersServiceClient
      .send(getOffendersCommand, {})
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
