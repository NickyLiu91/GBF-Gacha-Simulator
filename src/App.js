import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Tracker from './containers/Tracker';
import Summon from './containers/PickSummon';
import Result from './containers/ResultPage';
import Character from './components/CharacterPage';
import Weapon from './components/WeaponPage';
import Crystal from './components/CrystalPage';
import {Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/summon`} component={Summon} />
        <Route path={`/crystal`} component={Crystal} />
        <Route path={`/character`} component={Character} />
        <Route path={`/weapon`} component={Weapon} />
        <Route path={`/result`} component={Result} />
      </Switch>
      </div>
    )
  }
}

export default App;
