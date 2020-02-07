import React from "react";
import TrackerSingle from "../components/TrackerSingle"
import {connect} from 'react-redux';

class Tracker extends React.Component {

  generateNoDupesSSRCollection = () => {
    let noDuplicatesCollection = []

    this.props.ssrCollection.map(item => {
      if (noDuplicatesCollection.filter(item2 => item2.weapon == item.weapon).length == 0) {
        noDuplicatesCollection.push([item, 0])
      } else {
        let index = noDuplicatesCollection.findIndex(obj => {
          obj[0] = item
        })
        noDuplicatesCollection[index] = [item, noDuplicatesCollection[index][1] += 1]
      }
    })

    noDuplicatesCollection.map(item => {
      item.quantity = this.props.ssrCollection.filter(item2 => item2.weapon === item.weapon).length;
      return item
    })

    return noDuplicatesCollection
  }

  render (){
    return (
      <div>
        <ul id="tracker">
        <h1 id="list-title">SSR Loot</h1>
        {this.generateNoDupesSSRCollection().map((item, index) => {
          console.log(item)
          return (<TrackerSingle key={index} item={item[0]} quantity={item[1]}/>)
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
