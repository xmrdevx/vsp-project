import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, EMPTY, Observable, of, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { HasPermissionsGuard, JwtAuthGuard, Permissions } from '@vsp/authorization';
import { LoggerService } from '@vsp/logger';

import { 
  CaseDto,
  ClaimAuthorizationOperations,
  ClaimAuthorizationTypes,
  ClaimValues,
  createCaseCommand,
  CreateCaseDto,
  createOffenderCommand,
  CreateOffenderDto,
  CreateResourceRequest,
  deleteCaseCommand,
  DeleteCaseDto,
  deleteOffenderCommand,
  DeleteOffenderDto,
  DeleteResourceRequest,
  DistanceUnit,
  getLatestOffenderByCountCommand,
  GetLatestOffendersRequestDto,
  getOffenderByIdCommand,
  GetOffenderByIdRequest,
  IPageable, 
  MapBoundsDto, 
  MapCoordinateDto, 
  OffenderDto, 
  OffendersSearchFilter, 
  OFFENDERS_SERVICE_TOKEN, 
  Page, 
  PageRequest, 
  searchOffendersByBoundsCommand, 
  SearchOffendersByBoundsRequest, 
  searchOffendersCommand, 
  SearchOffendersRequest, 
  updateCaseCommand, 
  UpdateCaseDto, 
  updateOffenderCommand, 
  UpdateOffenderDto,
  UpdateResourceRequest} from '@vsp/common';

import { defaultSortColumn, defaultSortDirection } from '../constants/query-params.defaults';

import { 
  EnrichBodyWithCreatedByInterceptor, 
  EnrichBodyWithUpdatedByInterceptor, 
  EnrichBodyWithDeletedByInterceptor, 
  EnrichBodyWithTenantInterceptor } from '@vsp/authorization';

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
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDERS }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithCreatedByInterceptor, 
    EnrichBodyWithUpdatedByInterceptor
  )
  public createOffender(@Body() createOffenderDto: CreateOffenderDto): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(
        createOffenderCommand, 
        new CreateResourceRequest<CreateOffenderDto>({ resource: createOffenderDto })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Get('search')
  public searchOffenders(
    @Query('query') query: string | null = null,
    @Query('locationLatitude') locationLatitude: number | null = null,
    @Query('locationLongitude') locationLongitude: number | null = null,
    @Query('distance') distance: number | null = null,
    @Query('distanceUnit') distanceUnit: DistanceUnit | null = null,
    @Query('index') index: number = 0,
    @Query('size') size: number = 10,
    @Query('column') column: string = defaultSortColumn,
    @Query('direction') direction: string = defaultSortDirection
  ): Observable<Page<OffenderDto>> {
    
    const filter: OffendersSearchFilter = new OffendersSearchFilter({ 
      query: query,
      location: new MapCoordinateDto({
        latitude: locationLatitude ? +locationLatitude : null,
        longitude: locationLongitude ? +locationLongitude : null,
      } satisfies MapCoordinateDto),
      distance: distance ? +distance : null,
      distanceUnit: distanceUnit
    });
    
    const pageable: IPageable = PageRequest.from(index, size, column, direction);

    return this._offendersServiceClient
      .send(searchOffendersCommand, new SearchOffendersRequest({ filter, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  @Get('by-bounds/search')
  public searchOffendersByBounds(
    @Query('northEastLatitude') northEastLatitude: number,
    @Query('northEastLongitude') northEastLongitude: number,
    @Query('southWestLatitude') southWestLatitude: number,
    @Query('southWestLongitude') southWestLongitude: number,
    @Query('index') index: number = 0,
    @Query('size') size: number = 10,
    @Query('column') column: string = defaultSortColumn,
    @Query('direction') direction: string = defaultSortDirection
  ): Observable<OffenderDto[]> {

    const mapBounds: MapBoundsDto = new MapBoundsDto({
      northEast: new MapCoordinateDto({ 
        latitude: northEastLatitude, longitude: northEastLongitude } satisfies MapCoordinateDto),
      southWest: new MapCoordinateDto({ 
        latitude: southWestLatitude, longitude: southWestLongitude } satisfies MapCoordinateDto)
    } satisfies MapBoundsDto);    

    const pageable: IPageable = PageRequest.from(index, size, column, direction);

    return this._offendersServiceClient
      .send(searchOffendersByBoundsCommand, new SearchOffendersByBoundsRequest({ mapBounds, pageable }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  @Get('latest')
  public getLatestOffendersByCount(@Query('count') count: number): Observable<OffenderDto[]> {
    return this._offendersServiceClient
      .send(getLatestOffenderByCountCommand, new GetLatestOffendersRequestDto({ count }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  @Get(':offenderId')
  public getOffenderById(@Param('offenderId') offenderId: string): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(getOffenderByIdCommand, new GetOffenderByIdRequest({ offenderId }))
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }

  @Put(':offenderId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDERS }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithUpdatedByInterceptor)
  public updateOffender(
    @Param('offenderId') offenderId: string, 
    @Body() updateOffenderDto: UpdateOffenderDto
  ): Observable<OffenderDto> {
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
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDERS }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithDeletedByInterceptor)
  public deleteOffender(
    @Body('deletedById') deletedById: string, 
    @Param('offenderId') offenderId: string
  ): Observable<OffenderDto> {
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
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_CASES }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(
    EnrichBodyWithCreatedByInterceptor,
    EnrichBodyWithUpdatedByInterceptor,
    EnrichBodyWithTenantInterceptor
  )
  public createOffenderCase(
    @Body() createCaseDto: CreateCaseDto, @Param('offenderId') offenderId: string
  ): Observable<CaseDto> {
    return this._offendersServiceClient
      .send(
        createCaseCommand, 
        new CreateResourceRequest<CreateCaseDto>({ 
          resource: { ...createCaseDto, offenderId }
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Put(':offenderId/cases/:caseId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_CASES }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithUpdatedByInterceptor)
  public updatedOffenderCase(
    @Body() updateCaseDto: UpdateCaseDto, 
    @Param('offenderId') offenderId: string,
    @Param('caseId') caseId: string
  ): Observable<CaseDto> {
    return this._offendersServiceClient
      .send(
        updateCaseCommand, 
        new UpdateResourceRequest<UpdateCaseDto>({ 
          resourceId: caseId,
          resource: { ...updateCaseDto, offenderId }
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Delete(':offenderId/cases/:caseId')
  @Permissions({
    operation: ClaimAuthorizationOperations.ALL,
    permissions: [
      { key: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_CASES }
    ]
  })
  @UseGuards(JwtAuthGuard, HasPermissionsGuard)
  @UseInterceptors(EnrichBodyWithDeletedByInterceptor)
  public deleteOffenderCase(
    @Body('deletedById') deletedById: string, 
    @Param('offenderId') offenderId: string,
    @Param('caseId') caseId: string
  ): Observable<CaseDto> {
    return this._offendersServiceClient
      .send(
        deleteCaseCommand, 
        new UpdateResourceRequest<DeleteCaseDto>({ 
          resourceId: caseId,
          resource: new DeleteCaseDto({ deletedById, offenderId, caseId })
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }
}
