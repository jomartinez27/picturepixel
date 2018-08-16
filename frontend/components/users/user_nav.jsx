import React from 'react'
import PersistLogoContainer from '../greeting/persist_logo_container';
import Logout from '../logout/logout_container';

class UserNav extends React.Component {
  render () {
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <div className="nav-right-second">
          <Logout />
        </div>
      </div>
    )
  }
}

export default UserNav;
