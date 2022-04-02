/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from '../news.controller';
import { NewsService } from '../news.service';
import { New, NewSchema } from '../schemas/new.schema';
import { CreateNewDto, UpdateNewDto } from '../dto/new.dto';
import { newStub } from './stubs/new.stub';

jest.mock('../news.service');

/*******************************************************************************************************/
// Describimos los test del controlador //
/*******************************************************************************************************/
describe('NewsController', () => {
	let newsController: NewsController;
	let newsService: NewsService;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			imports: [HttpModule, MongooseModule.forFeature([{ name: 'New', schema: NewSchema }])],
			controllers: [NewsController],
			providers: [NewsService]
		}).compile();

		newsController = moduleRef.get<NewsController>(NewsController);
		newsService = moduleRef.get<NewsService>(NewsService);
		jest.clearAllMocks();
	});

	it('debe ser definido', () => {
		expect(newsController).toBeDefined();
	});

	// Descripción de obtener todas las noticias
	describe('getNews', () => {
		describe('cuando se llama a getNews', () => {
			let news: New[];

			beforeEach(async () => {
				news = await newsController.getNews();
			});

			test('cuando se llama a newsService', () => {
				expect(newsService.getAll).toHaveBeenCalled();
			});

			test('cuando debe devolver news', () => {
				expect(news).toEqual([newStub()]);
			});
		});
	});

	// Descripción de obtener datos de una noticia
	describe('getNew', () => {
		describe('cuando se llama a getNew', () => {
			let new_: New;

			beforeEach(async () => {
				new_ = await newsController.getNew(newStub().objectID);
			});

			test('cuando se llama a newsService', () => {
				expect(newsService.get).toBeCalledWith(newStub().objectID);
			});

			test('cuando debe devolver un new', () => {
				expect(new_).toEqual(newStub());
			});
		});
	});

	// Descripción de crear una noticia
	describe('createNew', () => {
		describe('cuando se llama a createNew', () => {
			let status: boolean;
			let createNewDto: CreateNewDto;

			beforeEach(async () => {
				createNewDto = {
					objectID: newStub().objectID,
					created_at: newStub().created_at,
					story_title: newStub().story_title,
					title: newStub().title,
					story_url: newStub().story_url,
					url: newStub().url,
					author: newStub().author
				};
				status = await newsController.createNew(createNewDto);
			});

			test('cuando se llama a newsService', () => {
				expect(newsService.create).toHaveBeenCalledWith(createNewDto);
			});

			test('cuando debe devolver un status de creación', () => {
				expect(status).toEqual(new Boolean());
			});
		});
	});

	// Descripción de actualizar una noticia
	describe('updateNew', () => {
		describe('cuando se llama a updateNew', () => {
			let status: boolean;
			let updateNewDto: UpdateNewDto;

			beforeEach(async () => {
				updateNewDto = {
					story_title: newStub().story_title,
					story_url: newStub().story_url,
					author: newStub().author,
					state: newStub().state
				};
				status = await newsController.updateNew(newStub().objectID, updateNewDto);
			});

			test('cuando se llama a newsService', () => {
				expect(newsService.update).toHaveBeenCalledWith(newStub().objectID, updateNewDto);
			});

			test('cuando debe devolver un status de actualización', () => {
				expect(status).toEqual(new Boolean());
			});
		});
	});

	// Descripción de eliminar una noticia
	describe('deleteNew', () => {
		describe('cuando se llama a deleteNew', () => {
			let status: boolean;

			beforeEach(async () => {
				status = await newsController.deleteNew(newStub().objectID);
			});

			test('cuando se llama a newsService', () => {
				expect(newsService.delete).toHaveBeenCalledWith(newStub().objectID);
			});

			test('cuando debe devolver un status de eliminación', () => {
				expect(status).toEqual(new Boolean());
			});
		});
	});
});
