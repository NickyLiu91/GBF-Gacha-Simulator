import React from "react";
import {connect} from 'react-redux';

const CrystalPage = (props) => {
  return (
    <div id="crystal-page">
      <div id="summon-area">
        <div id="crystal" onClick={event => {props.changeDisplay("WeaponPage")}}>
          <div id="summon-crystal-top">
          </div>
            <div id="summon-crystal-bottom">
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeDisplay: (event) => dispatch({type: 'CHANGE_DISPLAY', newDisplay: event}),
  }
}

export default connect(
  null, mapDispatchToProps
)(CrystalPage);
