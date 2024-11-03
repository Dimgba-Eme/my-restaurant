import React from 'react'

import PIC1 from '../assets/images/Mario and Adrian A.jpg'
import PIC2 from '../assets/images/Mario and Adrian b.jpg'
import PIC3 from '../assets/images/restaurant chef B.jpg'
import PIC4 from '../assets/images/restaurant.jpg'

function AboutMain() {
    return (
        <>
            <section className='about-wrapper'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Excepturi tenetur obcaec,
                    praesentiumcumque, autem similique de.
                    autem similique deleniti a magnam commodi,
                    fugit explicabo aspernatur qui sequi sint consecteturnam expedita architecto consequatur.
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Excepturi tenetur obcaec,
                    praesentiumcumque, autem similique de.
                    autem similique deleniti a magnam commodi,
                    fugit explicabo aspernatur qui sequi sint consecteturnam expedita architecto consequatur.
                </p>

                <div className='about-pics'>
                    <img src={PIC1} alt='first pic' />
                    <img src={PIC2} alt='second pic' />
                    <img src={PIC3} alt='third pic' />
                    <img src={PIC4} alt='fourth pic' />
                </div>
            </section>
        </>
    )
}

export default AboutMain
