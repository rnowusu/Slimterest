import React from 'react';
import PinIndexItem from './pin_index_item';
import { openItemModal, closeItemModal } from '../actions/item_modal_actions';

class PinIndex extends React.Component{
  constructor(props){
    super(props);

  }

  handleClick() {
    this.props.menuType ? this.props.closeMenu() : this.props.openMenu()
  }

  componentDidMount(){
    this.props.fetchPins();
  }

  render(){
    window.props = this.props
    const pins = this.props.pins.map((pin) => {
      return (
        <li key={pin.id} className="pin">
          <br/>
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
          onClick={this.handleClick.bind(this)}></i>
      </div>
    );
  }
}

export default PinIndex;

// !this.props.menuType === 'Side Drop Down' ?  this.props.openMenu.bind(this)
// : this.props.closeMenu.bind(this)
