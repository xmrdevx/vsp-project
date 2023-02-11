import { BaseDto } from '../base.dto';

export class AccountDto extends BaseDto {
  public name: string;

  constructor(args: any) {
    super();
    Object.assign(this, {
      id: args?.id,
      createdOn: args?.createdOn,
      updatedOn: args?.updatedOn,
      name: args?.name
    } satisfies AccountDto);
  }
}
