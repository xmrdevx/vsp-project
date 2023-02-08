import { PageRequest, PagingUtils } from '@vsp/core';

export const defaultWatchVideoCommentsPageRequest: PageRequest = PagingUtils.from(0, 20, 'commentedOn', 'descend');
