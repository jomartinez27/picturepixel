import React from 'react'
import PropTypes from 'prop-types'

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h3>{this.props.currentUser.username}</h3>
      </div>
    )
  }
}

export default LoggedIn;
