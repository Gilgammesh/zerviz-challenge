/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { New, NewDocument } from './schemas/new.schema';
import { CreateNewDto, UpdateNewDto } from './dto/new.dto';
import { HNew } from './interfaces/hnew.interface';
import { webDBPeriod, webDBUrl } from 'src/configs/variables';

/*******************************************************************************************************/
// Definimos el Servicio para las Noticias //
/*******************************************************************************************************/
@Injectable()
export class NewsService implements OnModuleInit {
	// Definimos nuestro constructor
	constructor(private httpService: HttpService, @InjectModel('New') private newModel: Model<NewDocument>) {}

	// Cargamos al iniciar el módulo
	async onModuleInit() {
		// Función para obtener las noticias de la página de Hacker News
		const getHackerNews = async (idx: number) => {
			// Obtenemos la respuesta de la url de Hacker News
			const response = await this.httpService.get(webDBUrl).toPromise();
			// Obtenemos las noticias
			const hnews: HNew[] = response.data.hits;
			// Recorremos el array de noticias
			const promises = hnews.map(async new_ => {
				// Buscamos en la base de datos si se repite la noticia con su ID
				const findNew = await this.newModel.findOne({ objectID: new_.objectID });
				// Si no existe una coincidencia
				if (!findNew) {
					// Creamos e insertamos la noticia en la base de datos
					const insertNew: CreateNewDto = {
						objectID: new_.objectID,
						created_at: new_.created_at,
						story_title: new_.story_title,
						title: new_.title,
						story_url: new_.story_url,
						url: new_.url,
						author: new_.author
					};
					const createdNew = new this.newModel(insertNew);
					await createdNew.save();
				}
				return null;
			});
			await Promise.all(promises);
			console.log(`Sincronización: ${idx} - Hora: ${new Date()}`);
		};

		// Inicializamos un contador de la sincronizacion
		let idxNew = 0;
		// Obtenemos las noticias (primera vez)
		await getHackerNews(idxNew);
		idxNew++;

		// Obtenemos las noticias de acuerdo al periodo de tiempo
		setInterval(async () => {
			await getHackerNews(idxNew);
			idxNew++;
		}, webDBPeriod);
	}

	// Definimos el método obtener la lista de todas las noticias
	async getAll(): Promise<New[]> {
		// Filtramos por estado true y Ordenamos por fecha creación de las más recientes
		return await this.newModel.find({ state: true }).sort({ created_at: 'desc' });
	}

	// Definimos el método para obtener los datos de una noticia
	async get(id: string): Promise<New> {
		return await this.newModel.findOne({ objectID: id });
	}

	// Definimos el método para crear una noticia
	async create(createNewDto: CreateNewDto): Promise<boolean> {
		try {
			const createdNew = new this.newModel(createNewDto);
			await createdNew.save();
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	// Definimos el método para actualizar una noticia
	async update(id: string, updateNewDto: UpdateNewDto): Promise<boolean> {
		try {
			await this.newModel.findOneAndUpdate({ objectID: id }, { $set: updateNewDto }, { new: true });
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	// Definimos el método para eliminar una noticia
	async delete(id: string): Promise<boolean> {
		try {
			await this.newModel.findOneAndDelete({ objectID: id });
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
