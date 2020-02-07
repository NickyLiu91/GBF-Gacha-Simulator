import React from "react";
import {connect} from 'react-redux';
import Tracker from '../containers/Tracker'
import {Route, Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class CharacterPage extends React.Component {

  nextRoll = () => {
    if (this.props.rollNumber === this.props.result.length - 1) {
      if (this.props.result.length === 1) {
        // this.props.changeDisplay("PickSummon")
        this.props.history.push("/summon")
      } else {
        // this.props.changeDisplay("ResultPage")
        this.props.history.push("/result")
        this.props.changeRollNumber(0)
      }

    } else {
      this.props.changeRollNumber(this.props.rollNumber + 1)
      console.log(this.props.rollNumber)
      this.props.changeDisplay("WeaponPage")
      this.props.history.push("/weapon")
    }
  }

  nextRoll = () => {
    if (this.props.rollNumber === this.props.result.length - 1) {
      if (this.props.result.length === 1) {
        // this.props.changeDisplay("PickSummon")
        this.props.history.push("/summon")
      } else {
        // this.props.changeDisplay("ResultPage")
        this.props.history.push("/result")
        this.props.changeRollNumber(0)
      }

    } else {
      this.props.changeRollNumber(this.props.rollNumber + 1)
      console.log(this.props.rollNumber)
      // this.props.changeDisplay("WeaponPage")
      this.props.history.push("/weapon")
    }
  }

  skip = (event) => {
    this.props.changeRollNumber(0)
    this.props.history.push("/result")
  }

  render() {
    if (this.props.result.length == 1) {
      return (
        <div id="page">
          <div id="character-page">
            <div id="character-area" onClick={event => {this.nextRoll(event)}}>
              <img className="character" src={ "images/" + this.props.result[this.props.rollNumber].character + ".png"} />
              <br/>
              <div id="character-name">
                <p>{this.props.result[this.props.rollNumber].character}</p>
              </div>
            </div>
          </div>
          <Tracker ssrCollection={this.props.ssrCollection}/>
        </div>
      )
    } else {
      return (
        <div id="page">
          <div id="character-page">
            <div id="character-area" onClick={event => {this.nextRoll(event)}}>
              <img className="character" src={ "images/" + this.props.result[this.props.rollNumber].character + ".png"} />
              <br/>
              <div id="character-name">
                <p>{this.props.result[this.props.rollNumber].character}</p>
              </div>
            </div>
            <button onClick={event => {this.skip(event)}}>Skip</button>
          </div>
          <Tracker ssrCollection={this.props.ssrCollection}/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeRollNumber: (event) => dispatch({type: 'CHANGE_ROLL_NUMBER', newRollNumber: event}),
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps,
  mapDispatchToProps)
)(CharacterPage);
