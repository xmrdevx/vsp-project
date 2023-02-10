import { CaseDto, MapBoundsDto, MapMarkerDto } from '@vsp/common';

export const CASES_SERVICE_TOKEN: string = 'CASES_SERVICE_TOKEN';

export interface ICasesService {
  getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<CaseDto>[]>;
}
