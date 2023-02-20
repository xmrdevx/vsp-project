import { Pipe, PipeTransform } from '@angular/core';

type UserModulesAndPermissionsMap = any;
type PermissionNames = any;
type UserPermission = any;

@Pipe({
  name: 'vspHasPermission',
  standalone: true,
})
export class VspHasPermissionPipe implements PipeTransform {
  public transform(
    userModulePermissionsMap: UserModulesAndPermissionsMap | null, 
    permissionName: PermissionNames | null | undefined
  ): boolean {
    if (
      userModulePermissionsMap 
      && permissionName
      && userModulePermissionsMap?.permissions?.hasOwnProperty(permissionName) 
      && permissionName
    ) {
      return this._hasSomePermission(userModulePermissionsMap.permissions[permissionName])
    }

    return false;
  }

  private _hasSomePermission(permission: UserPermission): boolean {
    return permission.canCreate || permission.canRead || permission.canUpdate || permission.canDelete;
  }
}
