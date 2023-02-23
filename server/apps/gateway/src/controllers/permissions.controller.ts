import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, of, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { LoggerService } from '@vsp/logger';
import { EnrichBodyWithCreatedByInterceptor, EnrichBodyWithDeletedByInterceptor, EnrichBodyWithTenantInterceptor, EnrichBodyWithUpdatedByInterceptor, JwtAuthGuard } from '@vsp/authorization';

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
  SearchPermissionTemplatesRequest} from '@vsp/common'; 
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
  public getAvailablePerissions(): Observable<any> {
    return this._identityServiceClient
      .send(getAvailablePermissionsCommand, {})
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Get('templates')
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
  public searchPermissionTemplates(
    @Body('tenantId') tenantId: string,
    @Query('query') query: string = '',
    @Query('index') index: number = 0,
    @Query('size') size: number = 10,
    @Query('column') column: string = defaultSortColumn,
    @Query('direction') direction: string = defaultSortDirection
  ): Observable<any> {
    const pageable: IPageable = PageRequest.from(index, size, column, direction);
    const filter: PermissionTemplatesSearchFilter = new PermissionTemplatesSearchFilter({ query, tenantId });
    return this._identityServiceClient
      .send(searchPermissionTemplatesCommand, new SearchPermissionTemplatesRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  
  @Put('templates/:templateId')
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
}
