import { combineReducers } from 'redux';
import modalReducer from './modal_reducer'
import itemModalReducer from './create_item_modal_reducer';
import menuReducer from './menu_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  itemModal: itemModalReducer,
  menu: menuReducer
});

export default uiReducer;
