import type { Role } from '@microcinema/contracts/gen/account'
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'required_roles'

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles)
