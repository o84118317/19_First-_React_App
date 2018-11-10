import React, { Component } from 'react';
import Game from './Game.js'

class App extends Component {
  render() {
    return (
      <div className='container'>
				<div>
					<h1>Game start</h1>
				</div>
				<Game />
      </div>
    );
  }
}

export default App;
