import React from 'react'
import PropTypes from 'prop-types'

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }


  sayHello() {
    const myUser = document.getElementById("myUser")
    setTimeout(() => { myUser.className = "slideBack" }, 3000)
    setTimeout(() => { myUser.className = "gone" }, 5000)
  }

  componentDidMount() {
    const myUser = document.getElementById("myUser")
    this.sayHello()
  }

  render () {
    return (
      <div id="myUser" className="user-name user-name-block">
        <h3>Hello, {this.props.currentUser.username}</h3>
      </div>
    )
  }
}

export default LoggedIn;
