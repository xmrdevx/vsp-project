import { IPageable } from '../paging';
import { PageRequest } from '../paging/page-request.dto';
import { OffenderCommentsSearchFilter } from '../search-filters';
import { BaseSearchRequest } from './base-search-request.dto';

export class SearchOffenderCommentsRequest extends BaseSearchRequest {
  public filter: OffenderCommentsSearchFilter;
  public pageable: IPageable

  constructor(obj: Partial<any>) {
    super();
    Object.assign(this, {
      pageable: PageRequest.from(
        obj.pageable.index, 
        obj.pageable.size, 
        obj.pageable.sort.column, 
        obj.pageable.sort.direction
      ),
      filter: obj.filter
    } satisfies SearchOffenderCommentsRequest);
  }
}