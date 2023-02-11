import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EnrichBodyWithCreatedByInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let request = context.switchToHttp().getRequest();

    if (request?.user?.id?.length) {
      request.body['createdById'] = request.user.id;
    }

    return next.handle();
  }
}
