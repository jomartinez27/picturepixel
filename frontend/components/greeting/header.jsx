import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="persistent-header">
    <div className="nav-left">
      <Link className="logo" to="/">PicturePx</Link>
    </div>
  </div>
)

export default Header
