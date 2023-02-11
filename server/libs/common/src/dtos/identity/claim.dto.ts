import { BaseDto } from '../base.dto';

export class ClaimDto extends BaseDto {
  public type: string;
  public value: string;

  constructor(args: any) {
    super();
    Object.assign(this, {
      id: args?.id,
      createdOn: args?.createdOn,
      updatedOn: args?.updatedOn,
      type: args?.type,
      value: args?.value,
    } satisfies ClaimDto);
  }
}
