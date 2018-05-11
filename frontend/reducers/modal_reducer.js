// import { openModal, closeModal } from '../actions/modal_actions.js';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions.js';

import merge from 'lodash/merge'

const modalReducer = (state = {}, action) => {
  let newState;
    switch(action.type){
      case OPEN_MODAL:
      newState = merge({}, state, action.modal)
      return newState;

      case CLOSE_MODAL:
      newState = { modal: null }
      return newState;

      default:
      return state
    };
};

export default modalReducer;
