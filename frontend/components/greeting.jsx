import React from 'react'
import GreetingContainer from './greeting';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PinIndexContainer from './pin_index_container';
const Greeting = (props) => {
  const handleSignOut = () => {
    props.signout();
    props.openModal('Log in')
  }

  if (props.user){
    return (
      <div>
        <ul className="header-items">
          <li className="header-logo">
            <a href="http://www.clker.com/cliparts/g/d/D/A/l/9/sl-logo.svg.thumb.png">
              <img className="logo-svg" src='http://www.clker.com/cliparts/g/d/D/A/l/9/sl-logo.svg.thumb.png' alt='Sl Logo clip art'/></a>
              </li>
          <li className="header-search">&nbsp;<i className="fas fa-search" />
          <input type="text" className="header-search-box"
            placeholder="Search" />
        </li>
          <li className="header-home-btn">Home</li>
          <li className="header-explore">Explore</li>
          <li className="header-username"><i className="fas fa-user-circle" />
          &nbsp;{props.user.username}
          </li>
          <li className="header-comment"><i className="fas fa-comment-dots" /></li>
          <li className="header-extra"><i className="fas fa-ellipsis-h" /></li>
        </ul>
        <h3 className="text">Welcome, {props.user.username}</h3>
          <ProtectedRoute exact path='/' component={PinIndexContainer} />
        <button onClick={handleSignOut}>Sign Out</button>
        
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
