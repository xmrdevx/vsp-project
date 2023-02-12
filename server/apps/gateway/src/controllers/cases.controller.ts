import { Body, Controller, Get, Inject, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { HasPermissionsGuard, JwtAuthGuard, Permissions } from '@vsp/authorization';

import { 
  EnrichBodyWithCreatedByInterceptor, 
  EnrichBodyWithTenantInterceptor, 
  EnrichBodyWithUpdatedByInterceptor } from '@vsp/authorization';

import { 
  Case, 
  GetOffenderCaseMarkersByBoundsRequest, 
  getOffenderCaseMarkersByBoundsCommand, 
  MapBoundsDto, 
  MapCoordinateDto, 
  MapMarkerDto, 
  OFFENDERS_SERVICE_TOKEN, 
  CreateCaseWithOffenderDto, 
  CaseDto, 
  CreateResourceRequest, 
  createCaseWithOffenderCommand,
  ClaimAuthorizationOperations,
  ClaimAuthorizationTypes,
  ClaimValues} from '@vsp/common';

import { LoggerService } from '@vsp/logger';
import { catchError, Observable, throwError } from 'rxjs';


@ApiTags('offenders')
@Controller('offenders/cases')
export class CasesController {
  @Inject(OFFENDERS_SERVICE_TOKEN)
  private readonly _offendersServiceClient: ClientProxy;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(CasesController.name);
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
    @Body() createCaseWithOffenderDto: CreateCaseWithOffenderDto
  ): Observable<CaseDto> {
    return this._offendersServiceClient
      .send(
        createCaseWithOffenderCommand, 
        new CreateResourceRequest<CreateCaseWithOffenderDto>({ 
          resource: createCaseWithOffenderDto
        })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))));
  }

  @Get('by-bounds/markers')
  public getCaseMarkersByBounds(
    @Query('northEastLatitude') northEastLatitude: number,
    @Query('northEastLongitude') northEastLongitude: number,
    @Query('southWestLatitude') southWestLatitude: number,
    @Query('southWestLongitude') southWestLongitude: number,
  ): Observable<MapMarkerDto<Case>[]> {
    
    const mapBounds: MapBoundsDto = new MapBoundsDto({
      northEast: new MapCoordinateDto({ 
        latitude: northEastLatitude, longitude: northEastLongitude } satisfies MapCoordinateDto),
      southWest: new MapCoordinateDto({ 
        latitude: southWestLatitude, longitude: southWestLongitude } satisfies MapCoordinateDto)
    } satisfies MapBoundsDto);   

    return this._offendersServiceClient
      .send(
        getOffenderCaseMarkersByBoundsCommand, 
        new GetOffenderCaseMarkersByBoundsRequest({ mapBounds })
      )
      .pipe(catchError(error => throwError(() => new RpcException(error.response))))
  }
}
