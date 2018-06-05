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

  demoLogin(e){
    e.preventDefault();
    let userName = "Demo";
    let password = "slimterest";

    for (let j = 1; j <= password.length; j++){
        setTimeout(() => {this.setState({username:"Demo", password: password.slice(0, j)});}, 100*j);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state)
    this.props.processForm(user);
    this.setState({username: "", password: ""});
    // this.props.closeModal();
    // if (this.props.loggedIn){this.props.closeModal();}
    // this.props.loggedIn ? : closeModal : null
  }

  // handleDemo(e){
  //   e.preventDefault();
  //   this.setState({username: 'Demo', password: 'slimterest'})
  // }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  renderErrors() {
    return (
      <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`} className="errors-li">
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
            <a href="http://www.clker.com/cliparts/g/d/D/A/l/9/sl-logo.svg.thumb.png">
              <img className="logo-svg-modal" src='http://www.clker.com/cliparts/g/d/D/A/l/9/sl-logo.svg.thumb.png' alt='Sl Logo clip art'/></a>
            <h2 className="session-form-headers">Welcome to Slimterest!</h2>
            <h3 className="session-form-headers">{this.props.formType}</h3>
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
            <br/><br/>
            <input className="session-submit" type="submit" value="Demo Login" onClick={this.demoLogin.bind(this)}/>
            <br/><br/>
            Please {this.props.formType} or {this.props.otherForm}.
          </div>
          </form>

        </div>
      );
  }
}

// document.getElementsByClassName("login-input")[0].value="Demo"
// document.getElementsByClassName("login-input")[1].value="slimterest"
// document.getElementsByClassName("session-submit")[0].click()
export default withRouter(SessionForm);
