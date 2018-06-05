import React from 'react';
import { connect } from 'react-redux';

class UserPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const userPins = this.props.pins.map((pin) => {
      return (
        <li key={pin.id} className="user-pin-li">
          <img className="user-pin-img" src={pin.picture_url} />
        </li>
      );
    })
    return (
      <div className="user-show">
        <p>Your Pins</p>
        <ul className="user-pin-ul">{userPins}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pins: Object.values(state.entities.pins).filter(pin => pin.user_id === state.session.id)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
