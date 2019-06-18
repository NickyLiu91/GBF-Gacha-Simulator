import React from "react";
import {connect} from 'react-redux';

const WeaponPage = (props) => {
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
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}

export default connect(
  mapStateToProps
)(WeaponPage);
