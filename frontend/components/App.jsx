import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1> Welcome to Slimterest </h1>
        <GreetingContainer />
      </header>

      <Route path='/login' component={LoginFormContainer} />
      <Route path ='/signup' component={SignupFormContainer} />
    </div>
  );
};

export default App;
