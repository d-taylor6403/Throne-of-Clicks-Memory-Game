import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Wrapper from "./Components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends,
		score: 0,
		topScore: 0,
		newTopScore: 0
	};

	resetGame = () => {
		this.setState({ topScore: 0, score: 0, newTopScore: 0 });
		console.log(this.state.topScore)
		friends.sort((a, b) => 0.5 - Math.random());
	};

	onClick = id => {

		// Filter for the clicked match
		const friends = this.state.friends
		const clickedFriend = this.state.friends.filter(friend => friend.id === id);

		// If the matched image's clicked value is already true, do the game over actions
		if (clickedFriend[0].click) {

			// Shuffle the array to be rendered in a random order
			friends.sort((a, b) => 0.5 - Math.random());

			// reset state with appropriate values/new shuffled friends array
			this.setState({ topScore: this.state.score, score: 0, newTopScore: this.state.newTopScore });

			// if the score is greater than the topscore, store the top score to the newest top score
			if (this.state.score > this.state.topScore) {
				this.setState({ newTopScore: this.state.topScore });
			}

			// reset all friend card's "click" value to false
			for (var i = 0; i < friends.length; i++) {
				friends[i].click = false;
			}

			alert("You hit the same card twice! Drakaras");

			// Otherwise, if clicked = false, and the user hasn't finished
		} else if (this.state.score < 12) {
			// Set its value to true
			clickedFriend[0].click = true;

			// increment the appropriate counter
			this.setState({ score: this.state.score + 1 });

			// Shuffle the array to be rendered in a random order
			friends.sort((a, b) => 0.5 - Math.random());


		} else {
			// if the user has won (guessed all 12 correctly), restart the guess counter
			this.setState({ score: 0, topScore: 0, newTopScore: 0 });
			// Send the user a message to play again

			alert('The Throne Is Yours!')

			// Shuffle the array to be rendered in a random order
			friends.sort((a, b) => 0.5 - Math.random());

		}

	}

	// Map over this.state.friends and render a Card component for each object
	render() {
		return (<>
			<Header
				score={this.state.score}
				topScore={this.state.topScore}
				resetGame={this.resetGame}
			/>
			<Wrapper>
				{this.state.friends.map(friend => (
					<Card
						onClick={this.onClick}
						id={friend.id}
						key={friend.id}
						image={friend.image}
						click={friend.click}
					/>
				))}
			</Wrapper>
			<Footer></Footer>
		</>
		);
	}
}

export default App;