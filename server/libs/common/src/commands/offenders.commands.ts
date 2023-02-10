import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const searchOffendersCommand: MessagePatternCommand<void> = {
  cmd: 'search-offenders'
} as MessagePatternCommand<void>;

export const searchOffendersByBoundsCommand: MessagePatternCommand<void> = {
  cmd: 'search-offenders-by-bounds'
} as MessagePatternCommand<void>;

export const getOffenderCaseMarkersByBoundsCommand: MessagePatternCommand<void> = {
  cmd: 'get-offender-case-markers-by-bounds'
} as MessagePatternCommand<void>;

export const getLatestOffenderByCountCommand: MessagePatternCommand<void> = {
  cmd: 'get-latest-offenders-by-count'
} as MessagePatternCommand<void>;

export const getOffenderByIdCommand: MessagePatternCommand<void> = {
  cmd: 'get-offenders-by-id'
} as MessagePatternCommand<void>;
