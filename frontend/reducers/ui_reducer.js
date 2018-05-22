import { combineReducers } from 'redux';
import modalReducer from './modal_reducer'
import itemModalReducer from './create_item_modal_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  itemModal: itemModalReducer
});

export default uiReducer;
