import React from 'react';

class DemoUser extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, {username: 'retro', password: '123456'})
    this.props.login(demoUser);
  }

  render () {
    return (
      <div>
        <button className="demo-user" onClick={this.handleDemo}>
          Demo User
        </button>
      </div>
    )
  }
}

export default DemoUser;
