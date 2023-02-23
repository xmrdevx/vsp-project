import { 
  CreatePermissionTemplateDto, 
  DeletePermissionTemplateDto, 
  GetPermissionTemplatesDto, 
  IPageable, 
  Page, 
  PermissionTemplateDto, 
  PermissionTemplatesSearchFilter, 
  RestorePermissionTemplateDto, 
  UpdatePermissionTemplateDto } from '@vsp/common';

export const PERMISSION_TEMPLATES_SERVICE_TOKEN: string = 'PERMISSION_TEMPLATES_SERVICE_TOKEN';

export interface IPermissionTemplatesService {
  /**
   * Creates a new named permission template with claims.
   * @param {CreatePermissionTemplateDto} createPermissionTemplateDto The template to create.
   * @return {PermissionTemplateDto} Returns the newly created permission template.
   * @abstract
   * @async
   */
  createTemplate(createPermissionTemplateDto: CreatePermissionTemplateDto): Promise<PermissionTemplateDto>;

  /**
   * Updates an existing permission template with new values.
   * @param {string} templateId The id of the template to update.
   * @param {UpdatePermissionTemplateDto} updatePermissionTemplateDto The values to update.
   * @returns {PermissionTemplateDto} The updated permission template.
   * @abstract
   * @async
   */
  updateTemplate(templateId: string, updatePermissionTemplateDto: UpdatePermissionTemplateDto): Promise<PermissionTemplateDto>;

  /**
   * Soft deletes an existing template.  This will set the deletedOn and deletedBy column of the existing template.
   * @param {string} templateId The id of the template to soft delete.
   * @param {DeletePermissionTemplateDto} deletePermissionTemplateDto The required properties in finding the existing template (tenantId);
   * @returns {PermissionTemplateDto} The deleted permisison template.
   * @abstract
   * @async
   */
  deleteTemplate(templateId: string, deletePermissionTemplateDto: DeletePermissionTemplateDto): Promise<PermissionTemplateDto>;

  /**
   * Get a list of all the active permission templates for a tenant.
   * @param {GetPermissionTemplatesDto} getPermissionTemplatesDto The properties required to get the templates for a tenant.
   * @return {PermissionTemplateDto[]} A list of permission templates.
   * @abstract
   * @async
   */
  getTemplates(getPermissionTemplatesDto: GetPermissionTemplatesDto): Promise<PermissionTemplateDto[]>;

  /**
   * Seaches a tenants permission templates based on a filter and page.
   * @param {PermissionTemplatesSearchFilter} filter The filter to apply to the search.
   * @param {IPageable} pageable The page details being requested
   * @returns {Page<PermissionTemplateDto>} A page of permission templates based on search query.
   * @abstract
   * @async
   */
  searchTemplates(filter: PermissionTemplatesSearchFilter, pageable: IPageable): Promise<Page<PermissionTemplateDto>>;

  /**
   * Restores a deleted permission template for a tenant.
   * @param {string} templateId The id of the template to store.
   * @param {RestorePermissionTemplateDto} Addiontal options for restoring
   * @returns {PermissionTemplateDto} Returns the restored permission template.
   * @abstract
   * @async
   */
  restoreTemplate(templateId: string, restorePermissionTemplateDto: RestorePermissionTemplateDto): Promise<PermissionTemplateDto>;

  /**
   * Gets a permission template by its Id for a tenant.
   * @param {string} templateId The id of the template to retrieve.
   * @param {GetPermissionTemplatesDto} getPermissionTemplatesDto Addtional options for the template (tenant)
   * @returns {PermissionTemplateDto} Returns the permission template with claims
   * @abstract
   * @async
   */
  getTemplateById(templateId: string, getPermissionTemplatesDto: GetPermissionTemplatesDto): Promise<PermissionTemplateDto>;
}
