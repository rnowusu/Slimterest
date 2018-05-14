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
    this.setState({username: "", password: ""});
    this.props.closeModal();
    // if (this.props.loggedIn){this.props.closeModal();}
    // this.props.loggedIn ? : closeModal : null
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    }
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
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit.bind(this)}
            className='login-form-box'>
            <h2 className="session-form-headers">Welcome to Slimterest!</h2>
            <h3 className="session-form-headers">{this.props.formType}</h3>
            Please {this.props.formType} or {this.props.otherForm}.
            <br/>
            <div onClick={this.props.closeModal}
              className='close-x' >X</div>
            <ul className="errors">
            {this.renderErrors()}
            </ul>
            <div className="login-form">
            <label>
              Username:
              <input type='text' value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"/>
            </label>
              <br/>
              <br/>
            <label>
              Password:
              <input type='password' value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password"
                />
            </label>
            <br/>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          </form>

        </div>
      );
  }
}

export default withRouter(SessionForm);
