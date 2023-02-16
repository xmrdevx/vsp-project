import { BaseDto } from '../base.dto';
import { AccountDto } from './account.dto';

export class TenantDto extends BaseDto {
  public account: AccountDto;

  constructor(args: Partial<TenantDto>) {
    super();
    Object.assign(this, {
      id: args?.id,
      createdOn: args?.createdOn,
      updatedOn: args?.updatedOn,
      account: new AccountDto(args?.account || {})
    });
  }
}
