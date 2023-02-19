import { Offender } from '@vsp/common/entities/offenders/offender.entity';
import { BaseDto } from '../base.dto';
import { CaseDto } from './case.dto';

export class OffenderDto extends BaseDto {
  public firstName: string;
  public lastName: string;
  public avatarUrl: string;
  public summary: string;
  public cases?: CaseDto[];

  constructor(obj: Partial<OffenderDto>) {
    super();
    Object.assign(this, obj)
  }
}
