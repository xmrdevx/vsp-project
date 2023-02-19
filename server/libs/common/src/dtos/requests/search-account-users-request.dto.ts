import { PageRequest } from '../paging/page-request.dto';
import { AccountUsersSearchFilter } from '../search-filters';
import { BaseSearchRequest } from './base-search-request.dto';

export class SearchAccountUsersRequest extends BaseSearchRequest {
  public filter: AccountUsersSearchFilter;

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
    } satisfies SearchAccountUsersRequest);
  }
}
