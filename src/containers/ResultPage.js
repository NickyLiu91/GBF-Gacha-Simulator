import React from "react";
import ResultGrid from "../components/ResultGrid.js"
import ResultList from "../components/ResultList.js"
import {connect} from 'react-redux';
import Tracker from './Tracker'

const ResultPage = (props) => {
  return (
    <div id="page">
      <div id="results-page" >
        <div id="result-upper-half">
        <div id="result-row-1">
          {props.result.slice(0, 5).map((item, index) => {
            return (<ResultGrid key={index} item={item}/>)
          })}
        </div>
        <div id="result-row-2">
          {props.result.slice(5).map((item, index) => {
            return (<ResultGrid key={index} item={item}/>)
          })}
        </div>
        </div>
        <div id="button-container">
          <button className="bar-button" onClick={event => {props.rollTen(event)}}>Draw Again</button>
          <button className="bar-button" onClick={event => {props.changeDisplay("PickSummon")}}>Back</button>
        </div>
        <ul id="result-bottom-half">
          {props.result.map((item, index) => {
            return (<ResultList key={index} item={item}/>)
          })}
        </ul>
      </div>
      <Tracker ssrCollection={props.ssrCollection}/>
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
