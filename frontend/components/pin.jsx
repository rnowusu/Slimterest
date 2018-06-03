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
      <p>My Pin</p>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[8],
    ownProps: ownProps,
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPin: (id) => dispatch(fetchPin(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pin)
