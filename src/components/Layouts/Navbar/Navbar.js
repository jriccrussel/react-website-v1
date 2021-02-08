import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          <Link to='/' className='navbar-logo'>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;