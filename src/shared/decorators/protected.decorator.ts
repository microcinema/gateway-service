import type { Role } from '@microcinema/contracts/gen/account'
import { UseGuards, applyDecorators } from '@nestjs/common'

import { Roles } from '@/shared/decorators/roles.decorator'
import { AuthGuard, RolesGuard } from '@/shared/guards'

export const Protected = (...roles: Role[]) => {
	if (roles.length === 0) return applyDecorators(UseGuards(AuthGuard))

	return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolesGuard))
}
