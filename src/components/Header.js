import React from 'react'
import NavBar from './NavBar';
import Logo from '../assets/images/lemon logo.jpg';
import Menu from '../assets/images/🦆 icon _hamburger menu.svg'
import Basket from '../assets/images/basket .svg'

function Header() {
  return (
    <>
     <header className='page-header'>
      <div className='logo-container'>
      <img src={Menu} className='hamburger-menu' alt='hamburger menu' />
        <img src={Logo} className='logo' alt='brand logo' />
        <img src={Basket} className='basket' alt='basket' />
      </div>

        <NavBar />
    </header> 
    </>
  )
}

export default Header
