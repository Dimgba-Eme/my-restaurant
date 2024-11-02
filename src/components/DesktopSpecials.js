import React from 'react'
import { useNavigate } from 'react-router-dom'

import LemonD from '../assets/images/lemon dessert.jpg'
import Salad from '../assets/images/Greek Salad.jpg'
import Bruschetta from '../assets/images/Bruchetta.jpg'

import Bicycle from '../assets/images/bicycle.jpg'



function DesktopSpecials() {
    const navigate = useNavigate();

  return (
    <>
      <section className='desktop-specials'>
        <div className='alert'>
          <h1>This weeks specials</h1>
          <button onClick={() => navigate('/menu')}>Online Menu</button>
        </div>

        <div className='desktop-menu-container'>

          <article className='foods'>

            <div className='food-intro'>
              <img src={Salad} className='dishes' alt='Greek Salad' />
              <h4>Greek salad <span className='prices'>$12.99</span> </h4>
              <p className='description'>The famous greek salad of
                crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <div className='order-container'>
                <p className='order'>Order a delivery</p>
                <img src={Bicycle} className='bicycle' alt='bicycle' />
              </div>
            </div>

          </article>

          <article className='foods'>

            <div className='food-intro'>
              <img src={Bruschetta} className='dishes' alt='Bruschetta' />
              <h4>Bruschetta<span className='prices'>$5.99</span></h4>
              <p className='description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
              <div className='order-container'>
                <p className='order'>Order a delivery</p>
                <img src={Bicycle} className='bicycle' alt='bicycle' />
              </div>


            </div>

          </article>

          <article className='foods'>

            <div className='food-intro'>
              <img src={LemonD} className='dishes' alt='Lemon Dessert' />
              <h4>Lemon Dessert<span className='prices'>$5.00</span></h4>
              <p className='description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <div className='order-container'>
                <p className='order'>Order a delivery</p>
                <img src={Bicycle} className='bicycle' alt='bicycle' />
              </div>
            </div>

          </article>

        </div>
      </section> 
    </>
  )
}

export default DesktopSpecials
