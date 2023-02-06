import { ClaimDto } from '@vsp/common/dtos/identity/claim.dto';
import { Claims } from '@vsp/common/types/claims.type';

export class UserDetails {
  public id: string;
  public username: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public accountId: string;
  public tenantId: string;
  public roles: string[];
  public claims: ClaimDto[];

  public payload?: Claims;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
