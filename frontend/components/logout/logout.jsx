import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
          <p onClick={logout} className="logout-button">Logout</p>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Logout
