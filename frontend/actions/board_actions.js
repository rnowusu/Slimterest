import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board: board
  };
};

export const createBoard = (board) => (dispatch) => {
  return BoardApiUtil.createBoard(board).then((board) => dispatch(receiveBoard(board)))
};

export const fetchBoard = (id) => (dispatch) => {
  return BoardApiUtil.fetchBoard(id).then((board) => dispatch(receiveBoard(board)))
};
