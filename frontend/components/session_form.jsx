import React from 'react';
// import SignupFormContainer from './signup_form_container';
// import LoginFormContainer from './login_form_container';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom'


class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state)
    this.props.processForm(user);
  }

  update(field){
    return e => this.setState = ({
      [field]: e.target.value
    });
  }

  renderErrors() {
    return (
      <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
      </ul>
    );
  }

  render(){

      return (
        <div>
          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            Welcome to Slimterest!
            <br/>
            Please {this.props.formType} or {this.props.navLink}.
            <br/>
            <br/>
            <label>
              Username:
              <input type='text' value={this.state.username}
                onChange={this.update("username")}/>
            </label>

            <label>
              Password:
              <input type='password' value={this.state.password}
                onChange={this.update("password")}
                />
            </label>
          </form>

        </div>
      );
  }
}

export default withRouter(SessionForm);
