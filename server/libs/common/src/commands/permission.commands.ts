import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const getAvailablePermissionsCommand: MessagePatternCommand<void> = {
  cmd: 'get-available-permissions'
} as MessagePatternCommand<void>;

export const createPermissionTemplateCommand: MessagePatternCommand<void> = {
  cmd: 'create-permission-template'
} as MessagePatternCommand<void>;

export const updatePermissionTemplateCommand: MessagePatternCommand<void> = {
  cmd: 'update-permission-template'
} as MessagePatternCommand<void>;

export const deletePermissionTemplateCommand: MessagePatternCommand<void> = {
  cmd: 'delete-permission-template'
} as MessagePatternCommand<void>;

export const getPermissionTemplatesCommand: MessagePatternCommand<void> = {
  cmd: 'get-permission-templates'
} as MessagePatternCommand<void>;

export const searchPermissionTemplatesCommand: MessagePatternCommand<void> = {
  cmd: 'search-permission-templates'
} as MessagePatternCommand<void>;

export const restorePermissionTemplateCommand: MessagePatternCommand<void> = {
  cmd: 'restore-permission-templates'
} as MessagePatternCommand<void>;

export const getPermissionTemplateByIdCommand: MessagePatternCommand<void> = {
  cmd: 'get-permission-template-by-id'
} as MessagePatternCommand<void>;
