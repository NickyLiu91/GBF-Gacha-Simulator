import React from "react";

const TrackerSingle = (props) => {
  return (
    <div id="tracker-single">
      {props.item.quantity} {props.item.weapon}
    </div>
  )
}

export default TrackerSingle;
