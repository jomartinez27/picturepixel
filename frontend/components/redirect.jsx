import React from 'react'
import { Redirect } from 'react-router-dom';

class Redirected extends React.Component {
  constructor(props) {
    super(props);
  }

  isUser() {
    if (this.props.loggedIn) {
      return <Redirect to="/photos"/>
    } else {
      return <Redirect to="/"/>
    }
  }

  render () {
    return (
      <div>
        {this.isUser()}
      </div>
    )
  }
}

export default Redirected;
