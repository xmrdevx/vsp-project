export class TokenPair {
  public accessToken: string;
  public refreshToken: string;

  constructor(obj: Partial<TokenPair>) {
    Object.assign(this, obj);
  }
}
