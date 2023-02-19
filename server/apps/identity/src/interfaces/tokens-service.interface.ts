import { Claims, TokenPair } from '@vsp/common';

export const TOKENS_SERVICE_TOKEN: string = 'TOKENS_SERVICE_TOKEN';

/**
 * An interface contract to handle token opertations such as signing and refreshing.
 * @interface
 */
export interface ITokensService {
  /**
   * Signs an access token with the supplied claims as the token payload.
   * @param user The claims to be used as a payload when signing a token.
   * @returns A pair of tokens (signed access token and refresh token).
   * @async
   * @abstract
   */
  signToken(user: Claims): Promise<TokenPair>,

  /**
   * Refreshes an access token based on a refresh token.
   * @param tokens The pair of tokens to be refresh (access, refresh)
   * @returns A valid pair of tokens (access, refresh).
   * @throws Unauthorized exception when an expired access token is invalid or refresh
   *    token is invalid/blacklisted.
   * @async
   * @abstract
   */
  refreshToken(tokens: TokenPair): Promise<TokenPair>
}
