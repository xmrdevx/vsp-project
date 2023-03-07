import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { CreateLinkDto, ILinksRepository, LinkDto, LinkMapper, LINKS_REPOSITORY_TOKEN, Offender, Link } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { IOffenderLinksService } from '../interfaces/offender-links-service.interface';
import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';

@Injectable()
export class OffenderLinksService implements IOffenderLinksService {
  @Inject(LINKS_REPOSITORY_TOKEN)
  public readonly _linksRepository: ILinksRepository;

  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;


  constructor(private _logger: LoggerService) {
    this._logger.setContext(OffenderLinksService.name);
  }


  public async createLink(offenderId: string, createLinkDto: CreateLinkDto): Promise<LinkDto> {
    const offenderWithLinks: Offender = await this._findOffenderWithLinksById(offenderId);

    const offenderLink: Link = await this._linksRepository.save(
      this._linksRepository.create({...createLinkDto})
    )

    offenderWithLinks.links?.push(offenderLink);

    await this._offendersRepository.save(offenderWithLinks);

    return offenderLink;
  }

  
  public async getAllLinks(offenderId: string): Promise<LinkDto[]> {
    const offenderWithLinks: Offender = await this._findOffenderWithLinksById(offenderId);
    return LinkMapper.toDtoList(offenderWithLinks?.links || []);
  }

  
  private async _findOffenderWithLinksById(offenderId: string): Promise<Offender> {
    const offenderWithLinks: Offender | null = await this._offendersRepository
      .findByCondition({
        relations: ['links'],
        where: { id: offenderId },
        order: { links: { updatedOn: 'DESC' } }
      });

    if (!offenderWithLinks) {
      throw new RpcException(
        new NotFoundException('Offender was not found!')
      );
    }

    return offenderWithLinks;
  }
}
