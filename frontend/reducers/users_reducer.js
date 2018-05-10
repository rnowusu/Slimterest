import merge from 'lodash/merge';
import RECEIVE_CURRENT_USER from '../actions/session_actions';


let newState;
const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    newState = merge({}, state, { [action.user.id]: action.user });
    return newState;
    default:
    return state;
  }
};

export default usersReducer;
