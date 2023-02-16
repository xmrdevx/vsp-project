import { Offender } from '@vsp/common/entities/offenders/offender.entity';
import { BaseDto } from '../base.dto';
import { CaseDto } from './case.dto';

export class OffenderDto extends BaseDto {
  public firstName: string;
  public lastName: string;
  public avatarUrl: string;
  public summary: string;
  public cases?: CaseDto[];

  constructor(obj: Partial<OffenderDto | Offender>) {
    super();
    Object.assign(this, {
      id: obj.id,
      createdOn: obj.createdOn,
      updatedOn: obj.updatedOn,
      firstName: obj.firstName,
      lastName: obj.lastName,
      avatarUrl: obj.avatarUrl,
      summary: obj.summary,
      cases: !obj?.cases?.length 
        ? null 
        : obj.cases.map((c: any) => new CaseDto(c))
    })
  }
}
