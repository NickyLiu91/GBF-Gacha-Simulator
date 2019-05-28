import {combineReducers} from 'redux'

function crystalChanger(state = {crystals: 30000}, action) {
  switch (action.type) {
    case 'REDUCE_CRYSTALS':
      console.log(state);
      return {crystals: action.newCrystals}
    default:
      return state;
  }
}

function resultChanger(state = {result: []}, action) {
  switch (action.type) {
    case 'CHANGE_RESULT':
      console.log(state);
      return {Resukt: action.newResult}
    default:
      return state;
  }
}

function displayChanger(state = {display: "PickSummon"}, action) {
  switch (action.type) {
    case 'CHANGE_DISPLAY':
      console.log(state);
      return {name: action.newDisplay}
    default:
      return state;
  }
}

function rollNumberChanger(state = {rollNumber: 0}, action) {
  switch (action.type) {
    case 'CHANGE_ROLL_NUMBER':
      console.log(state);
      return {name: action.rollNumber}
    default:
      return state;
  }
}

function rChanger(state = {r: []}, action) {
  switch (action.type) {
    case 'NEW_R':
      console.log(state);
      return {r: action.newR}
    default:
      return state;
  }
}

function srChanger(state = {sr: []}, action) {
  switch (action.type) {
    case 'NEW_SR':
      console.log(state);
      return {sr: action.newSR}
    default:
      return state;
  }
}
function ssrChanger(state = {ssr: []}, action) {
  switch (action.type) {
    case 'NEW_SSR':
      console.log(state);
      return {ssr: action.newSSR}
    default:
      return state;
  }
}

export default combineReducers({
  crystalChanger,
  resultChanger,
  displayChanger,
  rollNumberChanger,
  rChanger,
  srChanger,
  ssrChanger
})
