import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PickSummon from './containers/PickSummon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="background">
          <header className="App-header">
            <PickSummon />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
