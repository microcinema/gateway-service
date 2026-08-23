import { Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common'
import { Body } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiOperation } from '@nestjs/swagger'
import type { Response } from 'express'
import { lastValueFrom } from 'rxjs'

import { AuthClientGrpc } from './auth.grpc'
import { SendOtpRequest } from './dto/requests/send-otp.request'
import { VerifyOtpRequest } from './dto/requests/verify-otp.request'

@Controller('auth')
export class AuthController {
	public constructor(
		private readonly client: AuthClientGrpc,
		private readonly configService: ConfigService
	) {}

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
	public async verifyOtp(
		@Body() dto: VerifyOtpRequest,
		@Res({ passthrough: true }) res: Response
	) {
		const { accessToken, refreshToken } = await lastValueFrom(
			this.client.verifyOtp(dto)
		)

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure:
				this.configService.getOrThrow<string>('NODE_ENV') ===
				'development'
					? false
					: true,
			domain: this.configService.getOrThrow<string>('COOKIES_DOMAIN'),
			sameSite: 'lax',
			maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
		})

		return { accessToken }
	}
}
