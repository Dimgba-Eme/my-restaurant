import React from 'react'

import User1 from '../assets/images/user-1.jpg'
import User2 from '../assets/images/user-2.jpg'
import User3 from '../assets/images/user-3.jpg'

function Testimonials() {
    return (
        <>
            <section className='testimonials-wrapper'>
                <h1>Testimonials</h1>
                <div className='testimonials-container'>

                    <div className='users'>
                        <img src={User1} alt='user-1' />
                        <h4>John Doe</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Excepturi tenetur obcaec,
                            praesentiumcumque, autem similique de.</p>
                    </div>
                    <div className='users'>
                        <img src={User2} alt='user-2' />
                        <h4>Laura Smith</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Excepturi tenetur obcaec,
                            praesentiumcumque, autem similique de.</p>
                    </div>
                    <div className='users'>
                        <img src={User3} alt='user-3' />
                        <h4>Annabel Donald</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Excepturi tenetur obcaec,
                            praesentiumcumque, autem similique de.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonials
