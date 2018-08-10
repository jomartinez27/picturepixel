// const Greeting = ({ currentUser, logout, location }) => {
//
//   const sessionLinks = () => {
//     if (location.pathname === '/login') {
//       return <Link to="/signup" className="persistent-signup">Sign up</Link>
//     } else if (location.pathname === '/signup') {
//       return <Link to="/login" className="persistent-login">Log in</Link>
//     } else {
//       return <Link to='/'></Link>
//     }
//   }
//
//   const personalGreeting = () => (
//     [
//       <h2 key={currentUser.id} className="header-name">Welcome back, {currentUser.username}!</h2>,
//       <button key={currentUser.id + 1} className="header-button" onClick={logout}>Log out</button>
//     ]
//   );
//
//   return currentUser ? personalGreeting() : sessionLinks();
// }

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PersistLogo from './persist_logo';
import SplashLogo from './splash_logo';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

    sessionLinks () {
      if (this.props.location.pathname === '/login') {
        return (
          <div className="outer-signup-container">
            <PersistLogo />
            <Link to="/signup" className="persistent-signup">Sign up</Link>
          </div>
        )
      } else if (this.props.location.pathname === '/signup') {
        return (
          <div className="outer-signup-container">
            <PersistLogo />
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
