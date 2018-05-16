import { connect } from 'react-redux';
import { fetchPins, fetchPin, createPin } from '../actions/pin_actions';
import PinIndex from './pin_index';
const mapStateToProps = (state) => {
  return {
    pins: Object.values(state.entities.pins)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPins: () => dispatch(fetchPins())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)
