import React from 'react'
import NavBar from './NavBar';
import Logo from '../assets/images/lemon logo.jpg';

function Header() {
  return (
    <>
     <header className='page-header'>
        <img src={Logo} className='logo' alt='brand logo' />
        <NavBar />
    </header> 
    </>
  )
}

export default Header
