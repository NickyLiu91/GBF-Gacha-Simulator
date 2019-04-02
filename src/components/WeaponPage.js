import React from "react";

const WeaponPage = (props) => {
  return (
    <div id="weapon-page">
      <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
        <img className="weapon" src="images/Eden.png" />
        <br/>
        <div id="weapon-name">
          <p>Eden</p>
        </div>
      </div>
    </div>
  )
}

export default WeaponPage;
