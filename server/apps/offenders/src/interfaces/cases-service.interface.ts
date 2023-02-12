import { CaseDto, CreateCaseDto, CreateCaseWithOffenderDto, MapBoundsDto, MapMarkerDto, UpdateCaseDto } from '@vsp/common';
import { DeleteCaseDto } from '@vsp/common/dtos/offenders/delete-case.dto';

export const CASES_SERVICE_TOKEN: string = 'CASES_SERVICE_TOKEN';

export interface ICasesService {
  create(createCaseDto: CreateCaseDto): Promise<CaseDto>;
  update(caseId: string, updateCaseDto: UpdateCaseDto): Promise<CaseDto>;
  delete(caseId: string, deleteCaseDto: DeleteCaseDto): Promise<CaseDto>;
  createWithOffender(createCaseWithOffenderDto: CreateCaseWithOffenderDto): Promise<CaseDto>;
  getCaseMarkersByBounds(mapBounds: MapBoundsDto): Promise<MapMarkerDto<CaseDto>[]>;
}
