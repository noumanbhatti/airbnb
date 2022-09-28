import React from 'react';
import airbnbLogo from '../images/logo.png';

function Navbar() {
  return (
    <nav className="nav">
            <img src={ airbnbLogo } alt='AirBnb' />
        </nav>
  );
}

export default Navbar;
