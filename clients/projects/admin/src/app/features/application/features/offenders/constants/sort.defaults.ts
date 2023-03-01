import { Sort, SortDirection } from '@vsp/core';

export const defaultOffendersSort: Sort  = {
  column: 'lastName',
  direction: SortDirection.Ascend
} as Sort;

export const defaultOffenderCommentsSort: Sort  = {
  column: 'createdOn',
  direction: SortDirection.Descend
} as Sort;
