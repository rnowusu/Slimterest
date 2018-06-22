import React from 'react'
import GreetingContainer from './greeting';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PinIndexContainer from './pin_index_container';
import HeaderDropdown from './header_dropdown';
import SearchBar from './search_bar';

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
            <Link to="/">
              <img className="logo-svg" src='http://www.clker.com/cliparts/g/d/D/A/l/9/sl-logo.svg.thumb.png' alt='Sl Logo clip art'/></Link>
              </li>
          <li className="header-search">&nbsp;<i className="fas fa-search" />
          <SearchBar />
        </li>
          <li className="header-home-btn" onClick={() => props.history.push("/")}>Home</li>
          <li className="header-username" onClick={() => props.history.push(`/profile/${props.user.id}`)}><i className="fas fa-user-circle" />
          &nbsp;{props.user.username}
          </li>
          <li className="header-comment"><i className="fas fa-comment-dots" /></li>
          <li className="header-extra" onClick={() => props.menuType ? props.closeMenu() : props.openMenu("Menu Drop Down")}>
            <i className="fas fa-ellipsis-h" /></li>

        </ul>
        <h3 className="text">Welcome, {props.user.username}</h3>
          <ProtectedRoute exact path='/' component={PinIndexContainer} />
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
