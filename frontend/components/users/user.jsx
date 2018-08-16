import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId)
    }
  }


  render () {
    return <h2>Hello</h2>
  }
}

export default User;
