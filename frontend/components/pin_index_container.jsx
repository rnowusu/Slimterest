import { connect } from 'react-redux';
import { fetchPins, fetchPin, createPin } from '../actions/pin_actions';
import PinIndex from './pin_index';
import { openItemModal } from '../actions/item_modal_actions';
import { openMenu, closeMenu } from '../actions/click_menu_actions';

const shuffle = (a) => {
for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

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
