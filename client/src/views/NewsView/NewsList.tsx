/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import React, { useEffect, useState } from 'react';
import { fetchData } from 'services/fetch';
import NewsListRow from './NewsListRow';

/*******************************************************************************************************/
// Interfaces del componente //
/*******************************************************************************************************/
interface INew {
	objectID: string;
	created_at: string;
	story_title: string;
	title: string;
	story_url: string;
	url: string;
	author: string;
}

/*******************************************************************************************************/
// Definimos la vista del componente News List //
/*******************************************************************************************************/
const NewsList = () => {
	// Estado inicial del array noticias
	const [news, setNews] = useState<Array<INew> | any>(null);

	// Estado para actualizar la lista noticias
	const [estado, setEstado] = useState('');

	// Efecto para obtener la lista de noticias
	useEffect(() => {
		// Estado inicial de montaje
		let mounted = true;
		// Función para obtener la lista de noticias
		const getNews = async () => {
			// Obtenemos la listh de noticias usando el servicio de fetch
			const result = await fetchData('news');
			// Si existe un resultado
			if (result && mounted) {
				// Establecemos las noticias
				setNews(result);
			}
		};
		// Obtenemos la lista de noticias
		getNews();
		// Limpiamos el montaje
		return () => {
			mounted = false;
		};
	}, [estado]);

	// Función para abrir la url de la noticia
	const openUrlNew = (row: INew) => {
		// Si existe un story_url mostramos story_url caso contrario mostramos url
		window.open(row.story_url ? row.story_url : row.url, '_blank');
	};

	// Función para eliminar una noticia
	const deleteRow = async (row: INew) => {
		// Eliminamos la noticia
		const result = await fetchData(`news/${row.objectID}`, 'PUT', { state: false });
		// Si existe un resultado positivo
		if (result) {
			// Cambiamos el estado de cambio de la data
			setEstado(`${new Date()}`);
		}
	};

	// Renderizamos el componente
	return (
		<div className="list">
			{news &&
				news.map((row: INew) => {
					return (
						<NewsListRow
							key={row.objectID}
							{...row}
							onClickRow={() => openUrlNew(row)}
							onClickDel={() => deleteRow(row)}
						/>
					);
				})}
		</div>
	);
};

/*******************************************************************************************************/
// Exportamos el componente //
/*******************************************************************************************************/
export default NewsList;
