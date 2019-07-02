import React from "react";
import {connect} from 'react-redux';

const CrystalPage = (props) => {
  if (props.result.filter(object => object.rarity == "R").length == props.result.length) {
    return (
      <div id="crystal-page">
        <div id="summon-area">
          <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
            <img id="blue-summon-crystal" src="images/SSR Crystal.png" />
          </div>
        </div>
      </div>
    )
  } else if (props.result.filter(object => object.rarity == "SSR").length > 0) {
    let output = Math.floor(Math.random() * 100)
    console.log(output)
    if (output > 50) {
      return (
        <div id="crystal-page">
          <div id="summon-area">
            <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
              <img src="images/SSR Crystal.png" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id="crystal-page">
          <div id="summon-area">
            <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
              <img src="images/SR Crystal.png" />
            </div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div id="crystal-page">
        <div id="summon-area">
          <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
            <img src="images/SR Crystal.png" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.resultChanger.result,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrystalPage);
