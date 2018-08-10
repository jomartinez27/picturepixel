import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Logout
