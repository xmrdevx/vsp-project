import { 
  OffenderCaseDto, 
  CreateCaseDto, 
  CreateOffenderCaseWithOffenderDto, 
  DeleteOffenderCaseDto, 
  MapBoundsDto, 
  MapMarkerDto, 
  UpdateOffenderCaseDto } from '@vsp/common';


export const OFFENDER_CASES_SERVICE_TOKEN: string = 'OFFENDER_CASES_SERVICE_TOKEN';

export interface IOffenderCasesService {
  create(createCaseDto: CreateCaseDto): Promise<OffenderCaseDto>;
  update(caseId: string, updateCaseDto: UpdateOffenderCaseDto): Promise<OffenderCaseDto>;
  delete(caseId: string, deleteCaseDto: DeleteOffenderCaseDto): Promise<OffenderCaseDto>;
  createWithOffender(createCaseWithOffenderDto: CreateOffenderCaseWithOffenderDto): Promise<OffenderCaseDto>;
  getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<OffenderCaseDto>[]>;
}
