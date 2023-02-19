import { MessagePatternCommand } from '../models/message-pattern-command.model'

// Account Registrations
export const registerAccountCommand: MessagePatternCommand<void> = {
  cmd: 'register'
} as MessagePatternCommand<void>;

export const forgotPasswordCommand: MessagePatternCommand<void> = {
  cmd: 'forgot-password'
} as MessagePatternCommand<void>;

export const resetPasswordCommand: MessagePatternCommand<void> = {
  cmd: 'reset-password'
} as MessagePatternCommand<void>;

export const confirmEmailCommand: MessagePatternCommand<void> = {
  cmd: 'confirm-email'
} as MessagePatternCommand<void>;

export const doesUsernameExistCommand: MessagePatternCommand<void> = {
  cmd: 'does-username-exist'
} as MessagePatternCommand<void>;

export const doesEmailExistCommand: MessagePatternCommand<void> = {
  cmd: 'does-email-exist'
} as MessagePatternCommand<void>;


// Account Users
export const searchAccountUsersCommand: MessagePatternCommand<void> = {
  cmd: 'search-account-users'
} as MessagePatternCommand<void>;

export const createAccountUserCommand: MessagePatternCommand<void> = {
  cmd: 'create-account-user'
} as MessagePatternCommand<void>;

export const updateAccountUserCommand: MessagePatternCommand<void> = {
  cmd: 'update-account-user'
} as MessagePatternCommand<void>;

