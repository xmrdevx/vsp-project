import { PageRequest } from '../paging/page-request.dto';
import { AccountUsersSearchFilter, PermissionTemplatesSearchFilter } from '../search-filters';
import { BaseSearchRequest } from './base-search-request.dto';

export class SearchPermissionTemplatesRequest extends BaseSearchRequest {
  public filter: PermissionTemplatesSearchFilter;

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
    } satisfies SearchPermissionTemplatesRequest);
  }
}
