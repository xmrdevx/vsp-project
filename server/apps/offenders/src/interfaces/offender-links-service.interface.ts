import { LinkDto, CreateLinkDto } from '@vsp/common';

export const OFFENDER_LINKS_SERVICE_TOKEN: string = 'OFFENDER_LINKS_SERVICE_TOKEN';

export interface IOffenderLinksService {
  /**
   * Create a new link for offender
   * @param {string} offenderId The id of the offender to add the link to.
   * @param {CreateLinkDto} createLinkDto The link details to save.
   * @returns {LinkDto} The newly saved link.
   * @abstract
   * @async 
   */
  createLink(offenderId: string, createLinkDto: CreateLinkDto): Promise<LinkDto>;

  /**
   * Retrieves all the linkses for a specific offender.
   * @param {string} offenderId The id of the offender to get the links for.
   * @return {LinkDto[]} A collection of all the links for the offender
   * @abstract
   * @async
   */
  getAllLinks(offenderId: string): Promise<LinkDto[]>;
}
