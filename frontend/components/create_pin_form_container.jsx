import React from 'react';
import { connect } from 'react-redux';
import PinForm from './pin_form';
import { createPin } from '../actions/pin_actions'
// import { login } from '../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'Create Pin'
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPin: (pin) => dispatch(createPin(pin))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(PinForm);
