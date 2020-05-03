import React from 'react';
import '../Card/style.css';

function Card(props) {
	return (
		<div className="card" onClick={() => props.onClick(props.id)}>
			<div className="img-container hvr-grow-rotate">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
}

export default Card;
