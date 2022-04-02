/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import { timeLocale, timeZone } from 'configs/variables';

/*******************************************************************************************************/
// Función para castear la fecha a un formato personalizado //
/*******************************************************************************************************/
const formatDate = (dateString: string) => {
	// Casteamos la fecha ingresada
	const dateYear = new Date(dateString).toLocaleString(timeLocale, { timeZone, year: 'numeric' });
	const dateMonth = new Date(dateString).toLocaleString(timeLocale, { timeZone, month: 'numeric' });
	const dateMonthLong = new Date(dateString).toLocaleString(timeLocale, { timeZone, month: 'long', day: 'numeric' });
	const dateDay = new Date(dateString).toLocaleString(timeLocale, { timeZone, day: 'numeric' });
	const dateHourMinute = new Date(dateString).toLocaleString(timeLocale, {
		timeZone,
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});

	// Casteamos la fecha actual
	const dateNowYear = new Date().toLocaleString(timeLocale, { timeZone, year: 'numeric' });
	const dateNowMonth = new Date().toLocaleString(timeLocale, { timeZone, month: 'numeric' });
	const dateNowDay = new Date().toLocaleString(timeLocale, { timeZone, day: 'numeric' });

	// Condicionamos para obtener resultado personalizado
	if (dateYear === dateNowYear && dateMonth === dateNowMonth) {
		// Si es la misma fecha
		if (dateDay === dateNowDay) {
			// Retornamos la hora y minuto en formato 12h
			return `${dateHourMinute.replaceAll(/.\sm./g, 'm')}`;
		}
		// Si es un día anterior
		if (parseInt(dateNowDay, 10) === parseInt(dateDay, 10) + 1) {
			// Mostramos el texto de ayer en inglés
			return 'Yesterday';
		}
	} else {
		// Caso contrario mostramos nombre de mes y día
		return dateMonthLong;
	}
};

/*******************************************************************************************************/
// Exportamos la función por defecto //
/*******************************************************************************************************/
export default formatDate;
