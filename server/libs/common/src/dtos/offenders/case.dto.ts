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
  public summary: string | null | undefined;
  public offender: OffenderDto | null | undefined;
  public caughtAt: GeoLocationDto | null | undefined;  

  constructor(obj: Partial<CaseDto>) {
    super();
    Object.assign(this, obj);
  }
}
