import React from 'react'
import HeroImage from '../assets/images/restauranfood.jpg'

import { useNavigate } from 'react-router-dom'



function Hero() {
    const navigate = useNavigate();

    return (
        <>
            <div className='section-container'>

                <section className='hero-section'>
                    <div className='hero-inner'>
                        <div className='intro-container'>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist. </p>
                            <button onClick={() => navigate("/reservations")}>Reserve a table</button>
                        </div>
                        <img src={HeroImage} className='hero-image' alt='Hero pic' />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero
