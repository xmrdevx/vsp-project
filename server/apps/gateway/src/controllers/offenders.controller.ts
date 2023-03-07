import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, EMPTY, Observable, of, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { HasPermissionsGuard, JwtAuthGuard, Permissions } from '@vsp/authorization';
import { LoggerService } from '@vsp/logger';

import { 
  OffenderCaseDto,
  ClaimAuthorizationOperations,
  ClaimAuthorizationTypes,
  ClaimValues,
  createOffenderCaseCommand,
  CreateCaseDto,
  createOffenderCommand,
  CreateOffenderDto,
  CreateResourceRequest,
  deleteOffenderCaseCommand,
  DeleteOffenderCaseDto,
  deleteOffenderCommand,
  DeleteOffenderDto,
  DeleteResourceRequest,
  getLatestOffenderByCountCommand,
  GetLatestOffendersRequestDto,
  getOffenderByIdCommand,
  GetOffenderByIdRequest,
  IPageable, 
  MapBoundsDto, 
  MapCoordinateDto, 
  OffenderDto, 
  OffenderSearchFilterQueryParams, 
  OffendersSearchFilter, 
  OFFENDERS_SERVICE_TOKEN, 
  Page, 
  PageRequest, 
  searchOffendersByBoundsCommand, 
  SearchOffendersByBoundsRequest, 
  searchOffendersCommand, 
  SearchOffendersRequest, 
  updateOffenderCaseCommand, 
  UpdateOffenderCaseDto, 
  updateOffenderCommand, 
  UpdateOffenderDto,
  UpdateResourceRequest, 
  OffenderSearchFilterByBoundsQueryParams,
  BasicSearchFilterQueryParams,
  CreateOffenderCommentDto,
  createOffenderCommentCommand,
  SearchOffenderCommentsRequest,
  OffenderCommentDto,
  searchOffenderCommentsCommand,
  BasicQuerySearchFilter,
  OffenderCommentsSearchFilter,
  AddressDto,
  CreateAddressDto,
  createOffenderAddressCommand,
  GetResourceRequest,
  getOffenderAddressesCommand,
  AccountDto,
  createOffenderLinkCommand,
  CreateLinkDto,
  LinkDto,
  getOffenderLinksCommand} from '@vsp/common';

import { 
  EnrichBodyWithCreatedByInterceptor, 
  EnrichBodyWithUpdatedByInterceptor, 
  EnrichBodyWithDeletedByInterceptor, 
  EnrichBodyWithTenantInterceptor } from '@vsp/authorization';
import { EnrichBodyWithCommentedByInterceptor } from '@vsp/authorization/interceptors/enrich-body-with-commented-by.interceptor';

