import React from "react";
import ResultGrid from "../components/ResultGrid.js"
import ResultList from "../components/ResultList.js"
import {connect} from 'react-redux';

const ResultPage = (props) => {
  return (
    <div id="results-page" >
      <div id="result-upper-half">
        {props.result.map((item, index) => {
          return (<ResultGrid key={index} item={item}/>)
        })}
      </div>
      <div id="button-container">
        <button className="bar-button" onClick={event => {props.rollTen(event)}}>Draw Again</button>
        <button className="bar-button" onClick={event => {props.changeDisplay("PickSummon")}}>Back</button>
      </div>
      <div id="result-bottom-half">
        {props.result.map((item, index) => {
          return (<ResultList key={index} item={item}/>)
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    result: state.resultChanger.result,
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
)(ResultPage);
