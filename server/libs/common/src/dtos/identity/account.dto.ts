import { BaseDto } from '../base.dto';

export class AccountDto extends BaseDto {
  public name: string;

  constructor(obj: Partial<AccountDto>) {
    super();
    Object.assign(this, {
      id: obj?.id,
      createdOn: obj?.createdOn,
      updatedOn: obj?.updatedOn,
      name: obj?.name
    });
  }
}
