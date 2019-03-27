import React from "react"
import CrystalPage from '../components/CrystalPage'

export default class PickSummon extends React.Component {

  state = {
    display: "PickSummon"
  }


  render () {
    if (this.state.display === "PickSummon") {
      return(
        <div id="page">
          <div>
            <div id="ten-summon">
              <p>Ten Summon</p>
              <img src="" />
              <button> 3000 Crystals</button>
            </div>
            <div id="single-summon">
              <p>Single Summon</p>
              <img src="" />
              <button> 300 Crystals</button>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <CrystalPage />
      )
    }
  }
}
