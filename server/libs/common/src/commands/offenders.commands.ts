import { MessagePatternCommand } from '../models/message-pattern-command.model';

// Offender Commands
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
  cmd: 'delete-offender-offender'
} as MessagePatternCommand<void>;


// Offender Cases
export const createOffenderCaseCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender-case'
} as MessagePatternCommand<void>;

export const createOffenderCaseWithOffenderCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender-case-with-offender'
} as MessagePatternCommand<void>;

export const updateOffenderCaseCommand: MessagePatternCommand<void> = {
  cmd: 'update-offender-case'
} as MessagePatternCommand<void>;

export const deleteOffenderCaseCommand: MessagePatternCommand<void> = {
  cmd: 'delete-offender-case'
} as MessagePatternCommand<void>;


// Offender Comments
export const searchOffenderCommentsCommand: MessagePatternCommand<void> = {
  cmd: 'search-offender-comments'
} as MessagePatternCommand<void>;

export const createOffenderCommentCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender-comment'
} as MessagePatternCommand<void>;


// Offender Addresses
export const getOffenderAddressesCommand: MessagePatternCommand<void> = {
  cmd: 'get-offender-addresses'
} as MessagePatternCommand<void>;

export const createOffenderAddressCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender-address'
} as MessagePatternCommand<void>;

export const updateOffenderAddressCommand: MessagePatternCommand<void> = {
  cmd: 'update-offender-address'
} as MessagePatternCommand<void>;

export const deleteOffenderAddressCommand: MessagePatternCommand<void> = {
  cmd: 'delete-offender-address'
} as MessagePatternCommand<void>;


// Offender Links
export const getOffenderLinksCommand: MessagePatternCommand<void> = {
  cmd: 'get-offender-links'
} as MessagePatternCommand<void>;

export const createOffenderLinkCommand: MessagePatternCommand<void> = {
  cmd: 'create-offender-link'
} as MessagePatternCommand<void>;

export const updateOffenderLinkCommand: MessagePatternCommand<void> = {
  cmd: 'update-offender-link'
} as MessagePatternCommand<void>;

export const deleteOffenderLinkCommand: MessagePatternCommand<void> = {
  cmd: 'delete-offender-link'
} as MessagePatternCommand<void>;
