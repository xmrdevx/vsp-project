import { CacheInterceptor, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class HttpCacheInterceptor   extends CacheInterceptor {
  public trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();
    const authenticatedUser = request.user;

    if (!authenticatedUser) return request.originalUrl

    const cacheKeyBase: string = request.originalUrl;
    const cacheKeySuffix: string = `${authenticatedUser?.id || ''}|${authenticatedUser?.tenantId || ''}`;

    return `${cacheKeyBase}_${ cacheKeySuffix }`;
  }
}
