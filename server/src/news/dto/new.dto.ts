/*******************************************************************************************************/
// Definimos la clase para una nueva noticia //
/*******************************************************************************************************/
export class CreateNewDto {
	objectID: string;
	created_at: string;
	story_title: string;
	title: string;
	story_url: string;
	url: string;
	author: string;
}

/*******************************************************************************************************/
// Definimos la clase para actualizar una noticia //
/*******************************************************************************************************/
export class UpdateNewDto {
	created_at?: string;
	story_title?: string;
	title?: string;
	story_url?: string;
	url?: string;
	author?: string;
	state?: boolean;
}
