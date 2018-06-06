import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const CLEAR_BOARDS = 'CLEAR_BOARDS';

export const receiveBoards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards: boards
  };
}

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board: board
  };
};

export const clearBoards = () => {
  return {
    type: CLEAR_BOARDS
  };
};


export const createBoard = (board) => (dispatch) => {
  return BoardApiUtil.createBoard(board).then((board) => dispatch(receiveBoard(board)))
};

export const fetchBoard = (id) => (dispatch) => {
  return BoardApiUtil.fetchBoard(id).then((board) => dispatch(receiveBoard(board)))
};

export const fetchBoards = () => (dispatch) => {
  return BoardApiUtil.fetchBoards().then((boards) => dispatch(receiveBoards(boards)))
}
