import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, signout } from './util/session_api_util';
import configureStore from './store/store'
// import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.signout = signout;
  window.signup = signup;
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Slimterest</h1>, root)
})
