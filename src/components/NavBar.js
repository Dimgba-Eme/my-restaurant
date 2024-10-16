import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className='navBar'>
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
