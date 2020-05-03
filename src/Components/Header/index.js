import React from 'react';
import './style.css';

function Header(props) {
	return (
		<div classaName="jumbotron text-center bg-dark text-white py-3 mb-3">
			<div className="row">
				<div className="col-md-4">
					<h1>Throne of Clicks: Memory Game!</h1>
				</div>

				<div className="col-md-4">
					<button onClick={() => props.resetGame()} type="button" className="btn btn-warning">
						Reset Game
					</button>
				</div>

				<div className="col-md-4">
					<h2>
						Score: {props.score} | Top Score: {props.topScore}
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Header;
