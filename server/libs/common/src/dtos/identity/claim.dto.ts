import { BaseDto } from '../base.dto';

export class ClaimDto extends BaseDto {
  public type: string;
  public value: string;

  constructor(obj: Partial<ClaimDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      type: obj?.type,
      value: obj?.value,
    });
  }
}
