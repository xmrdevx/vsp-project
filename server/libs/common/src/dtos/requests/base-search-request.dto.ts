import { PageRequest } from '../paging/page-request.dto';
import { IPageable } from '../paging/pageable.interface';

export abstract class BaseSearchRequest {
  public pageable: IPageable;
}