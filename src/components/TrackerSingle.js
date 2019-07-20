import React from "react";

const TrackerSingle = (props) => {
  if (props.item.character != "None") {
    return (
      <div id="tracker-single">
        {props.item.quantity} {props.item.weapon} {"(" + props.item.character + ")"}
      </div>
    )
  } else {
    return (
      <div id="tracker-single">
        {props.item.quantity} {props.item.weapon}
      </div>
    )
  }

}

export default TrackerSingle;
