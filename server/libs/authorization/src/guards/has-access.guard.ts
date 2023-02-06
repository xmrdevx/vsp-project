import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class HasAccessGuard implements CanActivate {
  constructor(
    private readonly _reflector: Reflector
  ) { }

  public canActivate(context: ExecutionContext): boolean {
    const access: string[] = this._reflector
      .get<string[]>('access', context.getHandler());
    
    if (!access?.length) return true;

    const request = context.switchToHttp().getRequest();
    const userAccess: string[] = request?.user?.payload?.access || [];
    
    return this._userHasAccess(access, userAccess);
  }

  private _userHasAccess(access: string[], userAccess: string[]): boolean {
    return access
      .every(feature => userAccess.includes(feature));
  }
}
