import {combineReducers} from 'redux'

function eventTypeChanger(state = {eventType: 'None'}, action) {
  switch (action.type) {
    case 'CHANGE_EVENTTYPE':
      // console.log(state);
      return {eventType: action.newEventType}
    default:
      return state;
  }
}

function galaChanger(state = {gala: 'None'}, action) {
  switch (action.type) {
    case 'CHANGE_GALA':
      // console.log(state);
      return {gala: action.newGala}
    default:
      return state;
  }
}

function skipChanger(state = {skip: false}, action) {
  switch (action.type) {
    case 'CHANGE_SKIP':
      // console.log(state);
      return {skip: action.newSkip}
    default:
      return state;
  }
}

function crystalChanger(state = {crystals: 90000}, action) {
  switch (action.type) {
    case 'CHANGE_CRYSTALS':
      // console.log(state);
      return {crystals: action.newCrystals}
    default:
      return state;
  }
}

function resultChanger(state = {result: []}, action) {
  switch (action.type) {
    case 'CHANGE_RESULT':
      // console.log(state);
      return {result: action.newResult}
    default:
      return state;
  }
}

function displayChanger(state = {display: "PickSummon"}, action) {
  // console.log(action.newDisplay)
  switch (action.type) {
    case 'CHANGE_DISPLAY':
      // console.log(state);
      return {display: action.newDisplay}
    default:
      return state;
  }
}

function rollNumberChanger(state = {rollNumber: 0}, action) {
  switch (action.type) {
    case 'CHANGE_ROLL_NUMBER':
      // console.log(state);
      return {rollNumber: action.newRollNumber}
    default:
      return state;
  }
}

function rChanger(state = {r: []}, action) {
  switch (action.type) {
    case 'CHANGE_R':
      // console.log(action.newR);
      return {r: action.newR}
    default:
      return state;
  }
}

function srChanger(state = {sr: []}, action) {
  // console.log("SR")
  switch (action.type) {
    case 'CHANGE_SR':
      // console.log(state);
      return {sr: action.newSR}
    default:
      return state;
  }
}

function ssrChanger(state = {ssr: []}, action) {
  // console.log("SSR")
  switch (action.type) {
    case 'CHANGE_SSR':
      // console.log(state);
      return {ssr: action.newSSR}
    default:
      return state;
  }
}

function ssrCollectionChanger(state = {ssrCollection: []}, action) {
  switch (action.type) {
    case 'CHANGE_SSRCOLLECTION':
      // console.log(state);
      return {ssrCollection: action.newSSRCollection}
    default:
      return state;
  }
}

export default combineReducers({
  eventTypeChanger,
  galaChanger,
  skipChanger,
  crystalChanger,
  resultChanger,
  displayChanger,
  rollNumberChanger,
  rChanger,
  srChanger,
  ssrChanger,
  ssrCollectionChanger
})
