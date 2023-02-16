import { AuthenticatedStatus } from './authenticated-status.enum'
import { TokenPair } from './token-pair.dto';

export class AuthenticatedUser {
  public status: AuthenticatedStatus;
  public tokens: TokenPair

  constructor(obj: Partial<AuthenticatedUser>) {
    Object.assign(this, obj);
  }
}
