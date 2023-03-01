import { BasicQuerySearchFilter } from './basic-query-search-filter.dto';

export class OffenderCommentsSearchFilter extends BasicQuerySearchFilter {
  public offenderId: string;

  constructor(obj: Partial<OffenderCommentsSearchFilter>) {
    super(obj);
    Object.assign(this, { 
      query: obj?.query || '', 
      isDeleted: obj?.isDeleted || undefined, 
      offenderId: obj.offenderId 
    });
  }
}
