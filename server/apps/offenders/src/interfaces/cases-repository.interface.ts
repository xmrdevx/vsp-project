import { Case, IRepository } from '@vsp/common';

export const CASES_REPOSITORY_TOKEN: string = 'CASES_REPOSITORY_TOKEN';

export interface ICasesRepository extends IRepository<Case, string> { };
