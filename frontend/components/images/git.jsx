import React from 'react';
import { Link } from 'react-router-dom';

const gitBit = () => (
  <div className="splash-footer">
    <a href="https://github.com/jomartinez27">
      <img src={window.images.git} className="splash-footer-img" />
    </a>
    <a href="https://www.linkedin.com/in/jose-martinez-517a29149/">
      <img src={window.images.in} className="linked-splash" />
    </a>
  </div>
);

export default gitBit;
