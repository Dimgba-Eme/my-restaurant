import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import Menu from '../assets/images/🦆 icon _hamburger menu.svg'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <img src={Menu} className='hamburger-menu' alt='hamburger menu' onClick={() => setIsOpen(!isOpen)} />


            <nav className={isOpen ? "open" : ""}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='/reservations'>Reservations</NavLink>
                    <NavLink to='/order-online'>Order online</NavLink>
                    <NavLink to='/login'>Login</NavLink>
            </nav>


        </>
    )
}

export default NavBar
