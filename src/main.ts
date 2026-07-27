import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './core/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)
	const logger = new Logger()

	app.enableCors({
		origin: config.getOrThrow<string>('HTTP_CORS').split(','),
		credentials: true
	})

	const swaggerConfig = new DocumentBuilder()
		.setTitle('Microcinema API Gateway')
		.setDescription('API Gateway for Microcinema microservices')
		.setVersion('1.0.0')
		.addBearerAuth()
		.build()

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)

	SwaggerModule.setup('/docs', app, swaggerDocument, {
		yamlDocumentUrl: '/openapi.yaml',
		jsonDocumentUrl: '/openapi.json'
	})

	const port = config.getOrThrow<number>('HTTP_PORT')
	const host = config.getOrThrow<string>('HTTP_HOST')

	await app.listen(port)

	logger.log(`Gateway service is running on ${host}`)
	logger.log(`Swagger on ${host}/docs`)
}
bootstrap()
