import React from 'react';
import { connect } from 'react-redux';
import ClickDropDown from './click_drop_down_container';
import { openMenu, closeMenu } from '../actions/click_menu_actions';

const MenuItems = (props) => {
  // debugger
  if (!props.menuType){
    return null;
  }
  let MenuSelected;
  switch(props.menuType){
    case 'Side Drop Down':
      MenuSelected = ClickDropDown;
      break;

    default:
    return null;
  }

  return (
       <MenuSelected />
  );

}

const mapStateToProps = (state) => {
  return {
    menuType: state.ui.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: (menuType) => dispatch(openMenu(menuType)),
    closeMenu: () => dispatch(closeMenu())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems)