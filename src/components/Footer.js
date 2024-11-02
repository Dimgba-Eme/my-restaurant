import React from 'react'
import { useNavigate } from 'react-router-dom'

import FooterLogo from '../assets/images/footer_image.png'

import FB from '../assets/images/icon-facebook.svg'
import INSTA from '../assets/images/icon-instagram.svg'
import TUBE from '../assets/images/icon-youtube.svg'

function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer className='footer-wrapper'>
                <div className='footer-container'>

                    <img src={FooterLogo} alt='footer_logo' />

                    <div className='navigation'>
                        <h4>Doormat Navigation</h4>
                        <p onClick={() => navigate("/")}>Home</p>
                        <p onClick={() => navigate("/about")}>About</p>
                        <p onClick={() => navigate("/menu")}>Menu</p>
                        <p onClick={() => navigate("/reservations")}>Reservations</p>
                        <p onClick={() => navigate("/order-online")}>Order online</p>
                        <p onClick={() => navigate("/login")}>Login</p>
                    </div>

                    <div className='contact'>
                        <h4>Contact</h4>
                        <p>Address</p>
                        <p>Tel: +234 801 283 6797</p>
                        <p>Email: hello@little_lemon.com</p>
                    </div>

                    <div className='socials-links'>
                        <h4>Social Media Links</h4>
                        <span><img src={FB} alt='facebook icon' /></span>
                        <span><img src={INSTA} alt='instagram icon' /></span>
                        <span><img src={TUBE} alt='youtube icon' /></span>
                    </div>

                </div>
                <p className='copy'>All Rights Reserved &copy; 2024</p>
            </footer>
        </>
    )
}

export default Footer
