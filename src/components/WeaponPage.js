import React from "react";
import {connect} from 'react-redux';

const WeaponPage = (props) => {
  if (props.result[props.rollNumber].character !== 'None') {
    return (
      <div id="weapon-page">
        <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
        <div>
        </div>
          <img className="weapon" src={ "images/" + props.result[props.rollNumber].weapon + ".png"}/>
          <br/>
          <div id="weapon-name">
            <p>{props.result[props.rollNumber].weapon}</p>
          </div>
        </div>
        <button onClick={event => {props.skip(event)}}>Skip</button>
      </div>
    )
  } else {
    return (
      <div id="weapon-page">
        <div id="non-char-area" onClick={event => {props.nextRoll(event)}}>
        <div>
        </div>
          <img className="weapon" src={ "images/" + props.result[props.rollNumber].weapon + ".png"}/>
          <br/>
          <div id="non-char-name">
            <p>{props.result[props.rollNumber].weapon}</p>
          </div>
        </div>
        <button onClick={event => {props.skip(event)}}>Skip</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event})
  }
}

export default connect(
  mapStateToProps
)(WeaponPage);
