import { IPageable, OffenderDto, OffendersSearchFilter, Page } from '@vsp/common';

export const OFFENDERS_SERVICE_TOKEN: string = 'OFFENDERS_SERVICE_TOKEN';

export interface IOffendersService {
  search(filter: OffendersSearchFilter, pageable: IPageable): Promise<Page<OffenderDto>>;
}
