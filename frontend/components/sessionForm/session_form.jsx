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

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  emailForm() {
    if (this.props.formType === 'signup') {
      return (
        <label>Email:
          <br/>
          &nbsp;
          <input
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder='email'/>
          <br/>
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
          <div className="account-required">
            <h5>Have an account?</h5>&nbsp;<Link to="/login">Log In</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <header className="login-header">Log In to PicturePx</header>
          <div className="account-required">
            <h5>Don't have an account?</h5>&nbsp;<Link to="/signup">Create Account</Link>
          </div>
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
      <div className="session-form-container">
      {this.formTypeHeader()}
      <br />
      <br />
      <form onSubmit={this.handleSubmit} className="session-form-box">
        {this.renderErrors()}

        <label>Username:
          <br/>
          &nbsp;
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="username"/>
          <br/>
        </label>
        &nbsp;
        {this.emailForm()}
        &nbsp;
        <label>Password:
          &nbsp;
          <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='6 or more characters'/>
        </label>
        &nbsp;
        <br />
        <p onClick={this.handleSubmit}>Submit</p>
      </form>
    </div>
    )
  }
}

export default withRouter(SessionForm);
