import { PageRequest, PagingUtils, TeamVideosSearchFilter } from '@vsp/core';

export const defaultTeamVideosSearchPageRequest: PageRequest = PagingUtils.from(0, 20, 'createdOn', 'descend');

export const defaultTeamsVideosSearchFilter: TeamVideosSearchFilter = {
  searchKeywords: '',
  startDate: null,
  endDate: null
} as TeamVideosSearchFilter;
