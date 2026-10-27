import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class TelegramFinalizeRequest {
	@ApiProperty({
		example: 'd87072bb807dc220c5506b6bfa4d7de1'
	})
	@IsString()
	@IsNotEmpty()
	public sessionId!: string
}
