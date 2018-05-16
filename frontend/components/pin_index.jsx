import React from 'react';
import PinIndexItem from './pin_index_item';
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
          Pin {pin.id}: <br/>
          {pin.name} <br/>
          {pin.description} <br/>
        {pin.category}
        </li>
      );
    })
    return (
      <div>
        <ul>{pins}</ul>
      </div>
    );
  }
}

export default PinIndex;
