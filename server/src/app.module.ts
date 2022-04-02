import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { mongoDBUri } from './configs/variables';

@Module({
	imports: [MongooseModule.forRoot(mongoDBUri), NewsModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
