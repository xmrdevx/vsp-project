import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const getAvailablePermissions: MessagePatternCommand<void> = {
  cmd: 'get-available-permissions'
} as MessagePatternCommand<void>;
