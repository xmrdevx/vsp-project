import { DistanceUnit, PageRequest, PagingUtils, VideosSearchFilter } from '@vsp/core';

export const defaultVideosSearchPageRequest: PageRequest = PagingUtils.from(0, 20, 'updatedOn', 'descend');
  
export const defaultVideosSearchFilter: VideosSearchFilter = {
  searchKeywords: '',
  location: null,
  distance: 20,
  distanceUnit: DistanceUnit.Miles
} as VideosSearchFilter;
