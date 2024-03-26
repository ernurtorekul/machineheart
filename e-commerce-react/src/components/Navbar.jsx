import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';



export default function navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);  //we could write true instead of that
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    showButton();
  }, [])

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* mHeart <i className="fa-regular fa-heart fa-2xs heart-logo"></i> */}
            <span>mHeart</span> 
            <img src="/images/logo1.png" className='heart-logo' alt=""/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </div>

          {/* what we are doing below is that whenever we click some section on navbar items then it removes the navbar list section */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/albums' className='nav-links' onClick={closeMobileMenu}>
                Albums
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/tour' className='nav-links' onClick={closeMobileMenu}>
                Tour
              </Link>
            </li>

            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}    {/*that buttonStyle is in this line STYLES.includes(buttonStyle) ? buttonStyle which means btn--outline will be implemented cuz STYLES includes buttonStyle in itself and that SIGN UP is the children from button.jsx */}
        </div>
      </nav>
    </>
  );
}
