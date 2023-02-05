import { CacheModuleAsyncOptions, CacheModuleOptions, CacheOptionsFactory, Injectable } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { EnvironmentService } from './environment.service';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory{
  constructor(
    private readonly _environmentService: EnvironmentService
  ) { }

  public createCacheOptions(): CacheModuleAsyncOptions {
    const useInMemoryCache: boolean = this._environmentService
      .get('CACHE_USE_IN_MEMORY') === 'true' || false;

    return useInMemoryCache 
      // Return config for in-memory caching for dev only
      ? { 
        ttl: Number.parseInt(this._environmentService.get('CACHE_SERVER_TTL')),
        max: Number.parseInt(this._environmentService.get('CACHE_SERVER_MAX_ENTRIES')),
        isGlobal: this._environmentService.get('CACHE_SERVER_IS_GLOBAL') === 'true',
      } as CacheModuleOptions 
      
      // Return config for redis caching
      : {
        store: redisStore,
        host: this._environmentService.get('CACHE_SERVER_HOST'),
        port: Number.parseInt(this._environmentService.get('CACHE_SERVER_PORT')),
        ttl: Number.parseInt(this._environmentService.get('CACHE_SERVER_TTL')),
        max: Number.parseInt(this._environmentService.get('CACHE_SERVER_MAX_ENTRIES')),
        isGlobal: this._environmentService.get('CACHE_SERVER_IS_GLOBAL') === 'true',
      } as any;
  }
}
