import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumberString, Length, Matches } from 'class-validator'

export class ConfirmPhoneChangeRequest {
	@ApiProperty({
		example: '+375441234567'
	})
	@IsNotEmpty()
	@Matches(
		/^(\+375|80)\s?\(?(29|33|44|25|17)\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/
	)
	public phone: string

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@Length(6, 6)
	@IsNumberString()
	public code!: string
}
