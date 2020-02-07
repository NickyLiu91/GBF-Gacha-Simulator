import React, { Component, Fragment } from 'react';
import PickSummon from './PickSummon';

class Home extends Component {
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

export default Home;
