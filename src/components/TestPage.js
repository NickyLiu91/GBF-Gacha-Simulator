import React from "react";

const TestPage = (props) => {
  return (
    <div>
      <button onClick={props.printState}>STATE</button>
      <p>"bye--------------"</p>
    </div>
  )
}

export default TestPage;
