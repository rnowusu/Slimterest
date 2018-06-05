import React from 'react';
import { connect } from 'react-redux';

class UserPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>User Show</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
