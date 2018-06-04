import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      user_id: this.props.currentUser.id, //|| 23
      secret_status: false
    };
  }

  updateName(e){
    this.setState({name: e.target.value});
  }

  updateSecretStatus(e){

  }

  handleSubmit(e){
    e.preventDefault();
    // debugger
    if (document.getElementById("radio-true").checked === true){
      this.setState({secret_status: true})//.bind(this)
    }
    const board = merge({}, this.state);
    this.props.createBoard({board: board});
  }


  render() {
    return (
      <div className="rendered">
        <form onSubmit={this.handleSubmit.bind(this)}
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

            <input id="radio-true" type="radio" name="secret-status"
              value="true" onChange={this.updateSecretStatus.bind(this)} /> True &nbsp;

            <input id="radio-false" type="radio" name="secret-status"
              value="false" onChange={this.updateSecretStatus.bind(this)} checked /> False &nbsp;

          </label>
          <br /> <br /> <br />

          <input type="button" value="Cancel" className="board-buttons"/>
          &nbsp;
          <input type="submit" value="Create Board" className="board-buttons"
            />


        </form>
      </div>
    );
  }

}

export default BoardForm;
