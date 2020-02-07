import React from "react";
import {connect} from 'react-redux';
import Tracker from '../containers/Tracker'
import {Route, Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

const CrystalPage = (props) => {
  console.log(props)
  if (props.result.filter(object => object.rarity == "R").length == props.result.length) {
    return (
      <div id="page">
        <div id="crystal-page">
          <div id="summon-area">
            <div id="background-glow">
            </div>
            <div id="crystal" onClick={event => {props.history.push("/weapon")}}>
              <img id="blue-summon-crystal" src="images/SSR Crystal.png" />
            </div>
          </div>
        </div>
        <Tracker />
      </div>
    )
  } else if (props.result.filter(object => object.rarity == "SSR").length > 0) {
    let output = Math.floor(Math.random() * 100)
    console.log(output)
    if (output > 50) {
      return (
        <div id="page">
          <div id="crystal-page">
            <div id="summon-area">
              <div id="background-glow">
              </div>
              <div id="crystal" onClick={event => {props.history.push("/weapon")}}>
                <img src="images/SSR Crystal.png" />
              </div>
            </div>
          </div>
          <Tracker />
        </div>
      )
    } else {
      return (
        <div id="page">
          <div id="crystal-page">
            <div id="summon-area">
              <div id="background-glow">
              </div>
              <div id="crystal" onClick={event => {props.history.push("/weapon")}}>
                <img src="images/SR Crystal.png" />
              </div>
            </div>
          </div>
          <Tracker />
        </div>
      )
    }
  } else {
    return (
      <div id="page">
        <div id="crystal-page">
          <div id="summon-area">
            <div id="background-glow">
            </div>
            <div id="crystal" onClick={event => {props.history.push("/weapon")}}>
              <img src="images/SR Crystal.png" />
            </div>
          </div>
        </div>
        <Tracker />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.resultChanger.result,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(CrystalPage);
