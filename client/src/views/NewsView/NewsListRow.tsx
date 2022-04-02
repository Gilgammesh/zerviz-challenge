/*******************************************************************************************************/
// Importamos las dependencias //
/*******************************************************************************************************/
import React, { useState } from 'react';
import formatDate from 'helpers/formatDate';
import { BsFillTrashFill } from 'react-icons/bs';

/*******************************************************************************************************/
// Interface de las propiedades del componente //
/*******************************************************************************************************/
interface IProps {
	objectID: string;
	created_at: string;
	story_title: string;
	title: string;
	story_url: string;
	url: string;
	author: string;
	onClickRow?: () => void;
	onClickDel?: () => void;
}

/*******************************************************************************************************/
// Definimos la vista del componente News List - Row //
/*******************************************************************************************************/
const NewsListRow = (props: IProps) => {
	// Estado para indicar el evento hover en el roe
	const [hovered, setHovered] = useState<boolean>(false);

	// Evento cuando el mouse entra al row
	const onMouseEnter = () => {
		setHovered(true);
	};

	// Evento cuando el mouse sale del row
	const onMouseLeave = () => {
		setHovered(false);
	};

	// Estilo del div que contiene al botón de eliminar row
	const style: any = hovered ? { display: 'block', position: 'absolute', right: '30px' } : { display: 'none' };

	// En caso de que ambas (story_title y title) sean nulas descartamos
	if (props.story_title === null && props.title === null) {
		return null;
	}
	// Caso contrato renderizamos
	return (
		<div className="row" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<div className="row-col1" onClick={props.onClickRow}>
				<label className="title">{props.story_title ? props.story_title : props.title}</label>
				<label className="author">{` - ${props.author} - `}</label>
			</div>
			<div className="row-col2" onClick={props.onClickRow}>
				<label className="time">{formatDate(props.created_at)}</label>
			</div>
			<div className="row-col3" style={style} onClick={props.onClickDel}>
				<button className="btnDel">
					<BsFillTrashFill />
				</button>
			</div>
		</div>
	);
};

/*******************************************************************************************************/
// Exportamos el componente //
/*******************************************************************************************************/
export default NewsListRow;
