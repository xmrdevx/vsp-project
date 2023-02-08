import { PageRequest, PagingUtils } from '@vsp/core';

export const defaultNearBySearchPageRequest: PageRequest = PagingUtils.from(0, 10, 'updatedOn', 'descend');
