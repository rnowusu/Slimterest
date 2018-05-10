import { signup, login, signout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};

export const signoutCurrentUser = () => {
  return ({
    type: SIGNOUT_CURRENT_USER
  });
};

export const receiveErrors = (errors) = {
  return ({
    type: RECEIVE_ERRORS,
    errors: errors
  });
}

export const signup = (user) => (dispatch) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};

export const signup = (user) => (dispatch) => {
  return signup(user).then((user) => dispatch(receiveCurrentUser(user))
), err => (dispatch(receiveErrors(err.responseJSON)))
};

export const login = (user) => (dispatch) => {
  return login(user).then((user) => dispatch(receiveCurrentUser(user))
), err => (dispatch(receiveErrors(err.responseJSON)))
};

export const signout = () => (dispatch) => {
  return signout().then(()=> dispatch(signoutCurrentUser()))
};
