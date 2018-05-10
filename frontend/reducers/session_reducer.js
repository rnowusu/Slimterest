import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions';

let _nullUser = { id: null };

const sessionReducer = (defaultState = _nullUser, action) => {
  let newState;
  Object.freeze(defaultState)

  // debugger
  switch(action.type){

    case RECEIVE_CURRENT_USER:
    newState = { id: action.user.id }
    return newState;

    case SIGNOUT_CURRENT_USER:
    return _nullUser;

    default:
    return defaultState;
  }
};

export default sessionReducer;
