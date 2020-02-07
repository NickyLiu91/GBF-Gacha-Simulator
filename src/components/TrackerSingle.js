import React from "react";

const TrackerSingle = (props) => {
  console.log(props.item)
  if (props.item.character != "None") {
    return (
      <div id="tracker-single">
        {props.quantity} {props.item.weapon} {"(" + props.item.character + ")"}
      </div>
    )
  } else {
    return (
      <div id="tracker-single">
        {props.quantity} {props.item.weapon}
      </div>
    )
  }
}

export default TrackerSingle;
