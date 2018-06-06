import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">login instead</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('Log in'))}>
        Log in
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
