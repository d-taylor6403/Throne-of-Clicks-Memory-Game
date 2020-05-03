import React from 'react';
import './style.css';

function Wrapper(props) {
	return <div className="wrapper container mb-5">{props.children}</div>;
}

export default Wrapper;
