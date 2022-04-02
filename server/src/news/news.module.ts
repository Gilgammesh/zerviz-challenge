/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewSchema } from './schemas/new.schema';

/*******************************************************************************************************/
// Definimos el Módulo para las Noticias //
/*******************************************************************************************************/
@Module({
	imports: [HttpModule, MongooseModule.forFeature([{ name: 'New', schema: NewSchema }])],
	controllers: [NewsController],
	providers: [NewsService]
})
export class NewsModule {}
