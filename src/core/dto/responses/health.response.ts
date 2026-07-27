import { ApiProperty } from '@nestjs/swagger'

export class HealthResponse {
	@ApiProperty({
		example: 'ok'
	})
	public status!: string

	@ApiProperty({
		example: '2026-07-27T00:00:00.000Z'
	})
	public timestamp!: string
}
