import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session/actions'

let _nullUser = { id: null };

export const sessionReducer = (defaultState = _nullUser, action) => {
  let newState;
  Object.freeze(defaultState)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    newState = { id: action.user.id}
    return newState;

    case SIGNOUT_CURRENT_USER:
      return _nullUser;
    default:
    return defaultState;
  }
};
