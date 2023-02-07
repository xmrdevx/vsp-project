import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClaimAuthorizationOperations, ClaimPermissions } from '@vsp/common';
import { Observable } from 'rxjs';

@Injectable()
export class HasPermissionsGuard implements CanActivate {
  constructor(
    private readonly _reflector: Reflector
  ) { }

  public canActivate(context: ExecutionContext): boolean {
    const permissions: ClaimPermissions = this._reflector
      .get<ClaimPermissions>('permissions', context.getHandler());
    
    if (!permissions?.permissions?.length) return true;

    const request = context.switchToHttp().getRequest();
    const userClaims: string[] = request?.user?.payload || [];
    
    return this._userHasPermissions(permissions, userClaims);
  }

  private _userHasPermissions(permissions: ClaimPermissions, userClaims: any): boolean {
    // If the operation is set to ALL and NOT ANY, determine if user has all permissions
    if (permissions?.operation === ClaimAuthorizationOperations.ALL) {
      return permissions?.permissions
        ?.every(p => userClaims[p.key]?.includes(p.value));
    }

    // Else determine if the user has any of the permissions
    return permissions?.permissions
        ?.some(p => userClaims[p.key]?.includes(p.value));
  }
}
