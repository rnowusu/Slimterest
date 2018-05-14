import React from 'react'
import GreetingContainer from './greeting';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if (props.user){
    return (
      <div>
        <h3>Welcome, {props.user.username}</h3>
        <button onClick={props.signout}>Sign Out</button>
      </div>
    );
  }
  else {
    return (<div>
    <Link to={'/signup'}>Sign Up!</Link>
      <br/>
    <Link to={'/login'}>Login Here!</Link>
    <nav className="login-signup">
      <button onClick={() => props.openModal('Log in')}>Log in</button>
        &nbsp;or&nbsp;
      <button onClick={() => props.openModal('Sign up')}>Sign up</button>
        &nbsp;&nbsp;
        <button > Demo User</button>
    </nav>
  </div>
  );}
};

export default Greeting
