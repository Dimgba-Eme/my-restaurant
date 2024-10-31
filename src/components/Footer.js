import React from 'react'

import FooterLogo from '../assets/images/footer_image.png'

function Footer() {
    return (
        <>
            <footer className='footer-wrapper'>
                <div className='footer-container'>

                    <img src={FooterLogo} alt='footer_logo' />

                    <div className='navigation'>
                        <h2>Doormat Navigation</h2>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservations</p>
                        <p>Order online</p>
                        <p>Login</p>
                    </div>

                    <div className='contact'>
                        <h2>Contact</h2>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </div>

                    <div className='socials-links'>
                        <h2>Social Media Links</h2>
                        <p>Links</p>
                    </div>

                </div>
                <p>All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
