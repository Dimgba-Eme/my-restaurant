import React from 'react'
import { useState, useEffect} from 'react'

function BookingForm() {
  return (
    <div className='res-form'>
      <h1>Reserve a table</h1>
      <form method='POST'>
        <div className='reservation'>
          <label htmlFor='res-date'>Choose a date:<sup>*</sup></label>
          <input type='date' id='res-date' />
        </div>

        <div className='reservation'>
          <label htmlFor='res-time'>Choose time:<sup>*</sup></label>
          <select id='res-time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>

        <div className='reservation'>
          <label htmlFor='guests'>Number of guests:<sup>*</sup></label>
          <input type='number' id='guests' placeholder='1' min='1' max='10' />
        </div>

        <div className='reservation'>
          <label htmlFor='occasion'>Occasion:<sup>*</sup></label>
          <select id='occasion'>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
        </div>

        <div className='reservation'>
          <input type='submit' value='Make your reservation' className='button' />
        </div>

      </form>
    </div>
  )
}

export default BookingForm
