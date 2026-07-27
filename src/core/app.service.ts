import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	public getHello() {
		return {
			message: 'Gateway service is running'
		}
	}

	public health() {
		return {
			status: 'ok',
			timestamp: new Date().toISOString()
		}
	}
}
