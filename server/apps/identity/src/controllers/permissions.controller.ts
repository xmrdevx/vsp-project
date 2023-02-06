import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { LoggerService } from '@vsp/logger';
import { getAvailablePermissions } from '@vsp/common';
import { IPermissionsService, PERMISSIONS_SERVICE_TOKEN } from '../interfaces/permissions-service.interface';

@Controller('permissions')
export class PermissionsController {
  @Inject(PERMISSIONS_SERVICE_TOKEN)
  public readonly _permissionsService: IPermissionsService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(PermissionsController.name);
  }
  
  @MessagePattern(getAvailablePermissions)
  public async getAvailablePermissions(): Promise<any> {
    try {
      return await this._permissionsService.getAvailablePermissions();
    } catch (error) {
      this._logger.error('Error getting available permissions', error);
      return error;
    }
  }
}
