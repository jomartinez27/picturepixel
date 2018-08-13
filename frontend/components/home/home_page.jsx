import React from 'react';
import { withRouter } from 'react-router-dom';
import PersistLogoContainer from '../greeting/persist_logo_container'

class Home extends React.Component {
  render () {
    return (
      <div>
        <PersistLogoContainer />
        <h1>This is gunna be a home page eventually</h1>
      </div>
    )
  }
}

export default withRouter(Home);
