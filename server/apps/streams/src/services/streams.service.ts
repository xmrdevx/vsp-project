import { Inject, Injectable } from '@nestjs/common';

import { ResponseMessage, ResponseStatus, StreamPreConnectValidationRequestDto } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { IStreamsRepository, STREAMS_REPOSITORY_TOKEN } from '../interfaces/streams-repository.interface';
import { IStreamKeysRepository, STREAM_KEYS_REPOSITORY_TOKEN } from '../interfaces/stream-keys-repository.interface';
import { IStreamsService } from '../interfaces/streams-service.interface';

@Injectable()
export class StreamsService implements IStreamsService {
  @Inject(STREAMS_REPOSITORY_TOKEN)
  private readonly _streamsRepository: IStreamsRepository;

  @Inject(STREAM_KEYS_REPOSITORY_TOKEN)
  private readonly _streamKeysRepository: IStreamKeysRepository;
  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(StreamsService.name);
  }

  public async validatePreConnect(
    request: StreamPreConnectValidationRequestDto
  ): Promise<ResponseMessage<void>> {
    
    return new ResponseMessage<void>({
      status: ResponseStatus.SUCCESS,
      message: 'Successfully validated stream pre connect',
      payload: null,
    } satisfies ResponseMessage<void>);
  }
}
