import React from "react";

const CharacterPage = (props) => {
  return (
    <div id="character-page">
      <div id="character-area" onClick={event => {props.getWeapons(event)}}>
        <img className="character" src="images/Lucio.png" />
        <br/>
        <div id="character-name">
          <p>Lucio</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage;
