import { Link, Route } from 'react-router-dom';
import React from 'react';

class PersistLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  isUser() {
    if (this.props.loggedIn) {
      return <Link className="logo-two" to="/photos">PixelPx</Link>
    } else {
      return <Link className="logo-two" to="/">PixelPx</Link>
    }
  }

  render () {
    return (
      <div className="unsplash-logo">
        <div className="nav-left">
          {this.isUser()}
        </div>
      </div>
    )
  }
}

export default PersistLogo;
