import { Body, Controller, Delete, Get, Inject, Param, ParseBoolPipe, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, of, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { LoggerService } from '@vsp/logger';
import { EnrichBodyWithCreatedByInterceptor, EnrichBodyWithDeletedByInterceptor, EnrichBodyWithTenantInterceptor, EnrichBodyWithUpdatedByInterceptor, HasPermissionsGuard, JwtAuthGuard, Permissions } from '@vsp/authorization';

import { 
  IDENTITY_SERVICE_TOKEN, 
  getAvailablePermissionsCommand, 
  getPermissionTemplatesCommand, 
  createPermissionTemplateCommand, 
  searchPermissionTemplatesCommand, 
  updatePermissionTemplateCommand, 
  deletePermissionTemplateCommand, 
  UpdateResourceRequest,
  UpdatePermissionTemplateDto,
  GetPermissionTemplatesDto,
  GetResourceRequest,
  DeletePermissionTemplateDto,
  DeleteResourceRequest,
  CreatePermissionTemplateDto,
  CreateResourceRequest,
  PermissionTemplatesSearchFilter,
  IPageable,
  PageRequest,
  SearchPermissionTemplatesRequest,
  RestorePermissionTemplateDto,
  restorePermissionTemplateCommand,
  getPermissionTemplateByIdCommand,
  ClaimAuthorizationOperations,
  ClaimAuthorizationTypes,
  ClaimValues} from '@vsp/common'; 
import { defaultSortColumn, defaultSortDirection } from '../constants/query-params.defaults';

@ApiTags('identity')
@Controller('permissions')
@UseInterceptors(HttpCacheInterceptor)
@UseGuards(JwtAuthGuard)
export class PermissionsController {
  @Inject(IDENTITY_SERVICE_TOKEN)
  private readonly _identityServiceClient: ClientProxy;

  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(PermissionsController.name);
  }


  @Get('available')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  public getAvailablePerissions(): Observable<any> {
    return this._identityServiceClient
      .send(getAvailablePermissionsCommand, {})
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Get('templates')
  @Permissions({
    operation: ClaimAuthorizationOperations.ANY,
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.PERMISSION_TEMPLATES },
      { key: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.USER_ACCOUNTS }
    ]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  public getPermissionTemplates(
    @Body() getPermissionTemplatesDto: GetPermissionTemplatesDto
  ): Observable<any> {
    return this._identityServiceClient
      .send(
        getPermissionTemplatesCommand, 
        new GetResourceRequest<GetPermissionTemplatesDto>({
          resource: getPermissionTemplatesDto
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Post('templates')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithCreatedByInterceptor,
    EnrichBodyWithUpdatedByInterceptor  
  )
  public createPermissionTemplate(
    @Body() createPermissionTemplateDto: CreatePermissionTemplateDto
  ): Observable<any> {
    return this._identityServiceClient
      .send(
        createPermissionTemplateCommand, 
        new CreateResourceRequest<CreatePermissionTemplateDto>({ 
          resource: createPermissionTemplateDto 
      }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  
  @Get('templates/search')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  public searchPermissionTemplates(
    @Body('tenantId') tenantId: string,
    @Query('query') query: string = '',
    @Query('isDeleted') isDeleted: boolean | null | undefined = undefined,
    @Query('index') index: number = 0,
    @Query('size') size: number = 10,
    @Query('column') column: string = defaultSortColumn,
    @Query('direction') direction: string = defaultSortDirection
  ): Observable<any> {
    const pageable: IPageable = PageRequest.from(index, size, column, direction);
    const filter: PermissionTemplatesSearchFilter = new PermissionTemplatesSearchFilter({ 
      query, tenantId, isDeleted: ((''+isDeleted).length <= 0) ? undefined : ''+isDeleted == 'true'
    });
    return this._identityServiceClient
      .send(searchPermissionTemplatesCommand, new SearchPermissionTemplatesRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Get('templates/:templateId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithTenantInterceptor)
  public getPermissionTemplateById(
    @Param('templateId') templateId: string,
    @Body() getPermissionTemplatesDto: GetPermissionTemplatesDto
  ):  Observable<any> {
    return this._identityServiceClient
      .send(
        getPermissionTemplateByIdCommand,
        new GetResourceRequest<GetPermissionTemplatesDto>({
          resourceId: templateId,
          resource: getPermissionTemplatesDto
        })  
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  
  @Put('templates/:templateId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithUpdatedByInterceptor  
  )
  public updatePermissionTemplate(
    @Param('templateId') templateId: string,
    @Body() updatePermissionTemplateDto: UpdatePermissionTemplateDto
  ):  Observable<any> {
    return this._identityServiceClient
      .send(
        updatePermissionTemplateCommand,
        new UpdateResourceRequest<UpdatePermissionTemplateDto>({
          resourceId: templateId,
          resource: updatePermissionTemplateDto
        })  
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  
  @Delete('templates/:templateId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithDeletedByInterceptor  
  )
  public deletePermissionTemplate(
    @Param('templateId') templateId: string,
    @Body() deletePermissionTemplateDto: DeletePermissionTemplateDto
  ): Observable<any> {
    return this._identityServiceClient
      .send(
        deletePermissionTemplateCommand, 
        new DeleteResourceRequest<DeletePermissionTemplateDto>({ 
          resourceId: templateId,
          resource: deletePermissionTemplateDto
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Delete('templates/:templateId/restore')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.PERMISSION_TEMPLATES }]
  })
  @UseGuards(HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithTenantInterceptor,
    EnrichBodyWithUpdatedByInterceptor
  )
  public restorePermissionTemplate(
    @Param('templateId') templateId: string,
    @Body() restorePermissionTemplateDto: RestorePermissionTemplateDto
  ): Observable<any> {
    return this._identityServiceClient
      .send(
        restorePermissionTemplateCommand, 
        new DeleteResourceRequest<RestorePermissionTemplateDto>({ 
          resourceId: templateId,
          resource: restorePermissionTemplateDto
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
