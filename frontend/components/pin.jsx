import React from 'react';
import { fetchPin } from '../actions/pin_actions';
import { connect } from 'react-redux';

class Pin extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.id
    // this.props.fetchPin(8)
  }

  render(){
    window.propsPin = this.props;
    return (
      <div>
        {this.props.pin.name} <br /> <br />
      <img className="pin-show-img" src={this.props.pin.picture_url}/> <br />
      {this.props.pin.description}
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    // ownProps: ownProps,
    // state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPin: (id) => dispatch(fetchPin(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pin)
