import { DistanceUnit, MissingSearchFilter, PageRequest, PagingUtils } from '@vsp/core';

export const defaultMissingSearchPageRequest: PageRequest = PagingUtils.from(0, 10, 'id', 'descend');
  
export const defaultMissingSearchFilter: MissingSearchFilter = {
  searchTerm: '',
  location: null,
  distance: 20,
  distanceUnit: DistanceUnit.Miles
} as MissingSearchFilter;
