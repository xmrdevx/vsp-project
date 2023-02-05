import { IRepository, Claim } from '@vsp/common';

export const CLAIMS_REPOSITORY_TOKEN: string = 'CLAIMS_REPOSITORY_TOKEN';

export interface IClaimsRepository extends IRepository<Claim, string> { }
