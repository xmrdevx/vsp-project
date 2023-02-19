import { ConfirmEmailDto, Credentials, ForgotPasswordDto, ResetPasswordDto, ResponseMessage, SimpleExistsQueryResponseDto, SimpleQueryRequestDto, UserDetails } from '@vsp/common';

export const USERS_SERVICE_TOKEN: string = 'USERS_SERVICE_TOKEN';

/**
 * An interface contract to handle user identity changes.
 * @interface
 */
export interface IUsersService {
  /**
   * Validates a user to be signed in with user credentials (username, password).
   * @param {Credentials} credentials The credentials of the user being validated 
   *    for sign in.
   * @returns {Promise<UserDetails | null>} The user details of validation passes 
   *    else returns null (validation doesn't pass).
   * @async
   * @abstract
   */
  validateUser(credentials: Credentials): Promise<UserDetails | null>
  
  /**
   * Resets a users password.
   * @param {ResetPasswordDto} resetPassword The user details and the password to 
   *    be set for that user.
   * @returns { Promise<ResponseMessage<void>>} A response message with status of 
   *    the operations.
   * @throws Unauthorized exception when the users doesn't exist or reset token
   *    is invalid or expired.
   * @async
   * @abstract
   */
  resetPassword(resetPassword: ResetPasswordDto): Promise<ResponseMessage<void>>;
  
  /**
   * Checks to see if a users with the supplied email (query) already exists
   * @param {SimpleQueryRequestDto} query 
   * @returns {Promise<SimpleExistsQueryResponseDto>} An response message stating whether 
   *    the email already exist (boolean flag).
   * @async
   * @abstract
   */
  doesEmailExist(query: SimpleQueryRequestDto): Promise<SimpleExistsQueryResponseDto>;
  
  /**
   * Checks to see if a users with the supplied username (query) already exists
   * @param {SimpleQueryRequestDto} query 
   * @returns {Promise<SimpleExistsQueryResponseDto>} A response message stating whether 
   *    the username already exist (boolean flag).
   * @async
   * @abstract
   */
  doesUsernameExist(query: SimpleQueryRequestDto): Promise<SimpleExistsQueryResponseDto>;
  
  /**
   * Confirms the new user accounts email address.
   * @param {ConfirmEmailDto} confirmation The email and confirmation token for the user 
   *    account to confirm.
   * @returns {ResponseMessage<void>} A response message with status on whether the 
   *    confirmation was successful.
   * @async
   * @abstract
   */
  confirmEmail(confirmation: ConfirmEmailDto): Promise<ResponseMessage<void>>;
  
  /**
   * Handles processing a request to reset a password for a users.
   * @param {ForgotPasswordDto} forgotPassword Contains the email for the user account 
   *    for the password reset request
   * @returns {Promise<ResponseMessage<void>} A response message with whether a 
   *    request was successfull or not.
   * @async
   * @abstract
   */
  forgotPassword(forgotPassword: ForgotPasswordDto): Promise<ResponseMessage<void>>;
}
