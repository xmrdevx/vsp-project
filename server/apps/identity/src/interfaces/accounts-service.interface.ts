import { AccountUsersSearchFilter, CreateUserDto, IPageable, LockoutUserRequest, Page, RegistrationDto, ResponseMessage, UpdateUserDto, UserDto } from '@vsp/common';

export const ACCOUNTSS_SERVICE_TOKEN: string = 'ACCOUNTS_SERVICE_TOKEN';

/**
 * An interface contract for handling accounts.
 * @interface
 */
export interface IAccountsService {
  /**
   * Creates a new account with a root user for Admin application
   * @param {RegistrationDto} registration The account details along with the user and profile details for th new Account
   * @returns {Promise<UserDto | null>} The details of the new root user for this account.
   * @async
   * @abstract
   */
  register(registration: RegistrationDto): Promise<UserDto | null>,

  /**
   * Searches the users associated with the account of the currently signed in user.
   * @param {AccountUsersSearchFilter} filter A filter that contains the query string and the tenant ID.
   * @param {IPageable} pageable The page details (index, count, sort column, sort direction) of the slice being requested.
   * @returns {Promise<Page<UserDto>>} A page slice of users from the search results
   * @async
   * @abstract
   */
  searchUsers(filter: AccountUsersSearchFilter, pageable: IPageable): Promise<Page<UserDto>>;

  /**
   * Creates a new user for the tenant
   * @param {CreateUserDto} createUserDto The user details for the user to be created.
   * @returns {UserDto} The user details of the newly created user.
   * @async
   * @abstract
   */
  createUser(createUserDto: CreateUserDto): Promise<UserDto>;

  /**
   * Updates user details for a specific users (userId).
   * @param {string} userId The id of the user to be updated
   * @param {UpdateUserDto} updateUserDto The details to update for the user.
   * @returns {Promise<UserDto>} The updated users details of the user.
   * @async
   * @abstract
   */
  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserDto>;

  /**
   * Sets the isLockedOut flag for a user.  This can enable/disable the user's ability to sign in.
   * @param {string} userId The id of the user to lockout.
   * @param {LockoutUserRequest} lockoutUserRequest The new lockout status of the user.
   * @returns A response message and status of whether the lockout was successful or not.
   * @async
   * @abstract
   */
  lockoutUser(userId: string, lockoutUserRequest: LockoutUserRequest): Promise<ResponseMessage<void>>;
}
