import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const getOffendersCommand: MessagePatternCommand<void> = {
  cmd: 'get-offenders'
} as MessagePatternCommand<void>;
