import { Body, Controller, Inject, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { 
  createOffenderCommentCommand, 
  CreateOffenderCommentDto, 
  CreateResourceRequest, 
  OffenderCommentDto, 
  Page, 
  searchOffenderCommentsCommand, 
  SearchOffenderCommentsRequest} from '@vsp/common';

import { LoggerService } from '@vsp/logger';

import { IOffenderCommentsService, OFFENDER_COMMENTS_SERVICE_TOKEN } from '../interfaces/offender-comments-service.interface';

@Controller('offenders/comments')
export class OffenderCommentsController {
  @Inject(OFFENDER_COMMENTS_SERVICE_TOKEN)
  private _offenderCommentsService: IOffenderCommentsService;

  
  constructor(private readonly _logger: LoggerService) {
    this._logger.setContext(OffenderCommentsController.name);
  }


  @MessagePattern(searchOffenderCommentsCommand)
  public async searchOffenderComments(request: SearchOffenderCommentsRequest): Promise<Page<any>> {
    try {
      request = new SearchOffenderCommentsRequest(request);
      return this._offenderCommentsService.searchComments(
        request?.filter?.offenderId, request.filter, request.pageable
      );
    } catch (error) {
      this._logger.error('Error searching offender comments', error);
      throw error;
    }
  }

  
  @MessagePattern(createOffenderCommentCommand)
  public async createOffenderComment(
    request: CreateResourceRequest<CreateOffenderCommentDto>
  ): Promise<OffenderCommentDto> {
    try {
      return await this._offenderCommentsService
        .createComment(request.resource.offenderId, request.resource)
    } catch (error) {
      this._logger.error('Error creating comment', error);
      throw error;
    }
  }
}
