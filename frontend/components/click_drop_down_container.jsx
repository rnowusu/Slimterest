import { connect } from 'react-redux';
import { openItemModal } from '../actions/item_modal_actions';
import Click_Dropdown from './click_dropdown';

const mapStateToProps = (state) => {
  return {

  };

}

const mapDispatchToProps = (dispatch) => {
  return {
    openBoardForm: () => dispatch(openItemModal("Board Form")),
    openPinForm: () => dispatch(openItemModal("Pin Form"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Click_Dropdown)
