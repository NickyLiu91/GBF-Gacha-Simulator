import React from "react";
import {connect} from 'react-redux';

const CharacterPage = (props) => {
  return (
    <div id="character-page">
      <div id="character-area" onClick={event => {props.nextRoll(event)}}>
        <img className="character" src={ "images/" + props.result[props.rollNumber].character + ".png"} />
        <br/>
        <div id="character-name">
          <p>{props.result[props.rollNumber].character}</p>
        </div>
        <br/>
        <br/>
        <button onClick={() => {props.changeDisplay("ResultPage")}}>SKIP</button>
      </div>
    </div>
  )
}

// export default CharacterPage;

const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPage);
