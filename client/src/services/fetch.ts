/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { apiBaseUrl } from 'configs/variables';

/*******************************************************************************************************/
// Función asíncrona para obtener datos de una petición al server usando Fetch //
/*******************************************************************************************************/
export const fetchData = async (path: string, method: string = 'GET', formData: any = {}) => {
	// Definimos el resultado inicial
	let result = null;

	// Definimos la url de la API a la cual haremos la petición, usando la api base
	const url: string = `${apiBaseUrl}/${path}`;

	// Definimos las opciones de la petición
	let options: RequestInit = { headers: { 'Content-Type': 'application/json' } };
	// Si el método es diferente de GET => pasamos el método, las cabeceras y el cuerpo con la data
	if (method !== 'GET') {
		options = { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) };
	}

	// Aplicamos la función fetch pasando la url y las opciones, y esperamos la respuesta
	await fetch(url, options)
		// La respuesta la convertimos a JSON
		.then(res => res.json())
		// Almacenamos la respuesta con un estado positivo
		.then(data => (result = data))
		// En caso hubiese un error mostramos en consola
		.catch(error => console.log(error));

	// Retornamos el resultado de la petición
	return result;
};
