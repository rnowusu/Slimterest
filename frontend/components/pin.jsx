import React from 'react';
import { fetchBoards, clearBoards } from '../actions/board_actions';
import { fetchPin, fetchPins } from '../actions/pin_actions';
import { connect } from 'react-redux';
import DropdownButton from './dropdown_button';

class Pin extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    window.scrollTo(0,0);
    this.props.fetchBoards();
    this.props.fetchPins();
    // this.props.id
    // this.props.fetchPin(this.props.match.params.pinId)
    // this.props.pin = this.props.pin ||fetchPin(this.props.match.params.pinId);
  }

  componentWillUnmount(){
    this.props.clearBoards();
  }

  render(){
    // window.propsPin = this.props;
    return (
      <div className="pin-show" onClick={() =>this.props.history.goBack()}>
        <div className="pin-show-background" onClick={e => e.stopPropagation()}><br />&nbsp; &nbsp;
          <button onClick={() => this.props.history.goBack()}>
            Go back
          </button>
        </div>
        <ul className="pin-show-ul" onClick={e => e.stopPropagation()}>
          <li className="pin-show-li">
            <div>
              <img className="pin-show-img" src={this.props.pin.picture_url}/> <br />
            </div>
          </li>
          <li className="pin-show-li">
            <div className="pin-show-li-div">
              <br />
              {this.props.pin.name}
              <br /> <br />
            </div>
            <div className="pin-show-li-div">
              <br />
              {this.props.pin.description}
              <br /><br />
            </div>
          </li>
        </ul>
        <br /> <br />
        <DropdownButton />
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
    fetchPin: (id) => dispatch(fetchPin(id)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards()),
    clearBoards: () => dispatch(clearBoards())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pin)
