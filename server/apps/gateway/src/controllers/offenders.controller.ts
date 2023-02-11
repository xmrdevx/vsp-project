import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable, of, throwError } from 'rxjs';

import { HttpCacheInterceptor } from '@vsp/core';
import { JwtAuthGuard } from '@vsp/authorization';
import { LoggerService } from '@vsp/logger';

import { 
  createOffenderCommand,
  CreateOffenderDto,
  CreateResourceRequest,
  deleteOffenderCommand,
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
  updateOffenderCommand, 
  UpdateOffenderDto,
  UpdateResourceRequest} from '@vsp/common';

import { defaultSortColumn, defaultSortDirection } from '../constants/query-params.defaults';

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
  @UseGuards(JwtAuthGuard)
  public createOffender(@Body() createOffenderDto: CreateOffenderDto): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(
        createOffenderCommand, 
        new CreateResourceRequest<CreateOffenderDto>({ resource: createOffenderDto })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Put(':offenderId')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  public deleteOffender(@Param('offenderId') offenderId: string): Observable<OffenderDto> {
    return this._offendersServiceClient
      .send(
        deleteOffenderCommand, 
        new DeleteResourceRequest({ resourceId: offenderId })
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
}
