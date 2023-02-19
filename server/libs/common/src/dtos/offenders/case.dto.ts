import { Case } from '../../entities/offenders/case.entity';
import { Visibility } from '../../enums/visibility.enum';
import { CaseStatus } from '../../enums/case-status.enum';
import { BaseDto } from '../base.dto';
import { GeoLocationDto } from '../geocoding/geo-location.dto';
import { OffenderDto } from './offender.dto';

export class CaseDto extends BaseDto {
  public openedOn: Date;
  public closedOn: Date | undefined;
  public status: CaseStatus;
  public visibility: Visibility;
  public summary: string;
  public offender: OffenderDto | undefined;
  public caughtAt: GeoLocationDto | undefined;  

  constructor(obj: Partial<CaseDto>) {
    super();
    Object.assign(this, obj);
  }
}
