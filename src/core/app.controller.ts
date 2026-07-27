import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger'

import { AppService } from './app.service'
import { HealthResponse } from './dto'

@Controller()
export class AppController {
	public constructor(private readonly appService: AppService) {}

	@ApiOperation({
		summary: 'Welcome endpoint',
		description: 'Returns a welcome message'
	})
	@Get()
	public getHello() {
		return this.appService.getHello()
	}

	@ApiOperation({
		summary: 'Health check',
		description: 'Checks if the gateway is running'
	})
	@ApiOkResponse({
		type: HealthResponse,
		description: 'Gateway is running'
	})
	@Get('health')
	public health() {
		return this.appService.health()
	}
}
