import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };


    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.deleteErrors();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  emailForm() {
    if (this.props.formType === 'signup') {
      return (
        <label className="username-email">Email
          <input className="signup_input"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder='email'/>
        </label>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  formTypeHeader() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <header className="signup-header">Join PicturePx</header>
        </div>
      )
    } else {
      return (
        <div>
          <header className="login-header">Log In to PicturePx</header>
        </div>
      )
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

  render () {
    return (
      <div className="session-form-outer">
        <div className="full-page-session">
        <div className="session-form-container">
          <div className="form-type-header">{this.formTypeHeader()}</div>
          <div className="session-form-input">
            <form onSubmit={this.handleSubmit} className="form-container">
              <div className="session-errors">{this.renderErrors()}</div>

            <label>Username
              <input
                className="signup-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username"/>
            </label>

            {this.emailForm()}

            <label>Password
              <input
                className="signup-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="6 or more characters"/>
            </label>

            <input className="button-session" type='submit' value={this.props.formType.toUpperCase()}/>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
