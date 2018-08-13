import React from 'react'
import PersistLogoContainer from './persist_logo_container';
import Logout from '../logout/logout_container';
import LoggedInContainer from './login_greeting_container';
import PhotoFormContainer from '../photo/photo_form';

class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <LoggedInContainer />
        <Logout />
        <PhotoFormContainer />
      </div>
    )
  }
}

export default NavBar;
