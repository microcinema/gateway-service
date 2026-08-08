import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Body } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { AuthClientGrpc } from './auth.grpc'
import { SendOtpRequest } from './dto/requests/send-otp.request'
import { VerifyOtpRequest } from './dto/requests/verify-otp.request'

@Controller('auth')
export class AuthController {
	public constructor(private readonly client: AuthClientGrpc) {}

	@ApiOperation({
		summary: 'Send OTP code',
		description: 'Send verification code to the user via email or phone'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	public async sendOtp(@Body() dto: SendOtpRequest) {
		return this.client.sendOtp(dto)
	}

	@ApiOperation({
		summary: 'Verify OTP code',
		description:
			'Verifies the code sent to the user via email or phone and returns a JWT token'
	})
	@Post('otp/verify')
	@HttpCode(HttpStatus.OK)
	public async verifyOtp(@Body() dto: VerifyOtpRequest) {
		return this.client.verifyOtp(dto)
	}
}
