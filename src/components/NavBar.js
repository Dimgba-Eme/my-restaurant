import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <ul className='list-container'>
                    <NavLink to='/'>Home</NavLink>

                    <NavLink to='/reservations'>Reservations</NavLink>

                </ul>
            </nav>
        </>
    )
}

export default NavBar
