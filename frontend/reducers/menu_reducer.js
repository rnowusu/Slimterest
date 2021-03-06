import { OPEN_MENU, CLOSE_MENU } from '../actions/click_menu_actions';
import merge from 'lodash/merge';

const menuReducer = (state = null, action) => {
  let newState;
  switch(action.type){

    case OPEN_MENU:
    newState = action.menuType;
    return newState;

    case CLOSE_MENU:
    newState = null;
    return newState;

    default:
    return null;
  }
}

export default menuReducer;
