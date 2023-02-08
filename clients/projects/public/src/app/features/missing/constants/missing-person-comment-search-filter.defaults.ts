import { PageRequest, PagingUtils } from '@vsp/core';

export const defaultMissingPersonCommentsPageRequest: PageRequest = PagingUtils.from(0, 20, 'commentedOn', 'descend');
