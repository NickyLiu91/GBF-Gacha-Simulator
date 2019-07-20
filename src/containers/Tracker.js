import React from "react";
import TrackerSingle from "../components/TrackerSingle"
// import {connect} from 'react-redux';

class Tracker extends React.Component {
  render (){
    return (
      <div id="tracker">
      {this.props.ssrCollection.map((item, index) => {
        return (<TrackerSingle key={index} item={item}/>)
      })}
      </div>
    )
  }
}

export default Tracker;

// const mapStateToProps = state => {
//   return {
//     ssrCollection: state.ssrCollectionChanger.ssrCollection
//   }
// }
//
// export default connect(
//   mapStateToProps
// )(Tracker);
