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
        {pin.category}
        </li>
      );
    })
    return (
      <div>
        <ul className="pins">{pins}</ul>
        <div className="pin-board-modal" ><i className="fas fa-plus" onClick={this.props.openItemModal.bind(this)}></i></div>
      </div>
    );
  }
}

export default PinIndex;
