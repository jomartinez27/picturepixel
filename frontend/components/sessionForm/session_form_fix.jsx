import React from 'react';

<div className="session-form-outer">
  <div className="session-form-container">
    <div className="form-type-header">{this.formTypeHeader()}</div>
    <div className="session-form-input">
      <form onSubmit={this.handleSubmit}>
        <div className="session-errors">{this.renderErrors()}</div>

      <label>Username:
        <input
          className="signup-input"
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="username"/>
      </label>

      {this.emailForm()}

      <label>Password:
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
