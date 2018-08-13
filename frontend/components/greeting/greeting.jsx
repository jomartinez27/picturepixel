import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PersistLogoContainer from './persist_logo_container';
import SplashLogo from './splash_logo';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

    sessionLinks () {
      if (this.props.location.pathname === '/login') {
        return (
          <div className="outer-signup-container">
            <PersistLogoContainer />
            <Link to="/signup" className="persistent-signup">Sign up</Link>
          </div>
        )
      } else if (this.props.location.pathname === '/signup') {
        return (
          <div className="outer-signup-container">
            <PersistLogoContainer />
            <Link to="/login" className="persistent-login">Log in</Link>
          </div>
        )
      } else {
        return <Link to='/'></Link>
      }
    }

  render () {
    return (
      <div>
        {this.sessionLinks()}
      </div>
    )
  }
}

export default Greeting;
