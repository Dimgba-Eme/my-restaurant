import React from 'react'
import HeroImage from '../assets/images/restauranfood.jpg'
import Salad from '../assets/images/Greek Salad.jpg'
import Bruschetta from '../assets/images/Bruchetta.jpg'
import LemonD from '../assets/images/lemon dessert.jpg'

function HomeMain() {
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
              <button>Reserve a table</button>
            </div>
            <img src={HeroImage} className='hero-image' alt='Hero pic' />
          </div>
        </section>
      </div>


      <section className='mobile-specials'>
        <div className='order-mobile'>
          <h3>ORDER FOR DELIVERY!</h3>
          <div className='button-container'>
            <button>Lunch</button>
            <button>Mains</button>
            <button>Desserts</button>
            <button>A La Carte</button>
            <button>Specials</button>
          </div>

        </div>

        <div className='mobile-menu-container'>

          <article className='foods'>
            <div className='food-one-container'>
              <div className='food-one-intro'>
                <h4>Greek salad</h4>
                <p className='food-description'>The famous greek salad of
                  crispy lettuce, peppers, olives, and our Chicago...</p>
                <p className='price'>$12.99</p>
              </div>
              <img src={Salad} className='meals' alt='Greek Salad' />
            </div>
          </article>

          <article className='foods'>
            <div className='food-one-container'>
              <div className='food-one-intro'>
                <h4>Bruschetta</h4>
                <p className='food-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic...</p>
                <p className='price'>$5.99</p>
              </div>
              <img src={Bruschetta} className='meals' alt='Bruschetta' />
            </div>
          </article>

          <article className='foods'>
            <div className='food-one-container'>
              <div className='food-one-intro'>
                <h4>Lemon Dessert</h4>
                <p className='food-description'>This comes straight from grandma’s recipe book, every last ingredient has been source...</p>
                <p className='price'>$5.00</p>
              </div>
              <img src={LemonD} className='meals' alt='Lemon Dessert' />
            </div>
          </article>



        </div>
      </section>
    </>
  )
}

export default HomeMain
