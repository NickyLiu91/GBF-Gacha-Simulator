import React from "react"
import CrystalPage from '../components/CrystalPage'
import WeaponPage from '../components/WeaponPage'
import CharacterPage from '../components/CharacterPage'
import {connect} from 'react-redux';

class PickSummon extends React.Component {

  // state = {
  //   crystals: 30000,
  //   display: "PickSummon",
  //   result: [],
  //   rollNumber: 0,
  // }

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

  rollOne = () => {
    let result
    let output = Math.floor(Math.random() * 100)

    if (output <= 82) {
      result = this.props.r[Math.floor(Math.random() * this.props.r.length)]
      // console.log(result)
    } else if (output <= 97) {
      result = this.props.sr[Math.floor(Math.random() * this.props.sr.length)]
      // console.log(result)
    } else {
      result = this.props.ssr[Math.floor(Math.random() * this.props.ssr.length)]
      // console.log(result)
    }

    this.props.changeResult([result])
    this.props.changeCrystals(this.props.crystals - 300)
    this.props.changeDisplay("WeaponPage")

    console.log(result)

    // this.setState ({
    //   result: [result],
    //   crystals: this.props.crystals - 300
    // }, this.setState({
    //   display: "WeaponPage"
    // }))
  }

  rollTen = () => {
    let result
    let allRolls = []
    var i
    for (i = 0; i < 10; i++) {
      let output = Math.floor(Math.random() * 100)
      console.log(output)

      if (output <= 82) {
        result = this.props.r[Math.floor(Math.random() * this.props.r.length)]
      } else if (output <= 97) {
        result = this.props.sr[Math.floor(Math.random() * this.props.sr.length)]
      } else {
        result = this.props.ssr[Math.floor(Math.random() * this.props.ssr.length)]
      }

      allRolls.push(result)
    }

    console.log(allRolls)

    this.props.changeResult(allRolls)
    this.props.changeCrystals(this.props.crystals - 3000)
    this.props.changeDisplay("WeaponPage")

    // this.setState ({
    //   result: allRolls,
    //   crystals: this.props.crystals - 3000
    // }, this.setState({
    //   display: "WeaponPage"
    // }))
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
      this.props.changeDisplay("PickSummon")
      this.props.changeRollNumber(0)

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

  printState = () => {
    console.log(this.props)
  }

  render () {
    if (this.props.display === "PickSummon") {
      return(
        <div id="page">
          <div>
            <div id="ten-summon">
              <p>Ten Summon</p>
              <br/>
              <p>{this.props.crystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={event => {this.props.changeDisplay("CrystalPage")}}> 3000 Crystals</button>
            </div>
            <div id="single-summon">
              <p>Single Summon</p>
              <br/>
              <p>{this.props.crystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={event => {this.props.changeDisplay("CrystalPage")}}> 300 Crystals</button>
            </div>
          </div>
        </div>
      )
    } else if (this.props.display === "CrystalPage") {
      return(
        <CrystalPage rollOne={this.rollOne} rollTen={this.rollTen}/>
      )
    } else if (this.props.display === "WeaponPage") {
      return(
        <WeaponPage getCharacters={this.getCharacters} />
      )
    } else if (this.props.display === "CharacterPage") {
      return(
        <CharacterPage nextRoll={this.nextRoll} />
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickSummon);
