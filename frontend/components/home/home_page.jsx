import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>This is gunna be a home page eventually</h1>
      </div>
    )
  }
}

export default withRouter(Home);
