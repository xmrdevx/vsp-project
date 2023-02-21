import { Claim } from '@vsp/core'

export interface ClaimPermissionNode {
  label: string,
  hasPermission: boolean
  claim: Claim,
  children: ClaimPermissionNode[]
}
