import { CaseStatus } from '@vsp/common/enums/case-status.enum';
import { BaseDto } from '../base.dto';
import { GeoLocationDto } from '../geocoding/geo-location.dto';
import { OffenderDto } from './offender.dto';

export class CaseDto extends BaseDto {
  public openedOn: Date;
  public closedOn: Date | null | undefined;
  public status: CaseStatus;
  public summary: string;
  public offender: OffenderDto;
  public caughtAt: GeoLocationDto;  

  constructor(obj: any) {
    super();
    Object.assign(this, {
      id: obj.id,
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
      openedOn: obj.openedOn,
      closedOn: obj.closedOn,
      status: obj.status,
      summary: obj.summary,
      offender: new OffenderDto(obj.offender),
      caughtAt: new GeoLocationDto(obj.caughtAt),
    } satisfies CaseDto);
  }
}
