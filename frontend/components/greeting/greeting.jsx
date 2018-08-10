// import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, {username: 'demo', password: '123456'})
    this.props.login(demoUser)
  }

  render () {
    return (
      <div>
        <button className="demo-user" onClick={this.handleDemo}>
          Demo User
        </button>
        <input type="submit" value="logout" onClick={this.props.logout} />
      </div>
    )
  }
}

export default Greeting;
