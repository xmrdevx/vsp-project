import { SetMetadata } from '@nestjs/common';
import { ClaimPermissions } from '@vsp/common';

export const Permissions = (arg: ClaimPermissions) => SetMetadata('permissions', arg);
