import React from 'react'
import { Link } from 'react-router-dom';
import SplashImage from '../splash_image';

const Splash = () => (
  <div className="main-div">
    <SplashImage />
    <nav className="main-nav">
      <div className="nav-left">
        <Link className="logo-splash" to="/">PixelPx</Link>
      </div>
      <div className="nav-right">
        <div><Link to="/login" className="login-link">Log In</Link></div>
        <div><Link to="/signup" className="button">Sign Up</Link></div>
      </div>
    </nav>

    <div className="splash-text">
      <h1 className="header-section-headline">Come in to experience the world in pixelated art</h1>
      <h2 className="header-sec-desc">Discover images by other users</h2>
      <div className="outer-join-button">
        <Link to="/signup" className="join-button">Join PixelPx</Link>
      </div>
    </div>
  </div>
)



export default Splash;
