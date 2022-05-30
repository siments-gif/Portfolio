import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Menu = () => (
  <>
  <p><a href='#Intro'>Intro</a></p>
  <p><a href='#About'>About</a></p>
  <p><a href='#Education'>Education</a></p>
  <p><a href='#Projects'>Projects</a></p>
  <p><a href='#Gallery'>Gallery</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState (false); 

  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='portfolio__navbar-links_container'>
           <Menu />
        </div>
      </div>

      <div className='portfolio__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='black' size={30} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='black' size={30} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='portfolio__navbar-menu_container slide-in-right'>
            <div className='portfolio__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar