import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image, Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  render () {
    return (
      <div className="home-splash">
        <Navbar inverse collapseOnSelect className="home-nav">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="home-brand">PixelPx</Link>&nbsp;
                &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jose-martinez-517a29149/"><Image src={window.images.linkedIn}/></a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/" componentClass={Link} to="/login">
                <Button className="home-login">Login</Button>
              </NavItem>
              <NavItem eventKey={2} href="/" componentClass={Link} to="/signup">
                <Button className="home-button">Sign Up</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="demo-container">
          <Jumbotron className="jumbo-home">
            <h2 className="demo-tag">Experience the world in Pixelated Art</h2>
            <h3 className="demo-text">Discover images by other users</h3>
            <Button className="home-button" href="#/login">Demo User</Button>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Home;
