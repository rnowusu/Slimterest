import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { signup, login, signout } from './actions/session_actions';
// import * as SessionApiUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser){
    const preloadedState = {
      entities: {users: {[window.currentUser.id]: window.currentUser}},
      session: { id: window.currentUser.id }
    }
    store = configureStore(preloadedState);

  } else {
    store = configureStore();
  }
  // debugger
  // window.login = login;
  // window.signout = signout;
  // window.signup = signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store } /> , root);
})
