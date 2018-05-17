import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

//by importing react, is our functional component implicitly
//a functional component

const Modal = ({modal, closeModal, loggedIn}) => {
  if (!modal){
    return null
  }
  let component;
  switch(modal){
    case 'Log in':
      component = <LoginFormContainer />;
      break;
    case 'Sign up':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(`+ `${staticImages.background}`+`)`}}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      modal: state.ui.modal,
      loggedIn: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
