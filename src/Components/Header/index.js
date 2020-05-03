import React from 'react';
import './style.css';

function Header(props) {
	return (
		<div className="jumbotron text-center bg-dark text-white py-3 mb-3">
			<div className="row">
				<div className="col-md-4 header">
					<h2>Throne of Clicks: Memory Game!</h2>
				</div>

				<div className="col-md-4">
					<button onClick={() => props.resetGame()} type="button" className="btn btn-danger btn-lg">
						Reset Game
					</button>
				</div>

				<div className="col-md-4">
					<h2>
						Score: {props.score} | Top Score: {props.topScore}
					</h2>
				</div>
			</div>

			<div className="row instructions">
				<header className="instructionsHeader">
					<h2>Test Your Memory and Your Desire To Sit On The Iron Throne</h2>
					<h3>How To Play:</h3>
					<h3>Click on any image to earn points. Click on all 18 just one to win the throne.</h3>
					<h3>Click on any image more than once and you'll be fed to the dragons!</h3>
				</header>
			</div>
		</div>
	);
}

export default Header;
