import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class TelegramVerifyRequest {
	@ApiProperty({
		example: 'eyJpZCI6NzUxNjYyODM0LCJmaXJzdF9uYW1lIjoiQ...'
	})
	@IsString()
	@IsNotEmpty()
	public tgAuthResult!: string
}
