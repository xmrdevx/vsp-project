import { PageRequest } from '../paging/page-request.dto';
import { IPageable } from '../paging/pageable.interface'
import { OffendersSearchFilter } from '../search-filters/offenders-search-filter.dto'
import { BaseSearchRequest } from './base-search-request.dto';

export class SearchOffendersRequest extends BaseSearchRequest {
  public filter: OffendersSearchFilter;

  constructor(obj: any) {
    super();
    Object.assign(this, {
      pageable: PageRequest.from(
        obj.pageable.index, 
        obj.pageable.size, 
        obj.pageable.sort.column, 
        obj.pageable.sort.direction
      ),
      filter: obj.filter
    } satisfies SearchOffendersRequest);
  }
}
