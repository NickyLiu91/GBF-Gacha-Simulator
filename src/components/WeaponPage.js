import React from "react";
import {connect} from 'react-redux';
import Tracker from '../containers/Tracker'
import {Route, Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class WeaponPage extends React.Component {

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

  getCharacters = () => {
    // this.props.changeDisplay("CharacterPage")
    this.props.history.push("/character")
  }

  skip = (event) => {
    // this.props.changeDisplay("ResultPage")
    this.props.history.push("/result")
    this.props.changeRollNumber(0)
  }

  render() {
    if (this.props.result.length == 1) {
      if (this.props.result[this.props.rollNumber].character !== 'None') {
        return (
          <div id="page">
            <div id="weapon-page">
              <div id="weapon-area" onClick={event => {this.getCharacters(event)}}>
              <div>
              </div>
                <img className="weapon" src={ "images/" + this.props.result[this.props.rollNumber].weapon + ".png"}/>
                <br/>
                <div id="weapon-name">
                  <p>{this.props.result[this.props.rollNumber].weapon}</p>
                </div>
              </div>
            </div>
            <Tracker ssrCollection={this.props.ssrCollection}/>
          </div>
        )
      } else {
        return (
          <div id="page">
            <div id="weapon-page">
              <div id="non-char-area" onClick={event => {this.nextRoll(event)}}>
              <div>
              </div>
                <img className="weapon" src={ "images/" + this.props.result[this.props.rollNumber].weapon + ".png"}/>
                <br/>
                <div id="non-char-name">
                  <p>{this.props.result[this.props.rollNumber].weapon}</p>
                </div>
              </div>
            </div>
            <Tracker ssrCollection={this.props.ssrCollection}/>
          </div>
        )
      }
    } else {
      if (this.props.result[this.props.rollNumber].character !== 'None') {
        return (
          <div id="page">
            <div id="weapon-page">
              <div id="weapon-area" onClick={event => {this.getCharacters(event)}}>
              <div>
              </div>
                <img className="weapon" src={ "images/" + this.props.result[this.props.rollNumber].weapon + ".png"}/>
                <br/>
                <div id="weapon-name">
                  <p>{this.props.result[this.props.rollNumber].weapon}</p>
                </div>
              </div>
              <button onClick={event => {this.skip(event)}}>Skip</button>
            </div>
            <Tracker ssrCollection={this.props.ssrCollection}/>
          </div>
        )
      } else {
        return (
          <div id="page">
            <div id="weapon-page">
              <div id="non-char-area" onClick={event => {this.nextRoll(event)}}>
              <div>
              </div>
                <img className="weapon" src={ "images/" + this.props.result[this.props.rollNumber].weapon + ".png"}/>
                <br/>
                <div id="non-char-name">
                  <p>{this.props.result[this.props.rollNumber].weapon}</p>
                </div>
              </div>
              <button onClick={event => {this.skip(event)}}>Skip</button>
            </div>
            <Tracker />
          </div>
        )
      }
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
    changeRollNumber: (event) => dispatch({type: 'CHANGE_ROLLNUMBER', newRollNumber: event}),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,
  mapDispatchToProps)
)(WeaponPage);
