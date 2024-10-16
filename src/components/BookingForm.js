import React from 'react'

function BookingForm() {
  return (
    <>
      <form className='res-form'>
        <div className='reservation'>
          <label htmlFor='res-date'>Choose a date</label>
          <input type='date' id='res-date' />
        </div>

         <div className='reservation'>
          <label htmlFor='res-time'>Choose time</label>
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
          <label htmlFor='guests'>Number of guests</label>
          <input type='number' id='guests' placeholder='1' min='1' max='10' />
          </div>

          <div className='reservation'>
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion'>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option></option>
          </select>
          </div>

         <div className='reservation'>
          <input type='submit' value='Make your reservation' />
         </div>

      </form>
    </>
  )
}

export default BookingForm
