import { ResponseMessage, StreamPreConnectValidationRequestDto } from '@vsp/common';

export const STREAMS_SERVICE_TOKEN: string = 'STREAMS_SERVICE_TOKEN';

export interface IStreamsService {
  validatePreConnect(request: StreamPreConnectValidationRequestDto): Promise<ResponseMessage<void>>
}
