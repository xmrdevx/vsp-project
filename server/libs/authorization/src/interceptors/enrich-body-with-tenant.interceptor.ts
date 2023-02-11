import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EnrichBodyWithTenantInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let request = context.switchToHttp().getRequest();

    if (request?.user?.tenantId?.length) {
      request.body['tenantId'] = request.user.tenantId;
    }

    return next.handle();
  }
}
