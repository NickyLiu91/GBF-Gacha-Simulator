import React from "react";

const WeaponPage = (props) => {
  return (
    <div id="weapon-page">
      <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
        <img className="weapon" src={ "images/" + props.result[0].weapon + ".png"}/>
        <br/>
        <div id="weapon-name">
          <p>{props.result[0].weapon}</p>
        </div>
      </div>
    </div>
  )
}

export default WeaponPage;
