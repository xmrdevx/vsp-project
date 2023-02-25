import { Body, Controller, Get, Inject, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { HasPermissionsGuard, JwtAuthGuard, Permissions } from '@vsp/authorization';

import { 
  EnrichBodyWithCreatedByInterceptor, 
  EnrichBodyWithTenantInterceptor, 
  EnrichBodyWithUpdatedByInterceptor } from '@vsp/authorization';

import { 
  OffenderCase, 
  GetOffenderCaseMarkersByBoundsRequest, 
  getOffenderCaseMarkersByBoundsCommand, 
  MapBoundsDto, 
  MapCoordinateDto, 
  MapMarkerDto, 
  OFFENDERS_SERVICE_TOKEN, 
  CreateOffenderCaseWithOffenderDto, 
  OffenderCaseDto, 
  CreateResourceRequest, 
  createOffenderCaseWithOffenderCommand,
  ClaimAuthorizationOperations,
  ClaimAuthorizationTypes,
  ClaimValues,
  MapBoundQueryParams} from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { catchError, Observable, throwError } from 'rxjs';


@ApiTags('offenders')
@Controller('offenders/cases')
export class OffenderCasesController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private readonly _offendersServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffenderCasesController.name);
  }

  @Post()
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
  public createCaseWithOffender(
    @Body() createCaseWithOffenderDto: CreateOffenderCaseWithOffenderDto
  ): Observable<OffenderCaseDto> {
    return this._offendersServiceClient
      .send(
        createOffenderCaseWithOffenderCommand, 
        new CreateResourceRequest<CreateOffenderCaseWithOffenderDto>({ 
          resource: createCaseWithOffenderDto
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Get('by-bounds/markers')
  public getCaseMarkersByBounds(@Query() query: MapBoundQueryParams): Observable<MapMarkerDto<OffenderCase>[]> {
    const mapBounds: MapBoundsDto = new MapBoundsDto({
      northEast: new MapCoordinateDto({ 
        latitude: query.northEastLatitude, longitude: query.northEastLongitude } satisfies MapCoordinateDto),
      southWest: new MapCoordinateDto({ 
        latitude: query.southWestLatitude, longitude: query.southWestLongitude } satisfies MapCoordinateDto)
    } satisfies MapBoundsDto);   

    return this._offendersServiceClient
      .send(
        getOffenderCaseMarkersByBoundsCommand, 
        new GetOffenderCaseMarkersByBoundsRequest({ mapBounds })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
