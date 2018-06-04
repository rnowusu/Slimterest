import React from 'react';
import PinIndexItem from './pin_index_item';
import { openItemModal, closeItemModal } from '../actions/item_modal_actions';
import Pin from './pin'
import { ProtectedRoute } from '../util/route_util';
import { Redirect, Link } from 'react-router-dom';


class PinIndex extends React.Component{
  constructor(props){
    super(props);

  }

  handleMenuClick() {
    this.props.menuType ? this.props.closeMenu() : this.props.openMenu()
  }

  handlePinClick(pin){
    this.props.history.push(`/pins/${pin.id}`);
    return (<ProtectedRoute path={`/pins/${pin.id}`} component={Pin} />);
  }

  componentWillMount(){
    this.props.fetchPins();
    this.props.fetchBoards();
  }

  componentWillUnmount(){
    // this.props.clearPins();
  }

  render(){
    window.propsIndex = this.props
    // `/pins/${pin.id}`
    const pins = this.props.pins.map((pin) => {
      return (
        <li key={pin.id} className="pin"
          onClick={() => this.handlePinClick(pin)}>
          
          <br />
        <img className="pin-img" src={pin.picture_url}/> <br/>
          {pin.name} <br/>
          {pin.description} <br/>
          <br/>
        </li>
      );
    })
    return (
      <div>
        <ul className="pins">{pins}</ul>
        <i className="fas fa-plus pin-board-modal"
          onClick={this.handleMenuClick.bind(this)}></i>
      </div>
    );
  }
}

export default PinIndex;

// !this.props.menuType === 'Side Drop Down' ?  this.props.openMenu.bind(this)
// : this.props.closeMenu.bind(this)
