# Throne of CLicks: Memory Game

Test your memory and drive to sit  on the Iron Throne with the Clicky Game. Throne of Clicks is a memory skill application built using React. The goal of this assignment was to demonstrate mastery of React along with Express. Each time a user clicks a character's image, the score is incremented by 1. If the user clicks the same character twice, the game is reset.

This app was deployed using Heroku and can be viewed [here]()

### Demo

![Animated Demo](https://)

#### Requires the following Package Installations:
* HTML
* CSS
* Bootstrap (http://getbootstrap.com/)
* Javascript
* React (https://reactjs.org/)

### Getting Started

To set up this application locally on your computer, perform the following steps:

1. Clone the repository

2. Install Node.js

3. Install yarn

4. Install the dependencies

5. Start the server

### Clone the repository
1. The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

  git clone https://github.com/d-taylor6403/Throne-of-Clicks-Memory-Game
  
Structure of the project
After you clone the repository, navigate to the project root directory. 
The project directory structure is set up as follows:

public: The public folder contains the index.html file. This HTML file is a template. The file is empty. So, if you open it directly in a browser, you will get an empty page. Rather than placing the HTML code directly in index.html, this application uses a React component-based architecture to create, build, and render UI components to the page.

src: In the src folder, there are 4 main parts of the application to pay attention to.

index.js: The index.js file is the top level file of the React application. In index.js, the App.js file is imported, and the ReactDOM.render method is used to render App.js to the page.

App.js: The App.js file is where the application components are imported and rendered, such as the navigation bar, footer, and player images. This file also defines a class that allows various states of the application to be updated throughout the game, including the score, top score, a character's clicked value, and the game message displayed in the top navigation bar.

Components: The Components folder is where the app components are located. Each file represents a separate component. For example, Navbar.js is the top navigation bar component.

players.json: The players.json file contains an array of objects. Each object is a character that gets rendered to the page. Each object contains four properties, id, name, image, and clicked. By default, clicked is set to false. When the user clicks a character, that character's clicked value gets set to true so that the application can keep track of which players have already been clicked (clicked is true) and which character has not been clicked (clicked is false).

package.json: Lists the project dependencies and their version numbers.

.gitignore: Anything listed inside this file (for example, node_modules) will not be tracked by GitHub when code is committed.
yarn.lock: Dependency tree for the project. Lists all the dependencies and their versions.

2. Install Node.js
If you don't already have Node.js installed on your computer, you can install the latest version here: .

4. Install the dependencies
This project uses React.

After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required React dependencies (react, react-dom, and react-scripts).

5. Start the application
After performing all of the setup steps in the Getting started section, navigate to the project root directory (ClickMe) and run the following command to start the application:

npm start
To verify that the application has started and is working locally on your computer, open Chrome and go to http://localhost:3000.