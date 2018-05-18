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

  render() {
    return (
      <div>
        <form>
          <h3>Create Board!</h3>

          <label className="board-form-labels">
            Name: <br />
          <input type="text" />
          </label>
          <br />

          <label className="board-form-labels">
            Secret Status: &nbsp;
            <input type="radio" name="secret-status"
              value="true" /> True &nbsp;
            <input type="radio" name="secret-status"
              value="false" checked /> False &nbsp;
          </label>
          <br />
          <input type="submit" value="Create Board"/>

        </form>
      </div>
    );
  }

}

export default BoardForm;
