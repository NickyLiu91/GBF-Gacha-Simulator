import React from "react";
// import {connect} from 'react-redux';

const ResultGrid = (props) => {
  if (props.item.character != "None") {
    return (
      <div>
        <div className="result-item">
          Obtained {props.item.weapon}!
        </div>
        <div className="result-item">
          {props.item.character} has joined your party!
        </div>
      </div>
    )
  } else {
    return (
      <div className="result-item">
        Obtained {props.item.weapon}!
      </div>
    )
  }
}

export default ResultGrid
