import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      secret_status: "",
      user_id: null  //this.props.currentuser.id || 23
    };
  }

  updateName(e){
    this.setState({});
  }

  updateSecretStatus(e){

  }

  handleSubmit(e){
    e.preventDefault();
  }



  render() {
    return (
      <div className="rendered">
        <form onSubmit={this.handleSubmit}
          className="board-form">
          <h3 className="board-header">Create Board!</h3>

          <label className="board-form-labels">
            Name: &nbsp;
          <input type="text" className="board-name"
            onChange={this.updateName.bind(this)} />
          </label>
          <br /> <br /> <br />

          <label className="board-form-labels">
            Secret Status: &nbsp;

            <input type="radio" name="secret-status"
              value="true" onChange={this.updateSecretStatus.bind(this)} /> True &nbsp;

            <input type="radio" name="secret-status"
              value="false" onChange={this.updateSecretStatus.bind(this)} checked /> False &nbsp;

          </label>
          <br /> <br /> <br />

          <input type="submit" value="Cancel" className="board-buttons"
            onClick={this.handleSubmit}/>
          &nbsp;
          <input type="submit" value="Create Board" className="board-buttons"
            />


        </form>
      </div>
    );
  }

}

export default BoardForm;
