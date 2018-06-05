import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';


const HeaderDropdown = (props) => {
  return (
    <ul className="header-dropdown">
      <li className="header-dropdown-li">
        Edit Settings
      </li>
      <li className="header-dropdown-li" onClick={() => props.signout()}>
        Signout
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    menuType: state.ui.menu
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
