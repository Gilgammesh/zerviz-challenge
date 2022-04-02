import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appPort } from './configs/variables';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	await app.listen(appPort);
}
bootstrap();
