import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PickSummon from './containers/PickSummon';
import CrystalPage from './components/CrystalPage';
import NavBar from './components/NavBar';
import {Route, Switch, withRouter} from 'react-router-dom';

const App = props => {
    return (
      <Fragment>
          <Switch>
            <Route path="/store" component={PickSummon} />
            <Route exact path="/summon" component={CrystalPage} />
          </Switch>
      </Fragment>
    );

}

export default withRouter(App)
