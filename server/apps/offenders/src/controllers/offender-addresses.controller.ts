import { BadRequestException, Controller, Inject, NotFoundException } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { AddressDto, CreateAddressDto, createOffenderAddressCommand, CreateResourceRequest, getOffenderAddressesCommand, GetResourceRequest } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { IOffenderAddressesService, OFFENDER_ADDRESSES_SERVICE_TOKEN } from '../interfaces/offender-addresses-service.interface';

@Controller('offenders/addresses')
export class OffenderAddressesController {
  @Inject(OFFENDER_ADDRESSES_SERVICE_TOKEN)
  private _offenderAddressesService: IOffenderAddressesService;

  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffenderAddressesController.name);
  }

  @MessagePattern(createOffenderAddressCommand)
  public async createOffenderAddress(request: CreateResourceRequest<CreateAddressDto>): Promise<AddressDto> {
    try {
      if (!request.resourceId) throw new RpcException(new BadRequestException('Resource ID was not supplied!'));
      return await this._offenderAddressesService.createAddress(request.resourceId, request.resource);
    } catch (error) {
      this._logger.error('Error creating offender address', error);
      throw error;
    }
  }

  @MessagePattern(getOffenderAddressesCommand)
  public async getOffenderAddresses(request: GetResourceRequest<AddressDto[]>): Promise<AddressDto[]> {
    try {
      return await this._offenderAddressesService.getAllAddresses(request.resourceId);
    } catch (error) {
      this._logger.error('Error getting offender addresses', error);
      throw error;
    }
  }
}
