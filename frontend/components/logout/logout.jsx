import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ currentUser, logout }) => {

  if (currentUser) {
    return (
      <div className="dropdown">
        <i className="material-icons profile-drop">account_circle</i>
        <div className="dropdown-content">
          <Link className="profile-drop" to={`/photos/${currentUser.id}`}><button>MyProfile</button></Link>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Logout
