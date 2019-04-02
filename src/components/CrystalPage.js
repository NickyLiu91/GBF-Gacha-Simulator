import React from "react";

const CrystalPage = (props) => {
  return (
    <div id="crystal-page">
      <div id="summon-area">
        <div id="crystal" onClick={event => {props.getWeapons(event)}}>
          <div id="summon-crystal-top">
          </div>
            <div id="summon-crystal-bottom">
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrystalPage;
