import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route } from 'react-router-dom';
import Modal from './modal'

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <Link to="/" className="header-link">
        <h1 className="header-splash"> Welcome to Slimterest </h1>
      </Link>
        <GreetingContainer />
      </header>

      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path ='/signup' component={SignupFormContainer} />
    </div>
  );
};

export default App;
