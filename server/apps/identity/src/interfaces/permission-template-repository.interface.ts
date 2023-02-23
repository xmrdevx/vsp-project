import { PermissionTemplate, IRepository } from '@vsp/common';

export const PERMISSION_TEMPLATES_REPOSITORY_TOKEN: string = 'PERMISSION_TEMPLATES_REPOSITORY_TOKEN';

export interface IPermissionTemplatesRepository extends IRepository<PermissionTemplate, string> { }
