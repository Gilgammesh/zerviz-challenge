/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/*******************************************************************************************************/
// Exportamos el type de noticia //
/*******************************************************************************************************/
export type NewDocument = New & Document;

/*******************************************************************************************************/
// Definimos el schema y exportamos la clase para noticia  //
/*******************************************************************************************************/
@Schema({ versionKey: false })
export class New {
	@Prop({ unique: true })
	objectID: string;

	@Prop()
	created_at: string;

	@Prop()
	story_title: string;

	@Prop()
	title: string;

	@Prop()
	story_url: string;

	@Prop()
	url: string;

	@Prop()
	author: string;

	@Prop({ default: true })
	state: boolean;
}

/*******************************************************************************************************/
// Exportamos el schema creado a partir de la clase noticia //
/*******************************************************************************************************/
export const NewSchema = SchemaFactory.createForClass(New);
