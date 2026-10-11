import { PassportModule } from '@microcinema/passport'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { getPassportConfig } from '@/core/config'
import { AccountModule } from '@/modules/account/account.module'

import { AuthModule } from '../modules/auth/auth.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		PassportModule.registerAsync({
			useFactory: getPassportConfig,
			inject: [ConfigService]
		}),
		AuthModule,
		AccountModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
