import React from "react";
import {connect} from 'react-redux';

const WeaponPage = (props) => {
  return (
    <div id="weapon-page">
      <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
      <div>
       {console.log(props)}
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

export default WeaponPage;
