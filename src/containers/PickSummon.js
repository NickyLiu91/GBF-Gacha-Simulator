import React from "react"
import CrystalPage from '../components/CrystalPage'
import CharactersPage from '../components/CharactersPage'
let currentCrystals = 300000

export default class PickSummon extends React.Component {

  state = {
    display: "PickSummon"
  }

  summon = () => {
    this.setState({
      display: "CrystalPage"
    })
  }

  getCharacters = () => {
    this.setState({
      display: "CharactersPage"
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
        <CrystalPage getCharacters={this.getCharacters} printState={this.printState}/>
      )
    } else if (this.state.display === "CharactersPage") {
      return(
        <CharactersPage printState={this.printState}/>
      )
    }
  }
}
