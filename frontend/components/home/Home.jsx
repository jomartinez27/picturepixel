import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image, Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import { TimelineMax } from 'gsap/all'

class Home extends React.Component {
  componentDidMount() {
    let bg = document.getElementById('home-splash');
    let tl = new TimelineMax();
    tl.from(bg, 2, {opacity:0, y:-100})
    tl.from(".demo-tag", 1, {x:-100, opacity:0})
    tl.from([".demo-text", "#home-button"], 2, {opacity:0, y:-100})
  }

  render () {
    return (
      <div className="home-splash">
        <Image src={window.images.la} responsive className="home-splash" id="home-splash"/>
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
            <Button className="home-button" href="#/login" id="home-button">Demo User</Button>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Home;
