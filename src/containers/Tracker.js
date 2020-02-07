import React from "react";
import TrackerSingle from "../components/TrackerSingle"
import {connect} from 'react-redux';

class Tracker extends React.Component {
  render (){
    return (
      <div>
        <ul id="tracker">
        <h1 id="list-title">SSR Loot</h1>
        {this.props.ssrCollection.map((item, index) => {
          return (<TrackerSingle key={index} item={item}/>)
        })}
        </ul>
      </div>
    )
  }
}

// export default Tracker;

const mapStateToProps = state => {
  return {
    ssrCollection: state.ssrCollectionChanger.ssrCollection
  }
}

export default connect(
  mapStateToProps
)(Tracker);
