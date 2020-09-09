import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  //   useEffect(() => {
  //     showButton();
  //   }, []);

  //   window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav
        className={
          navbar
            ? 'navbar active animate__animated animate__fadeInDown delay-01s'
            : 'navbar '
        }
      >
        <div className='navbar-container '>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fab fa-typo3'></i> ROHAN SHAKYA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/passion'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Passion
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='nav-links-active'
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
