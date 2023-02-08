import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const searchLocationsByText: MessagePatternCommand<void> = {
  cmd: 'search-locations-by-text'
} as MessagePatternCommand<void>;
