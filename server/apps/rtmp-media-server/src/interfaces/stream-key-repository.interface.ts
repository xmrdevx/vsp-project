import { IRepository, StreamKey } from '@vsp/common';

export const STREAM_KEY_REPOSITORY_TOKEN: string = 'STREAM_KEY_REPOSITORY_TOKEN';

export interface IStreamKeyRepository extends IRepository<StreamKey, string> { };
