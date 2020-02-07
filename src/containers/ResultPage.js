import React from "react";
import ResultGrid from "../components/ResultGrid.js"
import ResultList from "../components/ResultList.js"
import {connect} from 'react-redux';
import Tracker from './Tracker'
import {Route, Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ResultPage extends React.Component {

  rollTen = (event) => {

    if (this.props.crystals >= 3000) {
      let result
      let allRolls = []
      let sortedArray
      var i
      let filteredR = this.props.r.filter(object => object.eventtype == "None" || object.eventtype == this.state.eventName || object.eventtype == this.state.galaName)
      let filteredSR = this.props.sr.filter(object => object.eventtype == "None" || object.eventtype == this.state.eventName || object.eventtype == this.state.galaName)
      let filteredSSR = this.props.ssr.filter(object => object.eventtype == "None" || object.eventtype == this.state.eventName || object.eventtype == this.state.galaName)
      let updatedSSRCollection = this.props.ssrCollection
      console.log(updatedSSRCollection)

      for (i = 0; i < 10; i++) {

        if (this.state.galaName === "None") {
          if (i == 9) {
            let output = Math.floor(Math.random() * 100)

            if (output <= 97) {
              result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
            } else {
              result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
              updatedSSRCollection.push(result)
              this.props.changeSSRCollection(updatedSSRCollection)
              console.log(updatedSSRCollection)
            }
            allRolls.push(result)
          } else {
            let output = Math.floor(Math.random() * 100)
            console.log(output)

            if (output <= 82) {
              result = filteredR[Math.floor(Math.random() * filteredR.length)]
            } else if (output <= 97) {
              result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
            } else {
              console.log(filteredSSR)
              let random = Math.random()
              console.log(random)
              result = filteredSSR[Math.floor(random * filteredSSR.length)]
              console.log(result)
              updatedSSRCollection.push(result)
              this.props.changeSSRCollection(updatedSSRCollection)
              console.log(updatedSSRCollection)
            }

            allRolls.push(result)
          }
        } else {
          if (i == 9) {
            let output = Math.floor(Math.random() * 100)

            if (output <= 94) {
              result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
            } else {
              result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
              updatedSSRCollection.push(result)
              this.props.changeSSRCollection(updatedSSRCollection)
              console.log(updatedSSRCollection)
            }
            allRolls.push(result)
          } else {
            let output = Math.floor(Math.random() * 100)

            if (output <= 79) {
              result = filteredR[Math.floor(Math.random() * filteredR.length)]
            } else if (output <= 94) {
              result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
            } else {
              result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
              updatedSSRCollection.push(result)
              this.props.changeSSRCollection(updatedSSRCollection)
              console.log(updatedSSRCollection)
            }

            allRolls.push(result)
          }
        }
      }

      sortedArray = allRolls.sort((a, b) => {
        if (a.character != "None" && b.character == "None") {
          return 1
        } else if (a.character == "None" && b.character != "None") {
          return -1
        } else {
          return 1
        }
      })

      this.props.changeResult(sortedArray)
      this.props.changeCrystals(this.props.crystals - 3000)

      if (this.state.skip) {
        this.skip()
      } else {
        this.props.changeDisplay("CrystalPage")
        this.props.history.push("/crystal")
      }
    } else {
      alert('You do not have enough crystals left!')
    }
  }

  render() {
    return (
      <div id="page">
        <div id="results-page" >
          <div id="result-upper-half">
          <div id="result-row-1">
            {this.props.result.slice(0, 5).map((item, index) => {
              return (<ResultGrid key={index} item={item}/>)
            })}
          </div>
          <div id="result-row-2">
            {this.props.result.slice(5).map((item, index) => {
              return (<ResultGrid key={index} item={item}/>)
            })}
          </div>
          </div>
          <div id="button-container">
            <button className="bar-button" onClick={event => {this.rollTen(event)}}>Draw Again</button>
            <button className="bar-button" onClick={event => {this.props.history.push("/summon")}}>Back</button>
          </div>
          <ul id="result-bottom-half">
            {this.props.result.map((item, index) => {
              return (<ResultList key={index} item={item}/>)
            })}
          </ul>
        </div>
        <Tracker ssrCollection={this.props.ssrCollection}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    crystals: state.crystalChanger.crystals,
    result: state.resultChanger.result,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCrystals: (event) => dispatch({type: 'CHANGE_CRYSTALS', newCrystals: event}),
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event})
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,
  mapDispatchToProps)
)(ResultPage);
