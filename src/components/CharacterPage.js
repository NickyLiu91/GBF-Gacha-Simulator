import React from "react";

const CharacterPage = (props) => {
  return (
    <div id="character-page">
      <div id="character-area" onClick={event => {props.returnHome(event)}}>
        <img className="character" src={ "images/" + Object.values(props.result[0])[0]  + ".png"} />
        <br/>
        <div id="character-name">
          <p>{Object.values(props.result[0])[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage;
