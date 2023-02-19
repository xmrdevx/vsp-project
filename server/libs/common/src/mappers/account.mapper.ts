import { AccountDto } from '../dtos/identity';
import { Account } from '../entities/identity';

export class AccountMapper {
  public static toDto(entity: Account): AccountDto {
    return new AccountDto({
      id: entity.id,
      createdOn: entity.createdOn,
      updatedOn: entity.updatedOn,
      name: entity?.name
    });
  }
  
  public static toDtoList(entities: Account[]): AccountDto[] {
    return entities.map(entity => AccountMapper.toDto(entity));
  }
  
  public static toEntity(dto: AccountDto): Account {
    // @TODO Not really needed as of right now.
    return new Account({
      
    });
  }

  public static toEntityList(dtos: AccountDto[]): Account[] {
    return dtos.map(dto => AccountMapper.toEntity(dto))
  }
}
