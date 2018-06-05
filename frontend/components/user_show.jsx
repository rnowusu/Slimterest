import React from 'react';
import { connect } from 'react-redux';
import DropdownButton from './dropdown_button';

class UserPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const userPins = this.props.pins.map((pin) => {
      return (
        <li key={pin.id} className="user-pin-li">
          <img className="user-pin-img" src={pin.picture_url}
            onClick={() => this.props.history.push(`/pins/${pin.id}`)} />
        </li>
      );
    })
    return (
      <div className="user-show">
        <br />
        <p>&nbsp; &nbsp;Your Pins <i className="fas fa-user-circle" /></p>
        <ul className="user-pin-ul">{userPins} </ul>
        <br /> <br />

        <DropdownButton />
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
