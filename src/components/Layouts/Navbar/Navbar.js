import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importing Button.js
import { Button } from '../../Layouts/UI/Button';

import './Navbar.scss';

function Navbar() {
  // Toggle Mobile useState
  const [click, setClick] = useState(false);

  // Button useState
  const [button, setButton] = useState(true);

  // Toggle Mobile Handler
  const handleClick = () => setClick(!click);

  // Toggle Mobile Close Btn
  const closeMobileMenu = () => setClick(false);

  // Show Button on Mobile
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Render Once the Signup button so it wouldnt show up anymore
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          {/* Nav Logo */}
          <Link to='/' className='navbar_logo' onClick={handleClick}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>

          {/* Mobile Toggle */}
          <div className='menu_icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav_menu active' : 'nav_menu'}>
            <li className='nav_item'>
              <Link to='/' className='nav_links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav_item'>
              <Link
                to='/services'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav_item'>
              <Link
                to='/products'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav_links_mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* End ul */}

          {/* Button */}
          {button && <Button buttonStyle='btn_outline'>SIGN UP</Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;