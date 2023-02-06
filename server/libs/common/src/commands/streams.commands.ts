import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const createStreamCommand: MessagePatternCommand<void> = {
  cmd: 'create-stream'
} as MessagePatternCommand<void>;

export const validateStreamPreConnectCommand: MessagePatternCommand<void> = {
  cmd: 'validate-stream-pre-connect'
} as MessagePatternCommand<void>;
