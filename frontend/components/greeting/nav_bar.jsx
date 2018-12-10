// import React from 'react'
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Logout from '../logout/logout_container';
// import PhotoForm from '../photo/photo_form_container';
//
// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render () {
//     return (
//       <Navbar default collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <Link to="/">
//                 PixelPx
//               </Link>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav pullRight>
//               <NavDropdown eventKey={1} title={
//                   <i className="material-icons">account_circle</i>
//                 } id="basic-nav-dropdown">
//                 <MenuItem eventKey={1.1} componentClass={Link} href="/" to={`users/${this.props.currentUser.id}`}>
//                   My Profile
//                 </MenuItem>
//                 <MenuItem eventKey={1.2}>
//                   <Logout />
//                 </MenuItem>
//               </NavDropdown>
//               <NavItem eventKey={2}>
//                 <PhotoForm />
//               </NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//     )
//   }
// }
//
// export default NavBar;

import React from 'react'
import PersistLogoContainer from './persist_logo_container';
import Logout from '../logout/logout_container';
import LoggedInContainer from './login_greeting_container';
import PhotoFormContainer from '../photo/photo_form_container';

class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar-container">
        <PersistLogoContainer />
        <LoggedInContainer />
        <div className="nav-right-second">
          <Logout />
          <PhotoFormContainer />
        </div>
      </div>
    )
  }
}

export default NavBar;
