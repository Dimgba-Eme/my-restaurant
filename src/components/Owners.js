import React from 'react'

import Owners1 from '../assets/images/Mario and Adrian A.jpg'
import Owners2 from '../assets/images/Mario and Adrian b.jpg'

function Owners() {
    return (
        <>
            <section className='owners-container'>
                <div className='owners-description'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Excepturi tenetur obcaec,
                        praesentiumcumque, autem similique de.
                        autem similique deleniti a magnam commodi,
                        fugit explicabo aspernatur qui sequi sint consecteturnam expedita architecto consequatur.
                    </p>
                </div>

                <div className='owners-pics'>
                <img src={Owners1} alt='owners-1' />
                <img src={Owners2} alt='owners-2' className='owners-2' />
                </div>

            </section>
        </>
    )
}

export default Owners
