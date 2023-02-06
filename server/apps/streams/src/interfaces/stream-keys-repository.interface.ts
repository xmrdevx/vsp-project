import { IRepository, StreamKey } from '@vsp/common';

export const STREAM_KEYS_REPOSITORY_TOKEN: string = 'STREAM_KEYS_REPOSITORY_TOKEN';

export interface IStreamKeysRepository extends IRepository<StreamKey, string> { };
