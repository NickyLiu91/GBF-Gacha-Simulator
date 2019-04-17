import React from "react"
import CrystalPage from '../components/CrystalPage'
import WeaponPage from '../components/WeaponPage'
import CharacterPage from '../components/CharacterPage'
let currentCrystals = 300000

export default class PickSummon extends React.Component {

  state = {
    display: "PickSummon",
    result: [],
    allWeapons: ["Kilij", "Derringer", "Eden"],
    allCharacters: ["Barawa", "Juri", "Lucio"]
  }

  rollOne = () => {
    output = Math.floor(Math.random() * 100)
    this.setState ({
      result: [output]
    })
  }

  rollTen = () => {
    let result = []
    var i
    for (i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * 100))
    }

    this.setState({
      result: [result]
    })
  }

  summon = () => {
    this.setState({
      display: "CrystalPage"
    })
  }

  getWeapons = () => {
    this.setState({
      display: "WeaponPage"
    })
  }

  getCharacters = () => {
    this.setState({
      display: "CharacterPage"
    })
  }

  printState = () => {
    console.log(this.state)
  }

  render () {
    if (this.state.display === "PickSummon") {
      return(
        <div id="page">
          <div>
            <div id="ten-summon">
              <p>Ten Summon</p>
              <br/>
              <p>{currentCrystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={this.summon}> 3000 Crystals</button>
            </div>
            <div id="single-summon">
              <p>Single Summon</p>
              <br/>
              <p>{currentCrystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={this.summon}> 300 Crystals</button>
            </div>
          </div>
        </div>
      )
    } else if (this.state.display === "CrystalPage") {
      return(
        <CrystalPage getWeapons={this.getWeapons} />
      )
    } else if (this.state.display === "WeaponPage") {
      return(
        <WeaponPage getCharacters={this.getCharacters}/>
      )
    } else if (this.state.display === "CharacterPage") {
      return(
        <CharacterPage />
      )
    }
  }
}
