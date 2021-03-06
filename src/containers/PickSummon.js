import React from "react"
import CrystalPage from '../components/CrystalPage'
import WeaponPage from '../components/WeaponPage'
import CharacterPage from '../components/CharacterPage'
import ResultPage from './ResultPage'
import Tracker from './Tracker'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Route, Link, withRouter} from 'react-router-dom';

class PickSummon extends React.Component {

  // state = {
  //   eventName: "None",
  //   galaName: "None",
  //   skip: false
  // }

  componentDidMount() {
    let rare = []
    let superRare = []
    let superSuperRare = []
    fetch(`http://localhost:3000/api/summons`)
    .then(res => res.json())
    // .then(res => {console.log(res[0])})
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
    // .then(res => {
    //   console.log(this.props.r)
    //   console.log(this.props.sr)
    //   console.log(this.props.ssr)
    // })
  }

  rollOne = (event) => {

    if (this.props.crystals >= 300) {
      let result
      let output = Math.floor(Math.random() * 100)
      let filteredR = this.props.r.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let filteredSR = this.props.sr.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let filteredSSR = this.props.ssr.filter(object => object.eventtype == "None" || object.eventtype == this.props.eventType || object.eventtype == this.props.gala)
      let updatedSSRCollection = this.props.ssrCollection

      if (this.props.gala === "None") {
        if (output <= 82) {
          result = filteredR[Math.floor(Math.random() * filteredR.length)]
        } else if (output <= 97) {
          result = filteredSR[Math.floor(Math.random() * filteredSR.length)]
        } else {
          result = filteredSSR[Math.floor(Math.random() * filteredSSR.length)]
          updatedSSRCollection.push(result)
          this.props.changeSSRCollection(updatedSSRCollection)
          console.log(updatedSSRCollection)
        }
      } else {
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
      }

      this.props.changeResult([result])
      this.props.changeCrystals(this.props.crystals - 300)
      // this.props.changeDisplay("CrystalPage")
      console.log(this.props.ssrCollection)
      this.props.history.push("/crystal")
    } else {
      alert('You do not have enough crystals left!')
    }
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

  changeEventName = (event) => {
    // event.preventDefault()
    // this.setState({
    //   eventName: event.target.value
    // }, () => {
      this.props.changeEventType(this.props.eventType)
    // })
  }

  changeGalaName = (event) => {
    // event.preventDefault()
    // this.setState({
    //   galaName: event.target.value
    // }, () => {
    //   console.log(event.target.value)
    //   console.log(this.props.gala)
      this.props.changeGala(event.target.value)
    // })
  }

  generateNoDupesSSRCollection = () => {
    let noDuplicatesCollection = []

    this.props.ssrCollection.map(item => {
      if (noDuplicatesCollection.filter(item2 => item2.weapon == item.weapon).length == 0) {
        noDuplicatesCollection.push(item)
      }
    })

    noDuplicatesCollection.map(item => {
      item.quantity = this.props.ssrCollection.filter(item2 => item2.weapon === item.weapon).length;
      return item
    })

    return noDuplicatesCollection
  }

  changeChecked = () => {
    // this.setState({
    //   skip: !this.props.skip
    // })
    this.props.changeSkip(!this.props.skip)
  }

  render () {

      return(
        <div id="page">
          <div id="summon-page">
            <div id="event">
              <div className="event-bar">
              <div>Event:</div>
                <form>
                  <select onChange={this.changeEventName} value={this.props.eventType}>
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
                  <select onChange={this.changeGalaName} value={this.props.gala}>
                    <option value="None" >None</option>
                    <option value="Flash" >Flash</option>
                    <option value="Grand" >Grand</option>
                  </select>
                </form>
              </div>
              <div className="event-bar">
              <div>Skip:</div>
                <form>
                  <input type="checkbox" onChange={this.changeChecked} checked={this.props.skip}>
                  </input>
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
              <button onClick={event => {this.rollTen(event)}}> 3000 Crystals </button>
            </div>
            <div id="single-summon">
              <p>Premium Draw</p>
              <div className="banner">
                <img src="images/banner.png" />
                <div>This contains one cerulean spark and at least one R-SSR item!</div>
              </div>
              <br/>
              <p>{this.props.crystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={event => {this.rollOne(event)}}> 300 Crystals </button>
            </div>
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
)(PickSummon);
