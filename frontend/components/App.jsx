import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Modal from './modal';
import PinIndexContainer from './pin_index_container';
import PinFormContainer from './create_pin_form_container';
import BoardFormContainer from './board_form_container';
import ItemModal from './item_modal';
import ClickDropdown from './click_drop_down_container';
import MenuItems from './menu_items';
import Pin from './pin';
import DropdownButton from './dropdown_button';
import UserPage from './user_show';

const App = () => {
  return (
    <div>

      <header>
        <ProtectedRoute path='/' component={GreetingContainer} />
        <ItemModal />
        <ProtectedRoute path='/' component={MenuItems} />
        <ProtectedRoute path='/pins/:pinId' component={Pin} />
        <ProtectedRoute path='/profile' component={UserPage} />

      </header>
      <AuthRoute exact path='/' component={Modal} />
      <AuthRoute exact path='/login' component={Modal} />
      <AuthRoute exact path ='/signup' component={Modal} />
    </div>
  );
};

export default App;

// <Link to="/" className="header-link">
//   <h1 className="header-splash"> Welcome to Slimterest </h1>
// </Link>
