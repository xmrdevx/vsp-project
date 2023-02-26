import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EnrichBodyWithCommentedByInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let request = context.switchToHttp().getRequest();

    if (request?.user?.id?.length) {
      request.body['commentedById'] = request.user.id;
    }

    return next.handle();
  }
}
