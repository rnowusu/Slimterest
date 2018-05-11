// import { openModal, closeModal } from '../actions/modal_actions.js';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions.js';

import merge from 'lodash/merge'

const modalReducer = (state = null, action) => {
  let newState;
    switch(action.type){
      case OPEN_MODAL:
      return action.modal

      case CLOSE_MODAL:
      return null;

      default:
      return state
    };
};

export default modalReducer;
