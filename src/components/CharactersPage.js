import React from "react";

const CharactersPage = (props) => {
  return (
    <div id="character-page">
      <div id="character-area" onClick={event => {props.getCharacters(event)}}>
        <img className="weapon" src="images/Eden.png" />
        <br/>
        <div id="weapon-name">
          <p>Eden</p>
        </div>
      </div>
    </div>
  )
}

export default CharactersPage;
