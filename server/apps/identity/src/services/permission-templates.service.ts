import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Claim, CreatePermissionTemplateDto, DeletePermissionTemplateDto, GetPermissionTemplatesDto, IPageable, Page, PageRequest, PermissionTemplate, PermissionTemplateDto, PermissionTemplateMapper, PermissionTemplatesSearchFilter, UpdatePermissionTemplateDto } from '@vsp/common';
import { LoggerService } from '@vsp/logger';
import { ILike, IsNull, Like } from 'typeorm';

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

  
  public async updateTemplate(templateId: string, updatePermissionTemplateDto: UpdatePermissionTemplateDto): Promise<PermissionTemplateDto> {
    const existingTemplate: PermissionTemplate | null = await this._permissionTemplatesRepository
      .findByCondition({
        where: [{ id: templateId, tenantId : updatePermissionTemplateDto.tenantId }]
      });

    if (!existingTemplate) {
      throw new RpcException(
        new NotFoundException('Template was not found!')
      )
    }

    existingTemplate.name = updatePermissionTemplateDto.name;
    existingTemplate.description = updatePermissionTemplateDto.description;
    existingTemplate.updatedById = updatePermissionTemplateDto.updatedById;
    existingTemplate.claims = updatePermissionTemplateDto.claims?.map(claim => new Claim({...claim})) || [];

    await this._permissionTemplatesRepository.save(existingTemplate);

    return PermissionTemplateMapper.toDto(existingTemplate);
  }


  public async deleteTemplate(templateId: string, deletePermissionTemplateDto: DeletePermissionTemplateDto): Promise<PermissionTemplateDto> {
    const existingTemplate: PermissionTemplate | null = await this._permissionTemplatesRepository
      .findByCondition({
        relations: ['claims'],
        where: [{ id: templateId, tenantId : deletePermissionTemplateDto.tenantId }]
      });

    if (!existingTemplate) {
      throw new RpcException(
        new NotFoundException('Template was not found!')
      )
    }

    existingTemplate.deletedById = deletePermissionTemplateDto.deletedById,
    existingTemplate.deletedOn = new Date();

    await this._permissionTemplatesRepository.save(existingTemplate);

    return PermissionTemplateMapper.toDto(existingTemplate);
  }


  public async getTemplates(getPermissionTemplatesDto: GetPermissionTemplatesDto): Promise<PermissionTemplateDto[]> {
    const templates: PermissionTemplate[] = await this._permissionTemplatesRepository
      .findAll({
        relations: ['claims'], 
        where: [{ 
          tenantId: getPermissionTemplatesDto.tenantId,
          deletedOn: IsNull()
        }]
      });

    return PermissionTemplateMapper.toDtoList(templates);
  }


  public async searchTemplates(
      filter: PermissionTemplatesSearchFilter, pageable: IPageable): Promise<Page<PermissionTemplateDto>> {

    const queryFilter: string = filter?.query?.trim() || '';

    const [templates, count]: [PermissionTemplate[], number] = 
      await this._permissionTemplatesRepository.findByPageable(
        pageable, {
          relations: ['claims'], 
          where: { 
            name: queryFilter.length ? ILike(`%${queryFilter}%`) : undefined,
            tenantId: filter.tenantId,
            deletedOn: IsNull()
          }
        }
      );

    return new Page<PermissionTemplateDto>(
      PermissionTemplateMapper.toDtoList(templates), count, pageable
    );
  }
}
