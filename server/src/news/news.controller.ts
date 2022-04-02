/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateNewDto, UpdateNewDto } from './dto/new.dto';
import { NewsService } from './news.service';
import { New } from './schemas/new.schema';

/*******************************************************************************************************/
// Definimos el Controlador para las Noticias //
/*******************************************************************************************************/
@Controller('news')
export class NewsController {
	// Definimos nuestro constructor
	constructor(private readonly newsService: NewsService) {}

	// Obtener todas las noticias
	@Get()
	async getNews(): Promise<New[]> {
		return this.newsService.getAll();
	}

	// Obtener datos de una noticia
	@Get(':id')
	async getNew(@Param('id') id: string): Promise<New> {
		return this.newsService.get(id);
	}

	// Crear una noticia
	@Post()
	async createNew(@Body() new_: CreateNewDto): Promise<boolean> {
		return await this.newsService.create(new_);
	}

	// Actualizar una noticia
	@Put(':id')
	async updateNew(@Param('id') id: string, @Body() new_: UpdateNewDto): Promise<boolean> {
		return await this.newsService.update(id, new_);
	}

	// Eliminar una noticia
	@Delete(':id')
	async deleteNew(@Param('id') id: string): Promise<boolean> {
		return await this.newsService.delete(id);
	}
}
