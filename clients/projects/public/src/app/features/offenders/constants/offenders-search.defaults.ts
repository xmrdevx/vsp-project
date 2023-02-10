import { DistanceUnit, OffendersSearchFilter, PageRequest, PagingUtils } from '@vsp/core';

export const defaultOffendersSearchPageRequest: PageRequest = PagingUtils.from(0, 10, 'id', 'descend');
  
export const defaultOffendersSearchFilter: OffendersSearchFilter = {
  query: '',
  location: null,
  distance: 20,
  distanceUnit: DistanceUnit.Miles
} as OffendersSearchFilter;
