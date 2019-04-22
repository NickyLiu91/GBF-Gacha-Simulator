import React from "react";

const CharacterPage = (props) => {
  return (
    <div id="character-page">
      <div id="character-area" onClick={event => {props.returnHome(event)}}>
        <img className="character" src={ "images/" + props.result[0].character + ".png"} />
        <br/>
        <div id="character-name">
          <p>{props.result[0].character}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage;
