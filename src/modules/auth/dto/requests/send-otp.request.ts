import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsString, Validate } from 'class-validator'

import { IdentifierValidator } from '@/shared/validators'

export class SendOtpRequest {
	@ApiProperty({
		example: 'john.doe@example.com'
	})
	@IsString()
	@Validate(IdentifierValidator)
	public identifier!: string

	@ApiProperty({
		example: 'email',
		enum: ['email', 'phone']
	})
	@IsEnum(['email', 'phone'])
	public type!: 'email' | 'phone'
}
