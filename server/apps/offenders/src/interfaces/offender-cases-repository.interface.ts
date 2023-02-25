import { OffenderCase, IRepository } from '@vsp/common';

export const OFFENDER_CASES_REPOSITORY_TOKEN: string = 'OFFENDER_CASES_REPOSITORY_TOKEN';

export interface IOffenderCasesRepository extends IRepository<OffenderCase, string> { };
