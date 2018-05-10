import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
