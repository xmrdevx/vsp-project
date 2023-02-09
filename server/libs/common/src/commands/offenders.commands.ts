import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const searchOffendersCommand: MessagePatternCommand<void> = {
  cmd: 'search-offenders'
} as MessagePatternCommand<void>;
