import { Inject, Injectable } from '@nestjs/common';

import { ClaimDto } from '@vsp/common';
import { LoggerService } from '@vsp/logger';

import { CLAIMS_REPOSITORY_TOKEN, IClaimsRepository } from '../interfaces/claims-repository.interface';
import { IPermissionsService } from '../interfaces/permissions-service.interface';

@Injectable()
export class PermissionsService implements IPermissionsService {
  @Inject(CLAIMS_REPOSITORY_TOKEN)
  private readonly _claimsRepository: IClaimsRepository;

  constructor(private _logger: LoggerService) {
    this._logger.setContext(PermissionsService.name);
  }

  public async getAvailablePermissions(): Promise<ClaimDto[]> {
    try {
      return (await this._claimsRepository
        .findAll({ where: [{ isSetByTenant: true }] }))
        .map(claim => new ClaimDto(claim));
    } catch (error) {
      this._logger.error("Error getting available permissions", error);
      throw error;
    }
  }
}
