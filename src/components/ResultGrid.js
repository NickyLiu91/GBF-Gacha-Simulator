import React from "react";
// import {connect} from 'react-redux';

const ResultGrid = (props) => {
  return (
    <div>
      <img className="result-grid-single" src={"images/" + props.item.weapon + ".jpg"} />
    </div>
  )
}

export default ResultGrid

// const mapStateToProps = state => {
//   return {
//     result: state.resultChanger.result,
//   }
// }
//
//
// export default connect(
//   mapStateToProps
// )(ResultGrid);
