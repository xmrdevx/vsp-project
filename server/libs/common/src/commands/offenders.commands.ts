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

export const createOffenderCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender'
} as MessagePatternCommand<void>;

export const updateOffenderCommand: MessagePatternCommand<void> = {
  cmd: 'update-offender'
} as MessagePatternCommand<void>;

export const deleteOffenderCommand: MessagePatternCommand<void> = {
  cmd: 'delete-offender'
} as MessagePatternCommand<void>;

export const createCaseCommand: MessagePatternCommand<void> = {
  cmd: 'create-case'
} as MessagePatternCommand<void>;

export const createCaseWithOffenderCommand: MessagePatternCommand<void> = {
  cmd: 'create-case-with-offender'
} as MessagePatternCommand<void>;

export const updateCaseCommand: MessagePatternCommand<void> = {
  cmd: 'update-case'
} as MessagePatternCommand<void>;

export const deleteCaseCommand: MessagePatternCommand<void> = {
  cmd: 'delete-case'
} as MessagePatternCommand<void>;
