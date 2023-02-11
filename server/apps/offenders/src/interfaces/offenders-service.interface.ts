import { CreateOffenderDto, DeleteOffenderDto, IPageable, MapBoundsDto, OffenderDto, OffendersSearchFilter, Page, UpdateOffenderDto } from '@vsp/common';

export const OFFENDERS_SERVICE_TOKEN: string = 'OFFENDERS_SERVICE_TOKEN';

export interface IOffendersService {
  create(offender: CreateOffenderDto): Promise<OffenderDto>;
  update(offenderId: string, offender: UpdateOffenderDto): Promise<OffenderDto>;
  delete(offenderId: string, offender: DeleteOffenderDto): Promise<OffenderDto>;
  search(filter: OffendersSearchFilter, pageable: IPageable): Promise<Page<OffenderDto>>;
  searchByBounds(mapBounds: MapBoundsDto, pageable: IPageable): Promise<Page<OffenderDto>>;
  getLatestOffendersByCount(count: number): Promise<OffenderDto[]>;
  getOffenderById(offenderId: string): Promise<OffenderDto>;
}
