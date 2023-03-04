import { IRepository, Address } from '@vsp/common';

export const ADDRESSES_REPOSITORY_TOKEN: string = 'ADDRESSES_REPOSITORY_TOKEN';

export interface IAddressesRepository extends IRepository<Address, string> { };
