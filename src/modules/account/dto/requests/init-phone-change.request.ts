import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Matches } from 'class-validator'

export class InitPhoneChangeRequest {
	@ApiProperty({
		example: '+375441234567'
	})
	@IsNotEmpty()
	@Matches(
		/^(\+375|80)\s?\(?(29|33|44|25|17)\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/
	)
	public phone: string
}
