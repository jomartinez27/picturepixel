import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  banner() {
    if (this.props.currentUser) {
      return (
        <div>
          <img src={window.image}/>
          <header className="splash-banner">
            <Link style={{textDecoration: 'none'}} className="logo-banner" to="/">PicturePx</Link>
          </header>
        </div>
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }

  render () {
    return (
      <div>
        {this.banner()}
      </div>
    )
  }
}

export default Splash;
