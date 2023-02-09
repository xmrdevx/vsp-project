import { IRepository, Offender } from '@vsp/common';

export const OFFENDERS_REPOSITORY_TOKEN: string = 'OFFENDERS_REPOSITORY_TOKEN';

export interface IOffendersRepository extends IRepository<Offender, string> { };
