import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class HasRolesGuard implements CanActivate {
  constructor(
    private readonly _reflector: Reflector
  ) { }

  public canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this._reflector
      .get<string[]>('roles', context.getHandler());
    
    if (!roles?.length) return true;

    const request = context.switchToHttp().getRequest();
    const userRoles: string[] = request?.user?.payload?.roles || [];

    return this._userHasRoles(roles, userRoles);
  }

  private _userHasRoles(roles: string[], userRoles: string[]): boolean {
    return roles
      .every(role => userRoles.includes(role));
  }
}
