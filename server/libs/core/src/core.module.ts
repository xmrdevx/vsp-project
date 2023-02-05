import { DynamicModule, Module } from '@nestjs/common';

import { EnvironmentService } from './services/environment.service';
import { TypeOrmConfigService } from './services/type-orm-config.service';
import { CacheConfigService } from './services/cache-config.service';

@Module({
  providers: [CacheConfigService],
  exports: [],
})
export class CoreModule {
  public static forRoot(): DynamicModule {
    return {
      module: CoreModule,
      providers: [
        EnvironmentService,
        TypeOrmConfigService,
        CacheConfigService
      ],
      exports: [
        EnvironmentService,
        TypeOrmConfigService,
        CacheConfigService
      ]
    } as DynamicModule
  }
}
