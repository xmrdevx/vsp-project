import { AuthenticatedUser, Credentials, TokenPair, UserDetails } from '@vsp/common';

export const AUTH_SERVICE_TOKEN: string = 'AUTH_SERVICE_TOKEN';

/**
 * An interface contract for authenticating a user.
 * @interface
 */
export interface IAuthService {
  /**
   * Signs in the user with passed in details and return the authenticated status with a set of tokens (access, refresh).
   * @param user The users details of the user being signed in.
   * @returns The authenticated user with autenticated status and pair of tokens.
   * @async
   * @abstract
   */
  signIn(user: UserDetails): Promise<AuthenticatedUser>,

  /**
   * Validates a user to be signed in with user credentials (username, password).
   * @param credentials The credentials of the user being validated for sign in.
   * @returns The user details of validation passes else returns null (validation doesn't pass).
   * @async
   * @abstract
   */
  validateUser(credentials: Credentials): Promise<UserDetails | null>,

  /**
   * Refrehes a users access token based on a pair of tokens (access, refresh).
   * @param tokens The current expired access token and a refresh token
   * @returns A new token pair with a valid access token and refresh token.
   * @throws Unauthorized exception when an access or refresh token is invalid.
   * @async
   * @abstract
   */
  refreshToken(tokens: TokenPair): Promise<TokenPair>
}
