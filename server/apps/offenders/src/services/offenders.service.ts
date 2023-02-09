import { Inject, Injectable } from '@nestjs/common';
import { IPageable, Offender, OffenderDto, OffendersSearchFilter, Page } from '@vsp/common';
import { LoggerService } from '@vsp/logger';
import { FindManyOptions, ILike } from 'typeorm';
import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';
import { IOffendersService } from '../interfaces/offenders-service.interface';

@Injectable()
export class OffendersService implements IOffendersService {
  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffendersService.name);
  }

  public async search(filter: OffendersSearchFilter, pageable: IPageable): Promise<Page<OffenderDto>> {
    // @TODO this will need refactoring use query builder once location search is added.
    const findManyOptions: FindManyOptions<Offender> = { where: {} };

    if (filter?.query?.trim()?.length) {
      const queryText: string = `%${filter.query.trim().toLowerCase()}%`;
      findManyOptions.where = [
        { firstName: ILike(queryText) },
        { lastName: ILike(queryText) }
      ];
    } 

    const page = await this._offendersRepository
      .findByPageable(pageable, findManyOptions);
    
    return new Page<OffenderDto>(page[0], page[1], pageable);
  }
}
