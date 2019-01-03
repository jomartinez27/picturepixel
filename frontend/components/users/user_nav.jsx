import React from 'react'
import PersistLogoContainer from '../greeting/persist_logo_container';
import Logout from '../logout/logout_container';
import PhotoFormContainer from "../photo/photo_form_container";

class UserNav extends React.Component {
  render () {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <h3>{this.props.user.username}</h3>
        <div className="nav-right-second">
          <Logout />
          <PhotoFormContainer />
        </div>
      </div>
    )
  }
}

export default UserNav;
