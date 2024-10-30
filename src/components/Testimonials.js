import React from 'react'

import User1 from '../assets/images/user-1.jpg'
import User2 from '../assets/images/user-2.jpg'
import User3 from '../assets/images/user-3.jpg'

function Testimonials() {
    return (
        <>
            <section>
                <h1>Testimonials</h1>
                <div>

                    <div>
                        <img src={User1} alt='user-1' />
                        <h2>John Doe</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Excepturi tenetur obcaec,
                            praesentiumcumque, autem similique de.</p>
                    </div>
                    <div>
                        <img src={User2} alt='user-2' />
                        <h2>Laura Smith</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Excepturi tenetur obcaec,
                            praesentiumcumque, autem similique de.</p>
                    </div>
                    <div>
                        <img src={User3} alt='user-3' />
                        <h2>Annabel Donald</h2>
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
