import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Body } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { SendOtpRequest } from './dto/requests/send-otp.request'

@Controller('auth')
export class AuthController {
	@ApiOperation({
		summary: 'Send OTP code',
		description: 'Send verification code to the user via email or phone'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	public async sendOtp(@Body() dto: SendOtpRequest) {
		console.log(dto)

		return {
			message: 'OTP sent successfully'
		}
	}
}
