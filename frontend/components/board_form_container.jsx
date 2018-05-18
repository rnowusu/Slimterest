import { connect } from 'react-redux';
import { createBoard } from '../actions/board_actions';
import BoardForm from './board_form'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(receiveBoard(board))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
