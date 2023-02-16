import { MapBoundsDto } from '../geocoding/map-bounds.dto';
import { PageRequest } from '../paging/page-request.dto';
import { IPageable } from '../paging/pageable.interface';

export class SearchOffendersByBoundsRequest {
  public mapBounds: MapBoundsDto;
  public pageable: IPageable

  constructor(obj: Partial<any>) {
    Object.assign(this, { 
      mapBounds: obj.mapBounds, 
      pageable: PageRequest.from(
        obj.pageable.index, 
        obj.pageable.size, 
        obj.pageable.sort.column, 
        obj.pageable.sort.direction
      ) 
    });
  }
}
