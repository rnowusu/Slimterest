import * as PinApiUtil from '../util/pin_api_util';



export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const CLEAR_PINS = "CLEAR_PINS"

export const receivePins = (pins) => {
  return {
    type: RECEIVE_PINS,
    pins: pins
  };
};

export const receivePin = (pin) => {
  return {
    type: RECEIVE_PIN,
    pin: pin
  };
};

export const clearPins = () => {
  return {
    type: CLEAR_PINS
  };
};


export const fetchPins = () => (dispatch) => {
  return PinApiUtil.fetchPins().then((pins) => dispatch(receivePins(pins)))
};

export const fetchPin = (id) => (dispatch) => {
  return PinApiUtil.fetchPin(id).then((pin) => dispatch(receivePin(pin)))
};

export const createPin = (pin) => (dispatch) => {
  return PinApiUtil.createPin(pin).then((pin) => dispatch(receivePin(pin)))
};
