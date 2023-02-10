import { Inject, Injectable } from '@nestjs/common';
import { CaseDto, MapBoundsDto, MapCoordinateDto, MapMarkerDto } from '@vsp/common';
import { CASES_REPOSITORY_TOKEN, ICasesRepository } from '../interfaces/cases-repository.interface';

@Injectable()
export class CasesService {
  @Inject(CASES_REPOSITORY_TOKEN)
  private readonly _casesRepository: ICasesRepository;

  public async getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<CaseDto>[]> {
    // @TODO
    // where caughtat.location within bounds.
    return (await this._casesRepository
      .getRepository()
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.offender', 'o')
      .innerJoinAndSelect(
        'c.caughtAt', 'ca', 
        'location	&& ST_MakeEnvelope(:northEastLongitude, :southWestLatitude, :southWestLongitude, :nortEastLatitude, 4326)', {
          northEastLongitude: mapBounds.northEast.longitude,
          southWestLatitude: mapBounds.southWest.latitude,
          southWestLongitude: mapBounds.southWest.longitude,
          nortEastLatitude: mapBounds.northEast.latitude
        }
      )
      .select(['c', 'o', 'ca'])
      .getMany())
      .map(c => new MapMarkerDto<CaseDto>({
        coordinate: new MapCoordinateDto({
          latitude: c.caughtAt.latitude,
          longitude: c.caughtAt.longitude
        } satisfies MapCoordinateDto),
        payload: new CaseDto(c)
      } satisfies MapMarkerDto<CaseDto>));
  }
}
