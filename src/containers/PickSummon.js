import React from "react"
import CrystalPage from '../components/CrystalPage'
import WeaponPage from '../components/WeaponPage'
import CharacterPage from '../components/CharacterPage'
import ResultPage from './ResultPage'
import {connect} from 'react-redux';

class PickSummon extends React.Component {

  state = {
    eventName: "None",
    galaName: "None"
  }

  componentDidMount() {
    let rare = []
    let superRare = []
    let superSuperRare = []
    fetch(`http://localhost:3000/api/v1/summons`)
    .then(res => res.json())
    .then(json => {
      json.forEach((obj) => {
        if (obj.rarity === "R") {
          rare.push(obj)
        } else if (obj.rarity === "SR") {
          superRare.push(obj)
        } else {
          superSuperRare.push(obj)
        }
      })
    })
    .then(res => {
      this.props.changeR(rare)
      this.props.changeSR(superRare)
      this.props.changeSSR(superSuperRare)
    })
  }

  rollOne = (event) => {
    let result
    let output = Math.floor(Math.random() * 100)
    let filteredR = this.props.r.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)
    let filteredSR = this.props.sr.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)
    let filteredSSR = this.props.ssr.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)

    if (this.state.galaName === "None") {
      if (output <= 82) {
        result = filteredR[Math.floor(Math.random() * filteredR.length)]
      } else if (output <= 97) {
        result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
      } else {
        result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
      }
    } else {
      if (output <= 79) {
        result = filteredR[Math.floor(Math.random() * filteredR.length)]
      } else if (output <= 94) {
        result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
      } else {
        result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
      }
    }


    this.props.changeResult([result])
    this.props.changeCrystals(this.props.crystals - 300)
    this.props.changeDisplay("CrystalPage")

  }

  rollTen = (event) => {
    let result
    let allRolls = []
    let sortedArray
    var i
    let filteredR = this.props.r.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)
    let filteredSR = this.props.sr.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)
    let filteredSSR = this.props.ssr.filter(object => object.event == "None" || object.event == this.state.eventName || object.event == this.state.galaName)

    console.log(filteredR)
    console.log(filteredSR)
    console.log(filteredSSR)

    for (i = 0; i < 10; i++) {

      if (this.state.galaName === "None") {
        if (i == 9) {
          let output = Math.floor(Math.random() * 100)

          if (output <= 97) {
            result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
          } else {
            result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
          }
          allRolls.push(result)
        } else {
          let output = Math.floor(Math.random() * 100)

          if (output <= 82) {
            result = filteredR[Math.floor(Math.random() * filteredR.length)]
          } else if (output <= 97) {
            result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
          } else {
            result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
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

    console.log(sortedArray)

    this.props.changeResult(sortedArray)
    this.props.changeCrystals(this.props.crystals - 3000)
    this.props.changeDisplay("CrystalPage")

  }

  // summon = () => {
  //   this.setState({
  //     display: "CrystalPage"
  //   })
  // }
  //
  //
  getCharacters = () => {
    this.props.changeDisplay("CharacterPage")
    // this.setState({
    //   display: "CharacterPage"
    // })
  }


  nextRoll = () => {
    if (this.props.rollNumber === this.props.result.length - 1) {
      if (this.props.result.length === 1) {
        this.props.changeDisplay("PickSummon")
      } else {
        this.props.changeDisplay("ResultPage")
        this.props.changeRollNumber(0)
      }

      // this.setState({
      //   display: "PickSummon",
      //   rollNumber: 0
      // })
    } else {
      this.props.changeRollNumber(this.props.rollNumber + 1)
      console.log(this.props.rollNumber)
      this.props.changeDisplay("WeaponPage")
      // this.setState({
      //   rollNumber: this.props.rollNumber + 1,
      //   display: "WeaponPage"
      // })
    }
  }

  changeEventName = (event) => {
    event.preventDefault()
    this.setState({
      eventName: event.target.value
    })
  }

  changeGalaName = (event) => {
    event.preventDefault()
    this.setState({
      galaName: event.target.value
    })
  }


  render () {
    if (this.props.display === "PickSummon") {
      return(
        <div id="summon-page">
          <div id="event">
            <div className="event-bar">
            <div>Event:</div>
              <form>
                <select onChange={this.changeEventName}>
                  <option value="None" >None</option>
                  <option value="Summer" >Summer</option>
                  <option value="Halloween" >Halloween</option>
                  <option value="Holiday" >Holiday</option>
                  <option value="Valentine" >Valentine</option>
                </select>
              </form>
            </div>
            <div className="event-bar">
            <div>Gala:</div>
              <form>
                <select onChange={this.changeGalaName}>
                  <option value="None" >None</option>
                  <option value="Flash" >Flash</option>
                  <option value="Grand" >Grand</option>
                </select>
              </form>
            </div>
          </div>
          <div id="ten-summon">
            <p>Premium 10-Part Draw</p>
            <div className="banner">
              <img src="images/banner.png" />
              <div>This contains ten cerulean sparks and at least one SR/SSR item!</div>
            </div>
            <br/>
            <p>{this.props.crystals}</p>
            <br/>
            <img src="" />
            <br/>
            <button onClick={event => {this.rollTen(event)}}> 3000 Crystals</button>
          </div>
          <div id="single-summon">
            <p>Permium Draw</p>
            <div className="banner">
              <img src="images/banner.png" />
              <div>This contains one cerulean spark and at least one R-SSR item!</div>
            </div>
            <br/>
            <p>{this.props.crystals}</p>
            <br/>
            <img src="" />
            <br/>
            <button onClick={event => {this.rollOne(event)}}> 300 Crystals</button>
          </div>
        </div>
      )
    } else if (this.props.display === "CrystalPage") {
      return(
        <CrystalPage  />
      )
    } else if (this.props.display === "WeaponPage") {
      return(
        <WeaponPage getCharacters={this.getCharacters} nextRoll={this.nextRoll}/>
      )
    } else if (this.props.display === "CharacterPage") {
      return(
        <CharacterPage nextRoll={this.nextRoll} />
      )
    } else if (this.props.display === "ResultPage") {
      return(
        <ResultPage rollTen={this.rollTen}/>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    crystals: state.crystalChanger.crystals,
    result: state.resultChanger.result,
    display: state.displayChanger.display,
    rollNumber: state.rollNumberChanger.rollNumber,
    r: state.rChanger.r,
    sr: state.srChanger.sr,
    ssr: state.ssrChanger.ssr
    // filter: state.filterChanger.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCrystals: (event) => dispatch({type: 'CHANGE_CRYSTALS', newCrystals: event}),
    changeResult: (event) => dispatch({type: 'CHANGE_RESULT', newResult: event}),
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event}),
    changeRollNumber: (event) => dispatch({type: 'CHANGE_ROLL_NUMBER', newRollNumber: event}),
    changeR: (event) => dispatch({type: 'CHANGE_R', newR: event}),
    changeSR: (event) => dispatch({type: 'CHANGE_SR', newSR: event}),
    changeSSR: (event) => dispatch({type: 'CHANGE_SSR', newSSR: event})
    // changeFilter: (event) => dispatch({type: 'CHANGE_FILTER', filter: event})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickSummon);
