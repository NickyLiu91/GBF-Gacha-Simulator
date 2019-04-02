import React from "react";

const CrystalPage = (props) => {
  return (
    <div id="crystal-page" onClick={event => {props.getCharacters(event)}}>
      <div id="summon-area">
        <div id="summon-crystal-top">
        </div>
        <div id="summon-crystal-bottom">
        </div>
      </div>
    </div>
  )
}

export default CrystalPage;
