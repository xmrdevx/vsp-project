import { Offender } from '@vsp/common/entities/offenders/offender.entity';
import { BaseDto } from '../base.dto';
import { OffenderCaseDto } from './offender-case.dto';

export class OffenderDto extends BaseDto {
  public firstName: string;
  public lastName: string;
  public avatarUrl: string | null | undefined;
  public summary: string | null | undefined;
  public cases: OffenderCaseDto[] | null | undefined;

  constructor(obj: Partial<OffenderDto>) {
    super();
    Object.assign(this, obj)
  }
}
