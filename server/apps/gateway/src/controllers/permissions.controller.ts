import { Controller, Get, Inject, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { LoggerService } from '@vsp/logger';
import { JwtAuthGuard } from '@vsp/authorization';
import { IDENTITY_SERVICE_TOKEN, getAvailablePermissions } from '@vsp/common';

@ApiTags('identity')
@Controller('permissions')
@UseInterceptors(HttpCacheInterceptor)
@UseGuards(JwtAuthGuard)
export class PermissionsController {
  @Inject(IDENTITY_SERVICE_TOKEN)
  private readonly _identityServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(PermissionsController.name);
  }

  @Get('available')
  public getPerissions(): Observable<any> {
    return this._identityServiceClient
      .send(getAvailablePermissions, {})
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
