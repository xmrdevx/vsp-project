import { ClaimTypes } from '../enums/claim-types.enum';

export type Claims = { [key: ClaimTypes | string]: any };
