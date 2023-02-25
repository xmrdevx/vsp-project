import { DistanceUnit } from '../../enums/distance-unit.enum'
import { MapCoordinateDto } from '../geocoding/map-coordinate.dto';

export class AccountUsersSearchFilter {
  public query: string | null;
  public tenantId: string;

  constructor(obj: Partial<AccountUsersSearchFilter>) {
    Object.assign(this, { 
      query: obj?.query || '',
      tenantId: obj?.tenantId || '',
    } satisfies AccountUsersSearchFilter);
  }
}
