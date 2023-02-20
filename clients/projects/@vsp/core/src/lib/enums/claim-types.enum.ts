export enum ClaimTypes {
  // User Details
  SUBJECT = 'sub',
  ISSUER = 'iss',
  AUDIENCE = 'aud',
  EXPIRATION = 'exp',
  ISSUED_AT = 'iat',
  JWT_ID = 'jti',
  ROLES = 'roles',
  TENANT_ID = 'tid',
  FULL_NAME = 'name',
  FIRST_NAME = 'given_name',
  LAST_NAME = 'family_name',
  USERNAME = 'username',
  EMAIL = 'email',
  ACCOUNT_ID = 'accid',
  CLIENTS = 'cli',
}

export enum ClaimAuthorizationTypes {
  // Permissions/access
  CAN_ACCESS = 'access',
  CAN_CREATE = 'create',
  CAN_READ = 'read',
  CAN_UPDATE = 'update',
  CAN_DELETE = 'delete'
}

export enum ClaimAuthorizationOperations {
  ALL = 'all',
  ANY = 'anny'
}

export interface ClaimPermission {
  key: string,
  value: string;
}

export interface ClaimPermissions {
  operation: ClaimAuthorizationOperations,
  permissions: ClaimPermission[];
}
