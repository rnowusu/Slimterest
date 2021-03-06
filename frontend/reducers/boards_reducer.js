import { RECEIVE_BOARD, RECEIVE_BOARDS, CLEAR_BOARDS } from '../actions/board_actions';
import merge from 'lodash/merge';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;
  switch(action.type){
    case RECEIVE_BOARD:
    newState = merge({}, state, { [action.board.id]: action.board })
    return newState;

    case RECEIVE_BOARDS:
    newState = merge({}, state, action.boards)
    return newState;

    case CLEAR_BOARDS:
    newState = {};
    return newState;

    default:
    return state;

  }
};

export default boardsReducer;
