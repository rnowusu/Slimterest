import { RECEIVE_PINS, RECEIVE_PIN, CLEAR_PINS } from '../actions/pin_actions';
import merge from 'lodash/merge';


const pinsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_PINS:
    newState = merge({}, state, action.pins)
    return newState;

    case RECEIVE_PIN:
    newState = merge({}, state, {[action.pin.id]: action.pin})
    return newState;

    case CLEAR_PINS:
    newState = {};
    return newState;

    default:
    return state;
  }
};

export default pinsReducer;
