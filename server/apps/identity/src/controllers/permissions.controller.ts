import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { LoggerService } from '@vsp/logger';
import { createPermissionTemplateCommand, CreatePermissionTemplateDto, CreateResourceRequest, deletePermissionTemplateCommand, DeletePermissionTemplateDto, DeleteResourceRequest, getAvailablePermissionsCommand, getPermissionTemplatesCommand, GetPermissionTemplatesDto, GetResourceRequest, PermissionTemplateDto, searchPermissionTemplatesCommand, SearchPermissionTemplatesRequest, updatePermissionTemplateCommand, UpdatePermissionTemplateDto, UpdateResourceRequest } from '@vsp/common';
import { IPermissionsService, PERMISSIONS_SERVICE_TOKEN } from '../interfaces/permissions-service.interface';
import { IPermissionTemplatesService, PERMISSION_TEMPLATES_SERVICE_TOKEN } from '../interfaces/permission-template-service.interface';

@Controller('permissions')
export class PermissionsController {
  @Inject(PERMISSIONS_SERVICE_TOKEN)
  public readonly _permissionsService: IPermissionsService;

  @Inject(PERMISSION_TEMPLATES_SERVICE_TOKEN)
  public readonly _permissionTemplatesService: IPermissionTemplatesService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(PermissionsController.name);
  }
  
  @MessagePattern(getAvailablePermissionsCommand)
  public async getAvailablePermissions(): Promise<any> {
    try {
      return await this._permissionsService.getAvailablePermissions();
    } catch (error) {
      this._logger.error('Error getting available permissions', error);
      return error;
    }
  }

  @MessagePattern(getPermissionTemplatesCommand)
  public async getPermissionTemplates(
    request: GetResourceRequest<GetPermissionTemplatesDto>
  ): Promise<PermissionTemplateDto[]> {
    try {
      return await this._permissionTemplatesService.getTemplates(request.resource);
    } catch (error) {
      this._logger.error('Error getting permissions templates', error);
      return error;
    }
  }

  @MessagePattern(createPermissionTemplateCommand)
  public async createPermissionTemplate(
    request: CreateResourceRequest<CreatePermissionTemplateDto>
  ): Promise<PermissionTemplateDto> {
    try {
      return await this._permissionTemplatesService.createTemplate(request.resource);
    } catch (error) {
      this._logger.error('Error creating permission template', error);
      return error;
    }
  }

  @MessagePattern(searchPermissionTemplatesCommand)
  public async searchPermissionTemplates(request: SearchPermissionTemplatesRequest): Promise<any> {
    try {
      request = new SearchPermissionTemplatesRequest(request);
      return await this._permissionTemplatesService.searchTemplates(request.filter, request.pageable);
    } catch (error) {
      this._logger.error('Error getting available permissions', error);
      return error;
    }
  }

  @MessagePattern(updatePermissionTemplateCommand)
  public async updatePermissionTemplate(
    request: UpdateResourceRequest<UpdatePermissionTemplateDto>
  ): Promise<PermissionTemplateDto> {
    try {
      return await this._permissionTemplatesService.updateTemplate(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error updating permission template', error);
      return error;
    }
  }

  @MessagePattern(deletePermissionTemplateCommand)
  public async deletePermissionTemplateCommand(
    request: DeleteResourceRequest<DeletePermissionTemplateDto>
  ): Promise<any> {
    try {
      return await this._permissionTemplatesService.deleteTemplate(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error deleting permission template', error);
      return error;
    }
  }
}
