import React from "react";

const CrystalPage = (props) => {
  return (
    <div onClick={event => {props.getCharacters(event)}}>
      <button onClick={props.printState}>STATE</button>
      <p>"hi"</p>
    </div>
  )
}

export default CrystalPage;
