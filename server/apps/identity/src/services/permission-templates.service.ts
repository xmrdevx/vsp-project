import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ILike, IsNull, Not } from 'typeorm';

import { 
  Claim, 
  CreatePermissionTemplateDto, 
  DeletePermissionTemplateDto, 
  GetPermissionTemplatesDto, 
  IPageable, 
  Page, 
  PermissionTemplate, 
  PermissionTemplateDto, 
  PermissionTemplateMapper, 
  PermissionTemplatesSearchFilter, 
  RestorePermissionTemplateDto, 
  UpdatePermissionTemplateDto } from '@vsp/common';

import { LoggerService } from '@vsp/logger';

import { IPermissionTemplatesRepository, PERMISSION_TEMPLATES_REPOSITORY_TOKEN } from '../interfaces/permission-template-repository.interface';
import { IPermissionTemplatesService } from '../interfaces/permission-template-service.interface';

@Injectable()
export class PermissionTemplatesService implements IPermissionTemplatesService {
  @Inject(PERMISSION_TEMPLATES_REPOSITORY_TOKEN)
  public readonly _permissionTemplatesRepository: IPermissionTemplatesRepository;
  
  constructor(private _logger: LoggerService) {
    this._logger.setContext(PermissionTemplatesService.name);
  }

  
  public async createTemplate(createPermissionTemplateDto: CreatePermissionTemplateDto): Promise<PermissionTemplateDto> {
    const createdTemplate: PermissionTemplate = await this._permissionTemplatesRepository
      .save(
        this._permissionTemplatesRepository
          .create({...createPermissionTemplateDto})
      );

    return PermissionTemplateMapper.toDto(createdTemplate);
  }

  
  public async updateTemplate(
        templateId: string, updatePermissionTemplateDto: UpdatePermissionTemplateDto): Promise<PermissionTemplateDto> {
    
    const existingTemplate: PermissionTemplate = 
      await this._getTemplateWithClaimsByIdAndTenant(templateId, updatePermissionTemplateDto.tenantId);

    existingTemplate.name = updatePermissionTemplateDto.name;
    existingTemplate.description = updatePermissionTemplateDto.description;
    existingTemplate.updatedById = updatePermissionTemplateDto.updatedById;
    existingTemplate.claims = updatePermissionTemplateDto.claims?.map(claim => new Claim({...claim})) || [];

    await this._permissionTemplatesRepository.save(existingTemplate);

    return PermissionTemplateMapper.toDto(existingTemplate);
  }


  public async deleteTemplate(
      templateId: string, deletePermissionTemplateDto: DeletePermissionTemplateDto): Promise<PermissionTemplateDto> {
    
    const existingTemplate: PermissionTemplate = 
      await this._getTemplateWithClaimsByIdAndTenant(templateId, deletePermissionTemplateDto.tenantId);

    existingTemplate.deletedById = deletePermissionTemplateDto.deletedById,
    existingTemplate.deletedOn = new Date();

    await this._permissionTemplatesRepository.save(existingTemplate);

    return PermissionTemplateMapper.toDto(existingTemplate);
  }


  public async getTemplates(
      getPermissionTemplatesDto: GetPermissionTemplatesDto): Promise<PermissionTemplateDto[]> {
    
    const templates: PermissionTemplate[] = await this._permissionTemplatesRepository
      .findAll({
        relations: ['claims'], 
        where: [{ 
          tenantId: getPermissionTemplatesDto.tenantId,
          deletedOn: IsNull()
        }],
        order: { name: 'ASC' }
      });

    return PermissionTemplateMapper.toDtoList(templates);
  }


  public async searchTemplates(
      filter: PermissionTemplatesSearchFilter, pageable: IPageable): Promise<Page<PermissionTemplateDto>> {

    const queryFilter: string = filter?.query?.trim() || '';
    let deletedState: any = undefined;
    
    if (filter.isDeleted === null || filter.isDeleted === undefined) {
      deletedState = undefined;
    } else {
      deletedState = filter.isDeleted == true ? Not(IsNull()) : IsNull();
    }
    
    const [templates, count]: [PermissionTemplate[], number] = 
      await this._permissionTemplatesRepository.findByPageable(
        pageable, {
          relations: ['claims'], 
          where: { 
            name: queryFilter.length ? ILike(`%${queryFilter}%`) : undefined,
            tenantId: filter.tenantId,
            deletedOn: deletedState
          }
        }
      );

    return new Page<PermissionTemplateDto>(
      PermissionTemplateMapper.toDtoList(templates), count, pageable
    );
  }


  public async restoreTemplate(templateId: string, restorePermissionTemplateDto: RestorePermissionTemplateDto): Promise<PermissionTemplateDto> {
    const existingTemplate: PermissionTemplate = 
      await this._getTemplateWithClaimsByIdAndTenant(templateId, restorePermissionTemplateDto.tenantId);

    existingTemplate.deletedBy = null;
    existingTemplate.deletedOn = null;
    existingTemplate.updatedOn = new Date();
    existingTemplate.updatedById = restorePermissionTemplateDto.updatedById;

    await this._permissionTemplatesRepository.save(existingTemplate);

    return PermissionTemplateMapper.toDto(existingTemplate);
  }


  public async getTemplateById(
      templateId: string, getPermissionTemplatesDto: GetPermissionTemplatesDto): Promise<PermissionTemplateDto> {
    
    const foundTemplate: PermissionTemplate = 
      await this._getTemplateWithClaimsByIdAndTenant(templateId, getPermissionTemplatesDto.tenantId);

    return PermissionTemplateMapper.toDto(foundTemplate)
  }


  private async _getTemplateWithClaimsByIdAndTenant(templateId: string, tenantId: string): Promise<PermissionTemplate> {
    const foundTemplate: PermissionTemplate | null = await this._permissionTemplatesRepository
      .findByCondition({
        relations: ['claims'],
        where: [{ id: templateId, tenantId : tenantId }]
      });

    if (!foundTemplate) {
      throw new RpcException(
        new NotFoundException('Template was not found!')
      )
    }

    return foundTemplate;
  }
}
