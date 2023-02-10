import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';

import { 
  DistanceUnit,
  GeocodingLocationDto,
  IPageable, 
  MapCoordinateDto, 
  OffenderDto, 
  OffendersSearchFilter, 
  OFFENDERS_SERVICE_TOKEN, 
  PageRequest, 
  searchOffendersCommand, 
  SearchOffendersRequest } from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { catchError, Observable, throwError } from 'rxjs';
import { defaultSortColumn, defaultSortDirection } from '../constants/query-params.defaults';

@Controller('offenders')
export class OffendersController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private readonly _offendersServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersController.name);
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
  ): Observable<OffenderDto[]> {
    
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
}
