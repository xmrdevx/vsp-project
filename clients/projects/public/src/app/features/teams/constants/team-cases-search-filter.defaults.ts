import { PageRequest, PagingUtils, CasesSearchFilter } from '@vsp/core';

export const defaultTeamCasesSearchPageRequest: PageRequest = PagingUtils.from(0, 20, 'createdOn', 'descend');

export const defaultTeamCasesSearchFilter: CasesSearchFilter = {
  searchKeywords: '',
  startDate: null,
  endDate: null
} as CasesSearchFilter;
