import React from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../actions/click_menu_actions';

const DropdownButton = (props) => {
  return (
    <ul>
      <li className="pin-board-button">
        <i className="fas fa-plus pin-board-modal"
          onClick={(e) => {e.stopPropagation(); props.menuType ? props.closeMenu() : props.openMenu()}}></i>
      </li>
  </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    menuType: state.ui.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => dispatch(openMenu("Side Drop Down")),
    closeMenu: () => dispatch(closeMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownButton)
//this.props.menuType ? this.props.closeMenu() : this.props.openMenu()
