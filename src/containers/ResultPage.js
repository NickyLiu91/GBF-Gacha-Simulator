import React from "react";
import ResultGrid from "../components/ResultGrid.js"
import ResultList from "../components/ResultList.js"
import {connect} from 'react-redux';
import Tracker from './Tracker'
import {Route, Link, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ResultPage extends React.Component {

  state = {
    trackList: []
  }

  componentDidMount() {
    this.generateNoDupesSSRCollection()
  }

  generateNoDupesSSRCollection = () => {
    let noDuplicatesCollection = []

    this.props.ssrCollection.map(item => {
      if (noDuplicatesCollection.filter(item2 => item2.weapon == item.weapon).length == 0) {
        noDuplicatesCollection.push(item)
      }
    })

    console.log(noDuplicatesCollection)

    noDuplicatesCollection.forEach(item => {
      item.quantity = this.props.ssrCollection.filter(item2 => item2.weapon === item.weapon).length;
      return item
    })
    console.log(noDuplicatesCollection)

    // this.setState({
      // trackList: noDuplicatesCollection
    // })
    return noDuplicatesCollection
  }

  rollTen = (event) => {

    if (this.props.crystals >= 3000) {
      let result
      let allRolls = []
      let sortedArray
      var i
      let filteredR = this.props.r.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let filteredSR = this.props.sr.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let filteredSSR = this.props.ssr.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let updatedSSRCollection = this.props.ssrCollection
      console.log(updatedSSRCollection)

      for (i = 0; i < 10; i++) {

        if (this.props.gala === "None") {
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

      if (this.props.skip) {
        this.skip()
      } else {
        // this.props.changeDisplay("CrystalPage")
        this.props.history.push("/crystal")
      }
    } else {
      alert('You do not have enough crystals left!')
    }
  }

  skip = () => {
    this.props.changeRollNumber(0)
    this.props.history.push("/result")
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
        <Tracker ssrCollection={this.generateNoDupesSSRCollection()}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    eventType: state.eventTypeChanger.eventtype,
    gala: state.galaChanger.gala,
    skip: state.skipChanger.skip,
    crystals: state.crystalChanger.crystals,
    result: state.resultChanger.result,
    // display: state.displayChanger.display,
    rollNumber: state.rollNumberChanger.rollNumber,
    r: state.rChanger.r,
    sr: state.srChanger.sr,
    ssr: state.ssrChanger.ssr,
    ssrCollection: state.ssrCollectionChanger.ssrCollection
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeEventType: (event) => dispatch({type: 'CHANGE_EVENTTYPE', newEventType: event}),
    changeGala: (event) => dispatch({type: 'CHANGE_GALA', newGala: event}),
    changeSkip: (event) => dispatch({type: 'CHANGE_SKIP', newSkip: event}),
    changeCrystals: (event) => dispatch({type: 'CHANGE_CRYSTALS', newCrystals: event}),
    changeResult: (event) => dispatch({type: 'CHANGE_RESULT', newResult: event}),
    // changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event}),
    changeRollNumber: (event) => dispatch({type: 'CHANGE_ROLLNUMBER', newRollNumber: event}),
    changeR: (event) => dispatch({type: 'CHANGE_R', newR: event}),
    changeSR: (event) => dispatch({type: 'CHANGE_SR', newSR: event}),
    changeSSR: (event) => dispatch({type: 'CHANGE_SSR', newSSR: event}),
    changeSSRCollection: (event) => dispatch({type: 'CHANGE_SSRCOLLECTION', newSSRCollection: event})
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,
  mapDispatchToProps)
)(ResultPage);
