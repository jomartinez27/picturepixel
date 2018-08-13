import React from 'react'
import PersistLogoContainer from './persist_logo_container';
import Logout from '../logout/logout_container';

class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <Logout />
      </div>
    )
  }
}

export default NavBar;
