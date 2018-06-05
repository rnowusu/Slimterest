import { connect } from 'react-redux';
import { receiveBoard, createBoard, fetchBoards } from '../actions/board_actions';
import BoardForm from './board_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board)),
    fetchBoards: () => dispatch(fetchBoards())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
