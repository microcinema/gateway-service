import { PassportOptions } from '@microcinema/passport'
import { ConfigService } from '@nestjs/config'

export function getPassportConfig(
	configService: ConfigService
): PassportOptions {
	return {
		secretKey: configService.getOrThrow<string>('PASSPORT_SECRET_KEY')
	}
}
