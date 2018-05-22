import React from 'react';
import { openItemModal, closeItemModal } from '../actions/item_modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from './board_form_container';
import CreatePinFormContainer from './create_pin_form_container';


const ItemModals = (props) => {
  if (!props.itemModal){
    return null;
  }
  let component;
  switch(props.itemModal){
    case 'Board Form':
     component = <BoardFormContainer />;
    break;

    case 'Pin Form':
      component = <CreatePinFormContainer />;
    break;

    default:
    return null;

  }

  let modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`};

  return (
    <div className="modal-background" style={modalStyle} onClick={props.closeItemModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemModal: state.ui.itemModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openItemModal: (itemModal) => dispatch(openItemModal(itemModal)),
    closeItemModal: () => dispatch(closeItemModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModals);
