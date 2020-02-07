import React from "react";
import {connect} from 'react-redux';
import Tracker from '../containers/Tracker'

const CharacterPage = (props) => {
  if (props.result.length == 1) {
    return (
      <div id="page">
        <div id="character-page">
          <div id="character-area" onClick={event => {props.nextRoll(event)}}>
            <img className="character" src={ "images/" + props.result[props.rollNumber].character + ".png"} />
            <br/>
            <div id="character-name">
              <p>{props.result[props.rollNumber].character}</p>
            </div>
          </div>
        </div>
        <Tracker ssrCollection={props.ssrCollection}/>
      </div>
    )
  } else {
    return (
      <div id="page">
        <div id="character-page">
          <div id="character-area" onClick={event => {props.nextRoll(event)}}>
            <img className="character" src={ "images/" + props.result[props.rollNumber].character + ".png"} />
            <br/>
            <div id="character-name">
              <p>{props.result[props.rollNumber].character}</p>
            </div>
          </div>
          <button onClick={event => {props.skip(event)}}>Skip</button>
        </div>
        <Tracker ssrCollection={props.ssrCollection}/>
      </div>
    )
  }
}

// export default CharacterPage;

const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}


export default connect(
  mapStateToProps
)(CharacterPage);
