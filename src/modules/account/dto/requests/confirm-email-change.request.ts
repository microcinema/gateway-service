import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator'

export class ConfirmEmailChangeRequest {
	@ApiProperty({
		example: 'exampleemail@gmail.com'
	})
	@IsNotEmpty()
	@IsEmail()
	public email: string

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@Length(6, 6)
	@IsNumberString()
	public code!: string
}
