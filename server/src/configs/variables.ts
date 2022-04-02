/*******************************************************************************************************/
// Variables de la Aplicación //
/*******************************************************************************************************/
export const appPort: number = 4000;

/*******************************************************************************************************/
// Variables de la Base de datos //
/*******************************************************************************************************/
const url: string = process.env.MONGO_URL || 'localhost';
export const mongoDBUri: string = `mongodb://${url}:27017/zerviz-challenge`;

/*******************************************************************************************************/
// Variables para la obtención de datos de noticias de la web //
/*******************************************************************************************************/
export const webDBUrl: string = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
export const webDBPeriod: number = 1000 * 60 * 60; // 1 hora = 3600000 milisegundos
