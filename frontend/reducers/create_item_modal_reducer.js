import { OPEN_ITEM_MODAL, CLOSE_ITEM_MODAL} from '../actions/item_modal_actions';
import merge from 'lodash/merge';

const itemModalReducer = (state = null, action) => {
  // debugger
  let newState;
  switch(action.type){
    case OPEN_ITEM_MODAL:
    // newState = merge({}, state, action.itemModal)
    newState = action.itemModal;
    return newState;

    case CLOSE_ITEM_MODAL:
    newState = null;
    return newState;

    default:
    return null;
  }
}

export default itemModalReducer;
