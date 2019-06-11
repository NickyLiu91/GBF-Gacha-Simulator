import React from "react";
import {connect} from 'react-redux';

const WeaponPage = (props) => {
  return (
    <div id="weapon-page">
      <div id="weapon-area" onClick={event => {props.getCharacters(event)}}>
      <div>
      {console.log(props)}
      {console.log(props.result)}
      {console.log(props.rollNumber)}
      </div>
        <img className="weapon" src={ "images/" + props.result[props.rollNumber].weapon + ".png"}/>
        <br/>
        <div id="weapon-name">
          <p>{props.result[props.rollNumber].weapon}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rollNumber: state.rollNumberChanger.rollNumber,
    result: state.resultChanger.result
  }
}

export default connect(
  mapStateToProps
)(WeaponPage);

const query = `
query {
  duelists {
    name
    rank
  }
}
`

const url = "http://localhost:3000/graphiql"

const opts = {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({query})
}

fetch(url, opts)
.then(res => res.json())
.then(json => console.log(json))

fetch(url, opts)
.then(res => res.json())
.then(json => console.log(json))

fetch("http://localhost:3000/graphiql", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    `query {
      duelists {
        name
        rank
      }
    }`
  })
})
.then(res => res.json())
.then(json => console.log(json))
