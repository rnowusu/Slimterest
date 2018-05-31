import React from 'react';
import PinIndexItem from './pin_index_item';
import { openItemModal, closeItemModal } from '../actions/item_modal_actions';

class PinIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchPins();
  }

  render(){
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
        <i className="fas fa-plus pin-board-modal" onClick={this.props.openItemModal.bind(this)}></i>
      </div>
    );
  }
}

export default PinIndex;
