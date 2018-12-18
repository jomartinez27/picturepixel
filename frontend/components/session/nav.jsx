import React from 'react';
import {Nav, Navbar, NavItem, Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    if (this.props.location.pathname === "/login") {
      return (
        <div>
          <Navbar collapseOnSelect className="session-nav">
            <Navbar.Header className="session-brand">
              <Navbar.Brand>
                <Link to="/" className="session-brand">
                  PixelPx
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight className="signup-btn-link">
                <NavItem eventKey={1} href="/" componentClass={Link} to="/signup">
                  <div id="signup-btn-text">Signup</div>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    } else if (this.props.location.pathname === "/signup") {
      return (
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">PixelPx</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="/" componentClass={Link} to="/login">
                  <div className="login-link">Login</div>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        {this.handleNav()}
      </div>
    )
  }
}

export default withRouter(CustomNav);
