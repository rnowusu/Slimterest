import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_actions';
//import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup"> sign up instead</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('Sign up'))}>
        Sign up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
