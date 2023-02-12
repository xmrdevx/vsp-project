import { Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, throwError } from 'rxjs';

import { LoggerService } from '@vsp/logger';
import { Access, JwtAuthGuard, HasAccessGuard } from '@vsp/authorization';
import { ClaimValues, createStreamCommand, STREAMS_SERVICE_TOKEN } from '@vsp/common';

@ApiTags('streams')
@Controller('streams')
@UseGuards(JwtAuthGuard)
export class StreamsController {
  @Inject(STREAMS_SERVICE_TOKEN)
  private readonly _streamsServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(StreamsController.name);
  }

  @Access(ClaimValues.LIVESTREAM)
  @UseGuards(HasAccessGuard)
  @Post()
  public createStream(): Observable<any> {
    return this._streamsServiceClient
      .send(createStreamCommand, {})
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
