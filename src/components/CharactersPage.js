import React from "react";

const CharactersPage = (props) => {
  return (
    <div id="character-page">
        <div id="character" onClick={event => {props.getCharacters(event)}}>
            <img className="weapon" src="images/Eden.png" />
            <br/>
            <p>Eden</p>
        </div>
    </div>
  )
}

export default CharactersPage;
