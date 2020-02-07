import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import {Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
