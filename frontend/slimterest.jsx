import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
// import { signup, login, signout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.login = SessionApiUtil.login;
  window.signout = SessionApiUtil.signout;
  window.signup = SessionApiUtil.signup;
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Slimterest</h1>, root)
})
