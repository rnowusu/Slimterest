import React from 'react';
import { fetchPin } from '../actions/pin_actions';
import { connect } from 'react-redux';

class Pin extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.id
    // this.props.fetchPin(this.props.match.params.pinId)
  }

  render(){
    window.propsPin = this.props;
    return (
      <div className="pin-show">
        <div><br />&nbsp; &nbsp;
          <button onClick={() =>this.props.history.push("/")}>
            Go back
          </button>
        </div>
        <ul className="pin-show-ul">
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
