import React from "react"
import CrystalPage from '../components/CrystalPage'
import WeaponPage from '../components/WeaponPage'
import CharacterPage from '../components/CharacterPage'

export default class PickSummon extends React.Component {

  state = {
    crystals: 30000,
    display: "PickSummon",
    result: [],
    r: [{"Kilij": "Barawa"}],
    sr: [{"Derringer": "Juri"}],
    ssr: [{"Eden": "Lucio"}]
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
    .then(res => this.setState({
      r: rare,
      sr: superRare,
      ssr: superSuperRare
    }, () => {console.log(this.state)}))
  }

  rollOne = () => {
    let result
    let output = Math.floor(Math.random() * 100)
    console.log(output)

    if (output <= 82) {
      result = this.state.r[Math.floor(Math.random() * this.state.r.length)]
      // console.log(result)
    } else if (output <= 97) {
      result = this.state.sr[Math.floor(Math.random() * this.state.sr.length)]
      // console.log(result)
    } else {
      result = this.state.ssr[Math.floor(Math.random() * this.state.ssr.length)]
      // console.log(result)
    }

    this.setState ({
      result: [result],
      crystals: this.state.crystals - 300
    }, this.setState({
      display: "WeaponPage"
    }))
  }

  rollTen = () => {
    let result
    let allRolls = []
    var i
    for (i = 0; i < 10; i++) {
      let output = Math.floor(Math.random() * 100)

      if (output >= 82) {
        result = this.state.r[Math.floor(Math.random() * this.state.r.length)]
      } else if (output >= 97) {
        result = this.state.sr[Math.floor(Math.random() * this.state.sr.length)]
      } else {
        result = this.state.ssr[Math.floor(Math.random() * this.state.ssr.length)]
      }

      allRolls.push(result)
    }

    this.setState ({
      result: allRolls,
      crystals: this.state.crystals - 3000
    }, this.setState({
      display: "WeaponPage"
    }))
  }

  summon = () => {
    this.setState({
      display: "CrystalPage"
    })
  }


  getCharacters = () => {
    this.setState({
      display: "CharacterPage"
    })
  }

  returnHome = () => {
    this.setState({
      display: "PickSummon"
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
              <p>{this.state.crystals}</p>
              <br/>
              <img src="" />
              <br/>
              <button onClick={this.summon}> 3000 Crystals</button>
            </div>
            <div id="single-summon">
              <p>Single Summon</p>
              <br/>
              <p>{this.state.crystals}</p>
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
        <CrystalPage rollOne={this.rollOne}/>
      )
    } else if (this.state.display === "WeaponPage") {
      return(
        <WeaponPage getCharacters={this.getCharacters} result={this.state.result}/>
      )
    } else if (this.state.display === "CharacterPage") {
      return(
        <CharacterPage result={this.state.result} returnHome={this.returnHome}/>
      )
    }
  }
}
