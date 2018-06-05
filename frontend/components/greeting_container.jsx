import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../actions/modal_actions'
import { openMenu, closeMenu } from '../actions/click_menu_actions';


const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
    menuType: state.ui.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    openModal: (modal) => dispatch(openModal(modal)),
    openMenu: (menu) => dispatch(openMenu(menu)),
    closeMenu: () => dispatch(closeMenu())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
