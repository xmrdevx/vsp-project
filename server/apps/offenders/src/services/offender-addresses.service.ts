import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Address, AddressDto, ADDRESSES_REPOSITORY_TOKEN, CreateAddressDto, IAddressesRepository, Offender } from '@vsp/common';
import { AddressMapper } from '@vsp/common/mappers/address.mapper';
import { LoggerService } from '@vsp/logger';
import { IOffenderAddressesService } from '../interfaces/offender-addresses-service.interface';

import { IOffendersRepository, OFFENDERS_REPOSITORY_TOKEN } from '../interfaces/offenders-repository.interface';

@Injectable()
export class OffenderAddressesService implements IOffenderAddressesService {
  @Inject(ADDRESSES_REPOSITORY_TOKEN)
  public readonly _addressesRepository: IAddressesRepository;

  @Inject(OFFENDERS_REPOSITORY_TOKEN)
  private readonly _offendersRepository: IOffendersRepository;


  constructor(private _logger: LoggerService) {
    this._logger.setContext(OffenderAddressesService.name);
  }


  public async createAddress(offenderId: string, createAddressDto: CreateAddressDto): Promise<AddressDto> {
    const offenderWithAddresses: Offender = await this._findOffenderWithAddressesById(offenderId);
    const offenderAddress: Address = await this._addressesRepository.save(
      this._addressesRepository.create({...createAddressDto})
    )

    offenderWithAddresses.addresses?.push(offenderAddress);
    await this._offendersRepository.save(offenderWithAddresses);

    return offenderAddress;
  }

  public async getAllAddresses(offenderId: string): Promise<AddressDto[]> {
    const offenderWithAddresses: Offender = await this._findOffenderWithAddressesById(offenderId);
    return AddressMapper.toDtoList(offenderWithAddresses.addresses || []);
  }

  
  private async _findOffenderWithAddressesById(offenderId: string): Promise<Offender> {
    const offenderWithAddresses: Offender | null = await this._offendersRepository
      .findByCondition({
        relations: ['addresses'],
        where: { id: offenderId },
        order: { addresses: { updatedOn: 'DESC' } }
      });

    if (!offenderWithAddresses) {
      throw new RpcException(
        new NotFoundException('Offender was not found!')
      );
    }

    return offenderWithAddresses;
  }
}
