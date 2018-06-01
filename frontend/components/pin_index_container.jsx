import { connect } from 'react-redux';
import { fetchPins, fetchPin, createPin } from '../actions/pin_actions';
import PinIndex from './pin_index';
import { openItemModal } from '../actions/item_modal_actions';
import { openMenu, closeMenu } from '../actions/click_menu_actions';

const mapStateToProps = (state) => {
  return {
    pins: Object.values(state.entities.pins),
    menuType: state.ui.menu
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    openMenu: () => dispatch(openMenu("Side Drop Down")),
    closeMenu: () => dispatch(closeMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)
