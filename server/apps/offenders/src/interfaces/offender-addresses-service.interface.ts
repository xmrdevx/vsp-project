import { AddressDto, CreateAddressDto } from '@vsp/common';

export const OFFENDER_ADDRESSES_SERVICE_TOKEN: string = 'OFFENDER_ADDRESSES_SERVICE_TOKEN';

export interface IOffenderAddressesService {
  /**
   * Create a new address for offender
   * @param {string} offenderId The id of the offender to add the address to.
   * @param {CreateAddressDto} createAddressDto The address details to save.
   * @returns {AddressDto} The newly saved address.
   * @abstract
   * @async 
   */
  createAddress(offenderId: string, createAddressDto: CreateAddressDto): Promise<AddressDto>;

  /**
   * Retrieves all the addressses for a specific offender.
   * @param {string} offenderId The id of the offender to get the addresses for.
   * @return {AddressDto[]} A collection of all the addresses for the offender
   * @abstract
   * @async
   */
  getAllAddresses(offenderId: string): Promise<AddressDto[]>;
}
