/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import React from 'react';

/*******************************************************************************************************/
// Definimos la vista del componente News Header //
/*******************************************************************************************************/
const NewsHeader = () => {
	return (
		<div className="header">
			<label className="title">HN Feed</label>
			<label className="subtitle">We {'<3'} hacker news!</label>
		</div>
	);
};

/*******************************************************************************************************/
// Exportamos el componente //
/*******************************************************************************************************/
export default NewsHeader;
