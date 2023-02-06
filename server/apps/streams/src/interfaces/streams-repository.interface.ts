import { IRepository, Stream } from '@vsp/common';

export const STREAMS_REPOSITORY_TOKEN: string = 'STREAMS_REPOSITORY_TOKEN';

export interface IStreamsRepository extends IRepository<Stream, string> { };
