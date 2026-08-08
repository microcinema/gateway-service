import { ApiProperty } from '@nestjs/swagger'
import {
	IsEnum,
	IsNotEmpty,
	IsNumberString,
	IsString,
	Length,
	Validate
} from 'class-validator'

import { IdentifierValidator } from '@/shared/validators'

export class VerifyOtpRequest {
	@ApiProperty({
		example: 'john.doe@example.com'
	})
	@IsString()
	@Validate(IdentifierValidator)
	public identifier!: string

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@Length(6, 6)
	@IsNumberString()
	public code!: string

	@ApiProperty({
		example: 'email',
		enum: ['email', 'phone']
	})
	@IsEnum(['email', 'phone'])
	public type!: 'email' | 'phone'
}
