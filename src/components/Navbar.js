import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
<script src="https://kit.fontawesome.com/b761530a4f.js" crossorigin="anonymous"></script>

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Erick REX
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/now'
                className='nav-links' onClick={closeMobileMenu}>
                Now
              </Link>
            </li>
           
            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
