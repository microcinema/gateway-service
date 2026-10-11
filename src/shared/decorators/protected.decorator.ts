import { UseGuards, applyDecorators } from '@nestjs/common'

import { AuthGuard } from '@/shared/guards'

export const Protected = () => applyDecorators(UseGuards(AuthGuard))
