import { TenantDto } from '../dtos/identity';
import { Tenant } from '../entities/identity';
import { AccountMapper } from './account.mapper';

export class TenantMapper {
  public static toDto(entity: Tenant): TenantDto {
    return new TenantDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      account: entity?.account ? AccountMapper.toDto(entity.account) : undefined
    });
  }
  
  public static toDtoList(entities: Tenant[]): TenantDto[] {
    return entities.map(entity => TenantMapper.toDto(entity));
  }
  
  public static toEntity(dto: TenantDto): Tenant {
    // @TODO Not really needed as of right now.
    return new Tenant({
      
    });
  }

  public static toEntityList(dtos: TenantDto[]): Tenant[] {
    return dtos.map(dto => TenantMapper.toEntity(dto))
  }
}