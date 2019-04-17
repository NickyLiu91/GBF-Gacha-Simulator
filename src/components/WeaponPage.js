import React from "react";

const WeaponPage = (props) => {
  return (
    <div id="weapon-page">
      <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
        <img className="weapon" src={ "images/" + Object.keys(props.result[0])[0] + ".png"}/>
        <br/>
        <div id="weapon-name">
          <p>{Object.keys(props.result[0])[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default WeaponPage;
