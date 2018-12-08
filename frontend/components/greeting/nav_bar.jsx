import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from '../logout/logout_container';
import PhotoForm from '../photo/photo_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                PixelPx
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={1} title={
                  <i className="material-icons">account_circle</i>
                } id="basic-nav-dropdown">
                <MenuItem eventKey={1.1} componentClass={Link} href="/" to={`users/${this.props.currentUser.id}`}>
                  My Profile
                </MenuItem>
                <MenuItem eventKey={1.2}>
                  <Logout />
                </MenuItem>
              </NavDropdown>
              <NavItem eventKey={2}>
                <PhotoForm />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default NavBar;
