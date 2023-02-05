import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { HttpCacheInterceptor } from '@vsp/core';

@Controller('permissions')
@UseInterceptors(HttpCacheInterceptor)
export class PermissionsController {
  @Get()
  public async getPerissions(): Promise<string> {
    return "SHOULD BE CACHED";
  }
}
