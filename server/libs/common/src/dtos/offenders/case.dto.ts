import { Case } from '../../entities/offenders/case.entity';
import { Visibility } from '../../enums/visibility.enum';
import { CaseStatus } from '../../enums/case-status.enum';
import { BaseDto } from '../base.dto';
import { GeoLocationDto } from '../geocoding/geo-location.dto';
import { OffenderDto } from './offender.dto';

export class CaseDto extends BaseDto {
  public openedOn: Date;
  public closedOn: Date | null | undefined;
  public status: CaseStatus;
  public visibility: Visibility;
  public summary: string;
  public offender: OffenderDto | null;
  public caughtAt: GeoLocationDto | null;  

  constructor(obj: Partial<CaseDto | Case>) {
    super();
    Object.assign(this, {
      id: obj.id || '',
      createdOn: obj.createdOn || new Date(),
      updatedOn: obj.updatedOn || new Date(),
      openedOn: obj.openedOn || new Date(),
      closedOn: obj?.closedOn ? new Date() : null,
      status: obj.status || CaseStatus.OPEN,
      summary: obj.summary || '',
      visibility: obj.visibility || Visibility.PRIVATE,
      offender: obj?.offender ? new OffenderDto(obj.offender) : null,
      caughtAt: obj?.caughtAt ? new GeoLocationDto(obj.caughtAt) : null,
    } satisfies CaseDto);
  }
}
