import { ResponseStatus } from './response-status.enum';

export interface ResponseMessage<T> {
  status: ResponseStatus,
  message: string,
  payload?: T
}
