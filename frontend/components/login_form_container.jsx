import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions'
//import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {
    processForm: (user) => login(user)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)//(SessionForm)
