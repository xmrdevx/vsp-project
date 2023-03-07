import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { 
  createStreamCommand, 
  StreamPreConnectValidationRequestDto, 
  validateStreamPreConnectCommand } from '@vsp/common';

import { LoggerService } from '@vsp/logger';

import { IStreamsService, STREAMS_SERVICE_TOKEN } from '../interfaces/streams-service.interface';

@Controller()
export class StreamsController {
  @Inject(STREAMS_SERVICE_TOKEN)
  private readonly _usersService: IStreamsService

  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(StreamsController.name);
  }

  
  @MessagePattern(createStreamCommand)
  public async createStream(): Promise<any> {
    try {
      return [];
    } catch (error) {
      this._logger.error('Error creating new stream', error);
      throw error;
    }
  }

  
  @MessagePattern(validateStreamPreConnectCommand)
  public async validateStreamPreConnect(request: StreamPreConnectValidationRequestDto): Promise<any> {
    try {
      return await this._usersService.validatePreConnect(request);
    } catch (error) {
      this._logger.error('Error validating stream pre connect', error);
      throw error;
    }
  }
}