@ApiTags('offenders')
@Controller('offenders')
// @UseInterceptors(HttpCacheInterceptor)
export class OffendersController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private readonly _offendersServiceClient: ClientProxy;

  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersController.name);
  }


  @Post()
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDERS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithCreatedByInterceptor, EnrichBodyWithUpdatedByInterceptor)
  public createOffender(@Body() createOffenderDto: CreateOffenderDto): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(
        createOffenderCommand, 
        new CreateResourceRequest<CreateOffenderDto>({ resource: createOffenderDto })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Get('search')
  public searchOffenders(@Query() query: OffenderSearchFilterQueryParams): Observable<Page<OffenderDto>> {
    const filter: OffendersSearchFilter = new OffendersSearchFilter({ 
      query: query.query,
      location: new MapCoordinateDto({
        latitude: query.locationLatitude,
        longitude: query.locationLongitude,
      } satisfies MapCoordinateDto),
      distance: query.distance,
      distanceUnit: query.distanceUnit
    });
    
    const pageable: IPageable = PageRequest.from(query.index, query.size, query.column, query.direction);
    
    return this._offendersServiceClient
      .send(searchOffendersCommand, new SearchOffendersRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Get('by-bounds/search')
  public searchOffendersByBounds(@Query() query: OffenderSearchFilterByBoundsQueryParams): Observable<OffenderDto[]> {
    const mapBounds: MapBoundsDto = new MapBoundsDto({
      northEast: new MapCoordinateDto({ 
        latitude: query.northEastLatitude, longitude: query.northEastLongitude } satisfies MapCoordinateDto),
      southWest: new MapCoordinateDto({ 
        latitude: query.southWestLatitude, longitude: query.southWestLongitude } satisfies MapCoordinateDto)
    } satisfies MapBoundsDto);    

    const pageable: IPageable = PageRequest.from(query.index, query.size, query.column, query.direction);

    return this._offendersServiceClient
      .send(searchOffendersByBoundsCommand, new SearchOffendersByBoundsRequest({ mapBounds, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }


  @Get('latest')
  public getLatestOffendersByCount(@Query('count') count: number): Observable<OffenderDto[]> {
    return this._offendersServiceClient
      .send(getLatestOffenderByCountCommand, new GetLatestOffendersRequestDto({ count }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Get(':offenderId')
  public getOffenderById(@Param('offenderId') offenderId: string): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(getOffenderByIdCommand, new GetOffenderByIdRequest({ offenderId }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Put(':offenderId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDERS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithUpdatedByInterceptor)
  public updateOffender(
      @Param('offenderId') offenderId: string, @Body() updateOffenderDto: UpdateOffenderDto): Observable<OffenderDto> {
    
    return this._offendersServiceClient
      .send(
        updateOffenderCommand, 
        new UpdateResourceRequest<UpdateOffenderDto>({ resourceId: offenderId, resource: updateOffenderDto })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Delete(':offenderId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDERS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithDeletedByInterceptor)
  public deleteOffender(
      @Body('deletedById') deletedById: string, @Param('offenderId') offenderId: string): Observable<OffenderDto> {
    
    return this._offendersServiceClient
      .send(
        deleteOffenderCommand, 
        new DeleteResourceRequest({ 
          resourceId: offenderId, 
          resource: new DeleteOffenderDto({ deletedById }) 
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Post(':offenderId/cases')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_CASES }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithCreatedByInterceptor, EnrichBodyWithUpdatedByInterceptor, EnrichBodyWithTenantInterceptor
  )
  public createOffenderCase(
      @Body() createCaseDto: CreateCaseDto, @Param('offenderId') offenderId: string): Observable<OffenderCaseDto> {
    
    return this._offendersServiceClient
      .send(
        createOffenderCaseCommand, 
        new CreateResourceRequest<CreateCaseDto>({ 
          resource: { ...createCaseDto, offenderId }
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Put(':offenderId/cases/:caseId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_CASES }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithUpdatedByInterceptor)
  public updatedOffenderCase(
    @Body() updateCaseDto: UpdateOffenderCaseDto, @Param('offenderId') offenderId: string, @Param('caseId') caseId: string
  ): Observable<OffenderCaseDto> {
    
    return this._offendersServiceClient
      .send(
        updateOffenderCaseCommand, 
        new UpdateResourceRequest<UpdateOffenderCaseDto>({ 
          resourceId: caseId,
          resource: { ...updateCaseDto, offenderId }
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Delete(':offenderId/cases/:caseId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_CASES }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithDeletedByInterceptor)
  public deleteOffenderCase(
    @Body('deletedById') deletedById: string, @Param('offenderId') offenderId: string, @Param('caseId') caseId: string
  ): Observable<OffenderCaseDto> {
    
    return this._offendersServiceClient
      .send(
        deleteOffenderCaseCommand, 
        new UpdateResourceRequest<DeleteOffenderCaseDto>({ 
          resourceId: caseId,
          resource: new DeleteOffenderCaseDto({ deletedById, offenderId, caseId })
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Post(':offenderId/comments')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_COMMENTS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithCreatedByInterceptor, EnrichBodyWithUpdatedByInterceptor, EnrichBodyWithCommentedByInterceptor,
  )
  public createOffenderComment(
      @Param('offenderId') offenderId: string, @Body() createOffendCommentDto: CreateOffenderCommentDto): Observable<any> {
    
    return this._offendersServiceClient
      .send(
        createOffenderCommentCommand, 
        new CreateResourceRequest<CreateOffenderCommentDto>({ resource: { ...createOffendCommentDto, offenderId }})
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  
  @Get(':offenderId/comments/search')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_COMMENTS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  public searchOffenderComments(
      @Param('offenderId') offenderId: string, 
      @Query() query: BasicSearchFilterQueryParams): Observable<Page<OffenderCommentDto>> {
    
    const pageable: IPageable = PageRequest.from(query.index, query.size, query.column, query.direction);
    const filter: OffenderCommentsSearchFilter = new OffenderCommentsSearchFilter({ 
      query: query.query, isDeleted: query.isDeleted, offenderId,
    });
    
    return this._offendersServiceClient
      .send(searchOffenderCommentsCommand, new SearchOffenderCommentsRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Get(':offenderId/addresses')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_ADDRESSES }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  public getOffenderAddresses(@Param('offenderId') offenderId: string): Observable<AddressDto[]> {
    return this._offendersServiceClient
      .send(getOffenderAddressesCommand, new GetResourceRequest<AccountDto[]>({ resourceId: offenderId }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Post(':offenderId/addresses')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_ADDRESSES }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  public createOffenderAddress(
      @Param('offenderId') offenderId: string, @Body() createAddressDto: CreateAddressDto): Observable<AddressDto> {

    return this._offendersServiceClient
      .send(
        createOffenderAddressCommand,
        new CreateResourceRequest<CreateAddressDto>({ resourceId: offenderId, resource: createAddressDto})
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Get(':offenderId/links')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_LINKS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  public getOffenderLinks(@Param('offenderId') offenderId: string): Observable<AddressDto[]> {
    return this._offendersServiceClient
      .send(getOffenderLinksCommand, new GetResourceRequest<LinkDto[]>({ resourceId: offenderId }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }


  @Post(':offenderId/links')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [{ key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_LINKS }]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  public createOffenderLink(
      @Param('offenderId') offenderId: string, @Body() createLinkDto: CreateLinkDto): Observable<LinkDto> {

    return this._offendersServiceClient
      .send(
        createOffenderLinkCommand,
        new CreateResourceRequest<CreateLinkDto>({ resourceId: offenderId, resource: createLinkDto })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }
}
