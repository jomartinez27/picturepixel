import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to='/login'>Log In</Link>
      <br />
      <Link to='/signup'>Sign up</Link>
    </nav>
  )

  const personalGreeting = () => (
    [
      <h2 key={currentUser.id} className="header-name">Welcome back, {currentUser.username}!</h2>,
      <button key={currentUser.id + 1} className="header-button" onClick={logout}>Log out</button>
    ]
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
