import React from "react";

const CrystalPage = (props) => {
  return (
    <div onClick={event => props.getCharacters(event)}>
      <p>"hi"</p>
    </div>
  )
}

export default CrystalPage;
