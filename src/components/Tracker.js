import React from "react";
import {connect} from 'react-redux';

const Tracker = (props) => {
  return (
    <div id="tracker">
      grsgreg
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ssrCollection: state.ssrCollectionChanger.ssrCollection
  }
}


export default connect(
  mapStateToProps
)(Tracker);
