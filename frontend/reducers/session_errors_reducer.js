// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }

  let newState;
const sessionErrorsReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
    return action.errors
    case RECEIVE_CURRENT_USER:
    return [];
    default:
    return state
  }
};

export default sessionErrorsReducer;
