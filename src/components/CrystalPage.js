import React from "react";
import {connect} from 'react-redux';

const CrystalPage = (props) => {
  if (props.result.filter(object => object.rarity == "R").length == props.result.length) {
    return (
      <div id="crystal-page">
        <div id="summon-area">
          <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
            <div id="summon-crystal-top-blue">
            </div>
              <div id="summon-crystal-bottom-blue">
            </div>
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
              <div id="summon-crystal-top-rainbow">
              </div>
                <div id="summon-crystal-bottom-rainbow">
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id="crystal-page">
          <div id="summon-area">
            <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
              <div id="summon-crystal-top-brown">
              </div>
                <div id="summon-crystal-bottom-brown">
              </div>
            </div>
          </div>
        </div>
      )
    }
  } else {
    let output = Math.floor(Math.random() * 100)
    console.log(props.result.filter(object => object.rarity == "SSR"))
    return (
      <div id="crystal-page">
        <div id="summon-area">
          <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
            <div id="summon-crystal-top-brown">
            </div>
              <div id="summon-crystal-bottom-brown">
            </div>
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
