import { PageRequest, PagingUtils, TeamAnnouncementsSearchFilter } from '@vsp/core';

export const defaultAnnouncementsSearchPageRequest: PageRequest = PagingUtils.from(0, 20, 'createdOn', 'descend');

export const defaultTeamAnnouncementsSearchFilter: TeamAnnouncementsSearchFilter = {
  searchKeywords: '',
  startDate: null,
  endDate: null
} as TeamAnnouncementsSearchFilter;
