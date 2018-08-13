import React from 'react'
import PersistLogoContainer from './persist_logo_container';
import Logout from '../logout/logout_container';
import LoggedInContainer from './login_greeting_container';

class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <LoggedInContainer />
        <Logout />
      </div>
    )
  }
}

export default NavBar;
