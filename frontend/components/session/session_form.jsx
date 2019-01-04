import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DemoUserContainer from '../demo_user/demo_user_container';
import Greeting from '../greeting/greeting';
import {Grid, Row, Col} from 'react-bootstrap';
import { TimelineMax } from 'gsap/all';

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

  componentDidMount(){
    let tl = new TimelineMax();
    tl.from(['.form-container', '.session-form-container'], 2, {opacity:0, y:200})
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
            placeholder='email'
            required
            />
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
          <header className="signup-header">Join PixelPx</header>
        </div>
      )
    } else {
      return (
        <div>
          <header className="login-header">Log In to PixelPx</header>
        </div>
      )
    }
  }

  formTypeButton() {
    if (this.props.formType === 'signup') {
      return (
        <input type="submit" className="button-session" value="Sign Up"/>
      )
    } else {
      return (
        <input type="submit" className="button-session" value="Log in"/>
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
        <Greeting location={this.props.location} />
        <div className="full-page-session">
        <div className="session-errors">{this.renderErrors()}</div>
        <div className="session-form-container">
          <div className="form-type-header">{this.formTypeHeader()}</div>
          <div className="session-form-input">
            <form onSubmit={this.handleSubmit} className="form-container">

            <label className="username-email">Username
              <input
                autoFocus
                className="signup-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username"
                required
                />
            </label>

            {this.emailForm()}

            <label className="username-email">Password
              <input
                className="signup-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="6 or more characters"
                required
                />
            </label>

            {this.formTypeButton()}
            <DemoUserContainer />
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
