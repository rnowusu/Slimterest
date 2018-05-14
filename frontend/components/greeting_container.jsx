import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    openModal: (modal) => dispatch(openModal(modal))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
